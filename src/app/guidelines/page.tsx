"use client"

import { FileDown, Send, Shield, AlertTriangle, CheckCircle2, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function GuidelinesPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1E90FF] to-[#87CEEB] dark:from-blue-900 dark:to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Author Guidelines</h1>
              <p className="text-xl opacity-90">
                Everything you need to know about submitting your research to JMRH
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/templates/jmrh-paper-template.docx" download>
                <Button className="bg-[#98FB98] hover:bg-green-400 text-[#222222] font-semibold">
                  <FileDown className="w-5 h-5 mr-2" />
                  Download Paper Template
                </Button>
              </a>
              <Link href="/submit">
                <Button className="bg-[#1E90FF] hover:bg-[#1873CC] text-white font-semibold">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Your Paper
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              
              {/* Submission Guidelines Accordion */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-6">Submission Guidelines</h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-[#FFFACD] dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 px-6">
                    <AccordionTrigger className="text-lg font-semibold text-[#222222] dark:text-white hover:no-underline">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 mr-3 text-[#1E90FF]" />
                        Manuscript Requirements
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 mr-2 text-[#1E90FF] mt-0.5 flex-shrink-0" />
                          <span>Submit <strong>original, unpublished manuscripts</strong> that have not been submitted elsewhere</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 mr-2 text-[#1E90FF] mt-0.5 flex-shrink-0" />
                          <span>Papers must be written in <strong>English</strong> with clear academic tone</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 mr-2 text-[#1E90FF] mt-0.5 flex-shrink-0" />
                          <span>Length: Typically <strong>3,000 to 8,000 words</strong></span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 mr-2 text-[#1E90FF] mt-0.5 flex-shrink-0" />
                          <span>Format: Microsoft Word (.doc or .docx)</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-[#FFFACD] dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 px-6">
                    <AccordionTrigger className="text-lg font-semibold text-[#222222] dark:text-white hover:no-underline">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 mr-3 text-[#1E90FF]" />
                        Manuscript Structure
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4">
                      <div className="space-y-4">
                        <p>Your manuscript should include the following sections in order:</p>
                        <ol className="list-decimal list-inside space-y-2 ml-4">
                          <li><strong>Title:</strong> Clear and descriptive (max 20 words)</li>
                          <li><strong>Author Details:</strong> Name(s), affiliation(s), email address(es)</li>
                          <li><strong>Abstract:</strong> 150-250 words summarizing the research</li>
                          <li><strong>Keywords:</strong> 4-6 relevant keywords</li>
                          <li><strong>Introduction:</strong> Background and context</li>
                          <li><strong>Objectives:</strong> Clear research objectives or hypotheses</li>
                          <li><strong>Methodology:</strong> Research design and methods</li>
                          <li><strong>Results:</strong> Findings and analysis</li>
                          <li><strong>Discussion:</strong> Interpretation and implications</li>
                          <li><strong>Conclusion:</strong> Summary and future directions</li>
                          <li><strong>References:</strong> APA style citation</li>
                        </ol>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-[#FFFACD] dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 px-6">
                    <AccordionTrigger className="text-lg font-semibold text-[#222222] dark:text-white hover:no-underline">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 mr-3 text-[#1E90FF]" />
                        Formatting Guidelines
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4">
                      <ul className="space-y-2">
                        <li>• <strong>Font:</strong> Times New Roman, 12pt</li>
                        <li>• <strong>Line Spacing:</strong> Double-spaced throughout</li>
                        <li>• <strong>Margins:</strong> 1 inch (2.54 cm) on all sides</li>
                        <li>• <strong>Page Numbers:</strong> Bottom center</li>
                        <li>• <strong>Headings:</strong> Use consistent hierarchical structure</li>
                        <li>• <strong>Tables & Figures:</strong> Number consecutively, provide clear captions</li>
                        <li>• <strong>Citations:</strong> APA 7th Edition style</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-[#FFFACD] dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 px-6">
                    <AccordionTrigger className="text-lg font-semibold text-[#222222] dark:text-white hover:no-underline">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 mr-3 text-[#1E90FF]" />
                        Reference Style (APA)
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4">
                      <div className="space-y-4">
                        <p>All references must follow APA 7th Edition format. Examples:</p>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600">
                          <p className="font-semibold mb-2">Journal Article:</p>
                          <p className="text-sm">Author, A. A., & Author, B. B. (Year). Title of article. <em>Journal Name</em>, <em>volume</em>(issue), pages. https://doi.org/xxxx</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600">
                          <p className="font-semibold mb-2">Book:</p>
                          <p className="text-sm">Author, A. A. (Year). <em>Title of book</em> (Edition). Publisher Name.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-[#FFFACD] dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 px-6">
                    <AccordionTrigger className="text-lg font-semibold text-[#222222] dark:text-white hover:no-underline">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 mr-3 text-[#1E90FF]" />
                        Submission Process
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 pt-4">
                      <ol className="space-y-3 list-decimal list-inside">
                        <li>Prepare your manuscript according to the guidelines above</li>
                        <li>Check for plagiarism (must be less than 10%)</li>
                        <li>Submit via email to <strong className="text-[#1E90FF]">submit.jmrh@gmail.com</strong> or use our <Link href="/submit" className="text-[#1E90FF] hover:underline">online submission form</Link></li>
                        <li>Include a cover letter stating the manuscript title and confirming originality</li>
                        <li>Receive acknowledgment within 48 hours</li>
                        <li>Peer review process (typically 2-4 weeks)</li>
                        <li>Receive decision and reviewer comments</li>
                        <li>Revise and resubmit if required</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Plagiarism & Ethics Policy */}
              <div className="mb-12">
                <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <Shield className="w-12 h-12 text-red-600 dark:text-red-400 mr-4 flex-shrink-0" />
                      <div>
                        <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-2">Plagiarism & Ethics Policy</h2>
                        <p className="text-gray-700 dark:text-gray-300">Our commitment to academic integrity and ethical research</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-[#1E90FF]">
                        <h3 className="font-bold text-xl mb-3 text-[#222222] dark:text-white flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2 text-[#1E90FF]" />
                          Plagiarism Standards
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li>• JMRH follows <strong>UGC and COPE</strong> ethical standards</li>
                          <li>• All submissions are screened using plagiarism detection software</li>
                          <li>• Articles with <strong>more than 10% plagiarism</strong> will be <strong>rejected</strong></li>
                          <li>• Self-plagiarism is also considered unethical</li>
                          <li>• Proper citation of all sources is mandatory</li>
                        </ul>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-[#1E90FF]">
                        <h3 className="font-bold text-xl mb-3 text-[#222222] dark:text-white flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2 text-[#1E90FF]" />
                          Publication Ethics
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li>• <strong>Duplicate submissions</strong> or simultaneous submissions to multiple journals are <strong>prohibited</strong></li>
                          <li>• Authors must declare any conflicts of interest</li>
                          <li>• All contributors must be properly acknowledged</li>
                          <li>• Data fabrication or falsification will result in immediate rejection</li>
                          <li>• Research involving human subjects must have ethical approval</li>
                        </ul>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-[#1E90FF]">
                        <h3 className="font-bold text-xl mb-3 text-[#222222] dark:text-white flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2 text-[#1E90FF]" />
                          Editorial Actions
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li>• The editorial team reserves the right to reject manuscripts that violate ethical standards</li>
                          <li>• Published articles found to breach ethics will be <strong>retracted</strong></li>
                          <li>• Authors found guilty of misconduct may be banned from future submissions</li>
                        </ul>
                      </div>

                      <div className="bg-[#98FB98] dark:bg-green-900/30 p-6 rounded-lg text-center border-2 border-green-600">
                        <p className="text-xl font-bold text-[#222222] dark:text-white flex items-center justify-center">
                          <Shield className="w-6 h-6 mr-2" />
                          JMRH maintains strict academic ethics and zero tolerance for plagiarism
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact for Queries */}
              <div className="bg-[#87CEEB]/20 dark:bg-blue-900/20 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-[#222222] dark:text-white mb-4">Have Questions?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  For any queries regarding manuscript submission or guidelines, please contact us at:
                </p>
                <a href="mailto:submit.jmrh@gmail.com" className="text-[#1E90FF] font-semibold text-lg hover:underline">
                  submit.jmrh@gmail.com
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
