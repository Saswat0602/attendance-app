import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";

interface HeaderProps {
  headername: string;
}

const Header: React.FC<HeaderProps> = ({ headername }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white text-black shadow-md">
      <div className="text-xl font-semibold">{headername}</div>
      <div className="flex items-center gap-4">
        <IoMdNotificationsOutline size={24} />
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">
          SM
        </div>
      </div>
    </div>
  );
};

export default Header;
