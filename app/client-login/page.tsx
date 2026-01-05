'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Loader2, Shield, ArrowRight } from 'lucide-react'

const LOGIN_URL = 'https://eclientreporting.nuvamaassetservices.com/wealthspectrum/app/login'

const page = () => {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const newWindow = window.open(LOGIN_URL, '_blank')
      if (newWindow) {
        setOpened(true)
      }
    }, 500) // Small delay for better UX

    return () => clearTimeout(timer)
  }, [])

  const handleManualOpen = () => {
    window.open(LOGIN_URL, '_blank')
    setOpened(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="border-0 shadow-2xl bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4 pb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <Shield className="h-8 w-8 text-primary" />
            </motion.div>
            <div>
              <CardTitle className="text-2xl font-bold mb-2">
                Client Portal Access
              </CardTitle>
              <CardDescription className="text-base">
                Redirecting you to the secure login page
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Loading indicator */}
            <div className="flex flex-col items-center justify-center py-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="mb-4"
              >
                <Loader2 className="h-8 w-8 text-primary" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-muted-foreground text-center"
              >
                {opened
                  ? 'Login page opened in a new tab'
                  : 'Opening login page...'}
              </motion.p>
            </div>

            {/* Manual open button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={handleManualOpen}
                className="w-full group relative overflow-hidden"
                size="lg"
                variant="default"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {opened ? (
                    <>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Login Page Again
                    </>
                  ) : (
                    <>
                      Open Login Page
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            {/* Security notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-4 border-t"
            >
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                <Shield className="inline h-3 w-3 mr-1" />
                Your connection is secure. You will be redirected to our
                encrypted client portal.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default page