import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Target, Zap, CheckCircle, Star, Users, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI-Powered Resume to Job Matcher</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upload your resume and discover the perfect job matches using advanced AI technology. Get ranked results
              based on your skills and experience.
            </p>
            <Link href="/upload">
              <Button size="lg" className="text-lg px-8 py-6">
                <Upload className="mr-2 h-5 w-5" />
                Upload Resume
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Upload className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Upload Resume</CardTitle>
                  <CardDescription>
                    Upload your resume in PDF or text format. Our AI will parse and analyze your skills and experience.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>AI Analysis</CardTitle>
                  <CardDescription>
                    Advanced machine learning algorithms analyze your resume and match it against thousands of job
                    descriptions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Get Matches</CardTitle>
                  <CardDescription>
                    Receive ranked job matches with compatibility scores and detailed explanations for each match.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Resume Matcher?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">95% Accuracy</h3>
                <p className="text-muted-foreground">
                  Our AI delivers highly accurate job matches based on comprehensive skill analysis
                </p>
              </div>

              <div className="text-center">
                <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
                <p className="text-muted-foreground">
                  Get job matches in seconds, not hours. Save time in your job search
                </p>
              </div>

              <div className="text-center">
                <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your resume data is encrypted and never shared with third parties
                </p>
              </div>

              <div className="text-center">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">50K+ Users</h3>
                <p className="text-muted-foreground">
                  Join thousands of professionals who found their dream jobs with us
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    "This platform helped me find my dream job in just 2 weeks! The AI matching was incredibly accurate
                    and saved me hours of searching."
                  </CardDescription>
                  <div className="mt-4">
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">Software Engineer at Google</p>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    "The compatibility scores were spot-on. I got interviews for roles I never would have considered,
                    and landed a perfect match!"
                  </CardDescription>
                  <div className="mt-4">
                    <p className="font-semibold">Marcus Johnson</p>
                    <p className="text-sm text-muted-foreground">Product Manager at Microsoft</p>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    "As a career changer, this tool was invaluable. It identified transferable skills I didn't even know
                    I had and matched me perfectly."
                  </CardDescription>
                  <div className="mt-4">
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">UX Designer at Airbnb</p>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
