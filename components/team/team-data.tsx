export type TeamMember = {
    id: number
    name: string
    position: string
    image: string
    bio?: string
    expertise?: string[]
    education?: string
    achievements?: string[]
    email?: string
    linkedin?: string
    links?: string[]
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Aniket Nikumb",
      position: "Founder & Chief Investment Officer",
      image: "/assets/IMG.JPG.jpg",
      bio: " 15+ years of experience as an entrepreneur and investor in India. Most recently, he was part of the Founding Team at Mensa Brands which became India's fastest unicorn. He is a rank holder Chartered Accountant and holds a MBA from Columbia Business School, New York. He has been honored with several awards including CA 40 under 40 and Hurun India Under 35 and speakers regularly in business events and podcasts including The Barbershop with Shantanu and TedX",
      expertise: ["Portfolio Strategy", "Risk Management", "ESG Investing"],
      education: "CA, CFA, MBA",
      achievements: [
        "CFA Charterholder",
        "Top 40 Under 40 Finance Professional",
        "Published researcher on sustainable investing",
      ],
      email: "aniket@abncapital.in",
      linkedin: "https://www.linkedin.com/in/aniketnikumb/?originalSubdomain=in",
      links: ["https://ms.cnbctv18.com/ca40under40/winners-list/",
"https://economictimes.indiatimes.com/news/india/reliance-retails-isha-ambani-other-under-35-entrepreneurs-shaping-the-future-of-indian-economy-hurun/articleshow/113690653.cms?from=mdr",
"https://www.ted.com/tedx/events/64912",
"https://www.youtube.com/watch?v=YtrY0oyd-Ls"]
    },
    {
      id: 2,
      name: "Apurva Iyer",
      position: "Partner",
      image: "/assets/Apurva.jpeg",
      bio: "10+ years as entrepreneur and business professional. Founded Appaloosa Foods, exited to Everstone Capital.",
      expertise: ["Portfolio Strategy", "Risk Management", "ESG Investing"],
      education: "B.Sc., M.Sc., MS",
      achievements: [
        "CFA Charterholder",
        "Top 40 Under 40 Finance Professional",
        "Published researcher on sustainable investing",
      ],
      email: "apurva@abncapital.in",
      linkedin: "https://www.linkedin.com/in/apurva-iyer-a8894349/",
    },
    {
      id: 3,
      name: "Akshay Haldankar",
      position: "Accounting and Operations",
      image: "/assets/team.png",
      education: "BCom (Accounting & Finance)",
    },
    {
      id: 4,
      name: "Bhavya Joshi",
      position: "Operations and Compliance",
      image: "/assets/Bhavya.jpg",
      education: "BCom (Banking & Insurance), MBA",
    },
  ]
  