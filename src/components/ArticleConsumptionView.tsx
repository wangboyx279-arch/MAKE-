import React, { useState } from 'react';
import {
  Clock,
  Star,
  CheckCircle2,
  Bookmark,
  ShieldCheck,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { PageId } from '../types';

interface ArticleConsumptionViewProps {
  onNavigate: (page: PageId) => void;
}

export const ArticleConsumptionView: React.FC<ArticleConsumptionViewProps> = ({ onNavigate }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  return (
    <div className="space-y-4 pb-6">
      {/* Top Tag & Title (matching Image 3-Middle) */}
      <div className="space-y-2 pt-1">
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EBF3FF] text-[#1677FF] text-[11px] font-bold">
          预算管理
        </span>

        <h1 className="text-[17px] font-black text-slate-900 leading-snug tracking-tight">
          为什么你的工资永远不够花？<br />——收入三分法
        </h1>

        <p className="text-xs text-slate-500 font-medium">
          把收入分成三份，从此告别月光
        </p>

        <div className="flex items-center gap-1 text-[11px] text-slate-400 pt-0.5">
          <Clock className="w-3.5 h-3.5" />
          <span>阅读约 3 分钟</span>
        </div>
      </div>

      {/* 关键结论 Banner */}
      <div className="bg-[#EBF3FF] border border-[#D0E2FF] rounded-2xl p-3.5 flex items-start gap-2.5">
        <div className="w-6 h-6 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
          <Star className="w-3.5 h-3.5 fill-white" />
        </div>
        <div>
          <h4 className="text-xs font-black text-slate-900 leading-snug">
            关键结论：
          </h4>
          <p className="text-xs font-bold text-slate-800 mt-0.5">
            收入到账后先分配，再开始消费
          </p>
        </div>
      </div>

      {/* 01, 02, 03 Content Breakdown (matching Image 3-Middle & Right) */}
      <div className="space-y-3.5 pt-1">
        {/* 01 */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-[#1677FF]">01</span>
            <span className="text-[13.5px] font-black text-slate-900">
              必要开支 50%
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pl-6">
            用于满足基本生活需求的支出，如房租、餐饮、交通、水电等。
          </p>
        </div>

        {/* 02 */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-[#1677FF]">02</span>
            <span className="text-[13.5px] font-black text-slate-900">
              想要的开支 30%
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pl-6">
            用于提升生活品质的支出，如娱乐、购物、旅行等。
          </p>
        </div>

        {/* 03 */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-[#1677FF]">03</span>
            <span className="text-[13.5px] font-black text-slate-900">
              储蓄与投资 20%
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pl-6">
            用于为未来做准备，通过储蓄或投资实现财富增值。
          </p>
        </div>
      </div>

      {/* 现在就做 Checklist Card (matching Image 3-Right) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
        <h3 className="text-xs font-black text-slate-900">
          现在就做
        </h3>

        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              记录本月收入
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              先转入 20% 储蓄
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              再安排日常开支
            </span>
          </div>
        </div>
      </div>

      {/* Action Dual Buttons */}
      <div className="flex gap-2.5 pt-1">
        <button
          type="button"
          onClick={() => setIsCompleted(!isCompleted)}
          className={`flex-1 py-3 rounded-2xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 ${
            isCompleted
              ? 'bg-emerald-600 text-white'
              : 'bg-[#1677FF] text-white hover:bg-blue-700 active:scale-[0.99]'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
          <span>{isCompleted ? '已学习' : '已完成'}</span>
        </button>

        <button
          type="button"
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`flex-1 py-3 rounded-2xl border border-[#1677FF] font-bold text-xs bg-white hover:bg-blue-50 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 ${
            isBookmarked ? 'text-amber-500 border-amber-400' : 'text-[#1677FF]'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
          <span>{isBookmarked ? '已收藏' : '收藏这篇'}</span>
        </button>
      </div>

      {/* 本阶段已完成 Progress Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
          <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
        </div>

        <div className="flex-1 space-y-1.5">
          <div className="text-xs font-black text-slate-900">
            本阶段已完成 1 / 2
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-[#1677FF] rounded-full w-[50%]" />
          </div>
        </div>
      </div>

      {/* 下一篇 Card */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onNavigate('consumption')}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('consumption'); }}
        className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3 hover:border-blue-300 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
            <BookOpen className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <div className="text-[10.5px] font-bold text-slate-400">下一篇</div>
            <h4 className="text-xs font-black text-slate-900 mt-0.5 leading-snug">
              理财的第一步：搞懂钱从哪里来、到哪里去
            </h4>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
      </div>

      {/* Bottom Disclaimer */}
      <div className="pt-2 text-center">
        <p className="text-[10.5px] text-slate-400 flex items-center justify-center gap-1 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          理性认知金融，远离非法金融活动
        </p>
      </div>
    </div>
  );
};
