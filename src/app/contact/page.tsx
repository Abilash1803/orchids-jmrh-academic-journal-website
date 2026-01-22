"use client"

import { Mail, MapPin, Phone, Facebook, Linkedin, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1E90FF] to-[#87CEEB] dark:from-blue-900 dark:to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl opacity-90">
                Get in touch with the JMRH editorial team
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                
                {/* Contact Details */}
                <div>
                  <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-6">Get In Touch</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                    We welcome inquiries from authors, reviewers, and readers. Whether you have questions about 
                    submissions, peer review, or general journal policies, our team is here to help.
                  </p>

                  <div className="space-y-6">
                    
                    {/* Address */}
                    <Card className="bg-[#FFFACD] dark:bg-gray-800 border-2 border-[#1E90FF] hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">Office Address</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                              JMRH Publications<br />
                              Gudalur, The Nilgiris<br />
                              Tamil Nadu - 643212<br />
                              India
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Email */}
                    <Card className="bg-[#FFFACD] dark:bg-gray-800 border-2 border-[#1E90FF] hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">Email</h3>
                            <div className="space-y-1">
                              <p className="text-gray-700 dark:text-gray-300">
                                <span className="font-semibold">General Inquiries:</span><br />
                                <a href="mailto:jmrhpublications@gmail.com" className="text-[#1E90FF] hover:underline">
                                  jmrhpublications@gmail.com
                                </a>
                              </p>
                              <p className="text-gray-700 dark:text-gray-300 mt-3">
                                <span className="font-semibold">Manuscript Submissions:</span><br />
                                <a href="mailto:submit.jmrh@gmail.com" className="text-[#1E90FF] hover:underline">
                                  submit.jmrh@gmail.com
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Phone */}
                    <Card className="bg-[#FFFACD] dark:bg-gray-800 border-2 border-[#1E90FF] hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">Phone</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                              <a href="tel:+91XXXXXXXXXX" className="text-[#1E90FF] hover:underline">
                                +91 XXXXX XXXXX
                              </a>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              (Monday - Friday, 9:00 AM - 5:00 PM IST)
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </div>

                {/* Map */}
                <div>
                  <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-6">Our Location</h2>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg h-[500px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62685.98647234558!2d76.46614397910156!3d11.509999999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8e9e4e8d3a6f5%3A0x8c5b5c5c5c5c5c5c!2sGudalur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="JMRH Location Map"
                    ></iframe>
                  </div>
                </div>

              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-[#FFFACD] to-[#87CEEB]/20 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-[#222222] dark:text-white mb-6 text-center">Connect With Us</h2>
                <div className="flex justify-center gap-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-[#1E90FF] hover:bg-[#1873CC] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Facebook className="w-8 h-8 text-white" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-[#1E90FF] hover:bg-[#1873CC] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Linkedin className="w-8 h-8 text-white" />
                  </a>
                  <a
                    href="https://researchgate.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-[#1E90FF] hover:bg-[#1873CC] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <BookOpen className="w-8 h-8 text-white" />
                  </a>
                </div>
                <p className="text-center text-gray-700 dark:text-gray-300 mt-6">
                  Follow us for updates on new issues, calls for papers, and academic news
                </p>
              </div>

              {/* Quick Links */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">For Authors</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Guidelines for manuscript preparation and submission
                    </p>
                    <a href="/guidelines" className="text-[#1E90FF] hover:underline font-semibold">
                      View Guidelines →
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">For Reviewers</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Join our peer review panel
                    </p>
                    <a href="mailto:jmrhpublications@gmail.com" className="text-[#1E90FF] hover:underline font-semibold">
                      Express Interest →
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">General Queries</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Any questions? We're here to help
                    </p>
                    <a href="mailto:jmrhpublications@gmail.com" className="text-[#1E90FF] hover:underline font-semibold">
                      Contact Us →
                    </a>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-[#FFFACD]/30 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Can't find what you're looking for? Visit our <a href="/guidelines" className="text-[#1E90FF] hover:underline font-semibold">Guidelines page</a> or send us an email.
              </p>
              <div className="bg-[#87CEEB]/20 dark:bg-blue-900/20 p-8 rounded-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Response Time:</strong> We typically respond to all inquiries within 48 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
