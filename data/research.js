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
      "LLM and multi-agent workflows for physical design parameter optimization and FPGA place-and-route algorithm evolution.",
    long:
      "I build LLM-based agents for chip design: a certification-guided agentic workflow for physical design parameter optimization (CAPO, GLSVLSI 2026), multi-agent-driven algorithm evolution for FPGA place and route (VPR-Evolve, ASP-DAC 2027), and an LLM agent for the cross-layer optimization of 2.5D and 3D chiplet-based systems (CHICO-Agent, ICLAD 2026).",
    keywords: ["LLM agents", "Physical design", "Parameter optimization", "FPGA place & route", "Algorithm evolution"],
    pubs: ["chico-agent", "capo", "vpr-evolve"],
  },
  {
    id: "hi",
    title: "Heterogeneous Integration",
    subtitle: "2.5D and 3D Chiplet-based Systems",
    short:
      "Cross-layer optimization of 2.5D and 3D chiplet-based systems, driven by LLM agents.",
    long:
      "In CHICO-Agent (ICLAD 2026), I built an LLM agent for the cross-layer optimization of 2.5D and 3D chiplet-based systems.",
    keywords: ["Chiplets", "2.5D/3D integration", "Cross-layer optimization"],
    pubs: ["chico-agent"],
  },
  {
    id: "architecture",
    title: "Computer Architecture",
    subtitle: "Hardware Data Structures and Microarchitecture",
    short:
      "Hardware priority queue architectures, RISC-V microarchitecture, and FPGA accelerators.",
    long:
      "Hardware data structures are the building blocks of scalable accelerators. In Revisiting Hardware Priority Queue Architectures, I implemented and benchmarked register-tree, BRAM-tree, systolic-array, and hybrid-tree priority queues on Xilinx FPGAs with a unified parameterized RTL and testbench, mapping the area-latency trade-offs across designs. I have also built a multi-cycle RISC-V RV32I processor deployed on an Artix-7 FPGA.",
    keywords: ["Priority queues", "FPGA", "SystemVerilog", "RISC-V", "Accelerators"],
    pubs: ["priority-queue"],
  },
  {
    id: "circuits",
    title: "Circuits & Memory Design",
    subtitle: "SRAM, BIST, and Side-Channel Resistance",
    short:
      "SRAM design in the ASAP7 7nm PDK, built-in self-test, and side-channel-resistant design.",
    long:
      "At the circuit level, I designed a 4kB low-power SRAM array in the ASAP7 7nm PDK with decoder sizing optimized under process variation and verified with Monte Carlo and post-layout simulation; an AES-128 accelerator with a transistor-level power model used to simulate differential power analysis attacks and inform secure SRAM countermeasures; and a 256x4-bit SRAM with a built-in self-test engine synthesized in Cadence Genus.",
    keywords: ["SRAM", "ASAP7", "BIST", "Side-channel attacks", "Cadence Virtuoso"],
    pubs: [],
  },
];
