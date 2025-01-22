import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export function ForeumCards({ topic }) {
  return (
    <Card className="w-[300px] overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-[200px] w-full">
          <Image src={topic.image || "/placeholder.svg"} alt={`${topic.text} logo`} fill style={{ objectFit: "cover" }} />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-bold mb-2">{topic.text}</CardTitle>
        <CardDescription>{topic.description}</CardDescription>
      </CardContent>
    </Card>
  )
}
