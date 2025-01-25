import { StreamChat } from "stream-chat";

const apiKey = process.env.NEXT_PUBLIC_STREAM_IO_API_KEY;
const apiSecret = process.env.NEXT_PUBLIC_STREAM_IO_API_SECRET;

export async function POST(request) {
  const { user1, user2 } = await request.json();

  if (!user1 || !user2) {
    return new Response(
      JSON.stringify({ error: "Both user1 and user2 are required" }),
      { status: 400 }
    );
  }

  const serverClient = StreamChat.getInstance(apiKey, apiSecret);

  try {
    // Create or fetch a one-to-one channel
    const channel = serverClient.channel("messaging", {
      members: [user1, user2],
    });
    await channel.watch();

    return new Response(
      JSON.stringify({ channelId: channel.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating channel:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
