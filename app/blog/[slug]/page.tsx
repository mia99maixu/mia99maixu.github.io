import Link from "next/link"
import { Button } from "@/components/ui/button"

// Create a map of blog posts with unique content
const blogPosts = {
  'post-1': {
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
    `
  },
  'post-2': {
    title: "Building Effective Data Pipelines with Python",
    date: "February 28, 2023",
    content: `
      <p>Data pipelines are essential for transforming raw data into a format suitable for analysis and machine learning. A well-designed pipeline ensures data consistency, reduces manual effort, and enables reproducibility.</p>
      
      <h2>Components of a Data Pipeline</h2>
      
      <p>An effective data pipeline typically includes these key components:</p>
      
      <ul>
        <li><strong>Data Extraction</strong>: Pulling data from various sources like databases, APIs, or files</li>
        <li><strong>Data Transformation</strong>: Cleaning, normalizing, and preparing data for analysis</li>
        <li><strong>Data Loading</strong>: Storing processed data in a destination system</li>
        <li><strong>Orchestration</strong>: Managing the workflow and dependencies between tasks</li>
        <li><strong>Monitoring</strong>: Tracking pipeline performance and detecting issues</li>
      </ul>
      
      <h2>Python Tools for Data Pipelines</h2>
      
      <h3>1. Apache Airflow</h3>
      
      <p>Airflow is a platform to programmatically author, schedule, and monitor workflows:</p>
      
      <pre><code>from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def extract_data():
    # Extract data from source
    pass

def transform_data():
    # Transform the extracted data
    pass

def load_data():
    # Load data to destination
    pass

with DAG('simple_etl', start_date=datetime(2023, 1, 1), schedule_interval='@daily') as dag:
    extract_task = PythonOperator(task_id='extract', python_callable=extract_data)
    transform_task = PythonOperator(task_id='transform', python_callable=transform_data)
    load_task = PythonOperator(task_id='load', python_callable=load_data)
    
    extract_task >> transform_task >> load_task</code></pre>
    `
  },
  'feature-engineering-techniques-for-machine-learning-models': {
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
    `
  },
  'building-effective-data-pipelines-with-python': {
    title: "Building Effective Data Pipelines with Python",
    date: "February 28, 2023",
    content: `
      <p>Data pipelines are essential for transforming raw data into a format suitable for analysis and machine learning. A well-designed pipeline ensures data consistency, reduces manual effort, and enables reproducibility.</p>
      
      <h2>Components of a Data Pipeline</h2>
      
      <p>An effective data pipeline typically includes these key components:</p>
      
      <ul>
        <li><strong>Data Extraction</strong>: Pulling data from various sources like databases, APIs, or files</li>
        <li><strong>Data Transformation</strong>: Cleaning, normalizing, and preparing data for analysis</li>
        <li><strong>Data Loading</strong>: Storing processed data in a destination system</li>
        <li><strong>Orchestration</strong>: Managing the workflow and dependencies between tasks</li>
        <li><strong>Monitoring</strong>: Tracking pipeline performance and detecting issues</li>
      </ul>
    `
  },
  'ethical-considerations-in-ai-and-machine-learning': {
    title: "Ethical Considerations in AI and Machine Learning",
    date: "January 20, 2023",
    content: `
      <p>As AI and machine learning systems become more prevalent in society, it's crucial to consider the ethical implications of these technologies.</p>
      
      <h2>Key Ethical Considerations</h2>
      
      <h3>1. Bias and Fairness</h3>
      
      <p>AI systems can perpetuate and amplify existing biases in data. Ensuring fairness requires:</p>
      
      <ul>
        <li>Diverse and representative training data</li>
        <li>Regular auditing for bias</li>
        <li>Techniques to mitigate unfairness in models</li>
      </ul>
      
      <h3>2. Privacy and Data Protection</h3>
      
      <p>Machine learning often requires large amounts of data, raising concerns about:</p>
      
      <ul>
        <li>Data collection consent</li>
        <li>Secure storage and processing</li>
        <li>Right to be forgotten</li>
      </ul>
      
      <h3>3. Transparency and Explainability</h3>
      
      <p>Complex models like deep neural networks can be difficult to interpret, leading to "black box" decision-making. Approaches to address this include:</p>
      
      <ul>
        <li>LIME (Local Interpretable Model-agnostic Explanations)</li>
        <li>SHAP (SHapley Additive exPlanations) values</li>
        <li>Feature importance analysis</li>
      </ul>
    `
  },
  'time-series-forecasting-for-business-applications': {
    title: "Time Series Forecasting for Business Applications",
    date: "December 10, 2022",
    content: `
      <p>Time series forecasting is a powerful technique for predicting future values based on previously observed values. In business, it's used for demand forecasting, financial planning, resource allocation, and more.</p>
      
      <h2>Popular Time Series Forecasting Methods</h2>
      
      <h3>1. ARIMA Models</h3>
      
      <p>Autoregressive Integrated Moving Average (ARIMA) models are a classic approach for time series forecasting:</p>
      
      <pre><code>from statsmodels.tsa.arima.model import ARIMA

# Fit ARIMA model
model = ARIMA(time_series_data, order=(p, d, q))
model_fit = model.fit()

# Forecast
forecast = model_fit.forecast(steps=10)</code></pre>
      
      <h3>2. Prophet</h3>
      
      <p>Developed by Facebook, Prophet is designed for forecasting time series with strong seasonal effects and multiple seasons of historical data:</p>
      
      <pre><code>from prophet import Prophet

# Create and fit model
model = Prophet()
model.fit(df)

# Create future dataframe and predict
future = model.make_future_dataframe(periods=365)
forecast = model.predict(future)</code></pre>
      
      <h3>3. LSTM Networks</h3>
      
      <p>Long Short-Term Memory networks are a type of recurrent neural network well-suited for time series forecasting:</p>
      
      <pre><code>from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

model = Sequential()
model.add(LSTM(50, return_sequences=True, input_shape=(n_steps, n_features)))
model.add(LSTM(50))
model.add(Dense(1))
model.compile(optimizer='adam', loss='mse')</code></pre>
    `
  }
};

// Generate static paths for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map(slug => ({ slug }));
}

// Update to use the correct Promise-based params type
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params Promise to get the actual slug
  const { slug } = await params;
  
  // Get the post data based on the slug, or use a default if not found
  const post = blogPosts[slug] || {
    title: "Blog Post Not Found",
    date: "Unknown Date",
    content: "<p>Sorry, the requested blog post could not be found.</p>"
  };

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

// Add metadata generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug] || { title: "Blog Post Not Found" };
  
  return {
    title: `${post.title} - Mai Xu's Blog`,
    description: `Read Mai Xu's insights on ${post.title}`,
  };
}
