import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MessageCircle, Shield, Zap, Smile, Globe, Clock, ArrowRight } from "lucide-react"

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
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="PieChat App Interface"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-2xl"
                  height="310"
                  src="/chat1.jpg"
                  width="550"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Why Choose PieChat?</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-white dark:bg-gray-700 transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <Zap className="w-10 h-10 text-purple-500 mb-2" />
                  <CardTitle className="text-xl font-semibold">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Experience chat speeds that'll make your head spin. Our optimized infrastructure ensures minimal
                    latency.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <Shield className="w-10 h-10 text-purple-500 mb-2" />
                  <CardTitle className="text-xl font-semibold">Bank-Grade Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your conversations are locked down tighter than Fort Knox. End-to-end encryption keeps your chats
                    private.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <Smile className="w-10 h-10 text-purple-500 mb-2" />
                  <CardTitle className="text-xl font-semibold">Intuitive Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    So easy to use, even your grandma will love it. Our user-friendly interface makes chatting a breeze
                    for everyone.
                  </p>
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
                  alt="PieChat Features Showcase"
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
                  <li className="flex items-center space-x-3">
                    <MessageCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-lg">Real-time messaging with instant delivery</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-lg">Connect with friends across the globe</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-lg">Message history that lasts forever</span>
                  </li>
                </ul>
                <Button className="w-fit mt-4">
                  Explore All Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-purple-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to start chatting?</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-300">
                Join thousands of users who are already enjoying PieChat. Sign up now and experience the future of
                messaging.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" required />
                  <Button type="submit" className="w-full sm:w-auto">
                    Sign Up
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-purple-500 transition-colors" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-8 px-4 md:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 PieChat Inc. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link
              className="text-sm text-gray-500 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
              href="#"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

