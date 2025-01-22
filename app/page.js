import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MessageCircle, Shield, Zap, Smile, Globe, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    New Release
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Chat Smarter, Not Harder
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    PieChat brings a fresh slice of innovation to your conversations. Experience seamless communication
                    with a dash of fun.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className=" border-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="PieChat App"
                  className="aspect-video overflow-hidden rounded-full object-cover object-center shadow-2xl"
                  height="310"
                  src="/chat1.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Why Choose PieChat?</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 text-purple-500" />
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Experience chat speeds that'll make your head spin.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 text-purple-500" />
                  <CardTitle>Bank-Grade Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your conversations are locked down tighter than Fort Knox.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Smile className="w-10 h-10 text-purple-500" />
                  <CardTitle>Intuitive Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>So easy to use, even your grandma will love it.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center">
                <Image
                  alt="PieChat Features"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-xl"
                  height="310"
                  src="/chat3.png"
                  width="550"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Features that make chatting a piece of cake
                </h2>
                <ul className="grid gap-6">
                  <li className="flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6 text-purple-500" />
                    <span>Real-time messaging with instant delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Globe className="w-6 h-6 text-purple-500" />
                    <span>Connect with friends across the globe</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-purple-500" />
                    <span>Message history that lasts forever</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-purple-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to start chatting?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Join thousands of users who are already enjoying PieChat. Sign up now and experience the future of
                messaging.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 PieChat Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

