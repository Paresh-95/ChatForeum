import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

// Define values.
const api_key = "asnj5w48ew4k";
const api_secret =
  "r9jnsdat7xpme53scwp24at4fjy3aqfcrc9g77c7wd6jgchv8h7pq7ecuzw9uj46";
// const user_id = "user_2rx2j0A0Ulv4coeK2742s4vn5Yb";

// Initialize a Server Client

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);

  const user = await request.json();

  // Create User Token
  const token = serverClient.createToken(user.data.id);
  console.log("A New User Created ", user.data.name);
  const client = await clerkClient();


  await serverClient.upsertUser({id:user.data.id})


  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  //give access to this user to all chats

  const slugs = [
    "Java",
    "Javascript",
    "Python",
    "React",
    "Node",
    "Nextjs",
    "SpringBoot",
    "Mongodb",
    "Postgresql",
    "Html-Css",
  ];


  slugs.forEach(async(slug)=>{
    const channel = serverClient.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: slug+" "+"Discussion",
      created_by_id: user.data.id
    });
    await channel.create();
    channel.addMembers([user.data.id])
  })



  return NextResponse.json({
    message: "New User Created",
  });
}
