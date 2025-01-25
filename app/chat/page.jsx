"use client"

import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, MessageSquare, UserCheck } from "lucide-react"
import OneToOneChat from "@/components/OneToOneChat"

const ChatPage = () => {
  const [userId, setUserId] = useState("")
  const [recipientId, setRecipientId] = useState("")
  const [token, setToken] = useState("")
  const [startChat, setStartChat] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  })

  const slideUp = useSpring({
    transform: token ? "translateY(0%)" : "translateY(100%)",
    opacity: token ? 1 : 0,
    config: { tension: 280, friction: 60 },
  })

  const authenticateUser = async () => {
    if (!userId) {
      alert("Please enter your User ID!")
      return
    }
    setIsAuthenticating(true)
    try {
      const response = await fetch("/api/stream/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      })

      const data = await response.json()
      if (data.token) {
        setToken(data.token)
      } else {
        alert("Authentication failed!")
      }
    } catch (error) {
      alert("An error occurred during authentication.")
    } finally {
      setIsAuthenticating(false)
    }
  }

  const initiateChat = () => {
    if (!userId || !recipientId || !token) {
      alert("Please fill in all fields and authenticate first!")
      return
    }
    setStartChat(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <animated.div style={fadeIn} className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">One-to-One Chat</CardTitle>
          </CardHeader>
          <CardContent>
            {!startChat ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Your User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <Button onClick={authenticateUser} className="w-full" disabled={isAuthenticating}>
                  {isAuthenticating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Authenticating...
                    </>
                  ) : (
                    <>
                      <UserCheck className="mr-2 h-4 w-4" />
                      Authenticate
                    </>
                  )}
                </Button>

                <animated.div style={slideUp}>
                  {token && (
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Recipient's User ID"
                        value={recipientId}
                        onChange={(e) => setRecipientId(e.target.value)}
                        className="mt-1"
                      />
                      <Button onClick={initiateChat} className="w-full">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Start Chat
                      </Button>
                    </div>
                  )}
                </animated.div>
              </div>
            ) : (
              <OneToOneChat userId={userId} recipientId={recipientId} token={token} />
            )}
          </CardContent>
        </Card>
      </animated.div>
    </div>
  )
}

export default ChatPage

