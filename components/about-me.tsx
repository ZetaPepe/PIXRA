"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"


const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 90 },
    { name: "TypeScript", proficiency: 80 },
    { name: "Solidity", proficiency: 70 },
    { name: "Go", proficiency: 60 },
    { name: "Rust", proficiency: 50 },
  ],
  "Frameworks/Libraries": [
    { name: "React", proficiency: 95 },
    { name: "Next.js", proficiency: 85 },
    { name: "Node.js", proficiency: 75 },
    { name: "Express.js", proficiency: 65 },
  ],
  Tools: [
    { name: "Git", proficiency: 98 },
    { name: "Docker", proficiency: 88 },
    { name: "Kubernetes", proficiency: 78 },
  ],
}

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              PIXRA Tokenomics
            </span>
            <span className="ml-2">⛓️🪙</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/PIXRA.png"
                  alt="PIXRA"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <div className="text-lg leading-relaxed whitespace-pre-line text-left">
                  PIXRA tokens (PIXRA), as the core assets of the platform, are able to be traded, pledged, leased and other operations inside and outside the platform.
                  The token distribution and usage mechanism ensures the long-term growth and sustainability of the platform.
                  <br /><br />
                  
                  <div className="mb-3">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-bold">Token name:</span> PIXRA
                  </div>

                  <div className="mb-3">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-bold">Total amount:</span> 10,000,000 PIXRA
                  </div>

                  <div className="mb-3">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-bold">Initial distribution:</span>
                    <br />
                    5% team, 5% rewards, 90% community 
                  </div>

                  <div className="mb-3">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-bold">Usage scenario:</span>
                  </div>

                  <div className="mb-3 ml-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-bold">Asset Tokenization:</span> Tokenize assets through PIXRA, trade, pledge.
                  </div>
        
                  <div className="mb-3 ml-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-bold">Investment and financing:</span> Users can participate in project financing or invest in assets through PIXRA.
                  </div>

                  <div className="mb-3 ml-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-bold">Reward Mechanism:</span> Users who participate in platform activities are rewarded with PIXRA tokens.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}
