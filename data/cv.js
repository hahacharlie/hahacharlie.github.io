// ============================================================
// Curriculum vitae (rendered on cv.html).
// - Each array renders in order.
// - Content mirrors assets/Curriculum_Vitae.pdf; keep both in sync.
// ============================================================
window.CV = {
  // ---- Education ----
  education: [
    {
      school: "Arizona State University",
      unit: "Ira A. Fulton Schools of Engineering",
      degree: "Ph.D. in Computer Engineering",
      dates: "Jan 2026 – present",
      location: "Tempe, AZ",
    },
    {
      school: "New York University",
      unit: "Tandon School of Engineering",
      degree: "M.S. in Electrical Engineering",
      dates: "Aug 2022 – May 2024",
      location: "Brooklyn, NY",
    },
    {
      school: "University of Portland",
      unit: "Shiley School of Engineering",
      degree: "B.S. in Computer Science and B.S. in Mechanical Engineering",
      dates: "Aug 2015 – May 2020",
      location: "Portland, OR",
    },
    {
      school: "Sophia University",
      unit: "",
      degree: "Exchange Student",
      dates: "Jun 2017 – Aug 2017",
      location: "Tokyo, Japan",
    },
  ],

  // ---- Research experience ----
  research: [
    {
      title: "High-Efficiency SRAM Design for IoT Devices",
      role: "Student Research Assistant Intern",
      advisor: "Dr. Azeez Bhavnagarwala",
      org: "New York University",
      dates: "Sep 2023 – Mar 2024",
      bullets: [
        "Designed a 4 kB SRAM array in the ASAP7 7 nm PDK using Cadence Virtuoso for low-power, high-density IoT systems.",
        "Optimized wordline and bitline decoder sizing for access latency and power under process variation.",
        "Evaluated PVT robustness with Monte Carlo simulation and verified the extracted layout through post-layout simulation.",
      ],
    },
    {
      title: "SRAM Design Against Side-Channel Attacks",
      role: "Student Research Assistant Intern",
      advisor: "Dr. Azeez Bhavnagarwala",
      org: "New York University",
      dates: "Oct 2022 – Mar 2023",
      bullets: [
        "Designed and synthesized an AES-128 encryption/decryption accelerator in the ASAP7 7 nm PDK using Cadence Genus.",
        "Developed a gate-level netlist and transistor-level HSPICE power model for security evaluation.",
        "Simulated differential power-analysis attacks and analyzed correlations between power traces and internal AES operations.",
        "Used the results to inform countermeasures for side-channel-aware SRAM design.",
      ],
    },
  ],

  // ---- Industrial experience ----
  industry: [
    {
      company: "Artly AI (formerly Artly Coffee)",
      url: "https://www.artly.ai/",
      role: "Hardware System Engineer",
      dates: "Jun 2020 – May 2022",
      location: "Seattle, WA",
      blurb: "Seattle-based startup developing robotic coffee systems.",
      bullets: [
        "Designed custom hardware that improved system stability and expanded robot functionality.",
        "Integrated high-precision scales (0.1 g accuracy, 0.01 g resolution), improving measurement accuracy by 80%.",
        "Designed a motorized rotating and tilting platform that increased the latte-art success rate by 120%.",
        "Developed embedded firmware in C for Arduino, ESP8266, and STM32 platforms and integrated components with the robot-control system.",
      ],
    },
  ],

  // ---- Academic projects ----
  projects: [
    {
      title: "RISC-V RV32I Multi-Cycle Processor Implementation",
      dates: "Fall 2023",
      bullets: [
        "Implemented a 32-bit, multi-cycle processor in Verilog supporting a subset of RV32I and optimized the microarchitecture for FPGA deployment.",
        "Analyzed performance, area, and critical paths and verified synthesizability.",
        "Built unit and integration tests covering the ALU, branching, memory, RC5 encryption/decryption, and control flow.",
        "Developed interfaces for switches and LEDs, then synthesized and deployed the design on a Basys 3 Artix-7 FPGA.",
      ],
    },
    {
      title: "SRAM with BIST Engine",
      dates: "Spring 2023",
      bullets: [
        "Designed a 256 × 4-bit SRAM in SystemVerilog and verified it against a SPICE-level implementation.",
        "Built a built-in self-test engine using standard memory test patterns.",
        "Synthesized the SRAM-BIST system with Cadence Genus and performed static timing analysis in Synopsys PrimeTime.",
      ],
    },
  ],

  // ---- Presentations ----
  presentations: [
    {
      title: "CHICO-Agent: An LLM Agent for the Cross-layer Optimization of 2.5D and 3D Chiplet-based Systems",
      venue: "Presentation at ICLAD 2026",
      place: "Stanford University, Stanford, CA",
      date: "Jul 2026",
    },
    {
      title: "Revisiting Hardware Priority Queue Architectures",
      venue: "Presentation at OSCAR 2025 Workshop",
      place: "Waseda University, Tokyo, Japan",
      date: "Jun 2025",
    },
    {
      title: "NASA Lunabotics 2020 (University of Portland – Robotics)",
      venue: "Poster at 2019 Oregon NASA Space Grant Consortium",
      place: "Oregon State University, Corvallis, OR",
      date: "Nov 2019",
    },
  ],

  // ---- Honors & achievements ----
  honors: [
    {
      kind: "Patent",
      title: "System and Method for Robotic Food and Beverage Preparation Using Computer Vision, PCT/US21/33430",
      date: "May 2021",
    },
    {
      kind: "Certification",
      title: "Engineer in Training (E.I.T.), Oregon State Board of Examiners for Engineering",
      date: "Jun 2020",
    },
    {
      kind: "Award",
      title: "Undergraduate Team Experience Award – Oregon NASA Space Grant Consortium",
      date: "2019–2020",
    },
    {
      kind: "Academic",
      title: "Dean's List, Spring 2018",
      date: "May 2018",
    },
  ],
};
