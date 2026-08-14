import React from 'react';
import {
  Home,
  Shield,
  BookOpen,
  TrendingUp,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { AppTab } from '../types';

interface TabBarProps {
  currentTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

export const TabBar: React.FC<TabBarProps> = ({ currentTab, onTabChange }) => {
  const tabs = [
    {
      id: 'home' as AppTab,
      label: '首页',
      icon: Home
    },
    {
      id: 'antifraud' as AppTab,
      label: '防骗守护',
      icon: ShieldAlert
    },
    {
      id: 'consumption' as AppTab,
      label: '理性消费',
      icon: BookOpen
    },
    {
      id: 'investment' as AppTab,
      label: '投资入门',
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-3 py-1.5 flex items-center justify-around shrink-0 select-none shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-3 transition-colors relative ${
              isActive ? 'text-[#1677FF]' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Icon className={`w-5 h-5 stroke-[2.2] transition-transform ${isActive ? 'scale-105' : ''}`} />
            <span className={`text-[10px] mt-0.5 font-bold ${isActive ? 'text-[#1677FF]' : 'text-slate-500'}`}>
              {tab.label}
            </span>
            {isActive && (
              <span className="w-1 h-1 rounded-full bg-[#1677FF] absolute bottom-0.5" />
            )}
          </button>
        );
      })}
    </div>
  );
};
