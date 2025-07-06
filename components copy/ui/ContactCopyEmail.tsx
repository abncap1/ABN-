import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Copy, Mail, Sparkles } from "lucide-react";

export function ContactCopyEmail() {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("info@abncapital.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
      animate={{
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
        scale: [1, 1.5, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      }}
      style={{
        left: `${20 + Math.random() * 60}%`,
        top: `${20 + Math.random() * 60}%`,
      }}
    />
  ));

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Header with Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <Mail className="w-16 h-16 text-blue-600" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-6 h-6 text-purple-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
        >
          Get in Touch with Us
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-700 mb-12 font-medium"
        >
          Have questions? Copy our email below and reach out anytime!
        </motion.p>

        {/* Email Copy Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 150 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative"
        >
          <motion.div
            animate={{ 
              boxShadow: isHovered 
                ? "0 25px 50px -12px rgba(59, 130, 246, 0.25)" 
                : "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-2 max-w-md mx-auto"
          >
            {/* Email Input */}
            <div className="flex-1 flex items-center px-4 py-3">
              <Mail className="w-5 h-5 text-gray-500 mr-3" />
              <input
                type="text"
                value="info@abncapital.in"
                readOnly
                className="text-base font-semibold bg-transparent outline-none text-gray-800 select-all w-full"
              />
            </div>

            {/* Copy Button */}
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="checkmark"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Copied!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Success Message */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              >
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Email copied to clipboard!
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Additional CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-gray-600 text-sm"
        >
          We typically respond within 24 hours
        </motion.p>
      </motion.div>
    </section>
  );
}