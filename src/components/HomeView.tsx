import React from 'react';
import {
  Shield,
  GraduationCap,
  ShieldCheck,
  Lock,
  BookOpen,
  Plus,
  TrendingUp,
  Search,
  Bookmark,
  ChevronRight,
  ThumbsUp
} from 'lucide-react';
import { PageId } from '../types';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-3.5 pb-6">
      {/* Top Hero Banner (Image 1-Left) */}
      <div className="relative bg-gradient-to-br from-[#1677FF]/5 via-[#1677FF]/10 to-transparent rounded-3xl p-4 border border-blue-100/80 overflow-hidden">
        {/* Right Shield Graphic Illustration */}
        <div className="absolute right-2 top-2 w-28 h-28 opacity-20 pointer-events-none flex items-center justify-center">
          <div className="relative">
            <Shield className="w-24 h-24 text-[#1677FF] stroke-[1.5] fill-[#1677FF]/10" />
            <BookOpen className="w-10 h-10 text-[#1677FF] absolute bottom-1 left-7 stroke-[2]" />
          </div>
        </div>

        <div className="relative z-10 space-y-2">
          {/* Logo & Main Title */}
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-2xl bg-[#1677FF] text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
              <div className="relative flex items-center justify-center">
                <Shield className="w-6 h-6 stroke-[2.2]" />
                <GraduationCap className="w-3.5 h-3.5 text-white absolute top-1 stroke-[2.5]" />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-900 tracking-tight leading-tight">
                青盾金识
              </h1>
              <p className="text-[11px] text-slate-500 font-medium">
                青年金融素养提升与风险防范课堂
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600 font-medium pt-0.5 leading-relaxed">
            学习金融知识，识别风险陷阱，<br />
            守护财产安全
          </p>

          {/* 3 Pills: 专业科普, 识别风险, 守护安全 */}
          <div className="flex items-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 border border-blue-200/80 text-[10.5px] font-bold text-[#1677FF] shadow-2xs">
              <GraduationCap className="w-3 h-3 stroke-[2.5]" />
              专业科普
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 border border-blue-200/80 text-[10.5px] font-bold text-[#1677FF] shadow-2xs">
              <ShieldCheck className="w-3 h-3 stroke-[2.5]" />
              识别风险
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 border border-blue-200/80 text-[10.5px] font-bold text-[#1677FF] shadow-2xs">
              <Lock className="w-3 h-3 stroke-[2.5]" />
              守护安全
            </span>
          </div>
        </div>
      </div>

      {/* 继续学习 Card (Image 1-Left) */}
      <button
        type="button"
        onClick={() => onNavigate('article_consumption')}
        className="w-full bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md transition-all active:scale-[0.99] text-left relative overflow-hidden"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
              <BookOpen className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#1677FF]">
                继续学习
              </span>
              <h3 className="text-xs font-black text-slate-900 leading-snug">
                理性消费，从预算开始
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-base font-black text-[#1677FF]">22%</span>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-2.5 pt-1 flex items-center justify-between text-[10.5px] text-slate-400 font-medium">
          <span>已完成 6 / 27 篇</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden mt-1.5">
          <div className="h-full bg-[#1677FF] rounded-full w-[22%]" />
        </div>
      </button>

      {/* 4-Grid Action Cards (Image 1-Left) */}
      <div className="grid grid-cols-2 gap-3">
        {/* Card 1: 金融素养测评 (Blue) */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex flex-col justify-between h-[130px]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
              <ShieldCheck className="w-4.5 h-4.5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">
                金融素养测评
              </h3>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                评估金融素养水平
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('assessment')}
            className="w-full py-1.5 rounded-full bg-[#1677FF] text-white text-[11px] font-bold hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-0.5 shadow-xs"
          >
            <span>开始测评</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Card 2: 防骗守护中心 (Green) */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex flex-col justify-between h-[130px]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#52C41A] shrink-0">
              <div className="relative flex items-center justify-center">
                <Shield className="w-4.5 h-4.5 stroke-[2.2]" />
                <Plus className="w-2 h-2 text-[#52C41A] absolute stroke-[3]" />
              </div>
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">
                防骗守护中心
              </h3>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                识别骗局，守护安全
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('antifraud')}
            className="w-full py-1.5 rounded-full bg-[#52C41A] text-white text-[11px] font-bold hover:bg-emerald-600 active:scale-[0.98] transition-all flex items-center justify-center gap-0.5 shadow-xs"
          >
            <span>进入学习</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Card 3: 理性消费课堂 (Purple/Indigo) */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex flex-col justify-between h-[130px]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#722ED1] shrink-0">
              <BookOpen className="w-4.5 h-4.5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">
                理性消费课堂
              </h3>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                培养理性，科学消费
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('consumption')}
            className="w-full py-1.5 rounded-full bg-[#722ED1] text-white text-[11px] font-bold hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-0.5 shadow-xs"
          >
            <span>开始学习</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Card 4: 投资入门课堂 (Orange) */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex flex-col justify-between h-[130px]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FA8C16] shrink-0">
              <TrendingUp className="w-4.5 h-4.5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">
                投资入门课堂
              </h3>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                了解投资，开启未来
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('investment')}
            className="w-full py-1.5 rounded-full bg-[#FA8C16] text-white text-[11px] font-bold hover:bg-orange-600 active:scale-[0.98] transition-all flex items-center justify-center gap-0.5 shadow-xs"
          >
            <span>查看课程</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* 今日推荐 Section (Image 1-Left) */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <ThumbsUp className="w-3.5 h-3.5 text-[#1677FF]" />
          <h2 className="text-xs font-black text-slate-900">
            今日推荐
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden">
          {/* Item 1: 如何识别校园贷陷阱 */}
          <button
            type="button"
            onClick={() => onNavigate('article_campus_loan')}
            className="w-full p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors text-left"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#1677FF] shrink-0">
                <Search className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-800 truncate">
                如何识别校园贷陷阱
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="px-2 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[10.5px] font-bold">
                防骗知识
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            </div>
          </button>

          {/* Item 2: 理性消费，从预算开始 */}
          <button
            type="button"
            onClick={() => onNavigate('article_consumption')}
            className="w-full p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors text-left"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#1677FF] shrink-0">
                <Bookmark className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-800 truncate">
                理性消费，从预算开始
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="px-2 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[10.5px] font-bold">
                理财知识
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            </div>
          </button>

          {/* Item 3: 什么是基金定投？ */}
          <button
            type="button"
            onClick={() => onNavigate('article_investment')}
            className="w-full p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors text-left"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#1677FF] shrink-0">
                <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-800 truncate">
                什么是基金定投？
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="px-2 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[10.5px] font-bold">
                投资知识
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Disclaimer (Image 1-Left) */}
      <div className="pt-2 text-center">
        <p className="text-[10.5px] text-slate-400 flex items-center justify-center gap-1 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          本平台内容仅用于金融知识普及与风险教育，不构成投资建议。
        </p>
      </div>
    </div>
  );
};
