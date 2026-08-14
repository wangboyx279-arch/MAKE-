import React, { useState } from 'react';
import {
  ShieldCheck,
  BookOpen,
  ShoppingCart,
  TrendingUp,
  ChevronRight,
  ChevronDown,
  AlertCircle
} from 'lucide-react';
import { PageId } from '../types';

interface AssessmentResultViewProps {
  onNavigate: (page: PageId) => void;
}

export const AssessmentResultView: React.FC<AssessmentResultViewProps> = ({ onNavigate }) => {
  const [showAnalysis, setShowAnalysis] = useState<boolean>(false);

  return (
    <div className="space-y-4 pb-6">
      {/* Top Score Banner Card (Image 1-Right) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
          </div>

          <div className="flex items-baseline">
            <span className="text-3xl font-black text-[#1677FF] tracking-tight">75</span>
            <span className="text-sm font-bold text-[#1677FF]">分</span>
          </div>
        </div>

        <div className="text-right space-y-1">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EBF3FF] text-[#1677FF] text-[11px] font-bold">
            风险识别进阶者
          </span>
          <div className="text-[11px] text-slate-500 font-medium">
            答对 15 / 20
          </div>
        </div>
      </div>

      {/* Ability Analysis Section (Image 1-Right) */}
      <div className="space-y-2">
        <h3 className="text-xs font-black text-slate-900">
          能力分析
        </h3>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3.5">
          {/* 1. 金融基础 */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-24 shrink-0">
              <BookOpen className="w-4 h-4 text-[#1677FF] stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-800">金融基础</span>
            </div>
            <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-[#1677FF] rounded-full w-[85%]" />
            </div>
            <span className="text-xs font-bold text-slate-700 w-8 text-right shrink-0">
              85%
            </span>
          </div>

          {/* 2. 理性消费 */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-24 shrink-0">
              <ShoppingCart className="w-4 h-4 text-[#1677FF] stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-800">理性消费</span>
            </div>
            <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-[#1677FF] rounded-full w-[80%]" />
            </div>
            <span className="text-xs font-bold text-slate-700 w-8 text-right shrink-0">
              80%
            </span>
          </div>

          {/* 3. 反诈防骗 */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-24 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#1677FF] stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-800">反诈防骗</span>
            </div>
            <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-[#1677FF] rounded-full w-[90%]" />
            </div>
            <span className="text-xs font-bold text-slate-700 w-8 text-right shrink-0">
              90%
            </span>
          </div>

          {/* 4. 投资风险 */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-24 shrink-0">
              <TrendingUp className="w-4 h-4 text-[#1677FF] stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-800">投资风险</span>
            </div>
            <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-[#FA8C16] rounded-full w-[45%]" />
            </div>
            <div className="flex items-center gap-1 w-10 justify-end shrink-0">
              <span className="text-xs font-bold text-slate-700">45%</span>
              <AlertCircle className="w-3.5 h-3.5 text-[#FA8C16] shrink-0 fill-[#FA8C16] text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Priority Learning Section (Image 1-Right) */}
      <div className="space-y-2">
        <h3 className="text-xs font-black text-slate-900">
          优先学习
        </h3>

        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden">
          {/* Article 1 */}
          <button
            type="button"
            onClick={() => onNavigate('article_campus_loan')}
            className="w-full p-3.5 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-[#1677FF] shrink-0 stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-800">
                如何识别校园贷陷阱
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
          </button>

          {/* Article 2 */}
          <button
            type="button"
            onClick={() => onNavigate('article_investment')}
            className="w-full p-3.5 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-[#1677FF] shrink-0 stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-800">
                投资前先问自己三个问题
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
          </button>
        </div>
      </div>

      {/* View Answer Explanation Accordion (Image 1-Right) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => setShowAnalysis(!showAnalysis)}
          className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
        >
          <span className="text-xs font-bold text-slate-700">查看答案解析</span>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              showAnalysis ? 'rotate-180' : ''
            }`}
          />
        </button>

        {showAnalysis && (
          <div className="p-3.5 pt-0 border-t border-slate-100 text-xs text-slate-600 space-y-2 bg-slate-50/50">
            <p className="font-semibold text-slate-800">
              💡 应急资金解析：
            </p>
            <p>
              应急资金应存放于货币基金等高流动性工具中，一般准备 3-6 个月必要支出，切忌投入高风险权益类资产。
            </p>
          </div>
        )}
      </div>

      {/* Bottom Action Dual Buttons (Image 1-Right) */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => onNavigate('assessment')}
          className="flex-1 py-3 rounded-2xl border border-[#1677FF] text-[#1677FF] font-bold text-xs bg-white hover:bg-blue-50 active:scale-[0.99] transition-all flex items-center justify-center"
        >
          再测一次
        </button>

        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex-1 py-3 rounded-2xl bg-[#1677FF] text-white font-bold text-xs hover:bg-blue-700 active:scale-[0.99] shadow-md shadow-blue-500/20 transition-all flex items-center justify-center"
        >
          返回首页
        </button>
      </div>
    </div>
  );
};
