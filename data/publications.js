// ============================================================
// Publications list.
// To add a paper: copy an entry, keep newest papers at top.
// - "Qihang Wu" in `authors` is bolded automatically by js/render.js.
// - `tags` map to research areas: eda | hi | architecture | circuits
// - `selected: true` marks representative work (the "Selected" filter
//   and the home-page Selected section).
// - `links` keys become link labels: Paper, Code, Slides, ...
// ============================================================
window.PUBLICATIONS = [
  // ---------------- 2026 ----------------
  {
    id: "vpr-evolve",
    title: "VPR-Evolve: Multi-Agent-Driven Algorithm Evolution for FPGA Place and Route",
    authors: "Qihang Wu, Taizun Jafri, Aman Arora, Vidya A. Chhabria",
    venue: "arXiv", venueFull: "arXiv preprint (arXiv:2607.24998 [cs.AR])",
    year: 2026, type: "preprint", tags: ["eda"], selected: true,
    links: { Paper: "https://arxiv.org/abs/2607.24998" },
  },
  {
    id: "capo",
    title: "CAPO: Certification-Guided Agentic Workflow for Physical Design Parameter Optimization",
    authors: "Zesong Jiang, Qihang Wu, Bing-Yue Wu, Jeff Zhang",
    venue: "GLSVLSI", venueFull: "Proceedings of the Great Lakes Symposium on VLSI 2026, pp. 240–246",
    year: 2026, type: "conference", tags: ["eda"], selected: true,
    links: { Paper: "https://dl.acm.org/doi/10.1145/3787109.3816403" },
  },
  {
    id: "chico-agent",
    title: "CHICO-Agent: An LLM Agent for the Cross-layer Optimization of 2.5D and 3D Chiplet-based Systems",
    authors: "Qihang Wu, Aman Arora, Vidya A. Chhabria",
    venue: "ICLAD", venueFull: "IEEE/ACM International Conference on LLM-Aided Design 2026 (arXiv:2604.18764)",
    year: 2026, type: "conference", tags: ["eda", "hi"], selected: true,
    links: { Paper: "https://arxiv.org/abs/2604.18764" },
  },

  // ---------------- 2025 ----------------
  {
    id: "priority-queue",
    title: "Revisiting Hardware Priority Queue Architectures",
    authors: "Qihang Wu, Austin Rovinski",
    venue: "OSCAR Workshop", venueFull: "Workshop Abstract, Open-Source Computer Architecture Research (OSCAR 2025) Workshop, Tokyo, Japan (arXiv:2607.19881)",
    year: 2025, type: "preprint", tags: ["architecture"], selected: true,
    links: { Paper: "https://arxiv.org/abs/2607.19881" },
  },
];
