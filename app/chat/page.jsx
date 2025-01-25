"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, MessageSquare, UserCheck, ArrowLeft } from 'lucide-react'
import OneToOneChat from "@/components/OneToOneChat"
import axios from "axios"
import { toast } from "sonner"

const ChatPage = () => {
  const [userId, setUserId] = useState("")
  const [recipientId, setRecipientId] = useState("")
  const [token, setToken] = useState("")
  const [startChat, setStartChat] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const authenticateUser = async () => {
    if (!userId) {
      toast.error("Please enter your User ID!")
      return
    }
    setIsAuthenticating(true)
    try {
      const { data } = await axios.post("/api/authenticate", { userId })

      if (data.token) {
        setToken(data.token)
        toast.success("Authentication successful!")
      } else {
        toast.error("Authentication failed!")
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "An error occurred during authentication.")
    } finally {
      setIsAuthenticating(false)
    }
  }

  const initiateChat = () => {
    if (!userId || !recipientId || !token) {
      toast.error("Please fill in all fields and authenticate first!")
      return
    }
    setStartChat(true)
  }

  const handleBack = () => {
    setStartChat(false)
    setToken("")
    setRecipientId("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full">
        <Card className="border-2">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              {startChat && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleBack}
                  className="h-8 w-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              <CardTitle className="text-2xl font-bold text-center flex-1">
                One-to-One Chat
              </CardTitle>
              {startChat && <div className="w-8" />}
            </div>
          </CardHeader>
          <CardContent>
            {!startChat ? (
              <div className="space-y-4 max-w-md mx-auto">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Your User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <Button
                  onClick={authenticateUser}
                  className="w-full"
                  disabled={isAuthenticating}
                >
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
              </div>
            ) : (
              <OneToOneChat userId={userId} recipientId={recipientId} token={token} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ChatPage
