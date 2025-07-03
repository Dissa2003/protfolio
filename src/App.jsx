import React from 'react';
import facerecommand from './background/facerecommand.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const skills = {
  'Programming Languages': ['Java', 'Python', 'C', 'C++', 'Kotlin', 'JavaScript'],
  'Web & App Technologies': ['React', 'Node.js', 'Express', 'MongoDB', 'Flutter', 'Firebase'],
  'DevOps & Tools': ['Docker', 'Git', 'MySQL', 'HTML5', 'CSS3', 'Tailwind'],
};

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <span className="text-2xl font-bold text-blue-700">Mithila Dissa</span>
          <ul className="flex gap-6 text-lg">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-blue-600 transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Home */}
      <section id="home" className="container mx-auto flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hi, I'm Mithila Dissa</h1>
        <h2 className="text-xl md:text-2xl font-medium text-blue-700 mb-6">Software Engineering Undergraduate | Full Stack Developer | DevOps Engineer</h2>
        <p className="max-w-2xl text-lg mb-8">
          I'm a versatile Software Engineering undergraduate at the Sri Lanka Institute of Information Technology with a dual focus on Full-Stack Development and DevOps Engineering. My approach combines academic knowledge with hands-on experience to create end-to-end solutions that are both user-friendly and operationally robust.
        </p>
        <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Contact Me</a>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">About Me</h2>
        <p className="max-w-3xl text-lg mb-4">
          Where others see development and operations as separate domains, I bridge these worlds by embracing both the creative aspects of front-end development and the systematic approach of infrastructure automation. My projects demonstrate not just functional solutions, but thoughtfully architected systems that connect responsive interfaces with reliable backends while implementing DevOps best practices for seamless deployment and scaling.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">DevOps Engineer</span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Full Stack Developer</span>
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">CI/CD Specialist</span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">Cloud Enthusiast</span>
        </div>
      </section>

      {/* Portfolio */}
      <section id="projects" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Serendib Gems - Gem Marketing Platform',
              tech: 'MERN Stack (MongoDB, Express.js, React, Node.js), Machine Learning, ChatBots',
              desc: 'Serendib Gems is a dynamic gem buying and selling platform designed to connect buyers and sellers of Ceylon gems. Built using the MERN stack, it offers a seamless, full-stack web experience with a focus on user-friendly interfaces and real-time interactions. The platform integrates AI-powered chatbots leveraging machine learning to provide detailed information about Ceylon gem identities, including origin, quality, and authenticity. Key features include secure transaction processing, gem catalog management, and personalized user experiences, enhancing trust and engagement in the gem trading ecosystem.',
            },
            {
              title: 'Netflix Movie Recommender System',
              tech: 'Machine Learning, Python',
              desc: 'A sophisticated movie recommendation system inspired by Netflix, developed using machine learning algorithms to deliver personalized movie suggestions. By analyzing user preferences, viewing history, and patterns, the system employs collaborative filtering and content-based filtering techniques to recommend relevant movies. Built with Python and ML libraries, this project showcases expertise in data processing, algorithm design, and enhancing user engagement through tailored content delivery.',
            },
            {
              title: 'AyurMitra - Drug Ordering System',
              tech: 'Java, HTML, CSS, JavaScript',
              desc: 'AyurMitra is an online drug ordering system designed to streamline access to Ayurvedic medicines. Developed using Java for robust backend logic and HTML, CSS, and JavaScript for an intuitive frontend, the platform enables users to browse, select, and order medicines with ease. Key features include a product catalog, secure payment integration, and order tracking, ensuring a seamless user experience while promoting accessibility to traditional healthcare solutions.',
            },
            {
              title: 'Finance Tracker',
              tech: 'Kotlin',
              desc: 'Finance Tracker is a mobile application built with Kotlin to help users manage their personal finances effectively. The app allows users to track income, expenses, and savings goals with a clean, user-friendly interface. Features include budget categorization, expense visualization, and financial goal setting, empowering users to make informed financial decisions. This project demonstrates proficiency in mobile app development and UI/UX design tailored for Android platforms.',
            },
            {
              title: 'SureRide - Car Rental System',
              tech: 'PHP, HTML, JavaScript',
              desc: 'SureRide is a web-based car rental system designed to simplify vehicle booking and management. Built with PHP for server-side logic and HTML/JavaScript for a responsive frontend, the platform enables users to browse available vehicles, book rentals, and manage reservations. Key features include real-time availability checks, secure payment processing, and an admin dashboard for rental management, showcasing expertise in full-stack web development.',
            },
            {
              title: 'SkyLuxes - Airline Ticket Reservation System',
              tech: 'PHP, HTML, JavaScript',
              desc: 'SkyLuxes is an airline ticket reservation system that streamlines the process of booking flights. Developed using PHP for backend functionality and HTML/JavaScript for a dynamic frontend, the platform offers users the ability to search for flights, select seats, and complete bookings securely. Features include real-time flight availability, booking confirmation, and user account management, demonstrating skills in building scalable and user-centric web applications.',
            },
            {
              title: 'Rent A Ride',
              tech: 'Java, HTML, CSS, JavaScript',
              desc: 'Rent A Ride is a web-based platform for renting vehicles, offering a seamless experience for users to browse and book cars. Built with Java for robust backend processing and HTML, CSS, and JavaScript for an engaging frontend, the system includes features like vehicle search, booking management, and payment integration. The project highlights proficiency in creating responsive, full-stack applications with a focus on user convenience and operational efficiency.',
            },
            {
              title: 'Attendance Marking Using Face Recognition',
              tech: 'Machine Learning, Python, Computer Vision',
              desc: 'An innovative attendance marking system that leverages face recognition technology to automate attendance tracking. Built using Python and machine learning libraries for facial recognition, the system identifies individuals in real-time and logs attendance securely. Key features include high-accuracy face detection, integration with attendance databases, and a user-friendly interface, showcasing expertise in computer vision and AI-driven automation.',
            },
          ].map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 flex items-center justify-center bg-gray-100">
                <img src={facerecommand} alt={project.title} className="object-cover w-full h-48 md:h-full" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-700 mb-4">{project.desc}</p>
                <h3 className="text-2xl font-semibold mb-2 text-blue-700">{project.title}</h3>
                <div className="text-sm text-gray-500 mb-2">{project.tech}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <li key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-gray-800 font-medium text-sm">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Education</h2>
        <div className="bg-white rounded-lg shadow p-6 flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/en/8/8e/SLIIT_Logo.png" alt="Sri Lanka Institute of Information Technology logo" className="w-20 h-20 object-contain rounded" />
          <div>
            <h3 className="text-xl font-semibold">Sri Lanka Institute of Information Technology</h3>
            <p className="text-gray-700">2023 - 2027</p>
            <p className="text-gray-600">Bachelor of Software Engineering</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Contact Me</h2>
        <div className="bg-white rounded-lg shadow p-8 max-w-xl mx-auto">
          <p className="mb-4 text-lg">Feel free to reach out to me for any questions or opportunities!</p>
          <div className="mb-4">
            <div className="font-semibold">Mithila Dissa</div>
            <div className="text-gray-700">Undergraduate student at SLIIT focusing on Software Engineering, DevOps practices, and Full Stack Development.</div>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-2"><span className="font-semibold">Email:</span> <a href="mailto:dilzhanyapa@gmail.com" className="text-blue-600 hover:underline">gamagedissanayake1021@gmail.com</a></div>
            <div className="flex items-center gap-2"><span className="font-semibold">Phone:</span> <a href="tel:+94703802880" className="text-blue-600 hover:underline">+94 74 332 0286</a></div>
          </div>
          <div className="mb-4">
            <div className="font-semibold mb-2">Connect with me on social media</div>
            <a href="https://www.linkedin.com/in/dilzhanyapa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-6 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-2 md:mb-0">&copy; 2025 Mithila Dissa. All rights reserved.</div>
          <div>
            <a href="#home" className="text-blue-400 hover:underline">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 