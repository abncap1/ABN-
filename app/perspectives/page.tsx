"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, TrendingUp, Users, BookOpen, Award, X } from "lucide-react"

const LinkedInEmbed = dynamic(
  () => import('react-social-media-embed').then(mod => mod.LinkedInEmbed),
  { ssr: false }
)

const TwitterTimelineEmbed = dynamic(
  () => import('react-twitter-embed').then(mod => mod.TwitterTimelineEmbed),
  { ssr: false }
)

interface VideoData {
  id: string
  title: string
  description: string
  category: string
  duration: string
  views: string
  embedUrl: string
}

const videos: VideoData[] = [
  {
    id: "YtrY0oyd-Ls",
    title: "Investment Strategies for Market Volatility",
    description:
      "Learn how to navigate uncertain markets with proven investment strategies that protect and grow your wealth during volatile periods.",
    category: "Strategy",
    duration: "12:45",
    views: "45K",
    embedUrl: "https://www.youtube.com/embed/YtrY0oyd-Ls",
  },
  {
    id: "LsV5nMxwTGM",
    title: "Portfolio Diversification Fundamentals",
    description:
      "Discover the essential principles of portfolio diversification and how to build a balanced investment portfolio for long-term success.",
    category: "Education",
    duration: "18:32",
    views: "32K",
    embedUrl: "https://www.youtube.com/embed/LsV5nMxwTGM",
  },
]

const insights = [
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Deep insights into market trends and investment opportunities",
  },
  {
    icon: Users,
    title: "Expert Perspectives",
    description: "Learn from seasoned professionals with decades of experience",
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Comprehensive guides to help you make informed decisions",
  },
  {
    icon: Award,
    title: "Proven Strategies",
    description: "Time-tested approaches that deliver consistent results",
  },
]

export default function PerspectivePage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Expert Insights
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Investment Perspectives</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Gain valuable insights from our investment experts through carefully curated educational content designed to
            enhance your financial knowledge and decision-making capabilities.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => document.getElementById("videos")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Play className="mr-2 h-5 w-5" />
            Explore Videos
          </Button>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="videos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Content</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our latest educational videos covering essential investment topics and market insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-card border-border"
                onClick={() => setSelectedVideo(video)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <iframe
                      src={`${video.embedUrl}?rel=0&modestbranding=1`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="bg-primary/90 text-primary-foreground rounded-full p-4">
                        <Play className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {video.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{video.duration}</span>
                        <span>{video.views} views</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{video.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVideo(video);
                        }}
                      >
                        Watch Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-background rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 rounded-full p-2 bg-black/50 text-white hover:bg-black/70"
              aria-label="Close"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full bg-muted">
              <iframe
                src={`${selectedVideo.embedUrl}?rel=0&modestbranding=1&autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 border-t">
              <h3 className="text-lg font-semibold mb-1">{selectedVideo.title}</h3>
              <p className="text-sm text-muted-foreground">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
