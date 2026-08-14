import React, { useState } from 'react';
import {
  ChevronLeft,
  Wifi,
  Battery,
  Signal,
  Info,
  X,
  Share2,
  Bookmark
} from 'lucide-react';
import { PageId } from './types';
import { WeChatCapsule } from './components/WeChatCapsule';
import { HomeView } from './components/HomeView';
import { AssessmentView } from './components/AssessmentView';
import { AssessmentResultView } from './components/AssessmentResultView';
import { AntiFraudView } from './components/AntiFraudView';
import { CampusLoanDetailView } from './components/CampusLoanDetailView';
import { CaseDetailView } from './components/CaseDetailView';
import { ConsumptionView } from './components/ConsumptionView';
import { ArticleConsumptionView } from './components/ArticleConsumptionView';
import { InvestmentView } from './components/InvestmentView';
import { ArticleInvestmentView } from './components/ArticleInvestmentView';
import { ScenarioSimView } from './components/ScenarioSimView';
import { AntiFraudQuizView } from './components/AntiFraudQuizView';
import { MemoView } from './components/MemoView';
import { TodayRecommendView } from './components/TodayRecommendView';
import { ArticleCampusLoanView } from './components/ArticleCampusLoanView';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [pageHistory, setPageHistory] = useState<PageId[]>(['home']);
  const [showMenuModal, setShowMenuModal] = useState<boolean>(false);

  const navigateTo = (page: PageId) => {
    setPageHistory((prev) => [...prev, page]);
    setCurrentPage(page);
    // Scroll to top of mini program view
    const scrollContainer = document.getElementById('mini-app-scroll');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  };

  const handleBack = () => {
    if (pageHistory.length > 1) {
      const newHistory = [...pageHistory];
      newHistory.pop();
      const prevPage = newHistory[newHistory.length - 1];
      setPageHistory(newHistory);
      setCurrentPage(prevPage);
    } else {
      setCurrentPage('home');
    }
    const scrollContainer = document.getElementById('mini-app-scroll');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  };

  // Determine Page Title matching exactly with the preview designs
  const getPageTitle = (): string => {
    switch (currentPage) {
      case 'home':
        return '';
      case 'assessment':
        return '金融素养测评';
      case 'assessment_result':
        return '测评结果';
      case 'antifraud':
        return '防骗守护中心';
      case 'campus_loan':
        return '校园贷';
      case 'case_detail':
        return '案例详情';
      case 'consumption':
        return '理性消费课堂';
      case 'article_consumption':
        return '文章详情';
      case 'investment':
        return '投资入门课堂';
      case 'article_investment':
        return '文章详情';
      case 'scenario_sim':
        return '情景模拟';
      case 'antifraud_quiz':
        return '反诈问答';
      case 'memo':
        return '备忘清单';
      case 'today_recommend':
        return '今日推荐';
      case 'article_campus_loan':
        return '文章详情';
      default:
        return '青盾金识';
    }
  };

  const showBackButton = currentPage !== 'home';

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-0 sm:p-4 font-sans text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Mobile Device Frame Simulation matching WeChat Mini-Program */}
      <div className="w-full sm:max-w-[412px] h-screen sm:h-[880px] bg-[#F7F9FC] sm:rounded-[36px] shadow-2xl flex flex-col overflow-hidden border border-slate-200/90 relative">
        
        {/* iOS / Mobile Status Bar (9:41, Signal, Wifi, Battery) */}
        <div className="bg-white/95 px-5 pt-3 pb-1 flex items-center justify-between text-xs font-semibold text-slate-800 shrink-0 select-none z-30">
          <span className="font-bold tracking-tight text-[13px]">9:41</span>
          <div className="flex items-center gap-1.5 text-slate-800">
            <Signal className="w-3.5 h-3.5 fill-current" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4 fill-current" />
          </div>
        </div>

        {/* WeChat Mini-Program Navigation Bar */}
        <div className="bg-white/95 backdrop-blur-md px-3 py-2 flex items-center justify-between border-b border-slate-100 shrink-0 z-30 min-h-[44px]">
          {/* Left Back Button or Empty Placeholder */}
          <div className="w-16 flex items-center">
            {showBackButton ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center text-slate-800 hover:text-[#1677FF] p-1 -ml-1 transition-colors active:scale-95"
                aria-label="返回上一页"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>
            ) : null}
          </div>

          {/* Center Page Title */}
          <div className="flex-1 text-center font-black text-slate-900 text-[15px] truncate px-1">
            {getPageTitle()}
          </div>

          {/* Right WeChat Official Capsule Controls */}
          <div className="w-16 flex justify-end">
            <WeChatCapsule
              onMenuClick={() => setShowMenuModal(true)}
              onCloseClick={() => {
                setPageHistory(['home']);
                setCurrentPage('home');
              }}
            />
          </div>
        </div>

        {/* Scrollable Page Body Content */}
        <div
          id="mini-app-scroll"
          className="flex-1 overflow-y-auto px-4 pt-3 pb-6 bg-[#F7F9FC] no-scrollbar relative"
        >
          {/* Subtle Aesthetic Background Glows */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-48 h-48 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

          {/* Page Routing Views */}
          {currentPage === 'home' && <HomeView onNavigate={navigateTo} />}
          {currentPage === 'assessment' && <AssessmentView onNavigate={navigateTo} />}
          {currentPage === 'assessment_result' && <AssessmentResultView onNavigate={navigateTo} />}
          {currentPage === 'antifraud' && <AntiFraudView onNavigate={navigateTo} />}
          {currentPage === 'campus_loan' && <CampusLoanDetailView onNavigate={navigateTo} />}
          {currentPage === 'case_detail' && <CaseDetailView onNavigate={navigateTo} />}
          {currentPage === 'consumption' && <ConsumptionView onNavigate={navigateTo} />}
          {currentPage === 'article_consumption' && <ArticleConsumptionView onNavigate={navigateTo} />}
          {currentPage === 'investment' && <InvestmentView onNavigate={navigateTo} />}
          {currentPage === 'article_investment' && <ArticleInvestmentView onNavigate={navigateTo} />}
          {currentPage === 'scenario_sim' && <ScenarioSimView onNavigate={navigateTo} />}
          {currentPage === 'antifraud_quiz' && <AntiFraudQuizView onNavigate={navigateTo} />}
          {currentPage === 'memo' && <MemoView onNavigate={navigateTo} />}
          {currentPage === 'today_recommend' && <TodayRecommendView onNavigate={navigateTo} />}
          {currentPage === 'article_campus_loan' && <ArticleCampusLoanView onNavigate={navigateTo} />}
        </div>

        {/* WeChat Capsule Menu Modal */}
        {showMenuModal && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-50 flex flex-col justify-end p-3 animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl p-4 space-y-3 shadow-2xl">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#1677FF] text-white flex items-center justify-center text-xs font-black">
                    青盾
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">青盾金识</h4>
                    <p className="text-[10px] text-slate-400">微信小程序 v1.0.0</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowMenuModal(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center py-2">
                <button
                  type="button"
                  onClick={() => {
                    alert('已生成分享卡片');
                    setShowMenuModal(false);
                  }}
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#1677FF] flex flex-col items-center gap-1.5 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  <span className="text-[11px] font-bold">转发给朋友</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    alert('已添加到我的小程序');
                    setShowMenuModal(false);
                  }}
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#1677FF] flex flex-col items-center gap-1.5 transition-colors"
                >
                  <Bookmark className="w-5 h-5" />
                  <span className="text-[11px] font-bold">添加到桌面</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    alert('青盾金识：青年金融素养提升与风险防范课堂');
                    setShowMenuModal(false);
                  }}
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#1677FF] flex flex-col items-center gap-1.5 transition-colors"
                >
                  <Info className="w-5 h-5" />
                  <span className="text-[11px] font-bold">关于小程序</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
