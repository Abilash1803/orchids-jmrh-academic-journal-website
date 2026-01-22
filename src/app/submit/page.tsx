"use client"

import { useState } from 'react'
import { Send, CheckCircle, Upload, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    paperTitle: '',
    abstract: '',
    manuscript: null as File | null,
    consent: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.paperTitle.trim()) {
      newErrors.paperTitle = 'Paper title is required'
    }

    if (!formData.abstract.trim()) {
      newErrors.abstract = 'Abstract is required'
    } else if (formData.abstract.trim().length < 150) {
      newErrors.abstract = 'Abstract must be at least 150 characters'
    }

    if (!formData.manuscript) {
      newErrors.manuscript = 'Please upload your manuscript'
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to the declaration'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        paperTitle: '',
        abstract: '',
        manuscript: null,
        consent: false
      })
    }, 2000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file type
      if (!file.name.endsWith('.doc') && !file.name.endsWith('.docx')) {
        setErrors({ ...errors, manuscript: 'Please upload a .doc or .docx file' })
        return
      }
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors({ ...errors, manuscript: 'File size must be less than 10MB' })
        return
      }
      setFormData({ ...formData, manuscript: file })
      setErrors({ ...errors, manuscript: '' })
    }
  }

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        
        <main className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#FFFACD]/30 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-2xl mx-auto bg-white dark:bg-gray-800 border-2 border-[#98FB98]">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-[#98FB98] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-4">
                  Submission Successful!
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Thank you for your submission. The editorial team will review your manuscript soon.
                  You will receive a confirmation email at <strong>{formData.email}</strong> within 48 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#1E90FF] hover:bg-[#1873CC] text-white"
                  >
                    Submit Another Paper
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/'}
                    className="border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white"
                  >
                    Return to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1E90FF] to-[#87CEEB] dark:from-blue-900 dark:to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Submit Your Paper</h1>
              <p className="text-xl opacity-90">
                Share your research with the academic community
              </p>
            </div>
          </div>
        </section>

        {/* Submission Form */}
        <section className="py-16 bg-gradient-to-b from-white to-[#FFFACD]/20 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              
              {/* Guidelines Notice */}
              <Card className="mb-8 bg-[#87CEEB]/20 dark:bg-blue-900/20 border-2 border-[#1E90FF]">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <FileText className="w-6 h-6 text-[#1E90FF] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-[#222222] dark:text-white mb-2">Before You Submit</h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                        <li>• Ensure your manuscript is original and unpublished</li>
                        <li>• Check that plagiarism is less than 10%</li>
                        <li>• Format your paper according to our <a href="/guidelines" className="text-[#1E90FF] hover:underline">guidelines</a></li>
                        <li>• All submissions are reviewed by our editorial board</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 shadow-xl">
                <CardHeader className="bg-[#FFFACD] dark:bg-gray-700 border-b-2 border-[#1E90FF]">
                  <CardTitle className="text-2xl text-[#222222] dark:text-white">Manuscript Submission Form</CardTitle>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Full Name */}
                    <div>
                      <Label htmlFor="fullName" className="text-[#222222] dark:text-white font-semibold">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`mt-2 ${errors.fullName ? 'border-red-500' : ''}`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-[#222222] dark:text-white font-semibold">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Paper Title */}
                    <div>
                      <Label htmlFor="paperTitle" className="text-[#222222] dark:text-white font-semibold">
                        Paper Title <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="paperTitle"
                        type="text"
                        value={formData.paperTitle}
                        onChange={(e) => setFormData({ ...formData, paperTitle: e.target.value })}
                        className={`mt-2 ${errors.paperTitle ? 'border-red-500' : ''}`}
                        placeholder="Enter the title of your research paper"
                      />
                      {errors.paperTitle && <p className="text-red-500 text-sm mt-1">{errors.paperTitle}</p>}
                    </div>

                    {/* Abstract */}
                    <div>
                      <Label htmlFor="abstract" className="text-[#222222] dark:text-white font-semibold">
                        Abstract <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="abstract"
                        value={formData.abstract}
                        onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                        className={`mt-2 min-h-[150px] ${errors.abstract ? 'border-red-500' : ''}`}
                        placeholder="Enter your abstract (minimum 150 characters)"
                      />
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {formData.abstract.length} characters
                      </p>
                      {errors.abstract && <p className="text-red-500 text-sm mt-1">{errors.abstract}</p>}
                    </div>

                    {/* File Upload */}
                    <div>
                      <Label htmlFor="manuscript" className="text-[#222222] dark:text-white font-semibold">
                        Upload Manuscript <span className="text-red-500">*</span>
                      </Label>
                      <div className="mt-2">
                        <label 
                          htmlFor="manuscript"
                          className={`flex items-center justify-center w-full p-6 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                            errors.manuscript ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          <div className="text-center">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {formData.manuscript ? formData.manuscript.name : 'Click to upload or drag and drop'}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                              .doc or .docx (max 10MB)
                            </p>
                          </div>
                          <input
                            id="manuscript"
                            type="file"
                            accept=".doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                      {errors.manuscript && <p className="text-red-500 text-sm mt-1">{errors.manuscript}</p>}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start space-x-3 p-4 bg-[#FFFACD] dark:bg-gray-700 rounded-lg">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                        className={errors.consent ? 'border-red-500' : ''}
                      />
                      <div className="flex-1">
                        <Label 
                          htmlFor="consent" 
                          className="text-sm text-[#222222] dark:text-white cursor-pointer leading-relaxed"
                        >
                          I declare that this manuscript is original, unpublished work and has not been submitted elsewhere. 
                          I consent to the peer review process and agree to JMRH's publication policies.
                        </Label>
                        {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#1E90FF] hover:bg-[#1873CC] text-white font-semibold py-6 text-lg flex-1"
                      >
                        {isSubmitting ? (
                          <>Processing...</>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit Manuscript
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => window.location.href = '/guidelines'}
                        className="border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white py-6"
                      >
                        View Guidelines
                      </Button>
                    </div>

                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  For submission queries, contact: <a href="mailto:submit.jmrh@gmail.com" className="text-[#1E90FF] hover:underline font-semibold">submit.jmrh@gmail.com</a>
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
