"use client"
import { useState, useEffect } from "react"
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react"
import { Loader2 } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import "stream-chat-react/dist/css/v2/index.css"


const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_IO_API_KEY 
  console.log(apiKey)

  if (!apiKey) {
    console.error("Stream API key is not set")
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Chat configuration is incomplete. Please contact support.</AlertDescription>
      </Alert>
    )
  }

  const userId = clerkUser.id
  const userName = clerkUser.name
  const userToken = clerkUser.token.token

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${(userName)}`,
  }

  console.log(user)
  const [channel, setChannel] = useState()
  const [clientError, setClientError] = useState(null)

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  })

  useEffect(() => {
    if (!client) return

    const initChannel = async () => {
      try {
        const channel = client.channel("messaging", slug, {
          image: `https://getstream.io/random_png/?name=${(slug)}`,
          name: `${slug} Discussion`,
          members: [userId],
        })

        await channel.watch()
        setChannel(channel)
      } catch (error) {
        console.error("Error initializing channel:", error)
        setClientError("Failed to initialize chat channel. Please try again later.")
      }
    }

    initChannel()
  }, [client, slug, userId])

  if (clientError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{clientError}</AlertDescription>
      </Alert>
    )
  }

  if (!client || !channel) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Setting up chat...</span>
      </div>
    )
  }

  return (
    <Chat client={client} theme="str-chat__theme-light">
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

export default ChatForum

