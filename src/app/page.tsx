"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { 
  FileText, 
  BookOpen, 
  Award, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Globe,
  Lightbulb,
  Target,
  GraduationCap,
  Briefcase,
  DollarSign,
  Brain,
  Leaf,
  Zap,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  const [metrics, setMetrics] = useState({
    papers: 0,
    authors: 0,
    citations: 0,
  })

  useEffect(() => {
    // Animate counters
    const targetMetrics = { papers: 250, authors: 180, citations: 1500 }
    const duration = 2000
    const steps = 60
    const increment = {
      papers: targetMetrics.papers / steps,
      authors: targetMetrics.authors / steps,
      citations: targetMetrics.citations / steps,
    }

    let currentStep = 0
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setMetrics({
          papers: Math.floor(increment.papers * currentStep),
          authors: Math.floor(increment.authors * currentStep),
          citations: Math.floor(increment.citations * currentStep),
        })
        currentStep++
      } else {
        setMetrics(targetMetrics)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const aimsData = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Interdisciplinary Integration",
      description: "Encourage research that integrates multiple disciplines for comprehensive insights."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Practical Innovation",
      description: "Disseminate practical and innovative research outcomes with real-world applications."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Academic Stage",
      description: "Offer a platform for both new and established researchers to showcase their work."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Ethical Research",
      description: "Promote ethical research practices and global scholarly collaboration."
    }
  ]

  const scopeData = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Commerce & Management",
      color: "bg-blue-500"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Economics & Finance",
      color: "bg-green-500"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education & Psychology",
      color: "bg-purple-500"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Social Sciences & Humanities",
      color: "bg-pink-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Science & Technology",
      color: "bg-indigo-500"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Environmental Studies",
      color: "bg-emerald-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Digital Transformation",
      color: "bg-orange-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Sustainability",
      color: "bg-teal-500"
    }
  ]

  return (
    <>
      <Navigation />
      
      {/* Floating Submit Button */}
      <Link href="/submit" className="fixed bottom-8 right-8 z-40 animate-bounce">
        <Button className="bg-[#1E90FF] hover:bg-[#1873CC] text-white font-semibold shadow-2xl px-6 py-6 rounded-full">
          <FileText className="w-5 h-5 mr-2" />
          Submit Paper
        </Button>
      </Link>

      <main className="pt-20">
        {/* Call for Papers Banner */}
        <div className="bg-[#98FB98] dark:bg-green-900/30 border-y border-green-600/20 overflow-hidden py-3">
          <div className="animate-ticker whitespace-nowrap">
            <span className="inline-block text-[#222222] dark:text-gray-200 font-semibold text-lg px-8">
              📢 Call for Papers: Submit your research for our upcoming issue! Deadline: December 31, 2025
            </span>
            <span className="inline-block text-[#222222] dark:text-gray-200 font-semibold text-lg px-8">
              📢 Call for Papers: Submit your research for our upcoming issue! Deadline: December 31, 2025
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#FFFACD] via-white to-[#87CEEB]/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 bg-[#1E90FF] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <Badge className="bg-[#1E90FF] text-white hover:bg-[#1873CC] px-4 py-2 text-sm">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Open Access
                </Badge>
                <Badge className="bg-[#98FB98] text-[#222222] hover:bg-green-400 px-4 py-2 text-sm">
                  <Award className="w-4 h-4 mr-1" />
                  UGC Standards
                </Badge>
                <Badge className="bg-[#FFD700] text-[#222222] hover:bg-yellow-500 px-4 py-2 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  Peer Reviewed
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-[#222222] dark:text-white mb-6 leading-tight">
                Journal of Multidisciplinary Research Horizon
                <span className="block text-3xl md:text-4xl mt-2 text-[#1E90FF]">(JMRH)</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                A Peer-Reviewed Open Access Journal for Interdisciplinary Research
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/submit">
                  <Button className="bg-[#1E90FF] hover:bg-[#1873CC] text-white font-semibold text-lg px-8 py-6 shadow-lg">
                    <FileText className="w-5 h-5 mr-2" />
                    Submit Your Paper
                  </Button>
                </Link>
                <Link href="/guidelines">
                  <Button variant="outline" className="border-2 border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white font-semibold text-lg px-8 py-6">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Author Guidelines
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-12 bg-[#222222] dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="text-white">
                <div className="text-5xl font-bold text-[#FFD700] mb-2">{metrics.papers}+</div>
                <div className="text-lg text-gray-300">Published Papers</div>
              </div>
              <div className="text-white">
                <div className="text-5xl font-bold text-[#87CEEB] mb-2">{metrics.authors}+</div>
                <div className="text-lg text-gray-300">Contributing Authors</div>
              </div>
              <div className="text-white">
                <div className="text-5xl font-bold text-[#98FB98] mb-2">{metrics.citations}+</div>
                <div className="text-lg text-gray-300">Total Citations</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-bold text-[#222222] dark:text-white mb-6">About the Journal</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>
                    The <strong>Journal of Multidisciplinary Research Horizon (JMRH)</strong> is a peer-reviewed open-access journal promoting high-quality original research across disciplines. It provides a platform for scholars, academicians, professionals, and practitioners to publish research papers, reviews, and case studies that advance academic knowledge and practical innovation.
                  </p>
                  <div className="bg-[#FFFACD] dark:bg-gray-800 p-6 rounded-lg border-l-4 border-[#1E90FF]">
                    <h3 className="font-bold text-xl mb-3 text-[#222222] dark:text-white">Key Highlights:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-[#1E90FF] mt-1 flex-shrink-0" />
                        <span>Fosters interdisciplinary dialogue and collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-[#1E90FF] mt-1 flex-shrink-0" />
                        <span>Covers Commerce, Management, Education, Science, Technology, and Humanities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-[#1E90FF] mt-1 flex-shrink-0" />
                        <span>Upholds academic integrity and quality peer review</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-[#1E90FF] mt-1 flex-shrink-0" />
                        <span>Committed to ethical research and open access principles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80" 
                  alt="Academic Research" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#1E90FF] text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-bold text-2xl italic">
                    "Bridging Knowledge Across Disciplines for a Better Tomorrow."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aims Section */}
        <section className="py-20 bg-gradient-to-b from-[#FFFACD]/30 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#222222] dark:text-white mb-4">Aims & Objectives</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Our commitment to advancing research excellence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aimsData.map((aim, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#87CEEB] dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#87CEEB] dark:bg-[#1E90FF] rounded-full flex items-center justify-center text-white mb-4">
                      {aim.icon}
                    </div>
                    <CardTitle className="text-[#222222] dark:text-white">{aim.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{aim.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scope Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#222222] dark:text-white mb-4">Research Scope</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Disciplines we cover for comprehensive research impact</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {scopeData.map((scope, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className={`w-14 h-14 ${scope.color} rounded-full flex items-center justify-center text-white mb-4`}>
                      {scope.icon}
                    </div>
                    <h3 className="font-semibold text-[#222222] dark:text-white">{scope.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1E90FF] to-[#87CEEB] dark:from-blue-900 dark:to-blue-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Publish Your Research?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community of researchers and contribute to advancing knowledge across disciplines
            </p>
            <Link href="/submit">
              <Button className="bg-white text-[#1E90FF] hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-lg">
                Submit Your Manuscript Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}