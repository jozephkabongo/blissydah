
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Calendar, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const MobileNavbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 sm:hidden z-40">
      <div className="grid grid-cols-4 gap-1">
        <NavItem 
          to="/" 
          icon={<Home size={20} />} 
          label="Accueil" 
          active={isActive('/')} 
        />
        <NavItem 
          to="/blog" 
          icon={<BookOpen size={20} />} 
          label="Blog" 
          active={isActive('/blog')} 
        />
        <NavItem 
          to="/services/book" 
          icon={<Calendar size={20} />} 
          label="Réserver" 
          active={isActive('/services/book')} 
        />
        <NavItem 
          to="/menu" 
          icon={<Menu size={20} />} 
          label="Menu" 
          active={isActive('/menu')} 
        />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, active }) => {
  return (
    <Link to={to} className="flex flex-col items-center justify-center">
      <div className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full",
        active ? "text-primary-foreground" : "text-gray-500"
      )}>
        {icon}
      </div>
      <span className={cn(
        "text-xs mt-1",
        active ? "text-primary-foreground font-medium" : "text-gray-500"
      )}>
        {label}
      </span>
    </Link>
  );
};

export default MobileNavbar;
