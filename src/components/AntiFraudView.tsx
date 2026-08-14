import React from 'react';
import {
  GraduationCap,
  ShoppingCart,
  Headphones,
  TrendingUp,
  CreditCard,
  Users,
  Shield,
  HelpCircle,
  ClipboardList,
  Phone,
  AlertTriangle,
  Search,
  FileText,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';

interface AntiFraudViewProps {
  onNavigate: (page: PageId) => void;
}

export const AntiFraudView: React.FC<AntiFraudViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4 pb-6">
      {/* 遇到可疑情况 Flow Card (Image 2-Left) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
        <h3 className="text-xs font-black text-slate-900">
          遇到可疑情况
        </h3>

        <div className="flex items-center justify-between px-2 pt-1">
          {/* Step 1: 停止操作 */}
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FA8C16]">
              <AlertTriangle className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="w-4 h-4 rounded-full bg-[#FA8C16] text-white text-[10px] font-black flex items-center justify-center">
              1
            </div>
            <span className="text-[11px] font-bold text-slate-800">停止操作</span>
          </div>

          <ArrowRight className="w-4 h-4 text-slate-300 stroke-[2]" />

          {/* Step 2: 核实来源 */}
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1677FF]">
              <Search className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="w-4 h-4 rounded-full bg-[#1677FF] text-white text-[10px] font-black flex items-center justify-center">
              2
            </div>
            <span className="text-[11px] font-bold text-slate-800">核实来源</span>
          </div>

          <ArrowRight className="w-4 h-4 text-slate-300 stroke-[2]" />

          {/* Step 3: 留存证据 */}
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1677FF]">
              <FileText className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="w-4 h-4 rounded-full bg-[#1677FF] text-white text-[10px] font-black flex items-center justify-center">
              3
            </div>
            <span className="text-[11px] font-bold text-slate-800">留存证据</span>
          </div>
        </div>
      </div>

      {/* 高频风险场景 Section (Image 2-Left) */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-black text-slate-900">
            高频风险场景
          </h3>
          <button
            type="button"
            onClick={() => onNavigate('campus_loan')}
            className="text-[11px] font-bold text-[#1677FF] flex items-center gap-0.5 hover:underline"
          >
            <span>全部场景</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Card 1: 校园贷 */}
          <button
            type="button"
            onClick={() => onNavigate('campus_loan')}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all active:scale-[0.98] text-left flex items-start gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
              <GraduationCap className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-black text-slate-900 leading-tight">
                校园贷
              </h4>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">
                低门槛借贷陷阱
              </p>
              <span className="inline-block mt-1 px-1.5 py-0.2 rounded bg-[#FFF1F0] text-[#FF4D4F] text-[9.5px] font-bold">
                高风险
              </span>
            </div>
          </button>

          {/* Card 2: 刷单返利 */}
          <button
            type="button"
            onClick={() => onNavigate('scenario_sim')}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all active:scale-[0.98] text-left flex items-start gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
              <ShoppingCart className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-black text-slate-900 leading-tight">
                刷单返利
              </h4>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">
                先垫付后被骗
              </p>
              <span className="inline-block mt-1 px-1.5 py-0.2 rounded bg-[#FFF1F0] text-[#FF4D4F] text-[9.5px] font-bold">
                高风险
              </span>
            </div>
          </button>

          {/* Card 3: 冒充客服 */}
          <button
            type="button"
            onClick={() => onNavigate('case_detail')}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all active:scale-[0.98] text-left flex items-start gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
              <Headphones className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-black text-slate-900 leading-tight">
                冒充客服
              </h4>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">
                退款理赔诈骗
              </p>
              <span className="inline-block mt-1 px-1.5 py-0.2 rounded bg-[#FFF1F0] text-[#FF4D4F] text-[9.5px] font-bold">
                高风险
              </span>
            </div>
          </button>

          {/* Card 4: 虚假投资 */}
          <button
            type="button"
            onClick={() => onNavigate('article_investment')}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all active:scale-[0.98] text-left flex items-start gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
              <TrendingUp className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-black text-slate-900 leading-tight">
                虚假投资
              </h4>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">
                高收益诱惑陷阱
              </p>
              <span className="inline-block mt-1 px-1.5 py-0.2 rounded bg-[#FFF1F0] text-[#FF4D4F] text-[9.5px] font-bold">
                高风险
              </span>
            </div>
          </button>

          {/* Card 5: 出租银行卡 */}
          <button
            type="button"
            onClick={() => onNavigate('memo')}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all active:scale-[0.98] text-left flex items-start gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
              <CreditCard className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-black text-slate-900 leading-tight">
                出租银行卡
              </h4>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">
                涉洗钱风险
              </p>
              <span className="inline-block mt-1 px-1.5 py-0.2 rounded bg-[#FFF7E6] text-[#FA8C16] text-[9.5px] font-bold">
                中风险
              </span>
            </div>
          </button>

          {/* Card 6: AB贷 */}
          <button
            type="button"
            onClick={() => onNavigate('case_detail')}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all active:scale-[0.98] text-left flex items-start gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
              <Users className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-black text-slate-900 leading-tight">
                AB贷
              </h4>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">
                套路贷新变种
              </p>
              <span className="inline-block mt-1 px-1.5 py-0.2 rounded bg-[#FFF7E6] text-[#FA8C16] text-[9.5px] font-bold">
                中风险
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* 互动学习 Section (Image 2-Left) */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-black text-slate-900">
          互动学习
        </h3>

        <div className="grid grid-cols-3 gap-2">
          {/* Card 1: 情景模拟 */}
          <button
            type="button"
            onClick={() => onNavigate('scenario_sim')}
            className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-md transition-all active:scale-[0.98] text-center flex flex-col items-center justify-center space-y-1.5"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF]">
              <Shield className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[11px] font-black text-slate-900 flex items-center justify-center">
              情景模拟 &gt;
            </span>
            <span className="text-[9.5px] text-slate-400 font-medium">
              实景沉浸演练
            </span>
          </button>

          {/* Card 2: 反诈问答 */}
          <button
            type="button"
            onClick={() => onNavigate('antifraud_quiz')}
            className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-md transition-all active:scale-[0.98] text-center flex flex-col items-center justify-center space-y-1.5"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF]">
              <HelpCircle className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[11px] font-black text-slate-900 flex items-center justify-center">
              反诈问答 &gt;
            </span>
            <span className="text-[9.5px] text-slate-400 font-medium">
              知识随测随学
            </span>
          </button>

          {/* Card 3: 备忘清单 */}
          <button
            type="button"
            onClick={() => onNavigate('memo')}
            className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-md transition-all active:scale-[0.98] text-center flex flex-col items-center justify-center space-y-1.5"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF]">
              <ClipboardList className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[11px] font-black text-slate-900 flex items-center justify-center">
              备忘清单 &gt;
            </span>
            <span className="text-[9.5px] text-slate-400 font-medium">
              记录关键事项
            </span>
          </button>
        </div>
      </div>

      {/* Bottom 96110 Phone Banner (Image 2-Left) */}
      <div className="pt-2">
        <a
          href="tel:96110"
          className="w-full py-3 px-4 rounded-2xl bg-[#EBF3FF] border border-blue-200/80 text-[#1677FF] font-black text-xs flex items-center justify-center gap-2 hover:bg-blue-100/80 transition-colors shadow-2xs"
        >
          <Phone className="w-4 h-4 stroke-[2.5]" />
          <span className="text-sm">96110</span>
          <span className="font-bold text-slate-700">反诈预警劝阻专线</span>
        </a>
      </div>
    </div>
  );
};
