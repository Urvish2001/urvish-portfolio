"use client";

import React, { useMemo, useState } from "react";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
      {children}
    </span>
  );
}

function ImageOrPlaceholder({ src, alt, className }) {
  const [bad, setBad] = useState(false);
  if (!src || bad) {
    return (
      <div
        className={cx(
          "flex h-full w-full items-center justify-center rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 text-xs text-gray-500",
          className
        )}
        aria-label={alt || "Image placeholder"}
      >
        Add image in /public
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setBad(true)}
    />
  );
}

function VideoOrPlaceholder({ src, poster, className }) {
  const [bad, setBad] = useState(false);
  if (!src || bad) {
    return (
      <div
        className={cx(
          "flex h-full w-full items-center justify-center rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 text-xs text-gray-500",
          className
        )}
        aria-label="Video placeholder"
      >
        Add video in /public
      </div>
    );
  }
  return (
    <video
      className={className}
      controls
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      onError={() => setBad(true)}
    >
      <source src={src} />
      Your browser does not support the video tag.
    </video>
  );
}

function MediaGrid({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
      {items.map((m) => (
        <div key={m.src} className="h-56 md:h-64">
          {m.type === "video" ? (
            <VideoOrPlaceholder
              src={m.src}
              poster={m.poster}
              className="h-full w-full rounded-lg object-contain bg-black border border-gray-200"
            />
          ) : (
            <ImageOrPlaceholder
              src={m.src}
              alt={m.alt || "Media"}
              className="h-full w-full rounded-lg object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{subtitle}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Card({ title, meta, tags = [], links = [], children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          {meta ? <p className="mt-1 text-sm text-gray-600">{meta}</p> : null}
        </div>
        {links.length ? (
          <div className="flex flex-wrap gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-blue-600 underline underline-offset-4"
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-800">
        {children}
      </div>

      {tags.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Navbar() {
  const items = [
    { id: "top", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "iitgn", label: "IITGN" },
    { id: "oob", label: "OoB" },
    { id: "robocon", label: "Robocon" },
    { id: "publications", label: "Publications" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="font-semibold tracking-tight">
          Urvish Shah
        </a>

        <div className="hidden md:flex items-center gap-4 text-sm">
          {items.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-gray-700 hover:text-black"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm">
          <a
            href="/Urvish_cv.pdf"
            className="rounded-full border border-gray-200 px-3 py-1 hover:bg-gray-50"
            target="_blank"
            rel="noreferrer"
            title="Put your PDF at public/Urvish_cv.pdf"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full bg-black text-white px-3 py-1 hover:bg-black/90"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

function StatBox({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {items.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-gray-200 bg-gray-50 p-3"
        >
          <div className="text-xs text-gray-500">{s.label}</div>
          <div className="mt-1 text-sm font-semibold text-gray-900">
            {s.value}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ======== IITGN add-on helper (NEW) ======== */
function SubProject({ title, bullets = [] }) {
  return (
    <div className="mt-4">
      <div className="font-semibold text-sm">{title}</div>
      <ul className="mt-2 list-disc ml-5 space-y-1 text-sm text-gray-800 leading-relaxed">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  // =========================
  // Put YOUR media in /public
  // =========================
  const mediaSSL = useMemo(
    () => [
      { type: "video", src: "/videos/MRS_SSL/ssl_demo.mp4", poster: "/videos/MRS_SSL/ssl_poster.jpg" },
      { type: "image", src: "/images/MRS_SSL/ssl_map.png", alt: "Signal map / field estimate" },
      { type: "image", src: "/images/MRS_SSL/ssl_robot_setup.png", alt: "TurtleBot3 Burger + LoRa setup" },
    ],
    []
  );

  const mediaTransport = useMemo(
    () => [
      { type: "video", src: "/videos/transport_demo.mp4", poster: "/images/transport_poster.jpg" },
      { type: "image", src: "/images/transport_gazebo.png", alt: "Gazebo multi-robot transport" },
      { type: "image", src: "/images/transport_real.png", alt: "Real-world multi-robot transport (TB3 Burger)" },
    ],
    []
  );

  // ======== IITGN media (NEW) ========
  const mediaIITGN = useMemo(
    () => [
      // Replace with your real filenames in /public
      { type: "image", src: "/images/iitgn_lab.png", alt: "IITGN Robotics Lab work" },
      { type: "image", src: "/images/iitgn_printer.png", alt: "Custom 3D printer using raw plastic as filament" },
      { type: "image", src: "/images/iitgn_robot.png", alt: "Mini-robot / PCB bring-up work" },

      // Optional videos (uncomment if you have them)
      // { type: "video", src: "/videos/iitgn_printer_demo.mp4", poster: "/images/iitgn_printer_poster.jpg" },
      // { type: "video", src: "/videos/iitgn_manipulator_demo.mp4", poster: "/images/iitgn_manipulator_poster.jpg" },
    ],
    []
  );

  // ======== Robocon media (NEW) ========
  const mediaRobocon = useMemo(
    () => [
      // Replace with your real filenames in /public
      { type: "video", src: "/videos/robocon_demo.mp4", poster: "/images/robocon_poster.jpg" },
      { type: "image", src: "/images/robocon_robot.png", alt: "Robocon robot (Target/Defensive system)" },
      { type: "image", src: "/images/robocon_launcher.png", alt: "DAP / pneumatic launching mechanism" },

      // Optional: certificate/award (crop to text, avoid selfie)
      // { type: "image", src: "/images/robocon_award.png", alt: "Robocon award / ranking proof" },
    ],
    []
  );


  /* ======== IITGN data (NEW) ======== */
  const iitgnSubProjects = useMemo(
    () => [
      {
        title: "Tendon-Driven Flexible Manipulator Prototyping",
        bullets: [
          "Built and iterated tendon-driven flexible manipulator prototypes focusing on repeatability, routing, and tension stability.",
          "Worked on mechanical assembly, tendon routing strategies, and anchor-point refinement to reduce backlash and hysteresis.",
          "Assisted with actuator integration and basic control testing to validate achievable curvature and motion repeatability.",
          "Performed bench-level testing to identify failure modes such as tendon slack, uneven loading, and joint fatigue.",
        ],
      },
      {
        title: "Swarm-Compatible Mini-Robot & Custom PCB Bring-Up",
        bullets: [
          "Contributed to swarm-compatible mini-robot platforms for multi-robot experiments.",
          "Assisted with custom PCB bring-up including power checks, flashing firmware, and validating communication interfaces.",
          "Debugged hardware–software integration issues (boot failures, communication drops, sensor initialization).",
          "Supported modular design decisions to enable scalability and repeatable deployment across multiple robots.",
        ],
      },
      {
        title: "Custom 3D Printer Using Raw Plastic as Filament",
        bullets: [
          "Worked on a custom 3D printer designed to directly use raw plastic instead of conventional filament.",
          "Modified and tuned Marlin firmware parameters to support non-standard extrusion behavior and thermal profiles.",
          "Assisted with power electronics integration, including heater control and safe power delivery to actuators.",
          "Supported mechanical calibration and extrusion testing to improve print consistency and reliability.",
          "Project won Best Design Award — Vishwakarma Awards (IIT Delhi) for a sustainable 3D printing system (raw plastic feedstock).",
        ],
      },
      {
        title: "Sensor-Based Material Classification Pipeline",
        bullets: [
          "Developed a sensor-based pipeline to classify raw plastic feedstock characteristics during printing.",
          "Integrated sensors with the printer control stack to enable real-time material detection.",
          "Used sensor feedback to assist in tuning extrusion parameters and identifying inconsistent feedstock.",
          "Validated the pipeline through controlled test runs and comparison against expected material behavior.",
        ],
      },
    ],
    []
  );

  const iitgnTags = useMemo(
    () => [
      "IIT Gandhinagar",
      "Robotics Lab",
      "Hardware prototyping",
      "Custom PCB bring-up",
      "Firmware (Marlin)",
      "Power electronics",
      "Sensor integration",
      "Mechanical iteration",
      "Best Design Award (IIT Delhi)", // <- add this
    ],
    []
  );

  // ======== OoB Services data (NEW) ========
  const oobSubProjects = useMemo(
    () => [
      {
        title: "Multi-layer PCB Design & Validation",
        bullets: [
          "Designed and validated multi-layer PCBs using Altium Designer for embedded hardware applications.",
          "Handled schematic capture, component selection, and PCB layout with attention to signal integrity and power routing.",
          "Reviewed designs against manufacturability and assembly constraints before fabrication.",
        ],
      },
      {
        title: "Embedded Hardware Integration",
        bullets: [
          "Integrated microcontrollers, sensors, wireless modules, and power electronics on custom PCB assemblies.",
          "Supported interface bring-up for communication buses and peripheral connections during early prototypes.",
          "Worked closely with firmware and test workflows to ensure hardware–software compatibility.",
        ],
      },
      {
        title: "Board Bring-Up, Debugging & System Validation",
        bullets: [
          "Performed board bring-up including power checks, clock verification, and initial firmware flashing.",
          "Debugged hardware issues such as power instability, incorrect pin mapping, and peripheral initialization failures.",
          "Conducted system-level validation to verify functionality under expected operating conditions.",
        ],
      },
    ],
    []
  );

  const oobTags = useMemo(
    () => [
      "OoB Services",
      "Altium Designer",
      "Multi-layer PCB design",
      "Board bring-up",
      "Embedded systems",
      "Hardware debugging",
      "Power electronics",
    ],
    []
  );

  // ======== ABU Robocon data (NEW) ========
  const roboconSubProjects = useMemo(
    () => [
      {
        title: "Embedded Control Systems for Competition Robots",
        bullets: [
          "Developed embedded control systems for competition robots using Arduino and STM32 microcontrollers.",
          "Implemented closed-loop motor control using encoder feedback for precise and repeatable actuation.",
          "Integrated IMUs, encoders, motors, distance sensors, and pneumatic mechanisms into a unified control stack.",
        ],
      },
      {
        title: "Motor Driver & Actuator Control PCB Design",
        bullets: [
          "Designed and tested custom PCBs for motor drivers and actuator control tailored for competition constraints.",
          "Validated power distribution, signal routing, and reliability under high-load and transient conditions.",
          "Performed board-level debugging and rapid fixes during testing and competition preparation phases.",
        ],
      },
      {
        title: "System Integration, Testing & Competition Deployment",
        bullets: [
          "Assisted with full-system integration across mechanical, electrical, and control subsystems.",
          "Performed iterative testing, debugging, and tuning under tight timelines leading up to competition.",
          "Supported on-field deployment, failure diagnosis, and rapid recovery during live competition runs.",
        ],
      },
      {
        title: "Team Leadership, Mentorship & IP Contribution",
        bullets: [
          "Mentored junior team members on embedded systems, wiring practices, and debugging methodologies.",
          "Contributed to system architecture discussions for competition strategy and robot design trade-offs.",
          "Co-inventor on Indian patent IN202321008858 related to robotic system design.",
        ],
      },
    ],
    []
  );

  const roboconTags = useMemo(
    () => [
      "ABU Robocon",
      "PCB Design",
      "STM32",
      "Arduino",
      "Pneumatics",
      "Direct Air Pressure (DAP)",
      "DCV Valves",
      "Pressure regulation",
      "Embedded control",
      "Competition robotics",
    ],
    []
  );


  // ======== Publications (NEW) ========
  const publications = useMemo(
    () => [
      {
        title:
          "Sustainable recycling of ABS: comprehensive thermophysical characterisation in filament- versus granules-based 3D printing pathways across multiple reprocessing cycles",
        venue: "Rapid Prototyping Journal (Emerald)",
        year: "2025",
        authors: "Rajdeep Singh Devra, Urvish Shah, Madhu Vadali",
        notes:
          "Compared filament-based vs direct granule-based 3D printing of recycled ABS across multiple reprocessing cycles using thermophysical characterization and sustainability assessment.",
        links: [
          {
            label: "Paper (Publisher)",
            href: "https://www.emerald.com/insight/content/doi/10.1108/RPJ-06-2025-0244/full/html",
            external: true,
          },
          {
            label: "DOI",
            href: "https://doi.org/10.1108/RPJ-06-2025-0244",
            external: true,
          },
          {
            label: "Google Scholar",
            href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xC4NHv0AAAAJ&citation_for_view=xC4NHv0AAAAJ%3Au-x6o8ySG0sC&inst=17395704991083290304",
            external: true,
          },
        ],
      },
      {
        title:
          "Multi-sensor deep learning framework for detection and severity estimation of nozzle clogging in pellet-based 3D printing",
        venue: "Progress in Additive Manufacturing (Springer Nature)",
        year: "2025",
        authors:
          "Rajdeep Singh Devra, Shail Jadav, Urvish Shah, Harish J. Palanthandalam-Madapusi, Madhu Vadali",
        notes:
          "Developed a multi-sensor LSTM-based framework to detect and quantify nozzle clogging severity in pellet-based FDM using time-series signals (e.g., current/vibration/temperature) with strong classification accuracy and generalization.",
        links: [
          {
            label: "Paper (Springer)",
            href: "https://link.springer.com/article/10.1007/s40964-025-01448-z",
            external: true,
          },
          {
            label: "DOI",
            href: "https://doi.org/10.1007/s40964-025-01448-z",
            external: true,
          },
          {
            label: "Google Scholar",
            href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xC4NHv0AAAAJ&citation_for_view=xC4NHv0AAAAJ%3Au5HHmVD_uO8C&inst=17395704991083290304",
            external: true,
          },
        ],
      },
    ],
    []
  );




  const skillGroups = useMemo(
    () => [
      {
        title: "Robotics (ROS)",
        items: ["ROS 2 Humble", "Gazebo", "TF", "Nav2 basics", "Multi-robot namespaces", "Sensor pipelines"],
      },
      {
        title: "Embedded & Electronics",
        items: ["Altium Designer", "STM32", "Arduino", "Board bring-up & debug", "Power electronics integration", "UART/I2C/SPI"],
      },
      {
        title: "Multi-Robot & Autonomy",
        items: ["Decentralized coordination", "Failure-tolerant behaviors", "Field testing", "Experiment logging & metrics"],
      },
      {
        title: "Software",
        items: ["Python", "C++", "Linux", "Git", "Debugging", "Data logging (CSV/TensorBoard-style)"],
      },
      {
        title: "Mechanical (supporting)",
        items: ["CAD (SolidWorks)", "Prototyping & assembly", "System integration mindset"],
      },
    ],
    []
  );

  return (
    <main id="top" className="min-h-screen bg-sky-50 text-gray-900 text-[15px] md:text-[16px]">
      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Robotics / Mechatronics / Embedded Engineer
          </h1>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed max-w-3xl">
            Robotics engineer with hands-on experience across embedded hardware, multi-robot autonomy,
            and real-world testing. I build systems end-to-end: electronics + sensors → ROS integration → behaviors →
            validation in Gazebo and on hardware. Flagship work includes decentralized multi-robot coordination on
            TurtleBot3 Burger platforms (tested with 4 robots, scalable and fault-tolerant by design).
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Pill>TurtleBot3 Burger</Pill>
            <Pill>Embedded HW + ROS</Pill>
            <Pill>ROS 2 Humble</Pill>
            <Pill>Gazebo simulation</Pill>
            <Pill>Real-world tested (4 robots)</Pill>
            <Pill>Decentralized execution</Pill>
            <Pill>Fault-tolerant behavior</Pill>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Flagship projects"
        subtitle=""
      >
        <div className="grid grid-cols-1 gap-6">
          {/* SSL */}
          <Card
            title="Multi-Robot Signal Source Localization"
            meta="Validated in Gazebo + real-world (4 TurtleBot3 Burger robots): LoRa RSSI sensing → decentralized planning → performance evaluation"
            tags={[
              "TurtleBot3 Burger",
              "LoRa E22 RSSI",
              "Gazebo",
              "Decentralized planning",
              "Optimization loop",
              "Logging & metrics",
            ]}
          >
            <StatBox
              items={[
                { label: "Robots", value: "4 TurtleBot3 Burger (real-world tested)" },
                { label: "Validation", value: "Gazebo + real-world" },
                { label: "Scalability", value: "Not limited to 4 (architecture supports scaling)" },
                { label: "Fault handling", value: "Continues on robot dropout" },
              ]}
            />

            <div>
              <div className="font-semibold">What I built</div>
              <ul className="list-disc ml-5 space-y-1">
                <li>End-to-end pipeline: RSSI capture → filtering → field estimate → next waypoint decision (ROS-based).</li>
                <li>Decentralized execution: each robot runs its own decision loop (no shared controller required).</li>
                <li>Peer-aware behavior to reduce redundant sampling and improve coverage.</li>
                <li>Fault-tolerant behavior: if one robot drops out, remaining robots continue the mission without stopping the system.</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold">Engineering details (built for scaling + failures)</div>
              <ul className="list-disc ml-5 space-y-1">
                <li>Scaling is achieved by adding more TurtleBot3 Burger agents running the same node stack (no hard coupling or global state requirement).</li>
                <li>Robots are not interdependent for basic operation; the system continues under partial team availability.</li>
                <li>Waypoint scoring balances “go where signal seems stronger” vs “go where uncertainty is high” under compute limits.</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold">Testing & metrics</div>
              <ul className="list-disc ml-5 space-y-1">
                <li>Validated in Gazebo first (repeatable tests), then tested in real-world runs with 4 TurtleBot3 Burger robots.</li>
                <li>Measured success rate, time-to-source, and localization error over repeated trials.</li>
                <li>Compared different decision horizons vs runtime (compute vs performance trade-off).</li>
              </ul>
              <div className="mt-2 rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700">
                <span className="font-semibold">Add your real numbers here:</span> success rate (%), mean error (m), median time (s),
                N trials, arena size, and dropout cases tested.
              </div>
            </div>

            <MediaGrid items={mediaSSL} />
          </Card>

          {/* Transport */}
          <Card
            title="Decentralized Collaborative Object Transportation"
            meta="Validated in Gazebo + real-world (4 TurtleBot3 Burger robots): decentralized coordination with stability constraints (incline/slip)"
            tags={[
              "TurtleBot3 Burger",
              "ROS 2",
              "Gazebo",
              "Multi-robot coordination",
              "Terrain/slip handling",
              "Telemetry & logging",
            ]}
          >
            <StatBox
              items={[
                { label: "Robots", value: "4 TurtleBot3 Burger (real-world tested)" },
                { label: "Validation", value: "Gazebo + real-world" },
                { label: "Scalability", value: "Not limited to 4 (architecture supports scaling)" },
                { label: "Fault handling", value: "Continues on robot dropout" },
              ]}
            />

            <div>
              <div className="font-semibold">What I built</div>
              <ul className="list-disc ml-5 space-y-1">
                <li>Decentralized multi-robot coordination to move an object without a single-point controller.</li>
                <li>Stability-first behaviors to prevent object spin, drift, or runaway on slopes.</li>
                <li>Structured logging: per-step signals + episode summaries for debugging and performance analysis.</li>
                <li>Fault-tolerant execution: if any robot fails or drops out, remaining robots continue the mission (capacity permitting).</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold">Engineering details (built for real constraints)</div>
              <ul className="list-disc ml-5 space-y-1">
                <li>Robots run independently (decentralized loops), avoiding interdependence that would halt the system on a single failure.</li>
                <li>Incline/slip detection triggers safer behavior modes (support positioning / reduced aggressive pushing).</li>
                <li>Prevents/penalizes overtaking and off-axis pushing that causes rotation or loss of contact.</li>
                <li>Scaling beyond 4 robots is supported by adding additional TurtleBot3 Burger agents with the same behavior stack.</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold">Testing & metrics</div>
              <ul className="list-disc ml-5 space-y-1">
                <li>Validated in Gazebo first (repeatable tests), then tested with 4 TurtleBot3 Burger robots in real-world scenarios.</li>
                <li>Measured success rate and time-to-goal under terrain and disturbance conditions.</li>
                <li>Tracked object stability (yaw error / slip events / oscillations) to identify failure modes.</li>
              </ul>
              <div className="mt-2 rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700">
                <span className="font-semibold">Add your real numbers here:</span> success rate (%), avg time (s), slip events/run,
                yaw error (deg), N runs/episodes, slope range, and dropout cases tested.
              </div>
            </div>

            <MediaGrid items={mediaTransport} />
          </Card>
        </div>
      </Section>

      {/* ======== IITGN SECTION (NEW) ======== */}
      <Section
        id="iitgn"
        title="IIT Gandhinagar Robotics Lab Experience"
        subtitle="Hands-on prototyping and system integration work across robotics hardware, firmware, and testing."
      >
        <Card
          title="IIT Gandhinagar Robotics Lab — Research Intern → Project Assistant"
          meta="Robotics hardware prototyping • mini-robot platforms • custom PCB bring-up • Marlin firmware • power electronics • sensor integration"
          tags={iitgnTags}
        >
          <div className="text-sm text-gray-800 leading-relaxed">
            This work focused on building and validating real robotic hardware systems, emphasizing
            repeatable prototyping, hardware–software integration, and failure-driven iteration.
          </div>

          <div className="mt-2 text-sm text-gray-800">
            <span className="font-semibold">Recognition:</span>{" "}
            Best Design Award — Vishwakarma Awards (IIT Delhi) for a sustainable 3D printing system.
          </div>


          {iitgnSubProjects.map((sp) => (
            <SubProject key={sp.title} title={sp.title} bullets={sp.bullets} />
          ))}

          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700">
            <span className="font-semibold">Engineering focus:</span> rapid prototyping, hardware debugging,
            firmware modification, system bring-up, and test-driven iteration in a lab environment.
          </div>
          <MediaGrid items={mediaIITGN} />
        </Card>
      </Section>

      {/* ======== OoB SERVICES SECTION (NEW) ======== */}
      <Section
        id="oob"
        title="Industry Experience — OoB Services"
        subtitle="Embedded hardware design, board bring-up, and system-level validation in an industry setting."
      >
        <Card
          title="Hardware Design Engineer (Intern)"
          meta="OoB Services, Ahmedabad • Jun 2022 – Aug 2022"
          tags={oobTags}
        >
          <div className="text-sm text-gray-800 leading-relaxed">
            Worked on embedded hardware design and validation tasks with a focus on practical
            system bring-up, debugging, and integration of real-world electronic components.
          </div>

          {oobSubProjects.map((sp) => (
            <SubProject key={sp.title} title={sp.title} bullets={sp.bullets} />
          ))}

          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700">
            <span className="font-semibold">Engineering focus:</span> schematic design, PCB layout,
            hardware bring-up, embedded integration, and validation-driven debugging.
          </div>
        </Card>
      </Section>

      {/* ======== ABU ROBOTCON SECTION (NEW) ======== */}
      <Section
        id="robocon"
        title="ABU Robocon — Competition Robotics Experience"
        subtitle="Multi-year experience building, integrating, and deploying competition robots under real-world constraints."
      >
        <Card
          title="Robotics Hardware Engineer — GTU ABU Robocon Team"
          meta="Ahmedabad, India • Aug 2020 – May 2023"
          tags={roboconTags}
        >
          <div className="text-sm text-gray-800 leading-relaxed">
            Worked on end-to-end development of competition robots, focusing on embedded control,
            hardware integration, and rapid debugging under time-critical and failure-prone conditions.
          </div>

          {roboconSubProjects.map((sp) => (
            <SubProject key={sp.title} title={sp.title} bullets={sp.bullets} />
          ))}

            <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700">
              <span className="font-semibold">Competition highlights:</span>{" "}
              Achieved 1st and 2nd runner-up positions at DD Robocon (IIT Delhi) using two independent robot systems
              (Target Robot + Defensive Robot). Represented India at ABU Robocon 2021 in Jimo, China,
              securing 9th rank among international teams.
            {/* </div> */}
            {/* <span className="font-semibold">Competition highlights:</span> Represented India at ABU Robocon 2021
            (Jimo, China), placing 9th out of 21 teams from 8 countries; contributed to a system awarded */}
            Best Design for robot mechanical and system design.
          </div>
          <MediaGrid items={mediaRobocon} />
        </Card>
      </Section>

      
      {/* ======== PUBLICATIONS SECTION (NEW) ======== */}
      <Section
        id="publications"
        title="Publications"
        subtitle=""
      >
        <div className="grid grid-cols-1 gap-4">
          {publications.map((p) => (
            <Card
              key={`${p.title}-${p.year}`}
              title={p.title}
              meta={`${p.venue} • ${p.year} • ${p.authors}`}
              links={p.links || []}
              tags={["Publication"]}
            >
              <div className="text-sm text-gray-800 leading-relaxed">{p.notes}</div>
            </Card>
          ))}
        </div>
      </Section>

{/* SKILLS */}
      <Section id="skills" title="Skills" subtitle="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold">{g.title}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" subtitle="">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm text-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-gray-500">Email</div>
              <a className="text-blue-600 underline underline-offset-4" href="mailto:shahurvish2001@gmail.com">
                shahurvish2001@gmail.com
              </a>
              {/* <div className="mt-2 text-xs text-gray-500">Replace with your real email.</div> */}
            </div>
            <div>
              <div className="text-xs text-gray-500">GitHub</div>
              <a className="text-blue-600 underline underline-offset-4" href="https://github.com/Urvish2001" target="_blank" rel="noreferrer">
                github.com/Urvish2001
              </a>
            </div>
            <div>
              <div className="text-xs text-gray-500">Resume</div>
              <div className="text-gray-700">
                <a className="text-blue-600 underline underline-offset-4" href="/Urvish_cv.pdf" target="_blank" rel="noreferrer">Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Urvish Shah
      </footer>
    </main>
  );
}