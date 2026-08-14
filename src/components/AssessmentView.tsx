import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { ASSESSMENT_QUESTIONS } from '../data/mockData';

interface AssessmentViewProps {
  onNavigate: (page: PageId) => void;
}

export const AssessmentView: React.FC<AssessmentViewProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedKey, setSelectedKey] = useState<string>('B');

  const currentQ = ASSESSMENT_QUESTIONS[currentIndex] || ASSESSMENT_QUESTIONS[0];
  const totalQuestions = 20;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleNext = () => {
    if (currentIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedKey('');
    } else {
      onNavigate('assessment_result');
    }
  };

  return (
    <div className="space-y-4 pb-6 flex flex-col min-h-full justify-between">
      <div className="space-y-4">
        {/* Top Progress Indicator (Image 1-Middle) */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800">
            <div>
              第 <span className="text-[#1677FF] font-black text-sm">{currentIndex + 1}</span> / {totalQuestions} 题
            </div>
            <div className="text-slate-500 font-medium">
              {progressPercent}%
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-slate-200/80 overflow-hidden">
            <div
              className="h-full bg-[#1677FF] rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Category Tag & Question (Image 1-Middle) */}
        <div className="space-y-2.5 pt-1">
          <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[11px] font-bold">
            {currentQ.categoryTag}
          </span>

          <h2 className="text-[17px] font-black text-slate-900 leading-snug tracking-tight">
            {currentQ.question}
          </h2>
        </div>

        {/* Options List (Image 1-Middle) */}
        <div className="space-y-3 pt-1">
          {currentQ.options.map((opt) => {
            const isSelected = selectedKey === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setSelectedKey(opt.key)}
                className={`w-full p-4 rounded-2xl border text-left transition-all active:scale-[0.99] flex items-center gap-3.5 ${
                  isSelected
                    ? 'bg-white border-[#1677FF] ring-2 ring-[#1677FF]/20 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                    isSelected
                      ? 'bg-blue-50 text-[#1677FF] border border-[#1677FF]'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {opt.key}
                </div>
                <span className={`text-[13px] font-bold ${isSelected ? 'text-[#1677FF]' : 'text-slate-800'}`}>
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Section: Single "下一题" Button + Disclaimer */}
      <div className="space-y-4 pt-4">
        <button
          type="button"
          onClick={handleNext}
          className="w-full py-3.5 rounded-2xl bg-[#1677FF] text-white font-bold text-sm hover:bg-blue-700 active:scale-[0.99] shadow-md shadow-blue-500/25 transition-all flex items-center justify-center"
        >
          {currentIndex === totalQuestions - 1 ? '提交测评' : '下一题'}
        </button>

        <div className="text-center">
          <p className="text-[10.5px] text-slate-400 flex items-center justify-center gap-1 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            理性认知金融，远离非法金融活动
          </p>
        </div>
      </div>
    </div>
  );
};
