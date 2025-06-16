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
      </section>

      <section className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I’m a Robotics graduate student at University at Buffalo, focused on multi-robot systems, RL, and embedded control.
          I build adaptive, collaborative robot behaviors using RL (MADDPG) in ROS/Gazebo, integrating sensors like IMUs and force sensors.
        </p>
      </section>

      <section className="max-w-4xl mx-auto pt-8 pb-0">
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

      <section className="max-w-4xl mx-auto pt-4 pb-4">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <a href="/Urvish_cv.pdf" download className="text-blue-600 underline">
          Download Resume
        </a>
      </section>
    </main>
  );
}
