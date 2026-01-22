"use client"

import { Mail, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function EditorialBoardPage() {
  const editorInChief = {
    name: "Dr. K. Thamarai Selvi",
    position: "Editor-in-Chief",
    designation: "Assistant Professor of Commerce",
    institution: "Government Arts College, Gudalur",
    location: "The Nilgiris – 643212, Tamil Nadu, India",
    qualification: "M.Com., M.Phil., Ph.D.",
    specialization: ["Entrepreneurship", "Financial Inclusion", "Digital Literacy", "Tribal Empowerment"],
    experience: "10+ years in teaching & research",
    email: "thamarai@ijems.org",
    orcid: "https://orcid.org/0000-0003-XXXX-XXXX",
    bio: "Dr. Thamarai Selvi is an academician and researcher focused on entrepreneurship, tribal empowerment, and digital education. She has published several papers in national and international journals and actively mentors students in commerce-related research projects.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
  }

  const editorialMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Associate Professor",
      department: "Management Studies",
      institution: "Anna University, Chennai",
      specialization: ["Strategic Management", "Organizational Behavior"],
      email: "rajesh.kumar@example.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Professor",
      department: "Economics",
      institution: "Delhi School of Economics",
      specialization: ["Development Economics", "Public Policy"],
      email: "priya.sharma@example.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    },
    {
      name: "Dr. Arun Patel",
      designation: "Assistant Professor",
      department: "Computer Science",
      institution: "IIT Bombay",
      specialization: ["Artificial Intelligence", "Machine Learning"],
      email: "arun.patel@example.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
    },
    {
      name: "Dr. Meera Nair",
      designation: "Associate Professor",
      department: "Education",
      institution: "University of Mumbai",
      specialization: ["Educational Psychology", "Curriculum Development"],
      email: "meera.nair@example.com",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80"
    },
    {
      name: "Dr. Vikram Singh",
      designation: "Professor",
      department: "Environmental Science",
      institution: "Jawaharlal Nehru University",
      specialization: ["Climate Change", "Sustainability"],
      email: "vikram.singh@example.com",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
    },
    {
      name: "Dr. Anita Desai",
      designation: "Assistant Professor",
      department: "Social Sciences",
      institution: "Tata Institute of Social Sciences",
      specialization: ["Gender Studies", "Rural Development"],
      email: "anita.desai@example.com",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80"
    }
  ]

  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1E90FF] to-[#87CEEB] dark:from-blue-900 dark:to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Editorial Board</h1>
              <p className="text-xl opacity-90">
                Distinguished scholars guiding JMRH's academic excellence
              </p>
            </div>
          </div>
        </section>

        {/* Editor-in-Chief */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-8 text-center">Editor-in-Chief</h2>
              
              <Card className="bg-gradient-to-br from-[#FFFACD] to-[#87CEEB]/20 dark:from-gray-800 dark:to-gray-700 border-2 border-[#1E90FF] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                      <img 
                        src={editorInChief.image} 
                        alt={editorInChief.name}
                        className="w-48 h-48 rounded-full object-cover border-4 border-[#1E90FF] shadow-lg mb-4"
                      />
                      <Badge className="bg-[#1E90FF] text-white px-4 py-2 text-sm">
                        {editorInChief.position}
                      </Badge>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h3 className="text-3xl font-bold text-[#222222] dark:text-white mb-2">{editorInChief.name}</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{editorInChief.designation}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">{editorInChief.institution}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{editorInChief.location}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <span className="font-semibold text-[#222222] dark:text-white">Qualification:</span>
                          <span className="text-gray-700 dark:text-gray-300 ml-2">{editorInChief.qualification}</span>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-[#222222] dark:text-white">Specialization:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {editorInChief.specialization.map((spec, index) => (
                              <Badge key={index} variant="secondary" className="bg-[#98FB98] text-[#222222]">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-[#222222] dark:text-white">Experience:</span>
                          <span className="text-gray-700 dark:text-gray-300 ml-2">{editorInChief.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {editorInChief.bio}
                      </p>
                      
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href={`mailto:${editorInChief.email}`}
                          className="flex items-center text-[#1E90FF] hover:underline"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {editorInChief.email}
                        </a>
                        <a 
                          href={editorInChief.orcid}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-[#1E90FF] hover:underline"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          ORCID Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Editorial Board Members */}
        <section className="py-16 bg-gradient-to-b from-white to-[#FFFACD]/30 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-4 text-center">Editorial Board Members</h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
                Experts from diverse disciplines ensuring quality peer review
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {editorialMembers.map((member, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-32 h-32 rounded-full object-cover border-4 border-[#87CEEB] mb-4"
                        />
                        
                        <h3 className="text-xl font-bold text-[#222222] dark:text-white mb-1">{member.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{member.designation}</p>
                        <p className="text-sm font-semibold text-[#1E90FF] mb-2">{member.department}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{member.institution}</p>
                        
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {member.specialization.map((spec, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-[#1E90FF] text-[#1E90FF]">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                        
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center text-sm text-[#1E90FF] hover:underline"
                        >
                          <Mail className="w-3 h-3 mr-1" />
                          Contact
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Editorial Board CTA */}
        <section className="py-16 bg-[#1E90FF] dark:bg-blue-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Joining Our Editorial Board?</h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              We welcome experienced researchers and academicians to join our editorial team
            </p>
            <a href="mailto:jmrhpublications@gmail.com" className="inline-block">
              <button className="bg-white text-[#1E90FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors">
                Express Your Interest
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
