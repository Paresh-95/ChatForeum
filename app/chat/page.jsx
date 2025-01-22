import React from "react"
import { Hourglass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Chat() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <Hourglass className="w-6 h-6 mr-2 animate-pulse" />
            Chat Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6">We're working hard to bring you an amazing chat experience. Stay tuned!</p>
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s] mx-2"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
            <p className="text-sm text-gray-500 text-center">Estimated launch: Feb 2025</p>
          </div>
        </CardContent>
        
      </Card>
    </div>
  )
}

