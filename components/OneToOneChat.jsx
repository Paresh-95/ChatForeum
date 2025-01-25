'use client'

import React, { useState, useEffect } from "react"
import { StreamChat } from "stream-chat"
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
  Window,
} from "stream-chat-react"
import { Loader2 } from 'lucide-react'
import "stream-chat-react/dist/css/v2/index.css"

const apiKey = process.env.NEXT_PUBLIC_STREAM_IO_API_KEY
const client = StreamChat.getInstance(apiKey)

const OneToOneChat = ({ userId, recipientId, token }) => {
  const [channel, setChannel] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    const initializeChat = async () => {
      try {
        await client.connectUser({ id: userId }, token)

        const channel = client.channel("messaging", {
          members: [userId, recipientId],
        })
        await channel.watch()

        setChannel(channel)
      } catch (error) {
        console.error("Error initializing chat:", error)
        setError("Failed to initialize chat. Please try again.")
      }
    }

    initializeChat()

    return () => {
      client.disconnectUser()
    }
  }, [userId, recipientId, token])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-red-500">
        <p>{error}</p>
      </div>
    )
  }

  if (!channel) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Initializing chat...</p>
      </div>
    )
  }

  return (
    <div className="h-[600px] -mx-6 chat-container">
      <Chat client={client} theme="messaging light">
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
      <style jsx global>{`
        .chat-container .str-chat {
          height: 100%;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .str-chat__header {
          background: var(--background);
          border-bottom: 1px solid var(--border);
          box-shadow: none;
        }
        .str-chat__header-title {
          font-size: 1rem;
          font-weight: 600;
        }
        .str-chat-channel {
          height: 100%;
        }
        .str-chat__main-panel {
          background: var(--background);
        }
        .str-chat__message-input {
          background: var(--background);
          border-top: 1px solid var(--border);
        }
        .str-chat__input-flat {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
        }
        .str-chat__message-input-send-button {
          color: var(--primary);
        }
        .str-chat__message-input-send-button:hover {
          color: var(--primary);
          opacity: 0.8;
        }
        .str-chat__message-textarea {
          background: var(--background);
          border: none;
        }
        .str-chat__message-textarea:focus {
          background: var(--background);
          border: none;
          box-shadow: none;
        }
        .str-chat__message-data {
          margin-bottom: 0.5rem;
        }
        .str-chat__message-text-inner {
          background: var(--primary);
          color: var(--primary-foreground);
          border-radius: 1rem;
          padding: 0.5rem 1rem;
        }
        .str-chat__message--me .str-chat__message-text-inner {
          background: var(--muted);
          color: var(--muted-foreground);
        }
        .str-chat__message-data-time {
          font-size: 0.75rem;
          color: var(--muted-foreground);
        }
        .str-chat__avatar {
          border-radius: 9999px;
        }
        .str-chat__message-attachment {
          border-radius: 0.5rem;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default OneToOneChat
