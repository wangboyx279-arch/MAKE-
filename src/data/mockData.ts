import {
  QuizQuestion,
  AntiFraudQuizQuestion,
  ScenarioStep,
  MemoRecord
} from '../types';

export const INITIAL_MEMO_RECORDS: MemoRecord[] = [
  {
    id: 'memo-1',
    date: '2025-05-16',
    time: '14:30',
    tag: '可疑信息',
    content: 'QQ 群：123456，声称点赞返佣'
  }
];

export const ASSESSMENT_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: '金融基础知识',
    categoryTag: '金融基础知识',
    question: '个人日常理财中，应急资金更适合放在哪里？',
    options: [
      { key: 'A', text: '高风险投资账户' },
      { key: 'B', text: '3到6个月必要生活费', isCorrect: true },
      { key: 'C', text: '借来的周转资金' },
      { key: 'D', text: '准备周末消费的钱' }
    ],
    correctKey: 'B',
    explanation: '应急资金核心要求是高流动性与高安全性，一般应准备 3-6 个月的必要生活支出存放在活期或货币基金中。'
  },
  {
    id: 2,
    category: '反诈防骗',
    categoryTag: '反诈防骗',
    question: '收到自称“百万保障到期需扣费”的微信客服电话，正确处理方式是？',
    options: [
      { key: 'A', text: '配合对方开启屏幕共享取消保障' },
      { key: 'B', text: '按照对方要求将钱转到“安全账户”' },
      { key: 'C', text: '直接挂断，微信官方百万保障永久免费', isCorrect: true },
      { key: 'D', text: '点击短信链接输入银行卡密码' }
    ],
    correctKey: 'C',
    explanation: '微信支付“百万保障”完全免费且自动续保，凡是声称需要取消或缴费的均为冒充客服诈骗。'
  }
];

export const ANTIFRAUD_QUIZ_QUESTIONS: AntiFraudQuizQuestion[] = [
  {
    id: 1,
    categoryTag: '校园贷',
    question: '校园贷宣称“学生专属额度、无需抵押秒批”，你应该？',
    options: [
      { key: 'A', text: '立即申请', isCorrect: false },
      { key: 'B', text: '警惕并通过正规渠道咨询', isCorrect: true },
      { key: 'C', text: '先交手续费', isCorrect: false }
    ],
    correctKey: 'B',
    explanation: '正规机构不会要求先交手续费。'
  },
  {
    id: 2,
    categoryTag: '刷单返利',
    question: '网友拉你进群做点赞任务，前两单赚了15元，第三单要求垫付1000元，你应该？',
    options: [
      { key: 'A', text: '垫付1000元获取更多佣金', isCorrect: false },
      { key: 'B', text: '借钱继续刷大单', isCorrect: false },
      { key: 'C', text: '果断拒绝退群并报警', isCorrect: true }
    ],
    correctKey: 'C',
    explanation: '刷单本身属于违法违规行为，前期小额返利只是为了博取信任，大额垫付即刻卷款跑路。'
  }
];

export const SCENARIO_STEPS: ScenarioStep[] = [
  {
    id: 1,
    title: '刷单返利邀请',
    subtitle: '刷单返利邀请',
    currentScene: 1,
    totalScenes: 3,
    messages: [
      {
        sender: 'other',
        avatar: '👤',
        text: '同学，点个赞就能返现，先做一单试试？'
      },
      {
        sender: 'other',
        avatar: '👤',
        text: '完成后马上返你本金和佣金。',
        tag: '❗ 先返利建立信任'
      }
    ],
    prompt: '你会怎么做？',
    options: [
      { id: 1, text: '先做一单看看', isSafe: false },
      { id: 2, text: '拒绝并退出群聊', isSafe: true },
      { id: 3, text: '邀请同学一起参加', isSafe: false }
    ],
    safeOptionId: 2,
    riskTip: '看到这些信号要警惕：所有要求先垫资、点赞返佣的兼职均属电信网络诈骗！'
  }
];
