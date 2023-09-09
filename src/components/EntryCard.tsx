import { formatToDisplay } from "@/lib/date";
import { Card } from "@/components/Card";
import type { CollectionEntry } from "astro:content";

export function EntryCard({ slug, data }: CollectionEntry<"blog">) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${slug}`}>{data.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={data.date.toISOString()}
          className="md:hidden"
          decorate
        >
          {formatToDisplay(data.date)}
        </Card.Eyebrow>
        <Card.Description>{data.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={data.date.toISOString()}
        className="mt-1 hidden md:block"
      >
        {formatToDisplay(data.date)}
      </Card.Eyebrow>
    </article>
  );
}
