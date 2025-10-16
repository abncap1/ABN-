"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  Shield,
  AlertTriangle,
  Calculator,
  Users,
  Scale,
  RefreshCw,
  CheckCircle,
  Info,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer } from "@/components/scroll-reveal";
import { toast } from "sonner";

const disclosureDocuments = [
  {
    id: "investor-charter",
    title: "Investor Charter",
    description:
      "Rights and responsibilities of investors, grievance redressal mechanism, and investor protection measures as per SEBI guidelines.",
    icon: Shield,
    status: "Available",
    category: "Regulatory Documents",
    size: "2.1 MB",
    lastUpdated: "2024-01-15",
    color: "from-green-500/10 to-green-600/10",
    iconColor: "text-green-600",
    downloadUrl: "/documents/investor-charter.pdf",
  },
  {
    id: "status-complaints",
    title: "Status of Complaints",
    description:
      "Monthly report on investor complaints received, resolved, and pending with detailed categorization and resolution timelines.",
    icon: AlertTriangle,
    status: "Available",
    category: "Compliance Reports",
    size: "1.8 MB",
    lastUpdated: "2024-01-01",
    color: "from-orange-500/10 to-orange-600/10",
    iconColor: "text-orange-600",
    downloadUrl: "/documents/status-of-complaints.pdf",
  },
  {
    id: "investor-grievance",
    title: "Investor Grievance",
    description:
      "Detailed grievance redressal policy, escalation matrix, and contact information for lodging complaints.",
    icon: Users,
    status: "Available",
    category: "Investor Services",
    size: "1.5 MB",
    lastUpdated: "2024-01-10",
    color: "from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-600",
    downloadUrl: "/documents/investor-grievance.pdf",
  },
  {
    id: "sebi-scores",
    title: "SEBI Scores",
    description:
      "SEBI Complaints Redress System (SCORES) information and guidelines for online complaint filing.",
    icon: Scale,
    status: "Available",
    category: "Regulatory Information",
    size: "900 KB",
    lastUpdated: "2024-01-05",
    color: "from-indigo-500/10 to-indigo-600/10",
    iconColor: "text-indigo-600",
    downloadUrl: "/documents/sebi-scores.pdf",
  },
  {
    id: "odr",
    title: "ODR (Online Dispute Resolution)",
    description:
      "Information about Online Dispute Resolution mechanism for resolving disputes between investors and portfolio managers.",
    icon: RefreshCw,
    status: "Available",
    category: "Dispute Resolution",
    size: "1.2 MB",
    lastUpdated: "2024-01-08",
    color: "from-teal-500/10 to-teal-600/10",
    iconColor: "text-teal-600",
    downloadUrl: "/documents/odr.pdf",
  },
  {
    id: "fee-calculator",
    title: "Fee Calculator",
    description:
      "Interactive tool and documentation for calculating portfolio management fees, performance fees, and other charges.",
    icon: Calculator,
    status: "Available",
    category: "Fee Information",
    size: "800 KB",
    lastUpdated: "2024-01-12",
    color: "from-emerald-500/10 to-emerald-600/10",
    iconColor: "text-emerald-600",
    downloadUrl: "/documents/fee-calculator.pdf",
  },
  {
    id: "accredited-investor",
    title: "Accredited Investor Framework",
    description:
      "Guidelines and criteria for accredited investor classification, eligibility requirements, and verification process.",
    icon: CheckCircle,
    status: "Available",
    category: "Investor Classification",
    size: "1.7 MB",
    lastUpdated: "2024-01-18",
    color: "from-cyan-500/10 to-cyan-600/10",
    iconColor: "text-cyan-600",
    downloadUrl: "/documents/accredited-investor-framework.pdf",
  },
];

