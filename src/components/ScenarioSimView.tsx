import React, { useState } from 'react';
import {
  ShieldCheck,
  User,
  AlertCircle
} from 'lucide-react';
import { PageId } from '../types';
import { SCENARIO_STEPS } from '../data/mockData';

interface ScenarioSimViewProps {
  onNavigate: (page: PageId) => void;
}

export const ScenarioSimView: React.FC<ScenarioSimViewProps> = ({ onNavigate }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<number>(2); // Default to safe option 2 matching design
  const [showRiskTip, setShowRiskTip] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const step = SCENARIO_STEPS[0];

  const handleConfirm = () => {
    if (selectedOptionId === step.safeOptionId) {
      setFeedback('回答正确！果断拒绝并退出群聊，切勿参与任何形式的刷单。');
    } else {
      setFeedback('风险警示：所有要求先垫资、点赞返佣的兼职均属电信网络诈骗！');
    }
  };

  return (
    <div className="space-y-4 pb-6">
      {/* Top Scenario Title & Counter (matching Image 5-Left) */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-black text-slate-900">
            {step.title}
          </h2>
          <span className="text-[11px] text-slate-400 font-medium">
            第 <span className="text-[#1677FF] font-black">{step.currentScene}</span> / {step.totalScenes} 个场景
          </span>
        </div>
        {/* Blue top progress/accent line */}
        <div className="w-14 h-1 bg-[#1677FF] rounded-full" />
      </div>

      {/* Chat Simulation Conversation Box (Image 5-Left) */}
      <div className="space-y-3.5 pt-1">
        {/* Message 1 */}
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#FA8C16] text-white flex items-center justify-center shrink-0 shadow-2xs">
            <User className="w-4.5 h-4.5" />
          </div>
          <div className="bg-white rounded-2xl rounded-tl-xs px-3.5 py-2.5 border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-800 max-w-[240px] leading-relaxed">
            同学，点个赞就能返现，<br />先做一单试试？
          </div>
        </div>

        {/* Message 2 */}
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#FA8C16] text-white flex items-center justify-center shrink-0 shadow-2xs">
            <User className="w-4.5 h-4.5" />
          </div>
          <div className="space-y-1.5">
            <div className="bg-white rounded-2xl rounded-tl-xs px-3.5 py-2.5 border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-800 max-w-[240px] leading-relaxed">
              完成后马上返你本金和佣金。
            </div>
            <div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FFF7E6] border border-[#FFE7BA] text-[#FA8C16] text-[10px] font-bold">
                <AlertCircle className="w-3 h-3" />
                <span>先返利建立信任</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Question Prompt (Image 5-Left) */}
      <div className="space-y-2.5 pt-2">
        <h3 className="text-xs font-black text-slate-900">
          你会怎么做？
        </h3>

        {/* Options List */}
        <div className="space-y-2.5">
          {step.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setSelectedOptionId(opt.id);
                  setFeedback(null);
                }}
                className={`w-full p-3.5 rounded-2xl border transition-all flex items-center justify-between text-left shadow-2xs ${
                  isSelected
                    ? 'bg-white border-[#1677FF] ring-2 ring-[#1677FF]/20 text-[#1677FF]'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 text-slate-800'
                }`}
              >
                <span className="text-xs font-bold">
                  {opt.text}
                </span>

                {isSelected && (
                  <ShieldCheck className="w-4.5 h-4.5 text-[#1677FF] stroke-[2.5] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Alert if confirmed */}
      {feedback && (
        <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-xs font-bold text-[#1677FF] flex items-center gap-2">
          <ShieldCheck className="w-4.5 h-4.5 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {/* Risk Tip Expanded */}
      {showRiskTip && (
        <div className="p-3.5 rounded-2xl bg-[#FFF7E6] border border-[#FFE7BA] text-xs font-medium text-[#FA8C16] space-y-1">
          <div className="font-bold flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            <span>风险提示：</span>
          </div>
          <p>{step.riskTip}</p>
        </div>
      )}

      {/* Bottom Actions (Image 5-Left) */}
      <div className="space-y-2.5 pt-3">
        <button
          type="button"
          onClick={handleConfirm}
          className="w-full py-3.5 rounded-2xl bg-[#1677FF] text-white font-bold text-xs hover:bg-blue-700 active:scale-[0.99] shadow-md shadow-blue-500/20 transition-all flex items-center justify-center"
        >
          确认选择
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowRiskTip(!showRiskTip)}
            className="text-xs font-bold text-[#1677FF] hover:underline"
          >
            {showRiskTip ? '收起风险提示' : '查看风险提示'}
          </button>
        </div>
      </div>
    </div>
  );
};
