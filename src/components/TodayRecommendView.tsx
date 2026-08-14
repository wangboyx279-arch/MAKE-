import React, { useState } from 'react';
import {
  Shield,
  BookOpen,
  HelpCircle,
  PiggyBank,
  Clock,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { PageId } from '../types';

interface TodayRecommendViewProps {
  onNavigate: (page: PageId) => void;
}

export const TodayRecommendView: React.FC<TodayRecommendViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');

  return (
    <div className="space-y-4 pb-6">
      {/* Top Title & Subtitle (matching Image 6-Left) */}
      <div className="space-y-1 pt-1">
        <h2 className="text-base font-black text-slate-900 leading-tight">
          今日推荐
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          用3分钟掌握一个金融知识点
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {['全部', '防骗知识', '理性消费', '投资入门'].map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-[#1677FF] text-white shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Articles List (4 Items matching Image 6-Left) */}
      <div className="space-y-2.5">
        {/* Article 1 */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onNavigate('article_campus_loan')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('article_campus_loan'); }}
          className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3 hover:border-blue-300 transition-all cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0 mt-0.5">
              <div className="relative flex items-center justify-center">
                <Shield className="w-5 h-5 stroke-[2.2]" />
                <GraduationCap className="w-2.5 h-2.5 text-[#1677FF] absolute top-1.5 stroke-[2.5]" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="inline-block px-2 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[10px] font-bold">
                防骗知识
              </span>
              <h3 className="text-[13px] font-black text-slate-900 leading-tight">
                如何识别校园贷陷阱
              </h3>
              <p className="text-[10.5px] text-slate-500 font-medium">
                警惕低门槛、高额度背后的风险
              </p>
              <div className="flex items-center gap-1 text-[10px] text-slate-400 pt-0.5">
                <Clock className="w-3 h-3" />
                <span>阅读约 3 分钟</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        </div>

        {/* Article 2 */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onNavigate('article_consumption')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('article_consumption'); }}
          className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3 hover:border-blue-300 transition-all cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0 mt-0.5">
              <BookOpen className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <span className="inline-block px-2 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[10px] font-bold">
                理性消费
              </span>
              <h3 className="text-[13px] font-black text-slate-900 leading-tight">
                理性消费，从预算开始
              </h3>
              <p className="text-[10.5px] text-slate-500 font-medium">
                培养理性，科学消费
              </p>
              <div className="flex items-center gap-1 text-[10px] text-slate-400 pt-0.5">
                <Clock className="w-3 h-3" />
                <span>阅读约 3 分钟</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        </div>

        {/* Article 3 */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onNavigate('article_investment')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('article_investment'); }}
          className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3 hover:border-blue-300 transition-all cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <span className="inline-block px-2 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[10px] font-bold">
                投资入门
              </span>
              <h3 className="text-[13px] font-black text-slate-900 leading-tight">
                投资前先问自己三个问题
              </h3>
              <p className="text-[10.5px] text-slate-500 font-medium">
                了解自己，开启未来
              </p>
              <div className="flex items-center gap-1 text-[10px] text-slate-400 pt-0.5">
                <Clock className="w-3 h-3" />
                <span>阅读约 3 分钟</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        </div>

        {/* Article 4 */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onNavigate('article_consumption')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('article_consumption'); }}
          className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3 hover:border-blue-300 transition-all cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0 mt-0.5">
              <PiggyBank className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <span className="inline-block px-2 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[10px] font-bold">
                理性消费
              </span>
              <h3 className="text-[13px] font-black text-slate-900 leading-tight">
                为什么总是存不下钱？
              </h3>
              <p className="text-[10.5px] text-slate-500 font-medium">
                识别习惯，学会积累
              </p>
              <div className="flex items-center gap-1 text-[10px] text-slate-400 pt-0.5">
                <Clock className="w-3 h-3" />
                <span>阅读约 3 分钟</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        </div>
      </div>
    </div>
  );
};
