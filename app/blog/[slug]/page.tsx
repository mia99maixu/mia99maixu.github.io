import Link from "next/link"
import { Button } from "@/components/ui/button"

// Add this function to generate static paths for all blog posts
export function generateStaticParams() {
  // Return an array of objects with the slugs you want to pre-render
  return [
    { slug: 'post-1' },
    { slug: 'post-2' },
    { slug: 'feature-engineering-techniques-for-machine-learning-models' },
    { slug: 'building-effective-data-pipelines-with-python' },
    { slug: 'ethical-considerations-in-ai-and-machine-learning' },
    { slug: 'time-series-forecasting-for-business-applications' }
  ]
}

// Update to use the correct Promise-based params type
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params Promise to get the actual slug
  const { slug } = await params;
  
  // In a real application, you would fetch the post data based on the slug
  // This is just a placeholder
  const post = {
    title: "Feature Engineering Techniques for Machine Learning Models",
    date: "March 15, 2023",
    content: `
      <p>Feature engineering is one of the most critical steps in the machine learning pipeline. The quality and relevance of features can significantly impact model performance, often more than the choice of algorithm itself.</p>
      
      <h2>What is Feature Engineering?</h2>
      
      <p>Feature engineering is the process of transforming raw data into features that better represent the underlying problem to predictive models, resulting in improved model accuracy on unseen data.</p>
      
      <h2>Key Feature Engineering Techniques</h2>
      
      <h3>1. Handling Missing Values</h3>
      
      <p>Missing values can significantly impact model performance. Common approaches include:</p>
      
      <ul>
        <li>Imputation with mean, median, or mode</li>
        <li>Using algorithms that handle missing values (like XGBoost)</li>
        <li>Creating "missing" indicators as additional features</li>
      </ul>
      
      <h3>2. Categorical Encoding</h3>
      
      <p>Converting categorical variables into numerical representations:</p>
      
      <ul>
        <li>One-hot encoding for nominal variables</li>
        <li>Label encoding for ordinal variables</li>
        <li>Target encoding for high-cardinality features</li>
      </ul>
      
      <h3>3. Feature Scaling</h3>
      
      <p>Standardizing or normalizing numerical features to ensure they contribute equally to the model:</p>
      
      <pre><code>from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)</code></pre>
      
      <h3>4. Feature Creation</h3>
      
      <p>Generating new features from existing ones to capture additional patterns:</p>
      
      <ul>
        <li>Polynomial features</li>
        <li>Domain-specific features (e.g., day of week from date)</li>
        <li>Interaction terms between features</li>
      </ul>
      
      <h2>Automated Feature Engineering</h2>
      
      <p>Tools like Featuretools can automate the feature engineering process:</p>
      
      <pre><code>import featuretools as ft

# Create an EntitySet
es = ft.EntitySet(id="customer_data")

# Add entities
es.add_dataframe(dataframe=customers_df, dataframe_name="customers", index="customer_id")
es.add_dataframe(dataframe=transactions_df, dataframe_name="transactions", 
                index="transaction_id", time_index="timestamp")

# Define relationships
r = ft.Relationship(es["customers"]["customer_id"], es["transactions"]["customer_id"])
es.add_relationship(r)

# Run Deep Feature Synthesis
feature_matrix, feature_names = ft.dfs(entityset=es, target_entity="customers", 
                                      max_depth=2)</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Effective feature engineering is often the difference between average and exceptional model performance. By investing time in understanding your data and creating meaningful features, you can significantly improve your machine learning models' predictive power.</p>
    `,
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" size="sm" asChild className="mb-6">
          <Link href="/blog">← Back to Blog</Link>
        </Button>

        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-8">{post.date}</p>

          <div
            className="prose prose-gray max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  )
}

// Add metadata generation if needed
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: `${slug} - Mai Xu's Blog`,
    description: `Read Mai Xu's insights on ${slug}`,
  };
}