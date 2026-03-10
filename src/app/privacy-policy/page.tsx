"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-black">₹</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Stockflow
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-yellow-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
              Privacy <span className="text-yellow-500">Policy</span>
            </h1>

            <div className="prose prose-invert max-w-none">
              <motion.section
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-yellow-500">1. Introduction</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At Stockflow, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our stock portfolio tracking service designed specifically for Sri Lankan investors.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By using Stockflow, you agree to the collection and use of information in accordance with this policy.
                </p>
              </motion.section>

              <motion.section
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-yellow-500">2. Information We Collect</h2>
                <h3 className="text-xl font-medium mb-2 text-white">Personal Information</h3>
                <ul className="text-gray-300 leading-relaxed mb-4 list-disc list-inside">
                  <li>Name (optional)</li>
                  <li>Email address</li>
                  <li>Investment data you choose to upload</li>
                </ul>

                <h3 className="text-xl font-medium mb-2 text-white">Usage Data</h3>
                <ul className="text-gray-300 leading-relaxed mb-4 list-disc list-inside">
                  <li>How you interact with our service</li>
                  <li>Device information and browser type</li>
                  <li>IP address and location data</li>
                </ul>
              </motion.section>

              <motion.section
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-yellow-500">3. How We Use Your Information</h2>
                <ul className="text-gray-300 leading-relaxed list-disc list-inside">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our service</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </motion.section>

              <motion.section
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-yellow-500">4. Data Security</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  All your investment data is encrypted and stored securely. We never share your personal investment information with third parties without your explicit consent.
                </p>
              </motion.section>

              <motion.section
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-yellow-500">5. Data Sharing and Disclosure</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We may share your information only in the following circumstances:
                </p>
                <ul className="text-gray-300 leading-relaxed list-disc list-inside">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights or property</li>
                  <li>In connection with a business transfer (merger, acquisition, etc.)</li>
                </ul>
              </motion.section>

              <motion.section
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-yellow-500">6. Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="text-gray-300 leading-relaxed list-disc list-inside">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct any inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  To exercise these rights, please contact us at info@axleglobal
                </p>
              </motion.section>

              <motion.section
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-yellow-500">7. Cookies</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
              </motion.section>

              <motion.section
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-yellow-500">8. Changes to This Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </motion.section>

              <motion.section
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-yellow-500">9. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-2">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="text-gray-300 leading-relaxed">
                  <li>info@axle.global</li>
                </ul>
              </motion.section>

              <motion.div
                className="text-center mt-12 pt-8 border-t border-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-gray-500 text-sm">
                  Last updated: January 30, 2026
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-black">₹</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Stockflow
                </span>
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm mb-2">Made with ❤️ for Sri Lankan investors</p>
                <p className="text-gray-500 text-xs">Built specifically for the Colombo Stock Exchange</p>
                <p className="text-gray-500 text-xs">Privacy-first — your data stays yours</p>
                <p className="text-gray-500 text-xs">© Stockflow.lk — All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}