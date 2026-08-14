import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface WeChatCapsuleProps {
  dark?: boolean;
  onMenuClick?: () => void;
  onCloseClick?: () => void;
}

export const WeChatCapsule: React.FC<WeChatCapsuleProps> = ({
  dark = false,
  onMenuClick,
  onCloseClick
}) => {
  return (
    <div className="relative inline-flex items-center">
      <div
        className={`flex items-center h-[30px] px-2 rounded-full transition-all select-none border ${
          dark
            ? 'bg-black/40 border-white/20 text-white'
            : 'bg-white/80 border-slate-200 text-slate-800 shadow-xs'
        }`}
        id="wx-capsule-bar"
      >
        <button
          type="button"
          onClick={onMenuClick}
          className="p-1 hover:opacity-70 active:scale-95 transition-transform"
          title="小程序菜单"
          id="btn-capsule-more"
        >
          <MoreHorizontal className="w-4 h-4 stroke-[2.5]" />
        </button>

        <div
          className={`w-[1px] h-3.5 mx-1.5 ${
            dark ? 'bg-white/20' : 'bg-slate-200'
          }`}
        />

        <button
          type="button"
          onClick={onCloseClick}
          className="p-1 hover:opacity-70 active:scale-95 transition-transform flex items-center justify-center"
          title="返回主页/退出"
          id="btn-capsule-close"
        >
          <div className="w-3.5 h-3.5 rounded-full border-2 border-current flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-current" />
          </div>
        </button>
      </div>
    </div>
  );
};
