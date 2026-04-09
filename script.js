const scholarUrl = (query) =>
  `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;

const state = {
  lang: document.body.dataset.lang || "zh",
};

const siteData = {
  profile: {
    zh: {
      name: "Hange Zhou",
      englishName: "Hange Zhou",
      gender: "Male",
      age: "26",
      role: "VLM Agentic Researcher",
      affiliation: "A PhD of HKUST",
      focus: "Agentic Reasoning, Data Augmentation, VLA",
      motto: "build tools build world",
    },
    en: {
      name: "Hange Zhou",
      englishName: "Hange Zhou",
      gender: "Male",
      age: "26",
      role: "VLM Agentic Researcher",
      affiliation: "A PhD of HKUST",
      focus: "Agentic Reasoning, Data Augmentation, VLA",
      motto: "build tools build world",
    },
  },
  stats: [
    { value: "7+", label: { zh: "论文与预印本", en: "Papers & Preprints" } },
    { value: "84", label: { zh: "授权专利", en: "Granted Patents" } },
    { value: "5+", label: { zh: "代表项目", en: "Selected Projects" } },
  ],
  researchTags: ["Agentic Reasoning", "Data Augmentation", "VLA", "VLM", "LLM Safety"],
  publications: [
    {
      title:
        "ClarifyVC: Clarifying Ambiguous Commands in Vehicle Control with a Hybrid Data Augmentation Pipeline",
      authors: "Zhou H, Jiang Z, Zhang M, et al.",
      venueZh: "ICLR 2026（CCF-A）",
      venueEn: "ICLR 2026 (CCF-A)",
      noteZh: "优先使用 OpenReview 官方页面。",
      noteEn: "Linked to the official OpenReview page.",
      url: "https://openreview.net/forum?id=afO3vnSNsS",
      year: "2026",
      type: "Conference",
    },
    {
      title:
        "Efficient Edge-Cloud Collaboration via Token Pruning and Quantized Feature Transmission for Consumer Electronics and Intelligent Vehicles",
      authors: "Cui Y, Chen Y, Zhou H (co-first), et al.",
      venueZh: "IEEE Transactions on Consumer Electronics, 2026（SCI-Top）",
      venueEn: "IEEE Transactions on Consumer Electronics, 2026 (SCI-Top)",
      noteZh: "当前先使用 Google Scholar 检索入口，后续可替换为正式 DOI。",
      noteEn: "Currently linked via Google Scholar; replace with the final DOI once confirmed.",
      url: scholarUrl(
        "Efficient Edge-Cloud Collaboration via Token Pruning and Quantized Feature Transmission for Consumer Electronics and Intelligent Vehicles",
      ),
      year: "2026",
      type: "Journal",
    },
    {
      title: "GalaxyGPT: a hybrid framework for large language model safety",
      authors: "Zhou H, Zheng J, Zhang L.",
      venueZh: "IEEE Access, 2024, 12: 94436-94451",
      venueEn: "IEEE Access, 2024, 12: 94436-94451",
      noteZh: "公开检索暂未稳定命中，先保留 Scholar 检索入口。",
      noteEn: "Public indexing is not stable yet, so a Scholar search link is used for now.",
      url: scholarUrl("GalaxyGPT a hybrid framework for large language model safety"),
      year: "2024",
      type: "Journal",
    },
    {
      title:
        "An Iterative Intelligent Attack With Integrated Strategy for Resource-Constrained Internet of Vehicles",
      authors: "Cui Y, Zhou H (co-first), Zhang Y, et al.",
      venueZh: "IEEE Internet of Things Journal, 2024, 12(9): 12453-12467",
      venueEn: "IEEE Internet of Things Journal, 2024, 12(9): 12453-12467",
      noteZh: "先接入 Scholar 检索链接，便于后续替换为 IEEE Xplore 页面。",
      noteEn: "Temporarily linked to Scholar; this can later be replaced with the IEEE Xplore page.",
      url: scholarUrl(
        "An Iterative Intelligent Attack With Integrated Strategy for Resource-Constrained Internet of Vehicles",
      ),
      year: "2024",
      type: "Journal",
    },
    {
      title: "Enhancing Aerospace Classified Information Security through Large-scale Models",
      authors: "ZHENG J, ZHOU H (co-first), JIANG Z, et al.",
      venueZh: "Aerospace Control, 2024, 42(2): 62-68",
      venueEn: "Aerospace Control, 2024, 42(2): 62-68",
      noteZh: "使用期刊官方页面。",
      noteEn: "Linked to the journal's official page.",
      url: "https://htkz.magtechjournal.com/EN/Y2024/V42/I2/62",
      year: "2024",
      type: "Journal",
    },
    {
      title: "Constrained Adversarial Attacks Against Image-Based Malware Classification System",
      authors: "Zhou H, Ma H.",
      venueZh: "International Conference on Life System Modeling and Simulation, 2021",
      venueEn: "International Conference on Life System Modeling and Simulation, 2021",
      noteZh: "Springer 页面可用，DOI: 10.1007/978-981-16-7207-1_20",
      noteEn: "Springer page available, DOI: 10.1007/978-981-16-7207-1_20",
      url: "https://doi.org/10.1007/978-981-16-7207-1_20",
      year: "2021",
      type: "Conference",
    },
    {
      title: "Making Language Model a Hierarchical Classifier",
      authors: "Wang Y, Jiang Z, Xi N, et al.",
      venueZh: "arXiv preprint, 2025",
      venueEn: "arXiv preprint, 2025",
      noteZh: "使用 arXiv 页面与 DataCite DOI。",
      noteEn: "Linked to arXiv with the DataCite DOI.",
      url: "https://arxiv.org/abs/2507.12930",
      year: "2025",
      type: "Preprint",
    },
  ],
  patents: [
    {
      title: "数据集的质量评估方法、装置、设备、介质以及程序产品",
      id: "CN120372325B",
      date: "2025-10-24",
      appNo: "CN202510873792.1",
      statusZh: "发明授权 / 有权",
      statusEn: "Granted Invention Patent",
    },
    {
      title: "一种主动提供车辆服务的方法、设备、介质及程序产品",
      id: "CN118797169B",
      date: "2024-12-31",
      appNo: "CN202411272625.3",
      statusZh: "发明授权 / 有权",
      statusEn: "Granted Invention Patent",
    },
    {
      title: "基于模型的任务执行方法、装置、设备和可读存储介质",
      id: "CN118796479B",
      date: "2024-12-17",
      appNo: "CN202411272624.9",
      statusZh: "发明授权 / 有权",
      statusEn: "Granted Invention Patent",
    },
    {
      title: "时钟同步方法、装置、从时钟设备、时钟同步系统和介质",
      id: "CN116614199B",
      date: "2023-10-17",
      appNo: "CN202310864866.6",
      statusZh: "发明授权 / 有权",
      statusEn: "Granted Invention Patent",
    },
    {
      title: "一种网络时延的确定方法和相关装置",
      id: "CN116599871B",
      date: "2023-10-03",
      appNo: "CN202310866285.6",
      statusZh: "发明授权 / 有权",
      statusEn: "Granted Invention Patent",
    },
    {
      title: "模型训练方法、车辆控制方法、装置及相关设备",
      id: "CN120523921B",
      date: "2025-09-30",
      appNo: "CN202511030037.3",
      statusZh: "发明授权 / 有权",
      statusEn: "Granted Invention Patent",
    },
  ],
};

siteData.projects = [
  {
    title: "Tencent TAD Sim",
    zh: "腾讯自动驾驶仿真系统项目，聚焦自动驾驶研发与验证的跨平台分布式仿真。",
    en: "Tencent's autonomous driving simulation system for distributed cross-platform R&D and validation.",
    roleZh: "AI Researcher",
    roleEn: "AI Researcher",
    contributionZh:
      "Contributed to simulation-oriented AI workflows, data preparation, and research engineering for autonomous-driving validation scenarios.",
    contributionEn:
      "Contributed to simulation-oriented AI workflows, data preparation, and research engineering for autonomous-driving validation scenarios.",
    metaZh: "自动驾驶仿真 / 工业级闭环验证",
    metaEn: "Autonomous Driving Simulation / Industrial Closed-loop Validation",
    tech: ["Simulation", "Autonomous Driving", "Data Pipeline", "Scenario Validation"],
    url: "https://github.com/Tencent/TAD_Sim",
  },
  {
    title: "Geely Xingrui Large Model Pretrain",
    zh: "吉利星睿大模型预训练相关工作与公开介绍。",
    en: "Public overview of the Geely Xingrui large-model pretraining effort.",
    roleZh: "LLM Algorithm Leader",
    roleEn: "LLM Algorithm Leader",
    contributionZh:
      "Led algorithm exploration for pretraining, data curation strategy, and evaluation workflows targeting large-model capabilities in intelligent vehicle scenarios.",
    contributionEn:
      "Led algorithm exploration for pretraining, data curation strategy, and evaluation workflows targeting large-model capabilities in intelligent vehicle scenarios.",
    metaZh: "大模型预训练 / 智能汽车",
    metaEn: "Foundation Model Pretraining / Intelligent Vehicles",
    tech: ["Pretraining", "LLM", "Data Curation", "Evaluation"],
    url: "https://zhuanlan.zhihu.com/p/680610790",
  },
  {
    title: "Galaxy In-Cabin Agent",
    zh: "吉利座舱精灵，面向智能座舱与车机助手的能力展示。",
    en: "In-cabin intelligent assistant showcase for the Geely ecosystem.",
    roleZh: "LLM Algorithm Leader",
    roleEn: "LLM Algorithm Leader",
    contributionZh:
      "Worked on agent-oriented cockpit intelligence, including task understanding, assistant behavior design, and practical LLM integration for in-vehicle experiences.",
    contributionEn:
      "Worked on agent-oriented cockpit intelligence, including task understanding, assistant behavior design, and practical LLM integration for in-vehicle experiences.",
    metaZh: "智能座舱 / Agent",
    metaEn: "Smart Cockpit / Agent",
    tech: ["Agent", "In-Cabin Assistant", "Function Calling", "Safety"],
    url: "https://chejiahao.autohome.com.cn/info/17638443?from=m",
  },
  {
    title: "Huawei Agentic Reasoning",
    zh: "围绕 Agentic Reasoning 与工作流智能体方向的项目与文章入口。",
    en: "Project and article entry for Agentic Reasoning and workflow-style agents.",
    roleZh: "Research Contributor",
    roleEn: "Research Contributor",
    contributionZh:
      "Explored reasoning-oriented agent workflows, planning structures, and memory-style organization for complex enterprise tasks.",
    contributionEn:
      "Explored reasoning-oriented agent workflows, planning structures, and memory-style organization for complex enterprise tasks.",
    metaZh: "Agentic Reasoning / 企业智能体",
    metaEn: "Agentic Reasoning / Enterprise Agents",
    tech: ["Agentic Reasoning", "Planning", "Workflow Agent", "Memory"],
    url: "https://bbs.huaweicloud.com/blogs/471282",
  },
  {
    title: "Wall-X Pretrain",
    zh: "具身基础模型与机器人预训练方向相关项目与开源仓库。",
    en: "Embodied foundation model and robot pretraining project with public repository.",
    roleZh: "Research Contributor",
    roleEn: "Research Contributor",
    contributionZh:
      "Followed embodied foundation model pretraining directions and connected VLA-style research ideas with multimodal agent systems.",
    contributionEn:
      "Followed embodied foundation model pretraining directions and connected VLA-style research ideas with multimodal agent systems.",
    metaZh: "具身智能 / VLA / 机器人",
    metaEn: "Embodied AI / VLA / Robotics",
    tech: ["Embodied AI", "VLA", "Robot Learning", "Pretraining"],
    url: "https://github.com/X-Square-Robot/wall-x",
  },
];

siteData.awards = [
  {
    titleZh: "工信部“绽放杯”国家一等奖",
    titleEn: 'MIIT "Blooming Cup" National First Prize',
    noteZh: "National-level recognition in a major industry innovation competition.",
    noteEn: "National-level recognition in a major industry innovation competition.",
    images: ["assets/gongxinbu.jpg"],
  },
  {
    titleZh: "腾讯精英人才技术突破奖",
    titleEn: "Tencent Elite Talent Technology Breakthrough Award",
    noteZh: "Awarded for technical breakthrough and research impact during work at Tencent.",
    noteEn: "Awarded for technical breakthrough and research impact during work at Tencent.",
    images: ["assets/tencent.jpg", "assets/tencent2.jpg"],
  },
  {
    titleZh: "全国 AI 智能 Coding 大赛国家特等奖",
    titleEn: "National AI Intelligent Coding Competition Grand Prize",
    noteZh: "Top national award in an AI-oriented coding competition.",
    noteEn: "Top national award in an AI-oriented coding competition.",
    images: ["assets/national-tedeng.jpg"],
  },
  {
    titleZh: "山东省一等奖",
    titleEn: "Shandong Provincial First Prize",
    noteZh: "Provincial first prize associated with the competition track.",
    noteEn: "Provincial first prize associated with the competition track.",
    images: ["assets/shandongprovince-yideng.jpg"],
  },
  {
    titleZh: "2024 中国 CIO 数字科技优秀人物奖",
    titleEn: "2024 China CIO Outstanding Digital Technology Figure Award",
    noteZh: "Recognition for innovation and influence in digital technology.",
    noteEn: "Recognition for innovation and influence in digital technology.",
    images: ["assets/outstanding.jpg"],
  },
  {
    titleZh: "Kaggle WSDM24 金牌",
    titleEn: "Kaggle WSDM24 Gold Medal",
    noteZh: "Gold medal performance in the WSDM24 multilingual chatbot arena.",
    noteEn: "Gold medal performance in the WSDM24 multilingual chatbot arena.",
    images: ["assets/kaggle.jpg"],
  },
];

siteData.news = [
  {
    time: "2026",
    titleZh: "ClarifyVC 被 ICLR 2026 接收",
    titleEn: "ClarifyVC accepted by ICLR 2026",
    descriptionZh: "围绕含糊车辆控制指令澄清与数据增强流程，形成统一框架与评测协议。",
    descriptionEn:
      "A unified framework and evaluation protocol for clarifying ambiguous vehicle-control commands.",
  },
  {
    time: "2026",
    titleZh: "边云协同论文进入 TCE 2026",
    titleEn: "Edge-cloud collaboration paper appears in TCE 2026",
    descriptionZh: "聚焦 Token Pruning 与量化特征传输，面向消费电子与智能汽车场景。",
    descriptionEn:
      "Focused on token pruning and quantized feature transmission for consumer electronics and intelligent vehicles.",
  },
  {
    time: "2025",
    titleZh: "多项车辆智能与模型执行相关专利获得授权",
    titleEn: "Multiple patents on vehicle intelligence and model execution granted",
    descriptionZh: "覆盖车辆服务、模型训练、任务执行与数据质量评估等方向。",
    descriptionEn:
      "Covering proactive vehicle services, model training, task execution, and dataset quality evaluation.",
  },
  {
    time: "2024",
    titleZh: "持续推进 Agentic Reasoning 与 VLA 方向研究",
    titleEn: "Continuing research on Agentic Reasoning and VLA",
    descriptionZh: "研究重心逐步聚焦在推理、数据构建与具身智能交叉方向。",
    descriptionEn:
      "Research focus continues to converge on reasoning, data construction, and embodied intelligence.",
  },
];

siteData.timeline = [
  {
    time: "Present",
    titleZh: "PhD Researcher, HKUST",
    titleEn: "PhD Researcher, HKUST",
    descriptionZh: "围绕 Agentic Reasoning、Data Augmentation 与 VLA 持续展开研究。",
    descriptionEn:
      "Working on Agentic Reasoning, Data Augmentation, and VLA.",
  },
  {
    time: "2023.07 - 2025.07",
    titleZh: "LLM Algorithm Leader, Geely AI Lab",
    titleEn: "LLM Algorithm Leader, Geely AI Lab",
    descriptionZh: "Participated in Geely XingRui-LLM and Agent projects, focusing on in-cabin LLM capability, pretraining-oriented algorithms, and agent workflows.",
    descriptionEn:
      "Participated in Geely XingRui-LLM and Agent projects, focusing on in-cabin LLM capability, pretraining-oriented algorithms, and agent workflows.",
  },
  {
    time: "2022.05 - 2023.07",
    titleZh: "AI Researcher, Tencent",
    titleEn: "AI Researcher, Tencent",
    descriptionZh: "Participated in the TAD Sim project and related AI research tasks for simulation-driven autonomous-driving scenarios.",
    descriptionEn:
      "Participated in the TAD Sim project and related AI research tasks for simulation-driven autonomous-driving scenarios.",
  },
];

const i18n = {
  zh: {
    "nav.about": "关于",
    "nav.publications": "论文",
    "nav.projects": "项目",
    "nav.awards": "获奖",
    "nav.timeline": "时间轴",
    "hero.eyebrow": "Academic Profile / GitHub Pages",
    "hero.title": "Hange Zhou",
    "hero.subtitle": "VLM Agentic Researcher · A PhD of HKUST",
    "hero.description":
      "聚焦 Agentic Reasoning、Data Augmentation 与 VLA，持续构建面向真实世界的智能系统、研究工具与数据流程。",
    "hero.github": "访问 GitHub",
    "hero.papers": "查看论文",
    "hero.photoPlaceholder": "Research Portrait",
    "hero.photoHint": "A more formal headshot can be swapped in later if needed.",
    "about.kicker": "About",
    "about.title": "个人简介",
    "about.researchTitle": "研究方向",
    "about.researchNote":
      "这一栏已按科技感个人主页方式设计，可继续加入更多关键词、实验室方向或技术栈。",
    "publications.kicker": "Publications",
    "publications.title": "论文与预印本",
    "patents.kicker": "Patents",
    "patents.title": "授权专利",
    "projects.kicker": "Projects",
    "projects.title": "代表项目",
    "awards.kicker": "Awards",
    "awards.title": "获奖展示墙",
    "awards.note":
      "当前每个奖项都预留了图片位。你把奖项图片上传到站点后，我可以再把占位块替换成真正的奖项展示墙。",
    "news.kicker": "News",
    "news.title": "最新动态",
    "timeline.kicker": "Timeline",
    "timeline.title": "工作与研究时间轴",
    "timeline.note":
      "当前时间轴基于你已提供的信息生成；如果你补充公司/实验室/年份，我可以继续扩充成更完整的履历页。",
    "footer.copy": "Built with GitHub Pages. Bilingual, dark, and research-oriented.",
    "common.view": "访问链接",
    "common.applicationNo": "申请号",
    "common.publicationNo": "公告号",
    "common.status": "状态",
  },
  en: {
    "nav.about": "About",
    "nav.publications": "Publications",
    "nav.projects": "Projects",
    "nav.awards": "Awards",
    "nav.timeline": "Timeline",
    "hero.eyebrow": "Academic Profile / GitHub Pages",
    "hero.title": "Hange Zhou",
    "hero.subtitle": "VLM Agentic Researcher · A PhD of HKUST",
    "hero.description":
      "Focusing on Agentic Reasoning, Data Augmentation, and VLA, while building intelligent systems, research tools, and data pipelines for real-world settings.",
    "hero.github": "Visit GitHub",
    "hero.papers": "View Papers",
    "hero.photoPlaceholder": "Photo Placeholder",
    "hero.photoHint": "I'll update my handsome photos regularly.",
    "about.kicker": "About",
    "about.title": "Biography",
    "about.researchTitle": "Research Interests",
    "about.researchNote":
      "This panel will be extended with more keywords, labs, or tech stacks.",
    "publications.kicker": "Publications",
    "publications.title": "Selected Papers & Preprints",
    "patents.kicker": "Patents",
    "patents.title": "Granted Patents",
    "projects.kicker": "Projects",
    "projects.title": "Selected Projects",
    "awards.kicker": "Awards",
    "awards.title": "Award Gallery",
    "awards.note":
      "Each award currently reserves an image slot. Once you upload the award images, I can convert these placeholders into a real visual award wall.",
    "news.kicker": "News",
    "news.title": "Latest News",
    "timeline.kicker": "Timeline",
    "timeline.title": "Work & Research Timeline",
    "timeline.note":
      "The current timeline is generated from the information you provided; once you add years, labs, or companies, it can be expanded into a full CV-style timeline.",
    "footer.copy": "Built with GitHub Pages. Bilingual, dark, and research-oriented.",
    "common.view": "Open Link",
    "common.applicationNo": "Application No.",
    "common.publicationNo": "Publication No.",
    "common.status": "Status",
  },
};

function t(key) {
  return i18n[state.lang][key] || key;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function buildAwardImageButton(src, alt, className = "") {
  const button = el("button", `award-image-button ${className}`.trim());
  button.type = "button";
  button.dataset.imageSrc = src;
  button.dataset.imageAlt = alt;

  const img = document.createElement("img");
  img.className = "award-image-thumb";
  img.src = src;
  img.alt = alt;
  button.append(img);

  return button;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.getElementById("lang-toggle").textContent = state.lang === "zh" ? "EN" : "中";
}

function renderStats() {
  const target = document.getElementById("stats-grid");
  target.innerHTML = "";
  siteData.stats.forEach((item) => {
    const card = el("div", "stat-card");
    card.append(el("div", "stat-value", item.value));
    card.append(el("div", "stat-label", item.label[state.lang]));
    target.append(card);
  });
}

function renderBio() {
  const target = document.getElementById("bio-list");
  target.innerHTML = "";
  const profile = siteData.profile[state.lang];
  const items = [
    ["Name", profile.name],
    [state.lang === "zh" ? "Gender / Age" : "Gender / Age", `${profile.gender} / ${profile.age}`],
    ["Role", profile.role],
    ["Affiliation", profile.affiliation],
    ["Focus", profile.focus],
    ["Motto", profile.motto],
  ];

  items.forEach(([label, value]) => {
    const row = el("div", "bio-item");
    row.append(el("div", "bio-label", label));
    row.append(el("div", "bio-value", value));
    target.append(row);
  });
}

function renderResearchTags() {
  const target = document.getElementById("research-tags");
  target.innerHTML = "";
  siteData.researchTags.forEach((item) => target.append(el("span", "tag", item)));
}

function renderPublications() {
  const target = document.getElementById("publications-list");
  target.innerHTML = "";

  siteData.publications.forEach((paper) => {
    const item = el("article", "stack-item reveal");
    const meta = el("div", "stack-meta");
    meta.append(el("span", "pill", paper.type));
    meta.append(el("span", "pill", paper.year));
    meta.append(el("span", "pill", state.lang === "zh" ? paper.venueZh : paper.venueEn));

    const title = el("h3", "stack-title");
    const link = el("a");
    link.href = paper.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = paper.title;
    title.append(link);

    item.append(meta);
    item.append(title);
    item.append(el("p", "stack-authors", paper.authors));
    item.append(el("p", "stack-note", state.lang === "zh" ? paper.noteZh : paper.noteEn));
    target.append(item);
  });
}

function renderPatents() {
  const target = document.getElementById("patents-grid");
  target.innerHTML = "";

  siteData.patents.forEach((patent) => {
    const card = el("article", "patent-card reveal");
    card.append(el("h3", "card-title", patent.title));
    card.append(el("p", "card-description", `${t("common.publicationNo")}: ${patent.id}`));
    card.append(
      el(
        "p",
        "card-meta",
        `${t("common.status")}: ${state.lang === "zh" ? patent.statusZh : patent.statusEn}`,
      ),
    );
    card.append(el("p", "card-meta", `${t("common.applicationNo")}: ${patent.appNo}`));
    card.append(el("p", "card-meta", patent.date));
    target.append(card);
  });
}

function renderProjects() {
  const target = document.getElementById("projects-grid");
  target.innerHTML = "";

  siteData.projects.forEach((project) => {
    const card = el("article", "project-card reveal");
    const title = el("h3", "card-title");
    const link = el("a");
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = project.title;
    title.append(link);

    card.append(title);
    card.append(el("p", "card-description", state.lang === "zh" ? project.zh : project.en));
    card.append(el("p", "card-meta", state.lang === "zh" ? project.metaZh : project.metaEn));

    const metaList = el("div", "meta-list");
    metaList.append(
      el(
        "div",
        "meta-row",
        `${state.lang === "zh" ? "Role" : "Role"}: ${state.lang === "zh" ? project.roleZh : project.roleEn}`,
      ),
    );
    metaList.append(
      el(
        "div",
        "meta-row",
        `${state.lang === "zh" ? "Contribution" : "Contribution"}: ${state.lang === "zh" ? project.contributionZh : project.contributionEn}`,
      ),
    );
    card.append(metaList);

    const tags = el("div", "small-tag-list");
    project.tech.forEach((tech) => tags.append(el("span", "small-tag", tech)));
    card.append(tags);

    const cta = el("a", "card-link", t("common.view"));
    cta.href = project.url;
    cta.target = "_blank";
    cta.rel = "noreferrer";
    card.append(cta);

    target.append(card);
  });
}

function renderAwards() {
  const target = document.getElementById("awards-grid");
  target.innerHTML = "";

  siteData.awards.forEach((award, index) => {
    const card = el("article", "award-card reveal");
    const images = award.images || [];
    const image = el("div", `award-image${images.length ? " has-image" : ""}`);
    if (images.length > 1) {
      const grid = el("div", "award-image-grid");
      images.forEach((src, imageIndex) => {
        const tileAlt = `${state.lang === "zh" ? award.titleZh : award.titleEn} image ${imageIndex + 1}`;
        grid.append(buildAwardImageButton(src, tileAlt, "award-image-tile"));
      });
      image.append(grid);
    } else if (images.length === 1) {
      image.append(
        buildAwardImageButton(
          images[0],
          state.lang === "zh" ? award.titleZh : award.titleEn,
          "award-single-button",
        ),
      );
    } else {
      image.append(el("div", "award-image-placeholder", `AWARD ${String(index + 1).padStart(2, "0")}`));
    }

    const content = el("div", "award-content");
    content.append(el("h3", "award-title", state.lang === "zh" ? award.titleZh : award.titleEn));
    content.append(el("p", "award-note", state.lang === "zh" ? award.noteZh : award.noteEn));
    card.append(image);
    card.append(content);
    target.append(card);
  });
}

function setupLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeButton = document.getElementById("lightbox-close");

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    lightboxImage.alt = "";
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-image-src]");
    if (trigger) {
      lightboxImage.src = trigger.dataset.imageSrc;
      lightboxImage.alt = trigger.dataset.imageAlt || "Award preview";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      return;
    }

    if (event.target.closest("[data-lightbox-close='true']")) {
      closeLightbox();
    }
  });

  closeButton.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function renderTimeline(id, items) {
  const target = document.getElementById(id);
  target.innerHTML = "";

  items.forEach((entry) => {
    const item = el("article", "timeline-item reveal");
    const top = el("div", "timeline-top");
    top.append(el("span", "timeline-time", entry.time));
    top.append(el("h3", "timeline-title", state.lang === "zh" ? entry.titleZh : entry.titleEn));
    item.append(top);
    item.append(
      el(
        "p",
        "timeline-description",
        state.lang === "zh" ? entry.descriptionZh : entry.descriptionEn,
      ),
    );
    target.append(item);
  });
}

function observeReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

function drawParticles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  const particles = [];
  const count = window.innerWidth < 720 ? 34 : 72;

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }

  function createParticle() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.22,
      dy: (Math.random() - 0.5) * 0.22,
    };
  }

  resize();
  for (let i = 0; i < count; i += 1) particles.push(createParticle());

  function loop() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((p, i) => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(121, 208, 255, 0.45)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j += 1) {
        const q = particles[j];
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(127, 108, 255, ${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });
    window.requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  loop();
}

function render() {
  applyI18n();
  renderStats();
  renderBio();
  renderResearchTags();
  renderPublications();
  renderPatents();
  renderProjects();
  renderAwards();
  renderTimeline("news-list", siteData.news);
  renderTimeline("timeline-list", siteData.timeline);
  observeReveal();
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  document.body.dataset.lang = state.lang;
  render();
});

render();
drawParticles();
setupLightbox();
