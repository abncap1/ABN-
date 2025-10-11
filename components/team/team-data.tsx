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
      bio: " 12+ years of experience as an entrepreneur and investor in India. Most recently, he was part of the Founding Team at Mensa Brands, which became India's fastest unicorn. He is a rank holder Chartered Accountant and holds a MBA from Columbia Business School, New York. He has been honored with several awards including CA 40 under 40 and Hurun India Under 35s and speakers regularly in business events and podcasts including The Barbershop with Shantanu and TedX",
      expertise: ["Portfolio Strategy", "Risk Management"],
      education: "B.Com, CA, CS, CFA (US) Charteredholder, MBA",
      achievements: [
        "CFA Chartereholder",
        "CA 40 under 40 Awardee",
        "3x Entrepreneur",
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
      bio: "10+ years as an entrepreneur and business professional in India. Most recently, she was the co-founder of Appaloosa Foods which was exited to Everstone Capital in 2024. Apurva has extensive experience in pharma and consumer sectors. She holds a MS from Universify College of London",
      expertise: ["Operations Management", "Risk Management"],
      education: "B.Sc., M.Sc., MS",
      email: "apurva@abncapital.in",
      linkedin: "https://www.linkedin.com/in/apurva-iyer-a8894349/",
    },
    {
      id: 3,
      name: "Akshay Haldankar",
      position: "Accounting and Operations",
      image: "/assets/team.png",
      education: "BCom (Accounting & Finance)",
      email: "akshay@abncapital.in"
    },
    {
      id: 4,
      name: "Bhavya Joshi",
      position: "Operations and Compliance",
      image: "/assets/Bhavya.jpg",
      education: "BCom (Banking & Insurance), MBA",
      email: "bhavya.joshi@abncapital.in"
    },
  ]
  