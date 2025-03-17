import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  // This would typically come from a CMS or database
  const posts = [
    {
      id: "post-1",
      title: "Feature Engineering Techniques for Machine Learning Models",
      excerpt:
        "Exploring advanced feature engineering techniques that can significantly improve machine learning model performance.",
      date: "March 15, 2023",
      slug: "feature-engineering-techniques-for-machine-learning-models",
    },
    {
      id: "post-2",
      title: "Building Effective Data Pipelines with Python",
      excerpt:
        "A comprehensive guide to designing and implementing efficient data pipelines for analytics and machine learning.",
      date: "February 28, 2023",
      slug: "building-effective-data-pipelines-with-python",
    },
    {
      id: "post-3",
      title: "Ethical Considerations in AI and Machine Learning",
      excerpt: "Exploring the ethical challenges and considerations when developing AI and machine learning solutions.",
      date: "January 20, 2023",
      slug: "ethical-considerations-in-ai-and-machine-learning",
    },
    {
      id: "post-4",
      title: "Time Series Forecasting for Business Applications",
      excerpt:
        "A deep dive into time series forecasting techniques and their practical applications in business settings.",
      date: "December 10, 2022",
      slug: "time-series-forecasting-for-business-applications",
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Button variant="outline" size="sm" asChild className="mb-4">
            <Link href="/">← Back to Home</Link>
          </Button>
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights, tutorials, and thoughts on data science, machine learning, and analytics by Mai Xu.
          </p>
        </div>

        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="border-b pb-10">
              <Link href={`/blog/${post.slug}`} className="group">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <span className="text-primary font-medium">Read more →</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

