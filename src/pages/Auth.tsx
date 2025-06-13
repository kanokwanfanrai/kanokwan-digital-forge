
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: "เกิดข้อผิดพลาด",
            description: error.message === "Invalid login credentials" 
              ? "อีเมลหรือรหัสผ่านไม่ถูกต้อง"
              : error.message,
            variant: "destructive"
          });
        } else {
          toast({
            title: "เข้าสู่ระบบสำเร็จ",
            description: "ยินดีต้อนรับกลับมา!"
          });
        }
      } else {
        if (!name.trim()) {
          toast({
            title: "กรุณากรอกชื่อ",
            description: "ชื่อเป็นข้อมูลที่จำเป็น",
            variant: "destructive"
          });
          return;
        }

        const { error } = await signUp(email, password, name);
        if (error) {
          if (error.message.includes("User already registered")) {
            toast({
              title: "อีเมลนี้ถูกใช้แล้ว",
              description: "กรุณาใช้อีเมลอื่นหรือเข้าสู่ระบบ",
              variant: "destructive"
            });
          } else {
            toast({
              title: "เกิดข้อผิดพลาด",
              description: error.message,
              variant: "destructive"
            });
          }
        } else {
          toast({
            title: "สมัครสมาชิกสำเร็จ",
            description: "กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชี"
          });
          setIsLogin(true);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-gray-800 border-gray-700 shadow-2xl">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
              {isLogin ? <Lock className="w-8 h-8 text-blue-400" /> : <User className="w-8 h-8 text-blue-400" />}
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              {isLogin ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
            </CardTitle>
            <CardDescription className="text-gray-400">
              {isLogin ? 'ป้อนข้อมูลเพื่อเข้าใช้งานระบบ' : 'สร้างบัญชีใหม่เพื่อเริ่มใช้งาน'}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-200">
                    ชื่อเต็ม
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="กรอกชื่อเต็มของคุณ"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-200">
                  อีเมล
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-200">
                  รหัสผ่าน
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {isLoading ? 'กำลังดำเนินการ...' : (isLogin ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก')}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-800 px-4 text-gray-400">หรือ</span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                {isLogin ? 'ยังไม่มีบัญชี?' : 'มีบัญชีแล้ว?'}{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200 hover:underline"
                >
                  {isLogin ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ'}
                </button>
              </p>
            </div>
            
            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>กลับสู่หน้าหลัก</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
