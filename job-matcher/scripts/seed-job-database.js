// Script to seed the job database with sample data
// This can be run directly in v0 to populate test data

console.log("Starting job database seeding...")

// Sample job data for testing the matching system
const sampleJobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    description:
      "We are looking for an experienced React developer with strong TypeScript skills to join our growing team. You'll be working on cutting-edge web applications and collaborating with a talented team of engineers.",
    requirements: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "REST APIs",
      "GraphQL",
      "Testing (Jest, Cypress)",
    ],
    experienceLevel: "Senior",
    remote: false,
    benefits: ["Health Insurance", "401k", "Flexible PTO", "Stock Options"],
  },
  {
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "Remote",
    salary: "$100k - $140k",
    description:
      "Join our fast-growing startup as a full-stack engineer. You'll work across our entire technology stack, from React frontends to Node.js backends, helping us scale our platform.",
    requirements: [
      "Node.js",
      "React",
      "PostgreSQL",
      "TypeScript",
      "Express.js",
      "AWS",
      "Docker",
      "Redis",
      "MongoDB",
      "REST APIs",
      "Microservices",
    ],
    experienceLevel: "Mid-Senior",
    remote: true,
    benefits: ["Equity", "Health Insurance", "Remote Work", "Learning Budget"],
  },
  {
    title: "UI/UX Developer",
    company: "Design Studio Pro",
    location: "New York, NY",
    salary: "$90k - $120k",
    description:
      "Creative developer role combining design and development skills. Work closely with designers to implement beautiful, responsive user interfaces.",
    requirements: [
      "React",
      "CSS",
      "JavaScript",
      "Figma",
      "Adobe Creative Suite",
      "Responsive Design",
      "Animation",
      "SASS/SCSS",
      "Webpack",
    ],
    experienceLevel: "Mid-Level",
    remote: false,
    benefits: ["Creative Environment", "Health Insurance", "Professional Development"],
  },
  {
    title: "Backend Developer",
    company: "DataFlow Systems",
    location: "Austin, TX",
    salary: "$110k - $150k",
    description:
      "Backend-focused role working with large-scale data processing systems. Experience with Python, databases, and cloud infrastructure required.",
    requirements: [
      "Python",
      "Django",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "Microservices",
      "API Design",
      "Data Processing",
    ],
    experienceLevel: "Senior",
    remote: true,
    benefits: ["Stock Options", "Health Insurance", "Remote Work", "Conference Budget"],
  },
  {
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Seattle, WA",
    salary: "$130k - $170k",
    description:
      "DevOps engineer to help scale our infrastructure and improve deployment processes. Strong experience with AWS, Kubernetes, and CI/CD required.",
    requirements: [
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Jenkins",
      "Python",
      "Bash",
      "Linux",
      "Monitoring",
      "CI/CD",
      "Infrastructure as Code",
    ],
    experienceLevel: "Senior",
    remote: false,
    benefits: ["High Salary", "Stock Options", "Health Insurance", "Tech Budget"],
  },
]

// TODO: Replace this with actual database insertion
console.log("Sample jobs to be inserted:")
sampleJobs.forEach((job, index) => {
  console.log(`${index + 1}. ${job.title} at ${job.company}`)
  console.log(`   Location: ${job.location}`)
  console.log(`   Requirements: ${job.requirements.slice(0, 3).join(", ")}...`)
  console.log(`   Experience: ${job.experienceLevel}`)
  console.log("")
})

console.log(`Total jobs to seed: ${sampleJobs.length}`)
console.log("TODO: Implement actual database insertion logic")
console.log("TODO: Generate embeddings for each job description")
console.log("TODO: Store in vector database for similarity search")

// Export for use in other scripts
export { sampleJobs }
