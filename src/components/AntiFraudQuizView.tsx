import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import { ANTIFRAUD_QUIZ_QUESTIONS } from '../data/mockData';

interface AntiFraudQuizViewProps {
  onNavigate: (page: PageId) => void;
}

export const AntiFraudQuizView: React.FC<AntiFraudQuizViewProps> = ({ onNavigate }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedKey, setSelectedKey] = useState<string>('B'); // Default to B matching Image 5-Middle
  const [score, setScore] = useState<number>(0);

  const q = ANTIFRAUD_QUIZ_QUESTIONS[currentIdx] || ANTIFRAUD_QUIZ_QUESTIONS[0];

  const handleNext = () => {
    if (currentIdx + 1 < ANTIFRAUD_QUIZ_QUESTIONS.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedKey('');
    } else {
      onNavigate('antifraud');
    }
  };

  return (
    <div className="space-y-4 pb-6">
      {/* Top Question Counter & Score (matching Image 5-Middle) */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between text-xs font-bold text-slate-800">
          <div>
            <span>第 </span>
            <span className="text-[#1677FF] font-black">{currentIdx + 1}</span>
            <span className="text-slate-400"> / 10 题</span>
          </div>
          <div className="text-xs text-slate-400 font-medium">得分 {score}</div>
        </div>

        {/* Thin progress bar */}
        <div className="w-full h-1 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full bg-[#1677FF] rounded-full w-[10%]" />
        </div>
      </div>

      {/* Category Tag */}
      <div>
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EBF3FF] text-[#1677FF] text-[11px] font-bold">
          {q.categoryTag}
        </span>
      </div>

      {/* Question Text */}
      <h2 className="text-[15px] font-black text-slate-900 leading-snug tracking-tight">
        {q.question}
      </h2>

      {/* Options List */}
      <div className="space-y-2.5 pt-1">
        {q.options.map((opt) => {
          const isSelected = selectedKey === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => setSelectedKey(opt.key)}
              className={`w-full p-3.5 rounded-2xl border transition-all flex items-center justify-between text-left shadow-2xs ${
                isSelected
                  ? 'bg-white border-[#1677FF] ring-2 ring-[#1677FF]/20'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`font-black text-xs ${
                    isSelected ? 'text-[#1677FF]' : 'text-slate-500'
                  }`}
                >
                  {opt.key}
                </span>
                <span
                  className={`text-xs font-bold ${
                    isSelected ? 'text-[#1677FF]' : 'text-slate-800'
                  }`}
                >
                  {opt.text}
                </span>
              </div>

              {isSelected && (
                <ShieldCheck className="w-4.5 h-4.5 text-[#1677FF] stroke-[2.5] shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Result Card: 判断正确 (matching Image 5-Middle) */}
      <div className="bg-[#EBF3FF] border border-[#D0E2FF] rounded-2xl p-4 space-y-1.5 shadow-2xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4.5 h-4.5 text-[#1677FF] stroke-[2.5] shrink-0" />
          <h4 className="text-xs font-black text-[#1677FF]">
            判断正确
          </h4>
        </div>
        <p className="text-xs text-slate-700 font-medium pl-6.5 leading-relaxed">
          {q.explanation}
        </p>
      </div>

      {/* Next Question Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleNext}
          className="w-full py-3.5 rounded-2xl bg-[#1677FF] text-white font-bold text-xs hover:bg-blue-700 active:scale-[0.99] shadow-md shadow-blue-500/20 transition-all flex items-center justify-center"
        >
          下一题
        </button>
      </div>

      {/* Bottom Disclaimer */}
      <div className="pt-4 text-center">
        <p className="text-[10.5px] text-slate-400 flex items-center justify-center gap-1 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          理性认知金融，远离非法金融活动
        </p>
      </div>
    </div>
  );
};
