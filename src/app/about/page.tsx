"use client"

import { Award, Target, Users, Globe, BookOpen, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1E90FF] to-[#87CEEB] dark:from-blue-900 dark:to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-4">About JMRH</h1>
              <p className="text-xl opacity-90">
                Advancing interdisciplinary research for a better tomorrow
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              
              {/* Main Description */}
              <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80" 
                      alt="Academic Research" 
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-[#222222] dark:text-white mb-6">About the Journal</h2>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      <p>
                        The <strong>Journal of Multidisciplinary Research Horizon (JMRH)</strong> is a peer-reviewed 
                        open-access journal committed to promoting high-quality original research across multiple disciplines. 
                        We provide a dynamic platform for scholars, academicians, professionals, and practitioners to publish 
                        research papers, reviews, and case studies.
                      </p>
                      <p>
                        Our mission is to bridge the gap between academic knowledge and practical innovation, fostering 
                        interdisciplinary dialogue that addresses contemporary challenges and opportunities across various 
                        fields of study.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-8 text-center">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-[#FFFACD] to-white dark:from-gray-800 dark:to-gray-700 border-2 border-[#1E90FF] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#1E90FF] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-[#222222] dark:text-white mb-3">Excellence</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Maintaining the highest standards of academic rigor and quality in all published research
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-[#FFFACD] to-white dark:from-gray-800 dark:to-gray-700 border-2 border-[#1E90FF] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#87CEEB] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-[#222222] dark:text-white mb-3">Integrity</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Upholding ethical research practices and zero tolerance for plagiarism or misconduct
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-[#FFFACD] to-white dark:from-gray-800 dark:to-gray-700 border-2 border-[#1E90FF] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#98FB98] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-[#222222]" />
                      </div>
                      <h3 className="font-bold text-xl text-[#222222] dark:text-white mb-3">Accessibility</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Providing open access to research, making knowledge freely available to all
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-8 text-center">Why Publish with JMRH?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="flex items-start p-6 bg-[#87CEEB]/10 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">Open Access</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        All articles are freely available online, ensuring maximum visibility and impact for your research
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-[#87CEEB]/10 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">Rigorous Peer Review</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Double-blind peer review by experts ensures quality and credibility of published work
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-[#87CEEB]/10 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">Fast Publication</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Efficient review process with typical turnaround time of 2-4 weeks
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-[#87CEEB]/10 dark:bg-blue-900/20 rounded-lg">
                    <div className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">Multidisciplinary</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Welcoming research from diverse fields including Commerce, Science, Technology, and Humanities
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Publication Standards */}
              <div className="mb-16 bg-gradient-to-br from-[#FFFACD] to-[#87CEEB]/20 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg border-2 border-[#1E90FF]">
                <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-6 text-center">Publication Standards</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Badge className="bg-[#1E90FF] text-white px-4 py-2 text-lg mb-3">
                      UGC Compliant
                    </Badge>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Following UGC guidelines for academic publications
                    </p>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-[#98FB98] text-[#222222] px-4 py-2 text-lg mb-3">
                      COPE Member
                    </Badge>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Adhering to COPE ethical standards
                    </p>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-[#FFD700] text-[#222222] px-4 py-2 text-lg mb-3">
                      ISSN Registered
                    </Badge>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Internationally recognized publication
                    </p>
                  </div>
                </div>
              </div>

              {/* Editorial Process */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-8 text-center">Our Editorial Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { step: "1", title: "Submission", desc: "Authors submit manuscripts via online form or email" },
                    { step: "2", title: "Review", desc: "Double-blind peer review by field experts" },
                    { step: "3", title: "Decision", desc: "Accept, revise, or reject based on reviewer feedback" },
                    { step: "4", title: "Publication", desc: "Accepted papers published in upcoming issue" }
                  ].map((item, index) => (
                    <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                          {item.step}
                        </div>
                        <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-gradient-to-r from-[#1E90FF] to-[#87CEEB] dark:from-blue-900 dark:to-blue-700 p-12 rounded-lg">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Contribute?</h2>
                <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                  Join our community of researchers and publish your groundbreaking work
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/submit">
                    <button className="bg-white text-[#1E90FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors">
                      Submit Your Paper
                    </button>
                  </Link>
                  <Link href="/guidelines">
                    <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E90FF] font-semibold px-8 py-4 rounded-lg transition-colors">
                      View Guidelines
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
