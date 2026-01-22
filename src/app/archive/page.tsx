"use client"

import { useState } from 'react'
import { FileText, Download, Calendar, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ArchivePage() {
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedDiscipline, setSelectedDiscipline] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const archives = [
    {
      volume: 3,
      issue: 2,
      month: "July",
      year: 2025,
      articles: [
        { title: "Digital Transformation in Small and Medium Enterprises: A Case Study", author: "Dr. Rajesh Kumar", discipline: "Management" },
        { title: "Impact of Climate Change on Agricultural Productivity in South India", author: "Dr. Meera Nair", discipline: "Environmental Science" },
        { title: "Financial Inclusion and Rural Development: An Empirical Analysis", author: "Dr. K. Thamarai Selvi", discipline: "Commerce" },
      ]
    },
    {
      volume: 3,
      issue: 1,
      month: "January",
      year: 2025,
      articles: [
        { title: "Artificial Intelligence in Education: Opportunities and Challenges", author: "Dr. Arun Patel", discipline: "Technology" },
        { title: "Gender Disparities in Higher Education: A Critical Review", author: "Dr. Anita Desai", discipline: "Social Sciences" },
        { title: "Sustainable Business Practices in the Post-Pandemic Era", author: "Dr. Priya Sharma", discipline: "Economics" },
      ]
    },
    {
      volume: 2,
      issue: 2,
      month: "July",
      year: 2024,
      articles: [
        { title: "Entrepreneurship Development Among Tribal Communities", author: "Dr. K. Thamarai Selvi", discipline: "Commerce" },
        { title: "Online Learning Effectiveness: A Meta-Analysis", author: "Dr. Meera Nair", discipline: "Education" },
        { title: "Blockchain Technology in Supply Chain Management", author: "Dr. Arun Patel", discipline: "Technology" },
      ]
    },
    {
      volume: 2,
      issue: 1,
      month: "January",
      year: 2024,
      articles: [
        { title: "Corporate Social Responsibility and Brand Loyalty", author: "Dr. Rajesh Kumar", discipline: "Management" },
        { title: "Renewable Energy Adoption in Developing Countries", author: "Dr. Vikram Singh", discipline: "Environmental Science" },
        { title: "Digital Literacy and Economic Empowerment", author: "Dr. K. Thamarai Selvi", discipline: "Commerce" },
      ]
    },
  ]

  const disciplines = ["Commerce", "Management", "Economics", "Education", "Technology", "Environmental Science", "Social Sciences"]
  const years = ["2025", "2024", "2023"]

  const filteredArchives = archives.filter(archive => {
    const yearMatch = selectedYear === "all" || archive.year.toString() === selectedYear
    const disciplineMatch = selectedDiscipline === "all" || archive.articles.some(article => article.discipline === selectedDiscipline)
    const searchMatch = searchQuery === "" || 
      archive.articles.some(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    return yearMatch && disciplineMatch && searchMatch
  })

  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1E90FF] to-[#87CEEB] dark:from-blue-900 dark:to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Archive</h1>
              <p className="text-xl opacity-90">
                Browse past issues and published research papers
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input 
                    type="text"
                    placeholder="Search articles or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedDiscipline} onValueChange={setSelectedDiscipline}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Discipline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Disciplines</SelectItem>
                    {disciplines.map(discipline => (
                      <SelectItem key={discipline} value={discipline}>{discipline}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Archive Issues */}
        <section className="py-16 bg-gradient-to-b from-white to-[#FFFACD]/20 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {filteredArchives.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-600 dark:text-gray-400">No issues found matching your criteria</p>
                  </div>
                ) : (
                  filteredArchives.map((issue, index) => (
                    <Card key={index} className="hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                      <CardHeader className="bg-[#FFFACD] dark:bg-gray-700 border-b-2 border-[#1E90FF]">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle className="text-2xl text-[#222222] dark:text-white mb-2">
                              Volume {issue.volume}, Issue {issue.issue}
                            </CardTitle>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{issue.month} {issue.year}</span>
                            </div>
                          </div>
                          <Button className="mt-4 md:mt-0 bg-[#1E90FF] hover:bg-[#1873CC] text-white">
                            <Download className="w-4 h-4 mr-2" />
                            Download Full Issue
                          </Button>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg text-[#222222] dark:text-white mb-4">Articles in this issue:</h3>
                        <div className="space-y-4">
                          {issue.articles.map((article, articleIndex) => (
                            <div key={articleIndex} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#87CEEB]/10 dark:hover:bg-gray-600 transition-colors">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <FileText className="w-4 h-4 text-[#1E90FF] flex-shrink-0" />
                                    <h4 className="font-semibold text-[#222222] dark:text-white">{article.title}</h4>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">By {article.author}</p>
                                  <Badge className="bg-[#98FB98] text-[#222222] text-xs">{article.discipline}</Badge>
                                </div>
                                <Button variant="outline" size="sm" className="flex-shrink-0 border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white">
                                  Read Abstract
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Submit CTA */}
        <section className="py-16 bg-[#1E90FF] dark:bg-blue-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want to See Your Research Here?</h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Submit your manuscript and contribute to our growing archive of quality research
            </p>
            <a href="/submit">
              <Button className="bg-white text-[#1E90FF] hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg">
                Submit Your Paper Now
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
