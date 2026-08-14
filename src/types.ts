export type AppTab = 'home' | 'antifraud' | 'consumption' | 'investment';

export type PageId =
  | 'home'
  | 'assessment'
  | 'assessment_result'
  | 'antifraud'
  | 'campus_loan'
  | 'case_detail'
  | 'consumption'
  | 'article_consumption'
  | 'investment'
  | 'article_investment'
  | 'scenario_sim'
  | 'antifraud_quiz'
  | 'memo'
  | 'today_recommend'
  | 'article_campus_loan';

export interface QuizOption {
  key: string;
  text: string;
  isCorrect?: boolean;
}

export interface QuizQuestion {
  id: number;
  category: string;
  categoryTag: string;
  question: string;
  options: QuizOption[];
  correctKey: string;
  explanation: string;
}

export interface AntiFraudQuizOption {
  key: string;
  text: string;
  isCorrect: boolean;
}

export interface AntiFraudQuizQuestion {
  id: number;
  categoryTag: string;
  question: string;
  options: AntiFraudQuizOption[];
  correctKey: string;
  explanation: string;
}

export interface ScenarioMessage {
  sender: 'other' | 'user';
  avatar: string;
  text: string;
  tag?: string;
}

export interface ScenarioOption {
  id: number;
  text: string;
  isSafe: boolean;
}

export interface ScenarioStep {
  id: number;
  title: string;
  subtitle: string;
  currentScene: number;
  totalScenes: number;
  messages: ScenarioMessage[];
  prompt: string;
  options: ScenarioOption[];
  safeOptionId: number;
  riskTip: string;
}

export interface MemoRecord {
  id: string;
  date: string;
  time: string;
  tag: string;
  content: string;
}
