
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LogOut, User, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProfileDropdown = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "ออกจากระบบสำเร็จ",
        description: "หวังว่าจะได้พบกันใหม่เร็วๆ นี้!"
      });
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถออกจากระบบได้",
        variant: "destructive"
      });
    }
  };

  if (!user) return null;

  const userInitial = user.email?.charAt(0).toUpperCase() || 'U';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-blue-600 text-white font-semibold">
              {userInitial}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700" align="end" forceMount>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="text-sm font-medium text-white">
              {user.email}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>โปรไฟล์</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>ตั้งค่า</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem 
          className="text-red-400 hover:text-red-300 hover:bg-gray-700 cursor-pointer"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>ออกจากระบบ</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
