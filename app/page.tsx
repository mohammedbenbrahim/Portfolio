"use client"
import '@/styles/globals.css'

import { useState, useEffect } from "react"
import Image from "next/image"
import LogoLoop from './LogoLoop/Logoloop'
import BlurText from "@/app/BlurText"
import ScrollReveal from '@/app/ScrollReveal'
import DarkVeil from '@/app/DarkVeil'
import GlassSurface from '@/app/GlassSurface'
import TiltedCard from '@/app/TiltedCard'
import { SmoothCursor } from "@/app/utils/smooth-cursor"
import ShinyText from '@/components/ShinyText';

import RotatingText from '@/components/RotatingText'
import {
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ChevronUp,
  Code,
  Database,
  Globe,
  Smartphone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

// Tech logos
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Tools" },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management with team features",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing capabilities",
      tech: ["Python", "FastAPI", "OpenAI", "React"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <>
      <div className={`min-h-screen transition-colors duration-300 scroll-smooth ${darkMode ? "dark" : ""}`}>
        {/* Header */}
        <header className="fixed top-4 left-4 right-4 bg-background/80 backdrop-blur-sm border rounded-3xl z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <RotatingText
            texts={['Coding', 'Is', 'fun!']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="transition-all duration-300 hover:scale-110 active:scale-95 hover:rotate-12"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
                <div className="flex flex-col space-y-1">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
            <nav className="px-4 py-4 bg-background/95 backdrop-blur-sm border-t rounded-b-3xl">
              <div className="flex flex-col space-y-4">
                {["home", "about", "skills", "projects", "contact"].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className="hover:text-primary transition-all duration-300 py-2 border-b border-border/50"
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center flex flex-col items-center justify-center">
            <div className="relative animate-fade-in-up mb-8">
              <Image
                src="/F-med.jpg"
                alt="Robot Developer"
                width={300}
                height={300}
                className="rounded-full border-2 border-primary transition-transform duration-300 hover:scale-105 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
              />
            </div>
            <BlurText
              text="Full-Stack Developer"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 transition-all duration-300"
            />
            <ShinyText 
  text="Just some shiny text!" 
  disabled={false} 
  speed={3} 
  className='custom-class' 
/>
            <BlurText
              text="Building digital experiences with modern technologies"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 transition-all duration-300 max-w-2xl mx-auto"
            />
            <div className="flex items-center justify-center gap-2 text-base md:text-lg mb-6">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              <span>Casablanca, Morocco</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transition-all duration-300 hover:scale-105 active:scale-95 bg-transparent w-full sm:w-auto"
                onClick={() => window.open('https://github.com/mohammedbenbrahim', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-16 px-4 bg-muted/50 tracking-tight text-justify">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-xs">
              <ScrollReveal baseOpacity={0} enableBlur baseRotation={5} blurStrength={10}>
                I'm a passionate full-stack developer based in Casablanca, Morocco, with expertise in modern web technologies. I love creating efficient, scalable solutions that solve real-world problems.
              </ScrollReveal>
              <ScrollReveal baseOpacity={0} enableBlur baseRotation={5} blurStrength={10} className="mt-4">
                With experience in both frontend and backend development, I enjoy working on projects that challenge me to learn new technologies and improve my skills continuously.
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <div className="flex items-center gap-2"><Code className="h-4 w-4 text-primary" /> Frontend Development</div>
                <div className="flex items-center gap-2"><Database className="h-4 w-4 text-primary" /> Backend Development</div>
                <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> Web Applications</div>
                <div className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-primary" /> Mobile Responsive</div>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <TiltedCard
                imageSrc="/med2.jpg"
                altText="Mohammed Benbrahim"
                captionText="Mohammed Benbrahim"
                containerHeight="500px"
                containerWidth="300px"
                imageHeight="500px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={<p className="tilted-card-demo-text">Mohammed Benbrahim</p>}
              />
            </div>
          </div>
        </section>  
        
        {/* Tech Logos Section */}
        <section id="tech-logos" className="py-12 md:py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              Technologies I Work With
            </h2>
            <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4 md:p-6">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="rounded-lg mb-4 w-full h-40 md:h-48 object-cover"
                    />
                    <CardTitle className="flex items-center justify-between text-lg md:text-xl">
                      {project.title}
                      <ExternalLink className="h-4 w-4" />
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 px-4">
          <div className="container mx-auto grid lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Information</h3>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> <span>mohammedbenbrahim474@gmail.com</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> <span>+212 696 149 750</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> <span>Casablanca, Morocco</span></div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" size="icon"><a href="https://github.com/mohammedbenbrahim" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /></a></Button>
                <Button variant="outline" size="icon"><a href="https://www.linkedin.com/in/mohammed-benbrahim-636456239/" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /></a></Button>
              </div>
            </div>
            <Card className="order-1 lg:order-2">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Send Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                <Input placeholder="Your Name" className="text-sm md:text-base" />
                <Input placeholder="Your Email" type="email" className="text-sm md:text-base" />
                <Textarea placeholder="Your Message" rows={4} className="text-sm md:text-base resize-none" />
                <Button className="w-full text-sm md:text-base">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      {/* Scroll to Top Button */}
      {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </>
  )
}
