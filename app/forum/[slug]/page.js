import ChatForum from '@/components/ChatForum'
import React from 'react'


const Forum = async ({params}) => {
  const slug = (await params).slug
    return (
    <ChatForum/>
  )
}

export default Forum