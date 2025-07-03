import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Database, Cloud, Cpu, Mail, Phone, Linkedin, Github, ExternalLink, Award, MapPin, Calendar } from 'lucide-react';
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
  'Programming Languages': {
    items: ['Java', 'Python', 'C', 'C++', 'Kotlin', 'JavaScript'],
    icon: <Code className="w-6 h-6" />
  },
  'Web & App Technologies': {
    items: ['React', 'Node.js', 'Express', 'MongoDB', 'Flutter', 'Firebase'],
    icon: <Database className="w-6 h-6" />
  },
  'DevOps & Tools': {
    items: ['Docker', 'Git', 'MySQL', 'HTML5', 'CSS3', 'Tailwind'],
    icon: <Cloud className="w-6 h-6" />
  },
};

const projects = [
  {
    title: 'Serendib Gems - Gem Marketing Platform',
    tech: 'MERN Stack (MongoDB, Express.js, React, Node.js), Machine Learning, ChatBots',
    desc: 'Serendib Gems is a dynamic gem buying and selling platform designed to connect buyers and sellers of Ceylon gems. Built using the MERN stack, it offers a seamless, full-stack web experience with a focus on user-friendly interfaces and real-time interactions. The platform integrates AI-powered chatbots leveraging machine learning to provide detailed information about Ceylon gem identities, including origin, quality, and authenticity. Key features include secure transaction processing, gem catalog management, and personalized user experiences, enhancing trust and engagement in the gem trading ecosystem.',
    category: 'Full Stack',
    color: 'from-emerald-400 to-cyan-400'
  },
  {
    title: 'Netflix Movie Recommender System',
    tech: 'Machine Learning, Python',
    desc: 'A sophisticated movie recommendation system inspired by Netflix, developed using machine learning algorithms to deliver personalized movie suggestions. By analyzing user preferences, viewing history, and patterns, the system employs collaborative filtering and content-based filtering techniques to recommend relevant movies. Built with Python and ML libraries, this project showcases expertise in data processing, algorithm design, and enhancing user engagement through tailored content delivery.',
    category: 'Machine Learning',
    color: 'from-purple-400 to-pink-400'
  },
  {
    title: 'AyurMitra - Drug Ordering System',
    tech: 'Java, HTML, CSS, JavaScript',
    desc: 'AyurMitra is an online drug ordering system designed to streamline access to Ayurvedic medicines. Developed using Java for robust backend logic and HTML, CSS, and JavaScript for an intuitive frontend, the platform enables users to browse, select, and order medicines with ease. Key features include a product catalog, secure payment integration, and order tracking, ensuring a seamless user experience while promoting accessibility to traditional healthcare solutions.',
    category: 'Web Development',
    color: 'from-green-400 to-blue-400'
  },
  {
    title: 'Finance Tracker',
    tech: 'Kotlin',
    desc: 'Finance Tracker is a mobile application built with Kotlin to help users manage their personal finances effectively. The app allows users to track income, expenses, and savings goals with a clean, user-friendly interface. Features include budget categorization, expense visualization, and financial goal setting, empowering users to make informed financial decisions. This project demonstrates proficiency in mobile app development and UI/UX design tailored for Android platforms.',
    category: 'Mobile Development',
    color: 'from-yellow-400 to-orange-400'
  },
  {
    title: 'SureRide - Car Rental System',
    tech: 'PHP, HTML, JavaScript',
    desc: 'SureRide is a web-based car rental system designed to simplify vehicle booking and management. Built with PHP for server-side logic and HTML/JavaScript for a responsive frontend, the platform enables users to browse available vehicles, book rentals, and manage reservations. Key features include real-time availability checks, secure payment processing, and an admin dashboard for rental management, showcasing expertise in full-stack web development.',
    category: 'Web Development',
    color: 'from-blue-400 to-indigo-400'
  },
  {
    title: 'SkyLuxes - Airline Ticket Reservation System',
    tech: 'PHP, HTML, JavaScript',
    desc: 'SkyLuxes is an airline ticket reservation system that streamlines the process of booking flights. Developed using PHP for backend functionality and HTML/JavaScript for a dynamic frontend, the platform offers users the ability to search for flights, select seats, and complete bookings securely. Features include real-time flight availability, booking confirmation, and user account management, demonstrating skills in building scalable and user-centric web applications.',
    category: 'Web Development',
    color: 'from-cyan-400 to-blue-400'
  },
  {
    title: 'Rent A Ride',
    tech: 'Java, HTML, CSS, JavaScript',
    desc: 'Rent A Ride is a web-based platform for renting vehicles, offering a seamless experience for users to browse and book cars. Built with Java for robust backend processing and HTML, CSS, and JavaScript for an engaging frontend, the system includes features like vehicle search, booking management, and payment integration. The project highlights proficiency in creating responsive, full-stack applications with a focus on user convenience and operational efficiency.',
    category: 'Full Stack',
    color: 'from-red-400 to-pink-400'
  },
  {
    title: 'Attendance Marking Using Face Recognition',
    tech: 'Machine Learning, Python, Computer Vision',
    desc: 'An innovative attendance marking system that leverages face recognition technology to automate attendance tracking. Built using Python and machine learning libraries for facial recognition, the system identifies individuals in real-time and logs attendance securely. Key features include high-accuracy face detection, integration with attendance databases, and a user-friendly interface, showcasing expertise in computer vision and AI-driven automation.',
    category: 'AI/ML',
    color: 'from-indigo-400 to-purple-400'
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Mithila Dissanayake
          </span>
          <ul className="flex gap-6 text-lg">
            {navLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-cyan-400 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Home */}
      <section id="home" className="relative container mx-auto flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="relative z-10">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Cpu className="w-20 h-20 text-cyan-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Hi, I'm Mithila
          </h1>
          <div className="text-xl md:text-2xl font-medium mb-6 space-y-2">
            <div className="text-cyan-400">Software Engineering Undergraduate</div>
            <div className="text-purple-400">Full Stack Developer</div>
            <div className="text-pink-400">DevOps Engineer</div>
          </div>
          <p className="max-w-3xl text-lg mb-8 text-gray-300 leading-relaxed">
            I'm a versatile Software Engineering undergraduate at the Sri Lanka Institute of Information Technology with a dual focus on Full-Stack Development and DevOps Engineering. My approach combines academic knowledge with hands-on experience to create end-to-end solutions that are both user-friendly and operationally robust.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="inline-block border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative container mx-auto py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Where others see development and operations as separate domains, I bridge these worlds by embracing both the creative aspects of front-end development and the systematic approach of infrastructure automation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My projects demonstrate not just functional solutions, but thoughtfully architected systems that connect responsive interfaces with reliable backends while implementing DevOps best practices for seamless deployment and scaling.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {['DevOps Engineer', 'Full Stack Developer', 'CI/CD Specialist', 'Cloud Enthusiast'].map((role, idx) => (
                  <span 
                    key={role} 
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-full font-medium backdrop-blur-sm"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-purple-400/10 backdrop-blur-sm border border-cyan-400/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Excellence in Innovation</h3>
                  <p className="text-gray-300">Bridging creativity with technical expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative container mx-auto py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img src={facerecommand} alt={project.title} className="object-cover w-full h-48" />
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-700 mb-4">{project.desc}</p>
                  <h3 className="text-2xl font-semibold mb-2 text-blue-700">{project.title}</h3>
                  <div className="text-sm text-gray-500 mb-2">{project.tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative container mx-auto py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, { items, icon }]) => (
              <div key={category} className="group">
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-400/20 p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-cyan-400 mr-3">
                      {icon}
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIdx) => (
                      <span 
                        key={skill} 
                        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
                        style={{ animationDelay: `${skillIdx * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur opacity-75"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-400/20 p-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/8/8e/SLIIT_Logo.png" 
                    alt="SLIIT Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Sri Lanka Institute of Information Technology</h3>
                  <p className="text-purple-400 font-medium text-lg mb-2">Bachelor of Software Engineering</p>
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>2023 - 2027</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur opacity-75"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-400/20 p-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Get In Touch</h3>
                  <p className="text-gray-300 mb-6">
                    I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <a 
                        href="mailto:gamagedissanayake1021@gmail.com" 
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        gamagedissanayake1021@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <a 
                        href="tel:+94743320286" 
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        +94 74 332 0286
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-cyan-400" />
                      <a 
                        href="https://www.linkedin.com/in/dilzhanyapa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-400/20 p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">About Me</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-cyan-400">Mithila Dissa</strong>
                  </p>
                  <p>
                    Undergraduate student at SLIIT focusing on Software Engineering, DevOps practices, and Full Stack Development.
                  </p>
                  <p>
                    Passionate about creating innovative solutions that bridge the gap between development and operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-cyan-400/20 py-8 mt-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-4 md:mb-0 text-gray-400">
            &copy; 2025 Mithila Dissa. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-cyan-400 hover:text-purple-400 transition-colors">
              Back to top
            </a>
            <Github className="w-5 h-5 text-cyan-400 hover:text-purple-400 transition-colors cursor-pointer" />
            <Linkedin className="w-5 h-5 text-cyan-400 hover:text-purple-400 transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}