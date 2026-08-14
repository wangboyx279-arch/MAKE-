import React from 'react';
import {
  TrendingUp,
  ChevronRight,
  AlertCircle,
  BookOpen
} from 'lucide-react';
import { PageId } from '../types';

interface InvestmentViewProps {
  onNavigate: (page: PageId) => void;
}

export const InvestmentView: React.FC<InvestmentViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4 pb-6">
      {/* 学习进度 Header Card (matching Image 4-Left) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-xs font-black text-slate-900">学习进度</h3>
            <p className="text-[11px] text-slate-500 font-medium">已完成 2 / 13 篇</p>
          </div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xl font-black text-[#1677FF]">15</span>
            <span className="text-xs font-bold text-[#1677FF]">%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full bg-[#1677FF] rounded-full w-[15%]" />
        </div>
      </div>

      {/* Recommended Lesson Banner */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
            <TrendingUp className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <h4 className="text-[13px] font-black text-slate-900 leading-snug">
              投资基础 • 风险与收益
            </h4>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('article_investment')}
          className="px-3.5 py-1.5 rounded-full bg-[#1677FF] text-white text-[11px] font-bold flex items-center gap-0.5 hover:bg-blue-700 active:scale-95 transition-all shrink-0"
        >
          <span>继续</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* 学习模块 (5 Item List matching Image 4-Left) */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-black text-slate-900">
          学习模块
        </h3>

        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs divide-y divide-slate-100">
          {/* Module 01 (Active) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onNavigate('article_investment')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('article_investment'); }}
            className="w-full py-2.5 px-1.5 flex items-center justify-between gap-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-black text-[#1677FF]">01</span>
              <span className="text-xs font-black text-slate-900">投资基础</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 font-medium">2 / 3 篇</span>
              <span className="px-2 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[10px] font-bold flex items-center gap-0.5">
                <span>进行中</span>
                <span className="text-[9px]">&gt;</span>
              </span>
            </div>
          </div>

          {/* Module 02 */}
          <div className="w-full py-2.5 px-1.5 flex items-center justify-between gap-2 opacity-80">
            <div className="flex items-center gap-3">
              <span className="text-sm font-black text-[#1677FF]">02</span>
              <span className="text-xs font-bold text-slate-700">基金入门</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 font-medium">0 / 3 篇</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[10px] font-bold flex items-center gap-0.5">
                <span>待学习</span>
                <span className="text-[9px]">&gt;</span>
              </span>
            </div>
          </div>

          {/* Module 03 */}
          <div className="w-full py-2.5 px-1.5 flex items-center justify-between gap-2 opacity-80">
            <div className="flex items-center gap-3">
              <span className="text-sm font-black text-[#1677FF]">03</span>
              <span className="text-xs font-bold text-slate-700">股票入门</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 font-medium">0 / 3 篇</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[10px] font-bold flex items-center gap-0.5">
                <span>待学习</span>
                <span className="text-[9px]">&gt;</span>
              </span>
            </div>
          </div>

          {/* Module 04 */}
          <div className="w-full py-2.5 px-1.5 flex items-center justify-between gap-2 opacity-80">
            <div className="flex items-center gap-3">
              <span className="text-sm font-black text-[#1677FF]">04</span>
              <span className="text-xs font-bold text-slate-700">债券入门</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 font-medium">0 / 2 篇</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[10px] font-bold flex items-center gap-0.5">
                <span>待学习</span>
                <span className="text-[9px]">&gt;</span>
              </span>
            </div>
          </div>

          {/* Module 05 */}
          <div className="w-full py-2.5 px-1.5 flex items-center justify-between gap-2 opacity-80">
            <div className="flex items-center gap-3">
              <span className="text-sm font-black text-[#1677FF]">05</span>
              <span className="text-xs font-bold text-slate-700">资产配置</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 font-medium">0 / 2 篇</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[10px] font-bold flex items-center gap-0.5">
                <span>待学习</span>
                <span className="text-[9px]">&gt;</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 投资前先问自己三个问题 Banner (Orange matching Image 4-Left) */}
      <div className="bg-[#FFF7E6] rounded-2xl p-4 border border-[#FFE7BA] space-y-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4.5 h-4.5 text-[#FA8C16] stroke-[2.2] shrink-0" />
          <h4 className="text-xs font-black text-slate-900">
            投资前先问自己三个问题
          </h4>
        </div>

        <div className="flex items-center gap-2 pt-0.5">
          <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-[10.5px] font-bold shadow-xs border border-orange-100">
            是否看懂
          </span>
          <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-[10.5px] font-bold shadow-xs border border-orange-100">
            能否承受波动
          </span>
          <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-[10.5px] font-bold shadow-xs border border-orange-100">
            是否影响生活
          </span>
        </div>
      </div>

      {/* 推荐阅读 (2 Articles matching Image 4-Left) */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-black text-slate-900">
          推荐阅读
        </h3>

        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs divide-y divide-slate-100">
          {/* Article 1 */}
          <button
            type="button"
            onClick={() => onNavigate('article_investment')}
            className="w-full py-2.5 px-1.5 flex items-center justify-between gap-2 hover:bg-slate-50 rounded-xl transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-[#1677FF] shrink-0 stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-800">
                什么是复利？时间如何创造价值
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </button>

          {/* Article 2 */}
          <button
            type="button"
            onClick={() => onNavigate('article_investment')}
            className="w-full py-2.5 px-1.5 flex items-center justify-between gap-2 hover:bg-slate-50 rounded-xl transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <TrendingUp className="w-4 h-4 text-[#1677FF] shrink-0 stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-800">
                基金定投适合什么样的人？
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
