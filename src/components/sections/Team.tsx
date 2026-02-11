"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Linkedin, Award } from "lucide-react"
import { clinic } from "@/config/clinic"

export function Team() {
  return (
    <section id="equipo" className="section-padding bg-neutral relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label justify-center">Nuestro Equipo</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary mt-4 mb-6">
            Profesionales{" "}
            <span className="text-primary">especializadas</span>
          </h2>
          <p className="text-xl text-secondary/60 leading-relaxed">
            Experiencia y dedicación al servicio de tu salud
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {clinic.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="space-y-6">
                {/* Image */}
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] rotate-1" />
                  <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-2xl">
                    {member.image && !member.image.includes("placeholder") ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-center text-primary/50">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-5xl">👤</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-secondary/60 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex gap-3 justify-center">
                    {clinic.social.instagram && (
                      <a
                        href={clinic.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {clinic.social.linkedin && (
                      <a
                        href={clinic.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