export default function Disclosures() {
  const [selectedCategory, setSelectedCategory] = useState("All Documents");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const filteredDocuments =
    selectedCategory === "All Documents"
      ? disclosureDocuments
      : disclosureDocuments.filter((doc) => doc.category === selectedCategory);

  const handleDownload = async (document: (typeof disclosureDocuments)[0]) => {
    if (!document.downloadUrl) {
      toast.error("Document not yet available for download");
      return;
    }

    setDownloadingId(document.id);

    try {
      // Simulate download process
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real implementation, you would:
      // 1. Track download analytics
      // 2. Verify user permissions if needed
      // 3. Generate download link or serve file

      // For demo purposes, we'll show a success message
      toast.success(`${document.title} downloaded successfully`);

      // In production, you would trigger the actual download:
      // const link = document.createElement('a');
      // link.href = document.downloadUrl;
      // link.download = `${document.title}.pdf`;
      // link.click();
    } catch (error) {
      toast.error("Download failed. Please try again.");
    } finally {
      setDownloadingId(null);
    }
  };

  const handleDownloadAll = async () => {
    const availableDocuments = disclosureDocuments.filter(
      (doc) => doc.downloadUrl
    );

    if (availableDocuments.length === 0) {
      toast.error("No documents available for download");
      return;
    }

    setDownloadingId("all");

    try {
      // Simulate bulk download process
      await new Promise((resolve) => setTimeout(resolve, 3000));

      toast.success(
        `${availableDocuments.length} documents downloaded successfully`
      );

      // In production, you would create a ZIP file or trigger multiple downloads
    } catch (error) {
      toast.error("Bulk download failed. Please try again.");
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 0.2, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <div className="w-full h-full bg-[url('https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg')] bg-cover bg-center" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal
            direction="up"
            className="text-center max-w-4xl mx-auto"
          >
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/10 text-primary"
            >
              Regulatory Disclosures
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
              Disclosure Documents
            </h1>
            <p className="text-lg text-slate-600 dark:text-white/80 leading-relaxed mb-8">
              Access all regulatory disclosures, compliance documents, and
              investor information required by SEBI guidelines. Download
              individual documents.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocuments.map((document, index) => (
              <motion.div
                key={document.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`h-full border-0 shadow-2xl bg-gradient-to-br ${document.color} backdrop-blur-md hover:shadow-3xl transition-all duration-500 group relative overflow-hidden`}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge
                      variant={
                        document.status === "Available"
                          ? "default"
                          : "secondary"
                      }
                      className={`${
                        document.status === "Available"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {document.status}
                    </Badge>
                  </div>

                  {/* Floating decoration */}
                  <motion.div
                    className="absolute top-6 left-6 w-8 h-8 bg-white/10 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />

                  <CardHeader className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <document.icon
                        className={`h-8 w-8 ${document.iconColor}`}
                      />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {document.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit text-xs">
                      {document.category}
                    </Badge>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {document.description}
                    </p>

                    {/* Document Info */}
                    <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                      {document.size !== "TBD" && (
                        <div className="flex items-center justify-between">
                          <span>File Size:</span>
                          <span className="font-medium">{document.size}</span>
                        </div>
                      )}
                      {document.lastUpdated !== "TBD" && (
                        <div className="flex items-center justify-between">
                          <span>Last Updated:</span>
                          <span className="font-medium">
                            {new Date(
                              document.lastUpdated
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Download Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => handleDownload(document)}
                        disabled={
                          !document.downloadUrl || downloadingId === document.id
                        }
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        variant={document.downloadUrl ? "default" : "secondary"}
                      >
                        {downloadingId === document.id ? (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                            Downloading...
                          </>
                        ) : document.downloadUrl ? (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </>
                        ) : (
                          <>
                            <Info className="h-4 w-4 mr-2" />
                            Coming Soon
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
              Additional <span className="gradient-text">Information</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/80 max-w-2xl mx-auto">
              Important regulatory and compliance information for investors
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "SEBI Registration",
                description:
                  "ABN CAPITAL is registered with SEBI as a Portfolio Manager under registration number [Registration Number].",
                color: "from-blue-500/10 to-blue-600/10",
                iconColor: "text-blue-600",
              },
              {
                icon: Shield,
                title: "Investor Protection",
                description:
                  "All client funds are held in segregated accounts with qualified custodians for maximum security.",
                color: "from-green-500/10 to-green-600/10",
                iconColor: "text-green-600",
              },
              {
                icon: FileText,
                title: "Regular Reporting",
                description:
                  "Comprehensive portfolio reports are provided monthly with detailed performance analysis.",
                color: "from-purple-500/10 to-purple-600/10",
                iconColor: "text-purple-600",
              },
              {
                icon: Users,
                title: "Grievance Redressal",
                description:
                  "Dedicated grievance redressal mechanism with defined timelines for resolution.",
                color: "from-orange-500/10 to-orange-600/10",
                iconColor: "text-orange-600",
              },
              {
                icon: Calculator,
                title: "Transparent Fees",
                description:
                  "All fees and charges are clearly disclosed upfront with no hidden costs.",
                color: "from-teal-500/10 to-teal-600/10",
                iconColor: "text-teal-600",
              },
              {
                icon: CheckCircle,
                title: "Compliance",
                description:
                  "Full compliance with SEBI regulations and industry best practices.",
                color: "from-indigo-500/10 to-indigo-600/10",
                iconColor: "text-indigo-600",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`h-full border-0 shadow-lg bg-gradient-to-br ${item.color} hover:shadow-xl transition-all duration-300`}
                  >
                    <CardContent className="p-6 text-center">
                      <item.icon
                        className={`h-12 w-12 mx-auto mb-4 ${item.iconColor}`}
                      />
                      <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
