import React, { useState } from 'react';
import {
  Scale,
  Clock,
  Star,
  BarChart2,
  Shield,
  Droplet,
  Percent,
  CheckCircle2,
  AlertCircle,
  Bookmark,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { PageId } from '../types';

interface ArticleInvestmentViewProps {
  onNavigate: (page: PageId) => void;
}

export const ArticleInvestmentView: React.FC<ArticleInvestmentViewProps> = ({ onNavigate }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  return (
    <div className="space-y-4 pb-6">
      {/* Top Tag & Title (matching Image 4-Middle) */}
      <div className="space-y-2 pt-1">
        {/* Scale Icon */}
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF]">
          <Scale className="w-5 h-5 stroke-[2.2]" />
        </div>

        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EBF3FF] text-[#1677FF] text-[11px] font-bold">
          投资基础
        </span>

        <h1 className="text-[17px] font-black text-slate-900 leading-snug tracking-tight">
          风险与收益：投资第一课
        </h1>

        <p className="text-xs text-slate-500 font-medium">
          了解投资的本质，不做盲目决策
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
            收益越高，通常意味着要承担更多风险
          </p>
        </div>
      </div>

      {/* 正文段落 */}
      <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
        <h3 className="text-xs font-black text-slate-900">
          风险与收益永远成正比
        </h3>
        <p>
          投资的本质是用今天的资金，换取未来的回报。高收益的背后，往往伴随着更高的不确定性。理解风险与收益的关系，是投资的第一步。
        </p>
      </div>

      {/* 2x2 Risk Grid (matching Image 4-Middle) */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* 1. 市场风险 */}
        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs space-y-1.5">
          <div className="w-7 h-7 rounded-xl bg-blue-50 flex items-center justify-center text-[#1677FF]">
            <BarChart2 className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-black text-slate-900">市场风险</h4>
          <p className="text-[10.5px] text-slate-500 leading-snug">
            市场波动导致资产价格下跌的风险
          </p>
        </div>

        {/* 2. 信用风险 */}
        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs space-y-1.5">
          <div className="w-7 h-7 rounded-xl bg-blue-50 flex items-center justify-center text-[#1677FF]">
            <Shield className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-black text-slate-900">信用风险</h4>
          <p className="text-[10.5px] text-slate-500 leading-snug">
            交易对手或发行方无法履约的风险
          </p>
        </div>

        {/* 3. 流动性风险 */}
        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs space-y-1.5">
          <div className="w-7 h-7 rounded-xl bg-blue-50 flex items-center justify-center text-[#1677FF]">
            <Droplet className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-black text-slate-900">流动性风险</h4>
          <p className="text-[10.5px] text-slate-500 leading-snug">
            资产难以快速变现或变现成本过高
          </p>
        </div>

        {/* 4. 通胀风险 */}
        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs space-y-1.5">
          <div className="w-7 h-7 rounded-xl bg-blue-50 flex items-center justify-center text-[#1677FF]">
            <Percent className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-black text-slate-900">通胀风险</h4>
          <p className="text-[10.5px] text-slate-500 leading-snug">
            货币购买力下降，导致实际收益减少
          </p>
        </div>
      </div>

      {/* 原则 Banner */}
      <div className="p-3 rounded-2xl bg-[#EBF3FF] border border-[#D0E2FF] flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-[#1677FF] shrink-0" />
        <span className="text-xs font-bold text-[#1677FF]">
          记住一个原则：不要投资自己看不懂的产品
        </span>
      </div>

      {/* 投资前自检 Card (matching Image 4-Right) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
        <h3 className="text-xs font-black text-slate-900">
          投资前自检
        </h3>

        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              我是否看懂产品
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              我能否承受价格波动
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              这笔钱是否影响正常生活
            </span>
          </div>
        </div>
      </div>

      {/* Orange Warning Banner */}
      <div className="p-3.5 rounded-2xl bg-[#FFF7E6] border border-[#FFE7BA] flex items-center gap-2">
        <AlertCircle className="w-4.5 h-4.5 text-[#FA8C16] shrink-0" />
        <span className="text-xs font-bold text-[#FA8C16]">
          任何承诺保本高收益的产品，都要提高警惕
        </span>
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
            本阶段已完成 2 / 3
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-[#1677FF] rounded-full w-[66%]" />
          </div>
        </div>
      </div>

      {/* 下一篇 Card */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onNavigate('investment')}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('investment'); }}
        className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3 hover:border-blue-300 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
            <Scale className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <div className="text-[10.5px] font-bold text-slate-400">下一篇</div>
            <h4 className="text-xs font-black text-slate-900 mt-0.5 leading-snug">
              投资不可能三角：高收益、高安全、高流动性
            </h4>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
      </div>

      {/* Bottom Disclaimer */}
      <div className="pt-2 text-center">
        <p className="text-[10.5px] text-slate-400 flex items-center justify-center gap-1 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          内容仅用于金融知识普及，不构成投资建议
        </p>
      </div>
    </div>
  );
};
