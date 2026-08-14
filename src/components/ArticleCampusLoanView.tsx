import React, { useState } from 'react';
import {
  Shield,
  GraduationCap,
  Clock,
  Star,
  AlertCircle,
  Search,
  FileText,
  CheckCircle2,
  Bookmark,
  ShieldCheck,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { PageId } from '../types';

interface ArticleCampusLoanViewProps {
  onNavigate: (page: PageId) => void;
}

export const ArticleCampusLoanView: React.FC<ArticleCampusLoanViewProps> = ({ onNavigate }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(true); // Match Image 6-Right showing completed state
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  return (
    <div className="space-y-4 pb-6">
      {/* Top Tag & Title (matching Image 6-Middle) */}
      <div className="space-y-2 pt-1">
        {/* Logo Shield & Graduation Cap */}
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF]">
          <div className="relative flex items-center justify-center">
            <Shield className="w-5 h-5 stroke-[2.2]" />
            <GraduationCap className="w-2.5 h-2.5 text-[#1677FF] absolute top-1.5 stroke-[2.5]" />
          </div>
        </div>

        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EBF3FF] text-[#1677FF] text-[11px] font-bold">
          防骗知识
        </span>

        <h1 className="text-[17px] font-black text-slate-900 leading-snug tracking-tight">
          如何识别校园贷陷阱
        </h1>

        <p className="text-xs text-slate-500 font-medium">
          看清低门槛借贷背后的风险
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
            正规贷款不会要求提前支付手续费
          </p>
        </div>
      </div>

      {/* 校园贷常见的三种套路 (matching Image 6-Middle) */}
      <div className="space-y-3 pt-1">
        <h3 className="text-xs font-black text-slate-900">
          校园贷常见的三种套路
        </h3>

        {/* 01 */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-[#1677FF]">01</span>
            <span className="text-[13px] font-black text-slate-900">
              学生专属额度
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pl-6">
            以“学生专享”“新人特权”为名，诱导申请高额度贷款。
          </p>
        </div>

        {/* 02 */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-[#1677FF]">02</span>
            <span className="text-[13px] font-black text-slate-900">
              无需抵押秒批
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pl-6">
            宣称“零门槛”“秒到账”，降低警惕，快速促成借款。
          </p>
        </div>

        {/* 03 */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-[#1677FF]">03</span>
            <span className="text-[13px] font-black text-slate-900">
              先交费用再放款
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pl-6">
            以“审核费”“保证金”“解冻金”等名义，要求提前付款。
          </p>
        </div>
      </div>

      {/* 看到这些信号要警惕 (Orange Warning) */}
      <div className="p-3.5 rounded-2xl bg-[#FFF7E6] border border-[#FFE7BA] space-y-1">
        <div className="flex items-center gap-1 text-xs font-bold text-[#FA8C16]">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>看到这些信号要警惕：</span>
        </div>
        <p className="text-xs text-slate-700 pl-5 leading-relaxed">
          越是急着让你转账的，越可能是陷阱。
        </p>
      </div>

      {/* 遇到可疑情况 (matching Image 6-Right) */}
      <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs space-y-2">
        <h4 className="text-xs font-black text-slate-900">
          遇到可疑情况
        </h4>

        <div className="flex items-center justify-between px-2 pt-0.5">
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FA8C16] text-xs font-black">
              !
            </div>
            <span className="text-[10.5px] font-bold text-slate-800">停止操作</span>
          </div>

          <div className="text-slate-300 font-bold -mt-2">→</div>

          <div className="flex flex-col items-center text-center space-y-1">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1677FF]">
              <Search className="w-4 h-4 stroke-[2.2]" />
            </div>
            <span className="text-[10.5px] font-bold text-slate-800">核实来源</span>
          </div>

          <div className="text-slate-300 font-bold -mt-2">→</div>

          <div className="flex flex-col items-center text-center space-y-1">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1677FF]">
              <FileText className="w-4 h-4 stroke-[2.2]" />
            </div>
            <span className="text-[10.5px] font-bold text-slate-800">留存证据</span>
          </div>
        </div>
      </div>

      {/* 可以这样做 (3 Checked Items matching Image 6-Right) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
        <h3 className="text-xs font-black text-slate-900">
          可以这样做
        </h3>

        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              不点击陌生链接
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              通过正规机构核实
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-4.5 h-4.5 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              保存聊天和转账记录
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
          <span>{isCompleted ? '已完成' : '标记完成'}</span>
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

      {/* 学习记录已更新 Progress Card (matching Image 6-Right) */}
      <div className="bg-[#EBF3FF] border border-[#D0E2FF] rounded-2xl p-4 flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1677FF] shrink-0 shadow-xs">
          <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
        </div>

        <div>
          <h4 className="text-xs font-black text-slate-900">
            学习记录已更新
          </h4>
          <p className="text-[11px] text-slate-500 font-medium mt-0.5">
            本篇文章学习已完成
          </p>
        </div>
      </div>

      {/* 继续阅读 Section (matching Image 6-Right) */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-black text-slate-900">
          继续阅读
        </h3>

        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs divide-y divide-slate-100">
          {/* Item 1 */}
          <button
            type="button"
            onClick={() => onNavigate('scenario_sim')}
            className="w-full py-2.5 px-1.5 flex items-center justify-between gap-2 hover:bg-slate-50 rounded-xl transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-[#1677FF] shrink-0 stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-800">
                刷单返利为什么越做越亏？
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </button>

          {/* Item 2 */}
          <button
            type="button"
            onClick={() => onNavigate('article_investment')}
            className="w-full py-2.5 px-1.5 flex items-center justify-between gap-2 hover:bg-slate-50 rounded-xl transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <TrendingUp className="w-4 h-4 text-[#1677FF] shrink-0 stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-800">
                投资不可能三角
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </button>
        </div>
      </div>

      {/* 返回今日推荐 Link */}
      <div className="text-center pt-1">
        <button
          type="button"
          onClick={() => onNavigate('today_recommend')}
          className="text-xs font-bold text-[#1677FF] flex items-center justify-center gap-0.5 mx-auto hover:underline"
        >
          <span>返回今日推荐</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
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
