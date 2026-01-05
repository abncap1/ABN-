"use client";

import Image from "next/image";
import {
  Mail,
  Linkedin,
  Award,
  GraduationCap,
  Briefcase,
  Star,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { TeamMember } from "./team-data";
import { useState } from "react";

export function TeamCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="h-full border bg-card hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-muted">
            <img
              src={
                member.image ||
                "/placeholder.svg?height=64&width=64&query=team%20member%20portrait"
              }
              alt={member.name}
              className="object-cover object-center rounded-full mx-auto transition-transform duration-300 hover:scale-105"
              style={{
                width: '130%',
                height: '130%',
                position: 'absolute',
                left: '50%',
                top: '65%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-blue-500 font-medium">{member.position}</p>
            {member.bio && (
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {member.bio}
              </p>
            )}

            {member.expertise && member.expertise.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {member.expertise.slice(0, 2).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {member.expertise.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{member.expertise.length - 2} more
                  </Badge>
                )}
              </div>
            )}

            <div className="mt-4 flex items-center gap-2">
              <Button
                size="sm"
                variant="secondary"
                className="h-8 w-8 p-0"
                asChild
                aria-label={
                  member.email ? `Email ${member.name}` : "Email unavailable"
                }
              >
                <a
                  href={member.email ? `mailto:${member.email}` : "#"}
                  onClick={(e) => {
                    if (!member.email) e.preventDefault();
                  }}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>

              {member.linkedin && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-8 w-8 p-0"
                  asChild
                  aria-label={`Open ${member.name} on LinkedIn`}
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="ml-auto bg-transparent">
                    View Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {member.name}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted">
                        <img
                          src={
                            member.image ||
                            "/placeholder.svg?height=96&width=96&query=team%20member%20portrait"
                          }
                          alt={member.name}
                          
                          sizes="96px"
                          className="object-cover object-center rounded-full mx-auto transition-transform duration-300 hover:scale-105"
                          style={{
                            width: '130%',
                            height: '130%',
                            position: 'absolute',
                            left: '50%',
                            top: '65%',
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">
                          {member.position}
                        </h3>
                        {member.education && (
                          <p className="text-muted-foreground">
                            {member.education}
                          </p>
                        )}
                        <div className="flex gap-2 mt-2">
                          {member.email && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={`mailto:${member.email}`}>
                                <Mail className="h-4 w-4 mr-2" />
                                Email
                              </a>
                            </Button>
                          )}
                          {member.linkedin && (
                            <Button size="sm" variant="outline" asChild>
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Linkedin className="h-4 w-4 mr-2" />
                                LinkedIn
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {member.bio && (
                      <section>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Biography
                        </h4>
                        <p className="text-muted-foreground">{member.bio}</p>
                      </section>
                    )}

                    {member.expertise && member.expertise.length > 0 && (
                      <section>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Star className="h-4 w-4 mr-2" />
                          Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </section>
                    )}

                    {member.education && (
                      <section>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          Education
                        </h4>
                        <p className="text-muted-foreground">
                          {member.education}
                        </p>
                      </section>
                    )}

                    {member.achievements && member.achievements.length > 0 && (
                      <section>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {member.achievements.map((ach, idx) => (
                            <li key={idx}>{ach}</li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {(member.links ?? []).length > 0 && (
                      <section>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Featured Links
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {(member.links ?? []).map((link, idx) => (
                            <li key={idx}>
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-primary hover:text-primary/80 break-all"
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/** If you want to include external links array later, add here with ExternalLink */}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
