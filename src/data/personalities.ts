export const personalities: Record<string, {
  title: string;
  traits: string[];
  summary: string;
}> = {
  "ISTJ": {
    title: "責任感が強い実務家",
    traits: [
      "忠実で信頼できる",
      "規律やルールを重視",
      "現実的で実践的",
      "計画性がある",
      "静かで慎重",
      "詳細に注意を払う",
      "一貫性がある"
    ],
    summary: "ISTJは、伝統と責任を大切にする堅実な実務家です。計画的に優れており、物事をうまく進める能力を持っています。"
  },
  "ISFJ": {
    title: "献身的な守護者",
    traits: [
      "思いやりがあり親切",
      "他人をサポートするのが得意",
      "実践的で組織的",
      "過去の経験を重視",
      "静かで協力的",
      "調和を大切にする",
      "自己犠牲的な一面がある"
    ],
    summary: "ISFJは、他人の幸福を優先する献身的な性格で、裏方で役割を自然にこなします。現実的で細やかな気配りが得意です。"
  },
  "INFJ": {
    title: "洞察力のある理想主義者",
    traits: [
      "共感力が高い",
      "ビジョンを持ち目的志向",
      "静かで慎重だが情熱的",
      "深い洞察力を持つ",
      "他人の成長を助けたい",
      "創造的で未来志向",
      "自分の価値観に忠実"
    ],
    summary: "INFJは、深い共感力と洞察力を持ち、人々の可能性を引き出す理想主義者です。個人的な価値観やビジョンを軸に行動します。"
  },
  "INTJ": {
    title: "戦略的な独立志向者",
    traits: [
      "分析力が高い",
      "長期的な視点で戦略を立てる",
      "独立心が強い",
      "知識を重視する",
      "効率的で目標志向",
      "批判的思考が得意",
      "革新を追求する"
    ],
    summary: "INTJは、明確なビジョンと戦略的思考を持つ独立型のプランナーです。効率性と成果を重視します。"
  },
  "ISTP": {
    title: "柔軟な冒険家",
    traits: [
      "実践的で機械的な能力が高い",
      "現実的で即時対応できる",
      "独立心が強い",
      "問題解決が得意",
      "リスクを恐れない",
      "静かだが観察力が鋭い",
      "柔軟性がある"
    ],
    summary: "ISTPは、実践的なスキルと柔軟性を持つ冒険家で、瞬時の判断と解決に強みがあります。自由を愛するタイプです。"
  },
  "ISFP": {
    title: "感受性豊かな芸術家",
    traits: [
      "芸術的な感性が豊か",
      "静かで内向的だが情熱的",
      "調和を好む",
      "現実的で自由を重視",
      "他者の感情に敏感",
      "柔軟性がある",
      "独自の価値観を持つ"
    ],
    summary: "ISFPは、芸術的な表現と調和を大切にする自由な心を持っています。内面的な情熱に基づいて行動します。"
  },
  "INFP": {
    title: "理想を追求する仲介者",
    traits: [
      "理想主義で自己表現を重視",
      "他人を理解し共感力が高い",
      "内向的だが情熱的",
      "深く考えるのが好き",
      "創造的で革新的",
      "価値観に忠実",
      "他者の成長を喜ぶ"
    ],
    summary: "INFPは、理想や価値観に基づいて行動する共感力豊かな理想主義者です。深い内省と創造力が特徴です。"
  },
  "INTP": {
    title: "知識を探求する論理学者",
    traits: [
      "知識欲が旺盛",
      "独自の理論を構築する",
      "論理的思考が得意",
      "内向的だが独創的",
      "抽象的な思考を得意とする",
      "アイデアを重視する",
      "好奇心が強い"
    ],
    summary: "INTPは、知識やアイデアを追求する論理的な探求者です。抽象的な問題の解決に情熱を注ぎます。"
  },
  "ESTP": {
    title: "行動力のある冒険者",
    traits: [
      "エネルギッシュ",
      "社交的で活発",
      "問題解決を楽しむ",
      "リスクを恐れない",
      "実践的で適応力が高い",
      "現実主義者",
      "行動的"
    ],
    summary: "ESTPは、行動力と柔軟性を持つ冒険者で、変化を恐れず挑戦します。現実的な問題解決が得意です。"
  },
  "ESFP": {
    title: "エネルギッシュなエンターテイナー",
    traits: [
      "明るく社交的",
      "楽しいことを追求する",
      "感情に敏感で共感力が高い",
      "柔軟で順応性がある",
      "楽観的",
      "周囲を楽しませるのが得意",
      "自由な行動を好む"
    ],
    summary: "ESFPは、周囲を明るくするエネルギッシュな存在で、人との交流を社交的に楽しむタイプです。"
  },
  "ENFP": {
    title: "好奇心旺盛なキャンペーナー",
    traits: [
      "創造的でアイデア豊富",
      "好奇心が強い",
      "他者に影響を与えるのが得意",
      "感情に敏感で共感力が高い",
      "自由を愛する",
      "未来志向で革新的",
      "熱意がある"
    ],
    summary: "ENFPは、自由な発想と人間関係の構築に長けた創造的なタイプです。熱意をもって周囲を鼓舞します。"
  },
  "ENTP": {
    title: "知的な挑戦者",
    traits: [
      "独創的なアイデアが豊富",
      "論理的で好奇心旺盛",
      "優れた発想力を持つ",
      "議論を楽しむ",
      "挑戦することを好む",
      "柔軟で適応力が高い",
      "リスクを恐れない"
    ],
    summary: "ENTPは、新しいアイデアを追求し、挑戦を楽しむ知的な冒険者です。"
  },
  "ESTJ": {
    title: "責任感のある指導者",
    traits: [
      "組織的で秩序を重視する",
      "リーダーシップを発揮する",
      "実践的",
      "効率性を追求する",
      "ルールを重視する",
      "社交的で直接的",
      "結果志向"
    ],
    summary: "ESTJは、責任感とリーダーシップを持つ実務的なリーダーで、効率的な運営に長けています。"
  },
  "ESFJ": {
    title: "社交的な世話役",
    traits: [
      "社交的で親切",
      "他人を助けるのが好き",
      "調和を重視する",
      "現実的で組織的",
      "思いやりがある",
      "協力的",
      "伝統を重んじる"
    ],
    summary: "ESFJは、周囲の人々の世話を焼くことを好む世話役で、調和と安定を求めます。"
  },
  "ENFJ": {
    title: "カリスマ的な指導者",
    traits: [
      "他人に影響を与える力が強い",
      "共感力が高い",
      "目的志向で組織をリードする",
      "人間関係を重視する",
      "他者の成長を喜ぶ",
      "情熱的で献身的",
      "カリスマ性がある"
    ],
    summary: "ENFJは、人々を鼓舞し、協力を引き出すカリスマ的なリーダーです。他者への共感とサポートに重きを置きます。"
  },
  "ENTJ": {
    title: "戦略的な指揮官",
    traits: [
      "強いリーダーシップを発揮する",
      "長期的な目標設定が得意",
      "効率性を追求する",
      "論理的で戦略的",
      "決断力がある",
      "チャレンジ精神旺盛",
      "自信を持って行動する"
    ],
    summary: "ENTJは、計画を立てて目標を達成する戦略家です。明確なビジョンと決断力で組織を導きます。"
  }
};