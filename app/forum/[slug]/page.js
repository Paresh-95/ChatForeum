import ChatForum from '@/components/ChatForum'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'


const Forum = async ({params}) => {
  const user = await currentUser()
  const slug = (await params).slug
    return (
    <ChatForum slug={slug} clerkUser={{id:user.id,name:user.firstName,token:user.publicMetadata}}/>
  )
}

export default Forum