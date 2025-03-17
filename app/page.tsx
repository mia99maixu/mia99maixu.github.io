"use client"

import type React from "react"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { Badge } from "@/components/ui/badge"

// Add this right after the imports
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simple Banner */}
      <div className="w-full bg-primary/5 border-b">
        <div className="container py-3">{/* Empty banner - just a colored bar */}</div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Personal Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#resume"
              onClick={(e) => scrollToSection(e, "resume")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#blog"
              onClick={(e) => scrollToSection(e, "blog")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-primary">Mai Xu</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Machine Learning Expert | AI Resident | Unlocking the Power of Data
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-4">
                  I'm a Data Science and Analytics Specialist with experience in developing data-driven solutions across
                  multiple domains. My work spans real estate analytics, AI evaluation, HR processes, and sales
                  analytics, where I've consistently enhanced model accuracy and optimized business processes.
                </p>
                <p className="text-lg mb-4">
                  My technical expertise includes Python, SQL, machine learning algorithms, and data visualization
                  tools. I excel at translating complex data into actionable insights that drive business decisions.
                </p>
                <p className="text-lg">
                  I'm currently seeking a data engineering or machine learning role where I can apply my analytical
                  expertise to solve business challenges and drive data-informed decision-making.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge>Python</Badge>
                  <Badge>SQL</Badge>
                  <Badge>R</Badge>
                  <Badge>Machine Learning</Badge>
                  <Badge>Deep Learning</Badge>
                  <Badge>NLP</Badge>
                  <Badge>Time Series Analysis</Badge>
                  <Badge>Bayesian Optimization</Badge>
                  <Badge>PyTorch</Badge>
                  <Badge>TensorFlow</Badge>
                  <Badge>Tableau</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Excel</Badge>
                </div>

                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Master of Business Analytics, GPA: 3.9/4.0</h4>
                    <p className="text-muted-foreground">University of Massachusetts Boston, May 2023</p>
                    <p className="text-muted-foreground">Concentration: Big Data Analytics</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Bachelor of Science in Management</h4>
                    <p className="text-muted-foreground">University of Massachusetts Boston</p>
                    <p className="text-muted-foreground">
                      Concentration: Information System and Information Management
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Related Courses</h4>
                    <p className="text-muted-foreground">
                      Data Mining, Project Management, Business Analytics, Statistics, Regression Analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16 container">
          <h2 className="text-3xl font-bold mb-8">Resume</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-4 py-1">
                  <h4 className="text-xl font-medium">AI Resident</h4>
                  <p className="text-muted-foreground mb-2">Apziva | Remote | Jun 2024 - Present</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Forecasted daily stock exchange decisions with 91% accuracy using Arimax model and optimized
                      recommendations using Decision Tree model (69% accuracy).
                    </li>
                    <li>Implemented Deep Learning models, achieving 99% accuracy with the EfficientNet model.</li>
                    <li>
                      Matched job seeker profiles with job titles using NLP, improving candidate selection by 30% with
                      Bert.
                    </li>
                    <li>
                      Developed an ML model predicting customer happiness with 96% accuracy, enhancing service quality
                      by 20%.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4 py-1">
                  <h4 className="text-xl font-medium">AI Trainer and Evaluator III</h4>
                  <p className="text-muted-foreground mb-2">Outlier | Remote | May 2024 - Present</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Evaluated AI-generated content for factuality, completeness, and grammatical correctness,
                      improving content quality for 100+ documents weekly.
                    </li>
                    <li>
                      Reviewed and enhanced writing quality by providing feedback on 650+ human-written documents.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4 py-1">
                  <h4 className="text-xl font-medium">Real Estate Sales Analyst</h4>
                  <p className="text-muted-foreground mb-2">
                    East West Real Estate, LLC | Quincy, MA | Oct 2021 - Present
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Conducted market analyses using statistical models, improving pricing strategies by 15%.</li>
                    <li>
                      Developed data-driven solutions, enhancing transaction efficiency by 20% and reducing risks by
                      10%.
                    </li>
                    <li>Implemented a client feedback system, boosting customer satisfaction by 25%.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild>
                <a href="/Mai_Xu_Resume.pdf" target="_blank" download rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Resume
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              <ProjectCard
                title="Potential Talent Project"
                description="Automated the process of identifying and ranking talented candidates for technology roles using NLP techniques, reducing manual effort in sourcing and evaluation."
                tags={["NLP", "FastText", "Word2Vec", "SentenceTransformer"]}
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gP2XAAbm3KrN5lGnAaqooa9bXqcKnI.png"
                githubUrl="https://github.com/mia99maixu/tL7eEadNcnpI1poT"
              />

              <ProjectCard
                title="Term Deposit Prediction"
                description="Increased the success rate of call center interactions for banking products by predicting customers most likely to subscribe to term deposit loans with over 81% accuracy."
                tags={["Logistic Regression", "Random Forest", "XGBoost", "Cross-validation"]}
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-02mqEhrITldo8JLohF8PQXVWmncW2C.png"
                githubUrl="https://github.com/mia99maixu/xtL6AOL07DpmQlaU"
              />

              <ProjectCard
                title="Happy Customer Prediction"
                description="Measured and predicted customer satisfaction for a logistics startup during COVID-19, achieving 96% accuracy and enabling targeted strategies to improve service quality."
                tags={["Predictive Modeling", "Survey Analysis", "Classification"]}
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KrWihTV9wZx9xLBnRS5e5NIlaupP6B.png"
                githubUrl="https://github.com/mia99maixu/TyT7OoAUnnF3SKxU"
              />

              <ProjectCard
                title="MonReader Short Video Classification"
                description="Developed a computer vision solution to automatically detect page flips during bulk document scanning, improving accessibility for visually impaired users and researchers."
                tags={["Computer Vision", "CNN", "Video Classification", "Deep Learning"]}
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QndXAfxGbuKOdNbPy1b5ARUTApjmqF.png"
                githubUrl="https://github.com/mia99maixu/qHsn01Y2jO8chDOn"
              />
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 container">
          <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/post-1" className="group">
              <div className="border rounded-lg overflow-hidden transition-all group-hover:shadow-md p-6">
                <p className="text-sm text-muted-foreground mb-2">March 15, 2023</p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  Feature Engineering Techniques for Machine Learning Models
                </h3>
                <p className="text-muted-foreground mb-4">
                  Exploring advanced feature engineering techniques that can significantly improve machine learning
                  model performance.
                </p>
                <span className="text-primary font-medium">Read more →</span>
              </div>
            </Link>

            <Link href="/blog/post-2" className="group">
              <div className="border rounded-lg overflow-hidden transition-all group-hover:shadow-md p-6">
                <p className="text-sm text-muted-foreground mb-2">February 28, 2023</p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  Building Effective Data Pipelines with Python
                </h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive guide to designing and implementing efficient data pipelines for analytics and machine
                  learning.
                </p>
                <span className="text-primary font-medium">Read more →</span>
              </div>
            </Link>
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  I'm currently available for freelance work and open to new opportunities. If you have a project that
                  needs some creative input or you're looking to hire, feel free to reach out through my social profiles
                  or email.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a href="mailto:maymayx1987@gmail.com" className="hover:text-primary transition-colors">
                      maymayx1987@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3 text-primary" />
                    <a
                      href="https://github.com/mia99maixu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/mia99maixu
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/mai-xu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/mai-xu
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Badge className="mt-4">Quincy, MA 02170</Badge>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input id="name" className="w-full px-3 py-2 border rounded-md text-sm" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md text-sm"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input id="subject" className="w-full px-3 py-2 border rounded-md text-sm" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md text-sm resize-none"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Mai Xu. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/mia99maixu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/mai-xu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

