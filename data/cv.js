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
      title: "Revisiting Hardware Priority Queue Architectures",
      role: "Research Assistant",
      advisor: "Dr. Austin Rovinski",
      org: "New York University",
      dates: "May 2024 – May 2025",
      bullets: [
        "Designed and implemented multiple hardware priority queue architectures (Register Tree, BRAM Tree, Systolic Array, Hybrid Tree) on Xilinx FPGA using SystemVerilog, targeting scalable hardware accelerator applications.",
        "Developed a parameterized RTL design with a unified testbench enabling architecture-agnostic benchmarking and verification.",
        "Conducted timing analysis, resource utilization evaluation, and scalability testing in Xilinx Vivado.",
        "Investigated area-latency trade-offs across architectures.",
      ],
    },
    {
      title: "High-Efficiency SRAM Design for IoT Devices",
      role: "Student Research Assistant Intern",
      advisor: "Dr. Azeez Bhavnagarwala",
      org: "New York University",
      dates: "Sep 2023 – Mar 2024",
      bullets: [
        "Designed a 4kB SRAM array using ASAP7 7nm PDK in Cadence Virtuoso for low-power, high-density IoT integration.",
        "Optimized wordline and bitline decoder sizing, improving read/write access latency and power efficiency under process variations.",
        "Ran Monte Carlo simulations for PVT robustness.",
        "Performed parasitic extraction and post-layout simulations.",
      ],
    },
    {
      title: "SRAM Design Against Side-Channel Attacks",
      role: "Student Research Assistant Intern",
      advisor: "Dr. Azeez Bhavnagarwala",
      org: "New York University",
      dates: "Oct 2022 – Mar 2023",
      bullets: [
        "Designed and synthesized an AES-128 encryption/decryption accelerator using ASAP7 7nm PDK in Cadence Genus targeting side-channel attack resistance.",
        "Developed a gate-level netlist and transistor-level HSPICE power model.",
        "Simulated Differential Power Analysis (DPA) attacks via HSPICE transient simulations.",
        "Identified correlation between power fluctuations and AES internals, informing countermeasures for secure SRAM design.",
      ],
    },
    {
      title: "NASA Lunabotics Engineering Competition",
      role: "Team Member",
      advisor: "Dr. Ben Tribelhorn",
      org: "University of Portland",
      dates: "Sep 2019 – May 2020",
      bullets: [
        "Team of 5 developing key components of a Lunar Rover.",
        "Implemented a path-finding algorithm enabling autonomous navigation.",
        "Developed an overlaying algorithm integrated with a 2D Lidar on a rotating mount to generate 3D scans of terrain.",
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
      blurb: "Seattle robotic-barista startup (raised over $350M on StartEngine).",
      bullets: [
        "Created customized hardware designs improving system stability and functionality.",
        "Integrated high-precision scales (0.1g accuracy, 0.01g resolution), enhancing measurement accuracy by 80%.",
        "Designed a motorized rotating/tilting platform achieving a 120% increase in latte-art success rate.",
        "Developed embedded firmware (C, Arduino, ESP8266, STM32) for robot-control interfacing.",
      ],
    },
    {
      company: "Hyster-Yale",
      url: "https://www.hyster-yale.com/",
      role: "Mechanical Engineer Intern",
      dates: "Jun 2018 – Mar 2020",
      location: "Portland, OR",
      bullets: [],
    },
  ],

  // ---- Academic projects ----
  projects: [
    {
      title: "RISC-V RV32I Multi-Cycle Processor Implementation",
      dates: "Fall 2023",
      bullets: [
        "Implemented a 32-bit NYU-6463-RV32I processor in Verilog supporting a subset of RV32I, focused on microarchitecture optimization for FPGA deployment.",
        "Performed performance/area analysis, critical-path review, and synthesizability checks.",
        "Wrote unit tests (ALU, branching, memory) and integration tests (RC5 encryption/decryption, control flow).",
        "Built hardware interfacing modules for switches/LEDs.",
        "Synthesized and deployed on a Basys 3 Artix-7 FPGA with timing closure and functional verification.",
      ],
    },
    {
      title: "SRAM with BIST Engine",
      dates: "Spring 2023",
      bullets: [
        "Designed a 256x4-bit SRAM in SystemVerilog in Cadence Virtuoso.",
        "SPICE-level verification against behavioral RTL.",
        "Built a Built-In Self-Test (BIST) engine with industry-standard test patterns.",
        "Synthesized with Cadence Genus optimizing area/power/timing; STA in Synopsys PrimeTime.",
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
