"'use client'"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, Code, Mail, Github, Linkedin } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Your Name</span>
              </div>
            </div>
            <div className="flex items-center">
              <a href="#education" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Education</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              DevOps Engineer
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              Passionate about automating, optimizing, and securing cloud infrastructure. Recent Master's graduate with hands-on project experience in DevOps practices and tools.
            </p>
            <div className="mt-8">
              <Button className="mr-4">Download CV</Button>
              <Button variant="outline">Contact Me</Button>
            </div>
          </div>
        </section>

        <section id="education" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Education</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2" />
                Master's in DevOps
              </CardTitle>
              <CardDescription>University Name, United Kingdom</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Graduated: [Year]</p>
              <p>Key courses: Cloud Computing, Continuous Integration/Continuous Deployment, Infrastructure as Code, Containerization and Orchestration</p>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Projects & Case Studies</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <Card key={project}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2" />
                    Project {project}
                  </CardTitle>
                  <CardDescription>Brief project description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Key technologies used: Docker, Kubernetes, Jenkins, Terraform</p>
                  <Button className="mt-4" variant="outline">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Skills</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {["'Docker'", "'Kubernetes'", "'Jenkins'", "'Terraform'", "'AWS'", "'Azure'", "'Git'", "'Python'"].map((skill) => (
              <Card key={skill}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2" />
                    {skill}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Contact</h2>
          <Card>
            <CardContent className="flex flex-col items-center py-6">
              <Mail className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-xl font-semibold mb-2">Get in touch</p>
              <p className="text-gray-500 dark:text-gray-300 mb-4">I'm always open to new opportunities and collaborations</p>
              <Button>Send Message</Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2023 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}