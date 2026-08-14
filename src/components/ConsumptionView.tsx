import React from 'react';
import {
  BookOpen,
  ChevronRight,
  CheckSquare2,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';

interface ConsumptionViewProps {
  onNavigate: (page: PageId) => void;
}

export const ConsumptionView: React.FC<ConsumptionViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4 pb-6">
      {/* 学习进度 Header Card (matching Image 3-Left) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-xs font-black text-slate-900">学习进度</h3>
            <p className="text-[11px] text-slate-500 font-medium">已完成 2 / 9 个模块</p>
          </div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xl font-black text-[#1677FF]">22</span>
            <span className="text-xs font-bold text-[#1677FF]">%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full bg-[#1677FF] rounded-full w-[22%]" />
        </div>
      </div>

      {/* Active Lesson Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0 mt-0.5">
            <BookOpen className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400">
              预算管理 • 第1课
            </div>
            <h4 className="text-[13px] font-black text-slate-900 leading-snug mt-0.5 max-w-[170px]">
              理财的第一步：搞懂钱从哪里来、到哪里去
            </h4>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('article_consumption')}
          className="px-3 py-1.5 rounded-full bg-[#1677FF] text-white text-[11px] font-bold flex items-center gap-0.5 hover:bg-blue-700 active:scale-95 transition-all shrink-0"
        >
          <span>继续学习</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* 学习路径 (Vertical timeline matching Image 3-Left) */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-black text-slate-900">
          学习路径
        </h3>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 border-l-2 border-dashed border-slate-200" />

          <div className="space-y-4 relative z-10">
            {/* Step 01 (Active) */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => onNavigate('article_consumption')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('article_consumption'); }}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1677FF] text-white flex items-center justify-center font-black text-[11px] shrink-0 shadow-xs">
                  01
                </div>
                <span className="text-xs font-black text-slate-900">
                  认识收入与支出
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[10px] font-bold">
                正在学习
              </span>
            </div>

            {/* Step 02 */}
            <div className="flex items-center justify-between opacity-80">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-500 flex items-center justify-center font-bold text-[11px] shrink-0">
                  02
                </div>
                <span className="text-xs font-bold text-slate-700">
                  建立预算意识
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[10px] font-bold">
                待学习
              </span>
            </div>

            {/* Step 03 */}
            <div className="flex items-center justify-between opacity-80">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-500 flex items-center justify-center font-bold text-[11px] shrink-0">
                  03
                </div>
                <span className="text-xs font-bold text-slate-700">
                  储蓄与应急金
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[10px] font-bold">
                待学习
              </span>
            </div>

            {/* Step 04 */}
            <div className="flex items-center justify-between opacity-80">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-500 flex items-center justify-center font-bold text-[11px] shrink-0">
                  04
                </div>
                <span className="text-xs font-bold text-slate-700">
                  理性消费决策
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[10px] font-bold">
                待学习
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 今日任务 (Bottom Task Card) */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-black text-slate-900">
          今日任务
        </h3>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
              <CheckSquare2 className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-900 leading-tight">
                3分钟理解月光族形成原因
              </h4>
              <p className="text-[10.5px] text-slate-500 font-medium mt-0.5">
                完成后获得学习进度 +5%
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('article_consumption')}
            className="px-3.5 py-1.5 rounded-full bg-[#1677FF] text-white text-[11px] font-bold hover:bg-blue-700 active:scale-95 transition-all shrink-0"
          >
            开始学习
          </button>
        </div>
      </div>
    </div>
  );
};
