
-- สร้าง enum สำหรับบทบาทผู้ใช้
CREATE TYPE user_role AS ENUM ('admin', 'user');

-- สร้างตาราง profiles สำหรับเก็บข้อมูลผู้ใช้เพิ่มเติม
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role user_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  last_login_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- เปิดใช้งาน Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- สร้าง policy สำหรับให้ผู้ใช้เข้าถึงข้อมูลตัวเองได้
CREATE POLICY "Users can view own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

-- สร้าง policy สำหรับให้ผู้ใช้อัปเดตข้อมูลตัวเองได้
CREATE POLICY "Users can update own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

-- สร้าง policy สำหรับให้ admin ดูข้อมูลผู้ใช้ทั้งหมดได้
CREATE POLICY "Admins can view all profiles" 
  ON public.profiles 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- สร้างฟังก์ชันสำหรับสร้าง profile อัตโนมัติเมื่อมีผู้ใช้ใหม่สมัครสมาชิก
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
    NEW.email,
    'user'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- สร้าง trigger สำหรับเรียกฟังก์ชันเมื่อมีผู้ใช้ใหม่
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- สร้างฟังก์ชันสำหรับอัปเดต last_login_at
CREATE OR REPLACE FUNCTION public.update_last_login()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.profiles 
  SET last_login_at = NOW()
  WHERE id = NEW.id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- สร้าง trigger สำหรับอัปเดต last_login_at เมื่อผู้ใช้เข้าสู่ระบบ
CREATE TRIGGER on_auth_user_login
  AFTER UPDATE OF last_sign_in_at ON auth.users
  FOR EACH ROW 
  WHEN (OLD.last_sign_in_at IS DISTINCT FROM NEW.last_sign_in_at)
  EXECUTE FUNCTION public.update_last_login();

-- สร้างฟังก์ชันสำหรับอัปเดต updated_at อัตโนมัติ
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- สร้าง trigger สำหรับอัปเดต updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
