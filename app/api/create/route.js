import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";


const api_key = process.env.NEXT_PUBLIC_STREAM_IO_API_KEY
const api_secret =process.env.NEXT_PUBLIC_STREAM_IO_API_SECRET 
 

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);

  const user = await request.json();

  const token = serverClient.createToken(user.data.id);
  console.log("A New User Created ", user.data.name);
  const client = await clerkClient();


  await serverClient.upsertUser({id: user.data.id})


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
    console.log(channel)
  })



  return NextResponse.json({
    message: "New User Created",
  });
}
