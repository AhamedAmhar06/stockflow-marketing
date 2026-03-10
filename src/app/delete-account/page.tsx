"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, Trash2, ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/delete-account", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to delete account. Please try again.")
      }

      setIsSuccess(true)
    } catch {
      setError("An error occurred while trying to delete your account. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="bg-gray-900 border-gray-800 shadow-2xl">
            <CardHeader className="text-center pb-2">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-8 h-8 text-green-500" />
              </motion.div>
              <CardTitle className="text-2xl font-bold text-white">Request Submitted</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-6">
                Your account deletion request has been received. You will receive a confirmation email shortly. 
                All your data will be permanently removed from our servers within 30 days.
              </p>
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link href="/">Return to Home</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8">
      <Link 
         href="/" 
         className="inline-flex items-center text-gray-400 hover:text-yellow-500 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Stockflow
      </Link>

      <div className="max-w-md mx-auto mt-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Delete Account</h1>
            <p className="text-gray-400">We&#39;re sorry to see you go.</p>
          </div>

          <Card className="bg-gray-900 border-red-900/30 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800" />
            
            <CardHeader>
              <div className="flex items-center space-x-3 text-red-500 mb-2">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-semibold uppercase text-xs tracking-wider">Danger Zone</span>
              </div>
              <CardTitle className="text-xl text-white">Permanently Delete Account</CardTitle>
              <CardDescription className="text-gray-400">
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 text-red-500">
                  <AlertTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Warning
                  </AlertTitle>
                  <AlertDescription className="text-red-400 text-sm mt-1">
                    All your portfolio data, trade logs, and settings will be lost.
                  </AlertDescription>
                </Alert>

                <div className="space-y-2 pt-2">
                  <Label htmlFor="email" className="text-gray-300">
                    To confirm, please type your email address
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus-visible:ring-red-500/50 focus-visible:border-red-500"
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-md border border-red-900/50">
                    {error}
                  </div>
                )}

                <Button 
                  type="submit" 
                  disabled={isLoading || !email}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-all mt-4"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete My Account
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="bg-gray-950/50 border-t border-gray-800 p-4">
              <p className="text-xs text-gray-500 text-center w-full">
                By deleting your account, you agree to our Terms of Service regarding data deletion.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
