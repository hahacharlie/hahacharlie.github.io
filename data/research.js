// ============================================================
// Research areas shown on the home page and the Research page.
// `id` doubles as the publication tag vocabulary in
// data/publications.js and the AREAS map in js/render.js.
// `pubs` lists publication ids from data/publications.js used as
// representative works on the Research page (may be empty).
// ============================================================
window.RESEARCH = [
  {
    id: "eda",
    title: "Agentic AI for EDA",
    subtitle: "LLM Agents for Chip Design",
    short:
      "LLM-based agents that tune physical-design workflows and evolve FPGA place-and-route algorithms.",
    long:
      "My recent work explores how LLM-based agents can improve complex chip-design workflows. CAPO uses certification-guided agents to tune physical-design parameters; VPR-Evolve uses multiple agents to evolve FPGA place-and-route algorithms; and CHICO-Agent extends agentic optimization across the layers of 2.5D and 3D chiplet systems.",
    keywords: ["LLM agents", "Physical design", "Parameter optimization", "FPGA place & route", "Algorithm evolution"],
    pubs: ["chico-agent", "capo", "vpr-evolve"],
  },
  {
    id: "hi",
    title: "Heterogeneous Integration",
    subtitle: "2.5D and 3D Chiplet-based Systems",
    short:
      "Agent-guided, cross-layer exploration of 2.5D and 3D chiplet systems.",
    long:
      "CHICO-Agent explores how an LLM agent can coordinate decisions across the design layers of 2.5D and 3D chiplet systems, where choices in architecture, packaging, and implementation are tightly coupled.",
    keywords: ["Chiplets", "2.5D/3D integration", "Cross-layer optimization"],
    pubs: ["chico-agent"],
  },
  {
    id: "architecture",
    title: "Computer Architecture",
    subtitle: "Hardware Data Structures and Microarchitecture",
    short:
      "FPGA-based priority queues, RISC-V microarchitecture, and accelerator building blocks.",
    long:
      "Hardware data structures shape the efficiency and scalability of accelerators. In Revisiting Hardware Priority Queue Architectures, I implemented four queue organizations in a unified, parameterized RTL framework and benchmarked their area-latency trade-offs on Xilinx FPGAs. I also built and deployed a multi-cycle RISC-V RV32I processor on an Artix-7 FPGA.",
    keywords: ["Priority queues", "FPGA", "SystemVerilog", "RISC-V", "Accelerators"],
    pubs: ["priority-queue"],
  },
  {
    id: "circuits",
    title: "Circuits & Memory Design",
    subtitle: "SRAM, BIST, and Side-Channel Resistance",
    short:
      "Low-power SRAM, built-in self-test, and side-channel-aware design in advanced technology nodes.",
    long:
      "At the circuit level, I designed a 4 kB low-power SRAM array in the ASAP7 7 nm PDK, optimizing decoder sizing under process variation and verifying the design through Monte Carlo and post-layout simulation. Related projects include an AES-128 accelerator and transistor-level power model for studying differential power-analysis attacks, and a 256 × 4-bit SRAM with a built-in self-test engine.",
    keywords: ["SRAM", "ASAP7", "BIST", "Side-channel attacks", "Cadence Virtuoso"],
    pubs: [],
  },
];
