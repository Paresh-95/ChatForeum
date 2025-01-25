import { StreamChat } from "stream-chat";

const apiKey = process.env.NEXT_PUBLIC_STREAM_IO_API_KEY;
const apiSecret = process.env.NEXT_PUBLIC_STREAM_IO_API_SECRET;

export async function POST(request) {
  const { userId } = await request.json();

  if (!userId) {
    return new Response(
      JSON.stringify({ error: "User ID is required" }),
      { status: 400 }
    );
  }

  const serverClient = StreamChat.getInstance(apiKey, apiSecret);

  try {
    // Create Stream token for the user
    const token = serverClient.createToken(userId);

    // Optionally, upsert user metadata
    await serverClient.upsertUser({
      id: userId,
      name: `User ${userId}`, // Customize user data
    });

    return new Response(
      JSON.stringify({ token }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error authenticating user:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
