import React from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export function ForeumCards({ topic, searchQuery = "" }) {
  const highlightText = (text) => {
    if (!searchQuery) return text

    const parts = text.split(new RegExp(`(${searchQuery})`, "gi"))
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <span key={i} className="bg-yellow-200">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </>
    )
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={topic.image || "/placeholder.svg"}
            alt={topic.text}
            layout="fill"
            objectFit="cover"
            className="transition-all hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{highlightText(topic.text)}</CardTitle>
        <p className="text-sm text-gray-600">{highlightText(topic.description)}</p>
      </CardContent>
    </Card>
  )
}

