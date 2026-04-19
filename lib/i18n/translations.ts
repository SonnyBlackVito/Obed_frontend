export type Locale = "EN" | "KO";

export const translations = {
  EN: {
    // ── Header nav ──
    nav: {
      staySystem: "Stay System",
      useCases: "Use Cases",
      tokenomics: "Tokenomics",
      howItWorks: "How It Works",
      whitepaper: "Whitepaper",
      qa: "Q&A",
    },

    // ── Hero ──
    hero: {
      badge: "Payment Utility Token · Real World",
      title1: "OBED Coin Value,",
      title2: "Always Protected",
      subtitle: "Stability Meets Utility. The Future of Smart Consumption.",
      cta1: "Explore Stay System",
      cta2: "See Use Cases",
    },

    // ── Stats ──
    stats: [
      { value: "250+", label: "Partner Dermatology Clinics" },
      { value: "140,000+", label: "Products on Partner Mall" },
      { value: "50%", label: "Discount on Coin Payment" },
      { value: "50%", label: "Reserve Fund of Total Supply" },
    ],

    // ── Video ──
    video: {
      title: "OBED Coin Official Video",
      playLabel: "Play OBED Coin official video",
    },

    // ── Stay System ──
    staySystem: {
      sectionLabel: "Core Mechanism",
      heading: "OBED Stay — Minimum Value Guarantee",
      description:
        "Even when the market price drops, the ",
      descHighlight: "Stay Price (minimum exchange value)",
      descEnd:
        " protects your coin\u2019s value at checkout. Market price applies when higher, Stay Price when lower — always in the consumer\u2019s favor.",
      stayLogic: "Stay Logic",
      caseA: {
        label: "CASE A — NORMAL MARKET · MARKET PRICE ≥ STAY PRICE",
        badge: "Market Price Applied",
        detail: "Market price ",
        detailValue: "1,200 KRW",
        detailEnd: " → Applied as-is",
      },
      caseB: {
        label: "CASE B — STAY ACTIVATED · MARKET PRICE < STAY PRICE",
        badge: "Stay Price Applied (Consumer Protected)",
        detail: "Even at ",
        detailValue1: "700 KRW",
        detailMid: " → Stay Price ",
        detailValue2: "1,000 KRW",
        detailEnd: " applied",
      },
      notice:
        "💡 Stay Price is reviewed monthly and announced ",
      noticeHighlight: "48 hours in advance",
      noticeEnd: " via official channels.",
      features: [
        {
          title: "Minimum Guarantee",
          desc: "Coins are never used below the announced Stay Price.",
        },
        {
          title: "Market Independence",
          desc: "Stay Price holds regardless of external exchange fluctuations.",
        },
        {
          title: "Two-Way Benefit",
          desc: "Market price applies when higher — always favoring the consumer.",
        },
        {
          title: "Transparent Disclosure",
          desc: "All changes are announced in advance via official channels.",
        },
      ],
    },

    // ── Use Cases ──
    useCases: {
      sectionLabel: "USE CASES",
      heading: "Use OBED Coin Anywhere",
      description:
        "From online shopping to offline clinic visits — OBED Coin is part of your daily life.",
      cards: [
        {
          title: "E-Commerce Shopping Mall",
          description:
            "Shop across 140,000+ products with OBED Coin. Stay Price applies automatically, plus up to 50% discount.",
          chips: ["140K+ Products", "Up to 50% Off", "Real-time Pay"],
        },
        {
          title: "250+ Partner Dermatology Clinics",
          description:
            "Pay for laser treatments, Botox, fillers and skin care at 250+ clinics nationwide with real-time POS integration.",
          chips: ["Laser Up to 50%", "Botox 25%+", "QR Payment"],
        },
      ],
    },

    // ── Tokenomics ──
    tokenomics: {
      sectionLabel: "TOKENOMICS",
      heading: "Sustainable Token Economy",
      description:
        "OBED Coin is built on a stable token economy centered around the Reserve Fund.",
      reservePercent: "5%",
      reserveTitle: "Reserve Fund",
      reserveDesc:
        "5% of total supply is managed as a reserve fund for Stay Price maintenance and price stabilization.",
      reviewLabel: "Monthly",
      reviewTitle: "Stay Price Review",
      reviewDesc:
        "The committee reviews and publishes the Stay Price monthly based on market data.",
      exchangeLabel: "글로벌 거래소",
      exchangeTitle: "Exchange Listed",
      exchangeDesc:
        "Listed on a global cryptocurrency exchange — accessible to crypto users worldwide.",
      weightingTitle: "STAY PRICE WEIGHTING",
      weightingItems: [
        "OBED Market Avg (30-day) 40%",
        "Platform Price Index 35%",
        "Reserve Fund Balance 25%",
      ],
      fundTitle: "FUND MANAGEMENT",
      fundItems: [
        "Multi-sig wallet management",
        "Monthly public disclosure",
        "Continuously replenished via platform fees",
      ],
    },

    // ── How It Works ──
    howItWorks: {
      sectionLabel: "HOW IT WORKS",
      heading: "Simple Steps to Start",
      steps: [
        {
          n: "STEP 1",
          title: "Buy OBED Coin",
          desc: "Purchase OBED Coin on a global cryptocurrency exchange.",
        },
        {
          n: "STEP 2",
          title: "Connect Your Wallet",
          desc: "Link your wallet to the official OBED app.",
        },
        {
          n: "STEP 3",
          title: "Choose OBED Pay",
          desc: "Select OBED Coin payment in-store or online.",
        },
        {
          n: "STEP 4",
          title: "Stay Auto-Applied",
          desc: "The system automatically applies the best Stay Price for you.",
        },
      ],
    },

    // ── Token Supply ──
    tokenSupply: {
      sectionLabel: "TOKENOMICS",
      heading: "Big title",
      description: "bodytext",
      totalSupply: "TOTAL SUPPLY",
      totalValue: "1.0 Billion",
      slices: [
        {
          label: "25% Title",
          description: "Coins are never used below the announced Stay Price.",
        },
        {
          label: "40% Title",
          description: "Coins are never used below the announced Stay Price.",
        },
        {
          label: "35% Title",
          description: "Coins are never used below the announced Stay Price.",
        },
      ],
    },

    // ── Whitepaper ──
    whitepaper: {
      sectionLabel: "WHITEPAPER",
      heading: "Official OBED Coin Whitepaper",
      description:
        "Download the official whitepaper covering our business model, Stay system, tokenomics, and roadmap.",
      download: "Download",
      papers: [
        {
          lang: "English · 영어",
          title: "OBED Whitepaper",
          meta: "OBED_whitepaper_en_0318.pdf",
          href: "/OBED_whitepaper_en_0318.pdf",
        },
        {
          lang: "English · 영어",
          title: "Legal Opinion Letter",
          meta: "Legal_Opinion_Letter_obed.pdf",
          href: "/Legal_Opinion_Letter_obed.pdf",
        },
      ],
    },

    // ── FAQ ──
    faq: {
      sectionLabel: "Q&A",
      heading: "Frequently Asked Questions",
      description:
        "Have questions about OBED Coin? Check our frequently asked questions below.",
      items: [
        {
          q: "Where can I buy OBED Coin?",
          a: "OBED Coin is listed on a global cryptocurrency exchange. You can buy it with USDT or KRW through your verified exchange account.",
        },
        {
          q: "What is Stay Price?",
          a: "Stay Price is the minimum exchange value of OBED Coin. Even if the market price drops below it, Stay Price applies at checkout — protecting the value the coin holders rely on. It is announced monthly by the committee.",
        },
        {
          q: "Where can I pay with OBED Coin?",
          a: "You can currently pay at 250+ partner dermatology clinics and the OBED official e-commerce mall with 140,000+ products. More partners are being added continuously.",
        },
        {
          q: "How is the Reserve Fund managed?",
          a: "5% of total supply is managed as the Reserve Fund. It is secured via multi-sig wallet and discussed monthly through official channels. It is used to maintain the Stay Price and price stability.",
        },
        {
          q: "How can I ask more questions?",
          a: "For further inquiries, feel free to join our official Telegram channel below. Our team will respond promptly.",
        },
      ],
      ctaTitle: "More questions? Join our Telegram!",
      ctaDescription:
        "Get the latest news and real-time Q&A on the official OBED Coin Telegram channel.",
      ctaButton: "Official Telegram",
    },

    // ── Final CTA ──
    finalCta: {
      heading1: "Start with OBED Coin",
      heading2: "Today",
      description:
        "Your coin\u2019s value is always protected by OBED Stay.",
      cta1: "Learn About Stay System",
      cta2: "Download Whitepaper",
      telegram: "Official Telegram",
      x: "Official X",
    },

    // ── Footer ──
    footer: {
      company: "Company",
      companyValue: "주식회사 오벳",
      ceo: "CEO",
      ceoValue: "유경수 (RYU KYUNG SOO)",
      regNo: "Reg. No.",
      regNoValue: "899-81-03634",
      address: "Address",
      addressValue: "경기도 포천시 화현면 금강로 3749, 1층",
      businessType: "Business Type",
      businessTypeValue: "Wholesale, Retail & Services",
      copyright: "© 2026 주식회사 오벳 · OBED . All rights reserved.",
    },
  },

  KO: {
    // ── Header nav ──
    nav: {
      staySystem: "스테이 시스템",
      useCases: "활용 사례",
      tokenomics: "토크노믹스",
      howItWorks: "이용 방법",
      whitepaper: "백서",
      qa: "Q&A",
    },

    // ── Hero ──
    hero: {
      badge: "결제 유틸리티 토큰 · 리얼 월드",
      title1: "OBED 코인의 가치,",
      title2: "항상 보호됩니다",
      subtitle: "안정성과 유틸리티의 만남. 스마트 소비의 미래.",
      cta1: "스테이 시스템 보기",
      cta2: "활용 사례 보기",
    },

    // ── Stats ──
    stats: [
      { value: "250+", label: "파트너 피부과 클리닉" },
      { value: "140,000+", label: "파트너 쇼핑몰 상품" },
      { value: "50%", label: "코인 결제 할인" },
      { value: "50%", label: "총 공급량 준비금" },
    ],

    // ── Video ──
    video: {
      title: "OBED 코인 공식 영상",
      playLabel: "OBED 코인 공식 영상 재생",
    },

    // ── Stay System ──
    staySystem: {
      sectionLabel: "핵심 메커니즘",
      heading: "OBED 스테이 — 최소 가치 보장",
      description:
        "시장 가격이 하락하더라도, ",
      descHighlight: "스테이 가격 (최소 교환 가치)",
      descEnd:
        "이 결제 시 코인의 가치를 보호합니다. 시장 가격이 높을 때는 시장 가격이, 낮을 때는 스테이 가격이 적용됩니다 — 항상 소비자에게 유리하게.",
      stayLogic: "스테이 로직",
      caseA: {
        label: "CASE A — 정상 시장 · 시장가 ≥ 스테이 가격",
        badge: "시장 가격 적용",
        detail: "시장 가격 ",
        detailValue: "1,200 KRW",
        detailEnd: " → 그대로 적용",
      },
      caseB: {
        label: "CASE B — 스테이 발동 · 시장가 < 스테이 가격",
        badge: "스테이 가격 적용 (소비자 보호)",
        detail: "",
        detailValue1: "700 KRW",
        detailMid: "이더라도 → 스테이 가격 ",
        detailValue2: "1,000 KRW",
        detailEnd: " 적용",
      },
      notice:
        "💡 스테이 가격은 매월 검토되며, ",
      noticeHighlight: "48시간 전",
      noticeEnd: "에 공식 채널을 통해 공지됩니다.",
      features: [
        {
          title: "최소 보장",
          desc: "코인은 공시된 스테이 가격 이하로 사용되지 않습니다.",
        },
        {
          title: "시장 독립성",
          desc: "외부 거래소 변동과 관계없이 스테이 가격이 유지됩니다.",
        },
        {
          title: "양방향 혜택",
          desc: "시장 가격이 높을 때는 시장 가격이 적용 — 항상 소비자에게 유리합니다.",
        },
        {
          title: "투명한 공개",
          desc: "모든 변경 사항은 공식 채널을 통해 사전에 공지됩니다.",
        },
      ],
    },

    // ── Use Cases ──
    useCases: {
      sectionLabel: "활용 사례",
      heading: "어디서든 OBED 코인 사용",
      description:
        "온라인 쇼핑부터 오프라인 클리닉 방문까지 — OBED 코인은 일상의 일부입니다.",
      cards: [
        {
          title: "전자상거래 쇼핑몰",
          description:
            "OBED 코인으로 140,000개 이상의 상품을 쇼핑하세요. 스테이 가격이 자동 적용되며 최대 50% 할인됩니다.",
          chips: ["140K+ 상품", "최대 50% 할인", "실시간 결제"],
        },
        {
          title: "250+ 파트너 피부과 클리닉",
          description:
            "전국 250개 이상의 클리닉에서 레이저, 보톡스, 필러 및 피부 관리 비용을 실시간 POS로 결제하세요.",
          chips: ["레이저 최대 50%", "보톡스 25%+", "QR 결제"],
        },
      ],
    },

    // ── Tokenomics ──
    tokenomics: {
      sectionLabel: "토크노믹스",
      heading: "지속 가능한 토큰 경제",
      description:
        "OBED 코인은 준비금을 중심으로 한 안정적인 토큰 경제 위에 구축되었습니다.",
      reservePercent: "5%",
      reserveTitle: "준비금",
      reserveDesc:
        "총 공급량의 5%가 스테이 가격 유지 및 가격 안정화를 위한 준비금으로 관리됩니다.",
      reviewLabel: "매월",
      reviewTitle: "스테이 가격 검토",
      reviewDesc:
        "위원회가 시장 데이터를 기반으로 매월 스테이 가격을 검토하고 발표합니다.",
      exchangeLabel: "글로벌 거래소",
      exchangeTitle: "거래소 상장",
      exchangeDesc:
        "글로벌 암호화폐 거래소에 상장 — 전 세계 암호화폐 사용자가 접근 가능합니다.",
      weightingTitle: "스테이 가격 가중치",
      weightingItems: [
        "OBED 시장 평균 (30일) 40%",
        "플랫폼 가격 지수 35%",
        "준비금 잔액 25%",
      ],
      fundTitle: "자금 관리",
      fundItems: [
        "멀티시그 지갑 관리",
        "월간 공개 보고",
        "플랫폼 수수료를 통한 지속 보충",
      ],
    },

    // ── How It Works ──
    howItWorks: {
      sectionLabel: "이용 방법",
      heading: "간단한 시작 단계",
      steps: [
        {
          n: "STEP 1",
          title: "OBED 코인 구매",
          desc: "글로벌 암호화폐 거래소에서 OBED 코인을 구매하세요.",
        },
        {
          n: "STEP 2",
          title: "지갑 연결",
          desc: "공식 OBED 앱에 지갑을 연결하세요.",
        },
        {
          n: "STEP 3",
          title: "OBED Pay 선택",
          desc: "매장 또는 온라인에서 OBED 코인 결제를 선택하세요.",
        },
        {
          n: "STEP 4",
          title: "스테이 자동 적용",
          desc: "시스템이 자동으로 최적의 스테이 가격을 적용합니다.",
        },
      ],
    },

    // ── Token Supply ──
    tokenSupply: {
      sectionLabel: "토크노믹스",
      heading: "큰 제목",
      description: "본문 텍스트",
      totalSupply: "총 공급량",
      totalValue: "10억",
      slices: [
        {
          label: "25% 제목",
          description: "코인은 공시된 스테이 가격 이하로 사용되지 않습니다.",
        },
        {
          label: "40% 제목",
          description: "코인은 공시된 스테이 가격 이하로 사용되지 않습니다.",
        },
        {
          label: "35% 제목",
          description: "코인은 공시된 스테이 가격 이하로 사용되지 않습니다.",
        },
      ],
    },

    // ── Whitepaper ──
    whitepaper: {
      sectionLabel: "백서",
      heading: "OBED 코인 공식 백서",
      description:
        "비즈니스 모델, 스테이 시스템, 토크노믹스, 로드맵을 다루는 공식 백서를 다운로드하세요.",
      download: "다운로드",
      papers: [
        {
          lang: "English · 영어",
          title: "OBED 백서",
          meta: "OBED_whitepaper_en_0318.pdf",
          href: "/OBED_whitepaper_en_0318.pdf",
        },
        {
          lang: "English · 영어",
          title: "법률 의견서",
          meta: "Legal_Opinion_Letter_obed.pdf",
          href: "/Legal_Opinion_Letter_obed.pdf",
        },
      ],
    },

    // ── FAQ ──
    faq: {
      sectionLabel: "Q&A",
      heading: "자주 묻는 질문",
      description:
        "OBED 코인에 대해 궁금한 점이 있으신가요? 아래 자주 묻는 질문을 확인해 보세요.",
      items: [
        {
          q: "OBED 코인은 어디서 살 수 있나요?",
          a: "OBED 코인은 글로벌 암호화폐 거래소에 상장되어 있습니다. 인증된 거래소 계정을 통해 USDT 또는 KRW로 구매할 수 있습니다.",
        },
        {
          q: "스테이 가격이란 무엇인가요?",
          a: "스테이 가격은 OBED 코인의 최소 교환 가치입니다. 시장 가격이 그 아래로 떨어지더라도 결제 시 스테이 가격이 적용되어 코인 보유자가 의존하는 가치를 보호합니다. 위원회에 의해 매월 발표됩니다.",
        },
        {
          q: "OBED 코인으로 어디서 결제할 수 있나요?",
          a: "현재 250개 이상의 파트너 피부과 클리닉과 140,000개 이상의 상품이 있는 OBED 공식 전자상거래 몰에서 결제할 수 있습니다. 더 많은 파트너가 지속적으로 추가되고 있습니다.",
        },
        {
          q: "준비금은 어떻게 관리되나요?",
          a: "총 공급량의 5%가 준비금으로 관리됩니다. 멀티시그 지갑으로 보안되며 공식 채널을 통해 매월 논의됩니다. 스테이 가격 유지 및 가격 안정성에 사용됩니다.",
        },
        {
          q: "더 많은 질문은 어떻게 하나요?",
          a: "추가 문의사항은 아래 공식 텔레그램 채널에 참여해 주세요. 저희 팀이 신속하게 답변드리겠습니다.",
        },
      ],
      ctaTitle: "더 궁금한 점이 있으신가요? 텔레그램에 참여하세요!",
      ctaDescription:
        "공식 OBED 코인 텔레그램 채널에서 최신 뉴스와 실시간 Q&A를 받아보세요.",
      ctaButton: "공식 텔레그램",
    },

    // ── Final CTA ──
    finalCta: {
      heading1: "OBED 코인과 함께",
      heading2: "시작하세요",
      description:
        "코인의 가치는 OBED 스테이로 항상 보호됩니다.",
      cta1: "스테이 시스템 알아보기",
      cta2: "백서 다운로드",
      telegram: "공식 텔레그램",
      x: "공식 X",
    },

    // ── Footer ──
    footer: {
      company: "회사명",
      companyValue: "주식회사 오벳",
      ceo: "대표이사",
      ceoValue: "유경수 (RYU KYUNG SOO)",
      regNo: "사업자 등록번호",
      regNoValue: "899-81-03634",
      address: "주소",
      addressValue: "경기도 포천시 화현면 금강로 3749, 1층",
      businessType: "업종",
      businessTypeValue: "도소매, 소매 및 서비스",
      copyright: "© 2026 주식회사 오벳 · OBED . All rights reserved.",
    },
  },
} as const;

export type Translations = (typeof translations)["EN"];
