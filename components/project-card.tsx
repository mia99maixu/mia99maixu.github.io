import Link from "next/link"
import { Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
}

export default function ProjectCard({ title, description, tags, imageUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div
        className="w-full bg-muted flex items-center justify-center p-4 relative"
        style={{ height: "250px", overflow: "hidden" }}
      >
        {imageUrl ? (
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-contain"
            style={{ maxHeight: "242px" }}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = "/placeholder.svg?height=200&width=200"
            }}
          />
        ) : (
          <img src="/placeholder.svg?height=200&width=200" alt={title} className="w-full h-full object-contain" />
        )}
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

