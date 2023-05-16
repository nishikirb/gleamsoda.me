import { allArticles, type Article } from 'contentlayer/generated'
import { formatDate } from '@/lib/formatDate'
import { Card } from '@/components/card'
import { IndexLayout } from '@/components/index-layout'

export const metadata = {
  title: 'Articles',
}

function ArticleComponent({ article }: { article: Article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function Page() {
  return (
    <IndexLayout>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {allArticles.map((article) => (
            <ArticleComponent key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </IndexLayout>
  )
}
