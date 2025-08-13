"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Mail, Download, Code, Cpu, Zap, Settings, Calculator, FileText } from "lucide-react"

const skills = [
  {
    name: "C++",
    level: 95,
    icon: Code,
    hoverText:
      "ISO-TP and UDS protocols implementation, bootloader development for BMS ECUs, automotive diagnostic systems",
  },
  {
    name: "C# (.NET)",
    level: 90,
    icon: Settings,
    hoverText: "WPF applications for end-of-line testing, ECU flashing, configuration generation and diagnostics tools",
  },
  {
    name: "Automotive Systems",
    level: 85,
    icon: Cpu,
    hoverText: "CAN, ISO-TP, UDS, J1939 protocols, Formula Student vehicle development, electric vehicle systems",
  },
  {
    name: "Embedded Development",
    level: 80,
    icon: Zap,
    hoverText: "Custom control units (PDM, CAN devices), BMS controller development using Matlab Simulink models",
  },
]

const projects = [
  {
    id: 1,
    title: "ROI Calculator",
    description: "Financial calculation tool for investment analysis with intuitive interface",
    tech: ["React", "TypeScript", "Next.js"],
    liveUrl: "https://roi.afterfive.hr/",
    category: "Full-Stack",
    image: "/roi-calculator.png",
  },
  {
    id: 2,
    title: "E-Invoice HR",
    description: "Croatian e-invoicing system for business automation and compliance",
    tech: ["React", "Node.js", "API Integration"],
    liveUrl: "https://brzi-racun.afterfive.hr/",
    category: "Full-Stack",
    image: "/e-invoice.jpg",
  },
  {
    id: 3,
    title: "Image Coordinates Extractor",
    description: "A modern web application for editing and managing image coordinates, built with Next.js, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://coordinates.afterfive.hr/",
    category: "Full-Stack",
    image: "/image-coordinates.jpg",
  },
]

const experience = [
  {
    company: "dSpace",
    period: "2025 - Present",
    description: "Automotive software development and testing solutions",
  },
  {
    company: "Bugatti Rimac / Rimac Technology",
    period: "2018 - 2025",
    description: "High-performance electric vehicle development",
  },
  {
    company: "FESB Racing",
    period: "2016 - 2021",
    description: "Formula Student and Moto Student competition vehicles",
  },
]

export default function HomePage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [skillsInView, setSkillsInView] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(false) // Reset first
          setTimeout(() => setSkillsInView(true), 50) // Then trigger animation
        } else {
          setSkillsInView(false) // Reset when leaving viewport
        }
      },
      { threshold: 0.3 },
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getGradientPosition = () => {
    if (typeof window === "undefined" || typeof document === "undefined") return 0
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1) // Prevent division by zero
    return Math.min(Math.max((scrollY / maxScroll) * 100, 0), 100)
  }

  const gradientPosition = getGradientPosition()

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 z-0 transition-all duration-300 ease-out"
        style={{
          background: `linear-gradient(
            ${135 + gradientPosition * 0.5}deg,
            oklch(0.08 0.02 0) 0%,
            oklch(0.12 ${0.03 + gradientPosition * 0.001} ${200 + gradientPosition * 0.1}) ${25 + gradientPosition * 0.1}%,
            oklch(0.15 0.05 220) 50%,
            oklch(0.18 ${0.08 + gradientPosition * 0.001} ${240 - gradientPosition * 0.05}) ${75 - gradientPosition * 0.1}%,
            oklch(0.1 0.04 260) 100%
          )`,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="blueprint-grid absolute inset-0"
            style={{
              backgroundImage: `
                   linear-gradient(rgba(190, 198, 211, 0.3) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                 `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent telemetry-scan" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">Engineering Performance</h1>
          <p className="font-serif text-xl md:text-2xl text-blue-500 mb-4">From Track to Code</p>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            C++/C# Software Engineer | dSpace
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="automotive-glow bg-blue-500 hover:bg-blue-600"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10 bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 px-6 bg-muted/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Open Source Projects</h2>
          <p className="font-sans text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Exploring full-stack development in my free time, building practical solutions for real-world problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              return (
                <Card
                  key={project.id}
                  className="project-tile border-border/50 hover:border-blue-500/50 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-105"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <div className="project-thumbnail h-32 flex items-center justify-center overflow-hidden relative group">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:object-contain group-hover:scale-110"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-xl mb-2">{project.title}</CardTitle>
                        <Badge variant="secondary" className="mb-3">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.liveUrl, "_blank")
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-sans mb-4">{project.description}</CardDescription>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Click to view live demo</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Expandable Notice */}
          <div className="mt-12 text-center">
            <p className="font-sans text-muted-foreground text-sm">
              More projects coming soon. This showcase is designed to be easily expandable.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 px-6 relative z-10" ref={skillsRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Technical Specifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={skill.name}
                  className="project-tile border-border/50 hover:border-blue-500/50 relative cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <CardTitle className="font-sans text-lg">{skill.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="text-blue-500 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: skillsInView ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 200}ms`,
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>

                  {hoveredSkill === skill.name && (
                    <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-background border border-border rounded-lg shadow-lg max-w-xs">
                      <p className="text-xs text-muted-foreground">{skill.hoverText}</p>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>

          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-center mb-8">Professional Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experience.map((exp, index) => (
                <Card key={index} className="border-border/50 hover:border-blue-500/50 project-tile">
                  <CardHeader className="text-center">
                    <CardTitle className="font-serif text-lg text-blue-500">{exp.company}</CardTitle>
                    <CardDescription className="font-sans text-sm text-muted-foreground">{exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-sans text-sm text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-blue-500">7+</CardTitle>
                <CardDescription className="font-sans">Years Experience</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-blue-500">Automotive</CardTitle>
                <CardDescription className="font-sans">Industry Focus</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-blue-500">Formula Student</CardTitle>
                <CardDescription className="font-sans">Team Leadership</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>

          <Button
            size="lg"
            className="automotive-glow bg-blue-500 hover:bg-blue-600"
            onClick={() => window.open("mailto:ivan.bosnic.st@gmail.com", "_blank")}
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-sans text-muted-foreground text-sm">© 2025 Ivan Bosnić. Engineered with precision.</p>
        </div>
      </footer>
    </div>
  )
}
