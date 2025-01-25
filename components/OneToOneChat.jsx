'use client'
import React, { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css"

const apiKey = process.env.NEXT_PUBLIC_STREAM_IO_API_KEY;
const client = StreamChat.getInstance(apiKey);

const OneToOneChat = ({ userId, recipientId, token }) => {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const initializeChat = async () => {
      try {
        // Connect the user to Stream
        await client.connectUser({ id: userId }, token);

        // Create or fetch the one-to-one channel
        const channel = client.channel("messaging", {
          members: [userId, recipientId],
        });
        await channel.watch();

        setChannel(channel);
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    };

    initializeChat();

    return () => {
      client.disconnectUser();
    };
  }, [userId, recipientId, token]);

  if (!channel) return <div>Loading chat...</div>;

  return (
    <Chat client={client} theme="messaging light">
      <Channel channel={channel}>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Channel>
    </Chat>
  );
};

export default OneToOneChat;
