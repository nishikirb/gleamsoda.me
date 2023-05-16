import { notFound } from 'next/navigation'
import { allArticles } from 'contentlayer/generated'
import { formatDate } from '@/lib/formatDate'
import { Prose } from './prose'
import { MDX } from './mdx'

type ArticleProps = {
  params: {
    slug: string
  }
}

function getArticleFromParams({ slug }: { slug: string }) {
  return allArticles.find((article) => article.slug === slug)
}

export function generateMetadata({ params }: ArticleProps) {
  const article = getArticleFromParams(params)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export function generateStaticParams() {
  return allArticles.map(({ slug }) => ({
    slug: slug,
  }))
}

export default function Page({ params }: ArticleProps) {
  const article = getArticleFromParams(params)

  if (!article) {
    return notFound()
  }

  return (
    <article>
      <header className="flex flex-col">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {article.title}
        </h1>
        <time
          dateTime={article.date}
          className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span className="ml-3">{formatDate(article.date)}</span>
        </time>
      </header>
      <Prose className="mt-8">
        <MDX code={article.body.code} />
      </Prose>
    </article>
  )
}
