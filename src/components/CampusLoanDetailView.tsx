import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { PageId } from '../types';

interface CampusLoanDetailViewProps {
  onNavigate: (page: PageId) => void;
}

export const CampusLoanDetailView: React.FC<CampusLoanDetailViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4 pb-6">
      {/* Top Banner Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
          <GraduationCap className="w-7 h-7 stroke-[2.2]" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="text-[15px] font-black text-slate-900 leading-tight">
              校园贷
            </h2>
            <span className="px-1.5 py-0.5 rounded-md bg-[#FFF1F0] text-[#FF4D4F] text-[10px] font-bold">
              高风险
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium leading-tight">
            低门槛借贷背后可能隐藏高额费用
          </p>
        </div>
      </div>

      {/* 常见话术 (Quotes list matching Image 2-Middle) */}
      <div className="space-y-2">
        <h3 className="text-xs font-black text-slate-900">
          常见话术
        </h3>

        <div className="space-y-2">
          {/* Quote 1 */}
          <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-2.5">
            <span className="text-[#1677FF] font-black text-base">“</span>
            <span className="text-xs font-bold text-slate-800">学生专属额度</span>
            <span className="text-[#1677FF] font-black text-base ml-auto">”</span>
          </div>

          {/* Quote 2 */}
          <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-2.5">
            <span className="text-[#1677FF] font-black text-base">“</span>
            <span className="text-xs font-bold text-slate-800">无需抵押秒批</span>
            <span className="text-[#1677FF] font-black text-base ml-auto">”</span>
          </div>

          {/* Quote 3 */}
          <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-2.5">
            <span className="text-[#1677FF] font-black text-base">“</span>
            <span className="text-xs font-bold text-slate-800">先交手续费</span>
            <span className="text-[#1677FF] font-black text-base ml-auto">”</span>
          </div>
        </div>
      </div>

      {/* 风险信号 (Orange vertical accent border) */}
      <div className="space-y-2">
        <h3 className="text-xs font-black text-slate-900">
          风险信号
        </h3>

        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5 pl-1 border-l-2.5 border-[#FA8C16]">
            <span className="text-xs font-bold text-slate-800">
              警惕高额综合费用
            </span>
          </div>

          <div className="flex items-center gap-2.5 pl-1 border-l-2.5 border-[#FA8C16]">
            <span className="text-xs font-bold text-slate-800">
              警惕暴力催收
            </span>
          </div>

          <div className="flex items-center gap-2.5 pl-1 border-l-2.5 border-[#FA8C16]">
            <span className="text-xs font-bold text-slate-800">
              警惕个人信息泄露
            </span>
          </div>
        </div>
      </div>

      {/* 正确做法 (Blue check shields) */}
      <div className="space-y-2">
        <h3 className="text-xs font-black text-slate-900">
          正确做法
        </h3>

        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4.5 h-4.5 text-[#1677FF] stroke-[2.2] shrink-0" />
            <span className="text-xs font-bold text-slate-800">
              不点击陌生贷款链接
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4.5 h-4.5 text-[#1677FF] stroke-[2.2] shrink-0" />
            <span className="text-xs font-bold text-slate-800">
              通过正规金融机构咨询
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4.5 h-4.5 text-[#1677FF] stroke-[2.2] shrink-0" />
            <span className="text-xs font-bold text-slate-800">
              遇到催收威胁及时求助
            </span>
          </div>
        </div>
      </div>

      {/* Orange Warning Banner */}
      <div className="p-3.5 rounded-2xl bg-[#FFF7E6] border border-[#FFE7BA] flex items-center gap-2">
        <AlertCircle className="w-4.5 h-4.5 text-[#FA8C16] shrink-0" />
        <span className="text-xs font-bold text-[#FA8C16]">
          贷款先收费，基本是陷阱
        </span>
      </div>

      {/* Bottom Action Dual Buttons */}
      <div className="flex gap-2.5 pt-2">
        <button
          type="button"
          onClick={() => onNavigate('antifraud_quiz')}
          className="flex-1 py-3 rounded-2xl border border-[#1677FF] text-[#1677FF] font-bold text-xs bg-white hover:bg-blue-50 active:scale-[0.99] transition-all flex items-center justify-center"
        >
          专项问答
        </button>

        <button
          type="button"
          onClick={() => onNavigate('scenario_sim')}
          className="flex-1 py-3 rounded-2xl bg-[#1677FF] text-white font-bold text-xs hover:bg-blue-700 active:scale-[0.99] shadow-md shadow-blue-500/20 transition-all flex items-center justify-center"
        >
          情景模拟
        </button>
      </div>
    </div>
  );
};
