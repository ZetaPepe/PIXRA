"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Calendar,
  FileText,
  Blocks,
  Cpu,
  Braces,
  MessageSquare,
  Smartphone,
  PenTool,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import Typewriter from 'typewriter-effect'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative py-16 flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
             <Typewriter
                options={{
                  strings: ['PIXRA - Bridging Real Assets to the Digital Future'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  pauseFor: 2000,
                }}
              />
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
                 PIXRA is a platform that digitizes real-world assets through advanced AI 
                 and MCP technologies and uplinks their value through the blockchain. 
                 We transform real assets into tradable and virtualizable digital assets,
                 bringing a more efficient and secure way of asset management and trading.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {/* New Button for Beta App */}
              <a
                href="https://www.pixra.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Beta App
                </Button>
              </a>
              
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-2 pb-8 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                About PIXRA
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Blocks className="w-10 h-10 text-purple-500" />}
                title="What is PIXRA?"
                description="PIXRA transforms real-world physical assets (such as houses, cars, artworks) into digital assets through pixelation and virtual mapping technology."
              />
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-pink-500" />}
                title="MCP Standardization"
                description="Using the Model Context Protocol (MCP), assets are standardized for secure trading, staking, leasing, and showcasing on the blockchain."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-purple-500" />}
                title="Physical Asset Digitization"
                description="Convert real-world assets into digital forms to simplify management, improve liquidity, and enable efficient trading."
              />
              <ServiceCard
                icon={<FileText className="w-10 h-10 text-pink-500" />}
                title="Blockchain Security"
                description="Ensure transparency, security, and immutability of asset transactions and ownership transfers through blockchain technology."
              />
              <ServiceCard
                icon={<Github className="w-10 h-10 text-purple-500" />}
                title="AI and MCP Empowerment"
                description="Integrating AI with MCP to intelligently and efficiently map, standardize, and process asset data in the digital ecosystem."
              />
              <ServiceCard
                icon={<MessageSquare className="w-10 h-10 text-pink-500" />}
                title="Entering the Virtual Economy"
                description="With PIXRA, anyone can easily digitize their physical assets and step into a more efficient, transparent, and secure virtual economy."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                How PIXRA Works 
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Asset Data Collection"
                description="Capture detailed real-world asset information via sensors, images, or video technologies."
                tags={["Sensors", "Data Capture", "Real-World Assets", "Web3"]}
              />
              <ProjectCard
                title="Initial Data Processing"
                description="Preprocess and organize collected raw data to prepare for AI-driven modeling."
                tags={["Data Preprocessing", "Organization", "AI Input"]}
                image="/images/cross-chain-bridge.jpg"
              />
              <ProjectCard
                title="AI-Based Pixelation"
                description="Apply AI algorithms to pixelate and create precise digital models of the assets."
                tags={["AI Modeling", "Pixelation", "Digital Twin"]}
                image="/images/decentralized-identity.jpg"
              />
              <ProjectCard
                title="MCP Standardization"
                description="Use the Model Context Protocol (MCP) to standardize digital assets for interoperability across blockchain ecosystems."
                tags={["MCP Protocol", "Standardization", "Interoperability"]}
                image="/images/solidity-generator.jpg"
              />
              <ProjectCard
                title="Tokenization via RWA"
                description="Transform standardized assets into blockchain tokens via the Real-World Asset (RWA) mechanism, assigning them real value."
                tags={["RWA", "Tokenization", "Asset Value"]}
                image="/images/solidity-generator.jpg"
              />
              <ProjectCard
                title="Blockchain Integration"
                description="Deploy and manage tokenized assets on the blockchain for trading, staking, leasing, and showcasing."
                tags={["Blockchain", "Smart Contracts", "Asset Management"]}
                image="/images/solidity-generator.jpg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Ping US
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-2">Prefer to schedule a meeting?</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="https://www.pixra.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      PIXRA Test Dapp
                    </a>
                    <a
                      href="https://www.pixra.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View PIXRA Test Dapp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/dodufish/PIXRA" label="GitHub" />
            <SocialIcon icon={<Twitter />} href="https://x.com/pixra_ai" label="Twitter" />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} PIXRA. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">{title}</h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:PIXRA@gmail.com" className="text-purple-400 hover:text-purple-300">
        PIXRA@gmail.com
      </a>
    </div>
  )
}
