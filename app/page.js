// npm run dev

'use client';
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Urvish Shah</h1>
        <p className="text-lg mb-6">Robotics Engineer | Embedded Systems | Multi-Agent Control</p>
        <a href="mailto:shahurvish2001@gmail.com" className="text-blue-600 underline">
          Contact Me
        </a>
        <a href="/Urvish_cv.pdf" download className="text-sm text-blue-600 underline mt-2 block">
          📄 Download Resume
        </a>
      </section>

      {/* Rotating Highlights Carousel */}
      <section className="max-w-4xl mx-auto py-6">
        <h2 className="text-xl font-semibold mb-4">🚀 Highlighted Projects</h2>
        <div className="relative w-200 h-140 overflow-hidden rounded-xl shadow-lg">
          <div className="animate-slide flex w-[100%] h-[100%]">
            <a href="#robocon" className="relative w-full flex-shrink-0">
              <img src="/images/team_photo_with_robot.JPG" alt="Robocon" className="rounded object-cover w-full h-full scale-90 transform origin-center " />
              <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full text-center text-sm p-1">Robocon Journey</div>
            </a>

            <a href="#robocon" className="relative w-full flex-shrink-0">
              <img src="/images/DAP_photo.JPG" alt="Arrow Launchers Robots" className="rounded object-cover h-full w-full scale-90 transform origin-center" />
              <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full text-center text-sm p-1">Robot Photos</div>
            </a>
            
            <a href="#scarecrow" className="relative w-full flex-shrink-0">
              <img src="/images/Scarecrow_team.png" alt="Scarecrow" className="rounded object-cover w-full h-full scale-90 transform origin-center" />
              <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full text-center text-sm p-1">Scarecrow 2.0</div>
            </a>
            <a href="#iitgn" className="relative w-full flex-shrink-0">
              <img src="/images/3dprinter_award.png" alt="IITGN Lab" className="object-cover w-full h-120 scale-95 transform origin-center" />
              <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full text-center text-sm p-1">IITGN Robotics Lab</div>
            </a>
            <a href="#resume" className="relative w-full flex-shrink-0">
              <img src="/images/International_certificate.jpg" alt="Resume Highlight" className="object-contain w-full h-full scale-85 transform origin-center" />
              <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full text-center text-sm p-1">Robocon International Certificate</div>
            </a>
          </div>
        </div>
        <style jsx>{`
          @keyframes slide {
            0% { transform: translateX(0%); }
            20% { transform: translateX(0%); }
            25% { transform: translateX(-100%); }
            45% { transform: translateX(-100%); }
            50% { transform: translateX(-200%); }
            70% { transform: translateX(-200%); }
            75% { transform: translateX(-300%); }
            95% { transform: translateX(-300%); }
            100% { transform: translateX(0%); }
          }
          .animate-slide {
            animation: slide 30s infinite linear;
          }
        `}</style>
      </section>



      

      <section id="about" className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I’m a Robotics graduate student at University at Buffalo, focused on multi-robot systems, RL, and embedded control.
          I build adaptive, collaborative robot behaviors using RL (MADDPG) in ROS/Gazebo, integrating sensors like IMUs and force sensors.
        </p>
      </section>

      <section id = "robocon" className="max-w-4xl mx-auto pt-8 pb-0">
        <h2 className="text-2xl font-semibold mb-4">Robocon Journey</h2>
        <div className="border p-4 rounded-xl shadow-sm space-y-4">
          <h3 className="font-bold text-xl">Robocon India & ABU Robocon – Journey from Trainee to International Finalist</h3>
          <p className="text-sm text-gray-600">
            <strong>Technologies:</strong> PCB Design, Pneumatics, Direct Air Pressure Launching, Mechanical CAD, DCV Valves, Pressure Regulation
          </p>
          <p>
            I began my Robocon journey in my second semester (2020) with hands-on training in electronics and mechanical fabrication. We participated in DD Robocon organized by IIT Delhi, where we built two robots — a Target Robot and a Defensive Robot — to throw arrows into dynamic and static pots placed at varying heights.
          </p>
          <p>
            We developed two launching mechanisms:
            <ul className="list-disc ml-6 mt-1">
              <li><strong>Direct Air Pressure (DAP):</strong> Used controlled air pressure and rotation from 30° to 150° to shoot arrows at precise distances.</li>
              <li><strong>Pneumatic Jerk Mechanism:</strong> Used gripper release with DCV valve-regulated pressure for precise jerks.</li>
            </ul>
          </p>
          <p>
            Our team achieved 1st and 2nd runner-up positions nationally — the first team in 19 years to do so with two separate robot systems. We represented India in ABU Robocon 2021 in Jimo, China and secured 9th rank among global teams.
          </p>
          <p>
            Post-competition, we trained over 200 students, mentoring the next Robocon generation.
          </p>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img src="/images/International_certificate.jpg" alt="International Certificate" className="rounded object-contain h-64 w-full bg-white" />
              <img src="/images/Sankul_day_certificate.jpg" alt="University Certificate" className="rounded object-cover h-64 w-full" />
              <img src="/images/Awards_photo.jpg" alt="Field Demo" className="rounded object-cover h-64 w-full" />
              <img src="/images/DAP_photo.JPG" alt="Arrow Launchers Robots" className="rounded object-cover h-64 w-full" />
              <img src="/images/Passing_and_catching.jpg" alt="Robo Rugby Robots" className="rounded object-cover h-64 w-full" />
              <img src="/images/team_photo_with_robot.JPG" alt="Indoor Robocon team" className="rounded object-cover h-64 w-full" />
            </div>

            <div className="grid grid-cols-3 gap-4 items-start mt-2">
              <div className="col-span-2 h-[450px] bg-white p-2 rounded flex justify-center items-center">
                <img
                  src="/images/Cad_photo.png"
                  alt="Updated CAD Design"
                  className="h-full object-contain rotate-270"
                />
              </div>
              <div className="h-[450px] bg-white p-2 rounded flex justify-center items-center">
                <img
                  src="/images/PCB_design.JPG"
                  alt="Custom PCB Design"
                  className="h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="scarecrow" className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Scarecrow 2.0</h2>
        <div className="border p-4 rounded-xl shadow-sm space-y-4">
          <p>
            <strong>Advanced Scarecrow 2.0</strong> is an innovative, sensor-based system developed by me and my team of four to help farmers protect crops from stray animals—without causing them harm. It's a modern reinvention of the traditional scarecrow, combining low-cost hardware with smart sensing and communication.
          </p>
          <p>
            Our system uses <strong>PIR sensors</strong> to detect animal movement, <strong>moisture sensors</strong> to monitor soil health, and <strong>rain sensors</strong> to detect rainfall. These inputs are processed by an <strong>Arduino-based microcontroller</strong>, which controls a buzzer to emit a high-frequency sound that repels animals in a non-harmful way. For alerts, a <strong>SIM800L GSM module</strong> sends emergency messages directly to the farmer’s phone.
          </p>
          <p>
            To ensure energy independence in remote locations, we integrated a <strong>solar panel and rechargeable battery</strong>, making the unit self-sufficient and field-ready.
          </p>
          <p>
            Our prototype demonstrated over <strong>80% effectiveness</strong> in field tests. We presented the project at an <strong>Ideathon organized by the Entrepreneurship Cell in collaboration with IIT Bombay</strong>, where it won the <strong>runner-up prize</strong> for its practical impact and innovation.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Technologies:</strong> Arduino, GSM SIM800L, PIR & Rain Sensors, Moisture Sensor, Solar Panel, Embedded C
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <img src="/images/Scarecrow_animated_photo.png" alt="Advanced Scarecrow Conceptual Diagram" className="rounded object-contain bg-white h-64 w-full" />
            <img src="/images/Scarecrow_team.png" alt="Advanced Scarecrow Team Photo with actual model " className="rounded object-contain bg-white h-64 w-full" />
            <img src="/images/Scarecrow_Circuit.png" alt="Hardware prototype" className="rounded object-contain bg-white h-64 w-full" />
            <img src="/images/SMS_alert_screenshot.png" alt="SMS alert screenshot" className="rounded object-contain bg-white h-64 w-full" />
          </div>
        </div>
      </section>


      <section id="iitgn"  className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">IITGN Robotics Lab Journey</h2>
        <div className="border p-4 rounded-xl shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-bold">Research Intern – IIT Gandhinagar</h3>
            <p className="text-sm text-gray-600">Jan 2023 – Sep 2023</p>
            <p className="mt-2">
              I joined the lab under Prof. Madhu Vadali, initially working on firmware for a tendon-driven flexible manipulator in collaboration with PhD student Md Modassir Firdaus. The manipulator's tip was actuated via pulleys controlled by servo motors, with firmware enabling remote-based directional movement.
            </p>
            <p className="mt-2">
              I then developed a compact, TurtleBot-style robot for testing swarm algorithms with PhD student Suraj Borate. I designed and fabricated the chassis, created custom PCBs, and integrated ESP32 for motor control and Raspberry Pi for algorithm execution, ensuring sensor-rich, real-time feedback.
            </p>
            <p className="mt-2">
              My third project involved building a 3D printer capable of using raw plastic waste as filament, guided by PhD scholar Rajdeepsingh Devra. We used a Prusa i3 MK3S+ base, a custom extruder powered by a high-torque DC motor and dual 24V heaters, and a Cytron MDDS30 driver with encoder feedback. I assembled the hardware and optimized Marlin 2.0.9.5 firmware for non-standard control modes.
            </p>
            <p className="mt-2">
              We also co-developed a plastic shredder with a rotating 5mm mesh and IR-sensor-based flow control, delivering regulated flake input to the extruder. This hardware integration ensured consistent filament feed using threshold-based automation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Project Assistant – IIT Gandhinagar</h3>
            <p className="text-sm text-gray-600">Oct 2023 – Apr 2024</p>
            <p className="mt-2">
              Promoted to Project Assistant, I focused on advanced experimentation and diagnostics. We enhanced print quality by integrating sensors like current sensors, IMU, and acoustic pickups to classify material types and predict failures. This sensor data helped reduce print errors by 90% while reducing filament cost by 70%.
            </p>
            <p className="mt-2">
              Our enhanced 3D printer handled multiple recycled plastic types (e.g. LDPE, PLA, ABS), including reinforcement experiments with silica gel and iron powder. The resulting prints were stress-tested and achieved a 20% strength gain over standard filament models.
            </p>
            <p className="mt-2">
              After over 8 months of work, we presented our printer at a national competition at IIT Delhi and won the <strong>Best Design Award</strong> for our contribution to sustainable fabrication.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <img src="/images/3dprinter_award.png" alt="Award-winning 3D Printer Setup" className="rounded object-contain bg-white h-64 w-full" />
              <img src="/images/mini_robot_swarm.jpg" alt="Swarm test robot with custom PCB" className="rounded object-contain bg-white h-64 w-full" />
              <img src="/images/3dprint_start.jpg" alt="Initial test print from recycled plastic" className="rounded object-contain bg-white h-64 w-full" />
              <img src="/images/3dprint_closeup.jpg" alt="Close-up of reinforcement print layer" className="rounded object-contain bg-white h-64 w-full" />
            </div>
          </div>
        </div>
      </section>
   
      <section id="resume" className="max-w-4xl mx-auto pt-4 pb-4">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <a href="/Urvish_cv.pdf" download className="text-blue-600 underline">
          Download Resume
        </a>
      </section>
    </main>
  );
}
