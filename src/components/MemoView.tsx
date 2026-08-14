import React, { useState } from 'react';
import {
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { PageId, MemoRecord } from '../types';
import { INITIAL_MEMO_RECORDS } from '../data/mockData';

interface MemoViewProps {
  onNavigate: (page: PageId) => void;
}

export const MemoView: React.FC<MemoViewProps> = ({ onNavigate }) => {
  const [activeTag, setActiveTag] = useState<string>('可疑信息');
  const [inputText, setInputText] = useState<string>('');
  const [records, setRecords] = useState<MemoRecord[]>(INITIAL_MEMO_RECORDS);

  const handleAdd = () => {
    if (!inputText.trim()) return;
    const now = new Date();
    const newRecord: MemoRecord = {
      id: `memo-${Date.now()}`,
      date: '2025-05-16',
      time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
      tag: activeTag,
      content: inputText.trim()
    };
    setRecords([newRecord, ...records]);
    setInputText('');
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-4 pb-6">
      {/* 防骗清单 Checklist Card (matching Image 5-Right) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs space-y-3">
        <h3 className="text-xs font-black text-slate-900">
          防骗清单
        </h3>

        <div className="space-y-2.5">
          {[
            '不点击陌生贷款链接',
            '不参与刷单返利',
            '不透露验证码',
            '不出租银行卡',
            '不相信保本高收益',
            '遇到可疑情况及时求助'
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 添加记录 Form Card (matching Image 5-Right) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs space-y-3">
        <h3 className="text-xs font-black text-slate-900">
          添加记录
        </h3>

        {/* 3 Tag Pills */}
        <div className="flex items-center gap-2">
          {['可疑信息', '沟通记录', '证据记录'].map((tag) => {
            const isSelected = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-[#1677FF] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Text Area */}
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="记录号码、链接、对方话术或转账信息..."
          className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1677FF] resize-none"
        />

        {/* Add Record Button */}
        <button
          type="button"
          onClick={handleAdd}
          className="w-full py-2.5 rounded-xl bg-[#1677FF] text-white font-bold text-xs hover:bg-blue-700 active:scale-[0.99] transition-all flex items-center justify-center"
        >
          添加记录
        </button>
      </div>

      {/* 我的记录 Section (matching Image 5-Right) */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-black text-slate-900">
          我的记录
        </h3>

        <div className="space-y-2">
          {records.map((rec) => (
            <div
              key={rec.id}
              className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {rec.date} {rec.time}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#EBF3FF] text-[#1677FF] text-[10px] font-bold">
                    {rec.tag}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(rec.id)}
                  className="text-xs font-bold text-[#1677FF] hover:underline"
                >
                  删除
                </button>
              </div>

              <p className="text-xs font-bold text-slate-800">
                {rec.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Emergency Button (matching Image 5-Right) */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => alert('国家反诈专线：96110')}
          className="w-full py-3.5 rounded-2xl bg-[#EBF3FF] border border-[#D0E2FF] text-[#1677FF] font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-100 active:scale-[0.99] transition-all shadow-2xs"
        >
          <PhoneCall className="w-4 h-4 stroke-[2.5]" />
          <span>拨打 96110 反诈专线</span>
        </button>
      </div>
    </div>
  );
};
