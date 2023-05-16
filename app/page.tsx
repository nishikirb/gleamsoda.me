import React from 'react'
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
import { Comfortaa } from 'next/font/google'
import clsx from 'clsx'
import { Container } from '@/components/container'
import { GitHubIcon, TwitterIcon } from '@/components/social-icons'

const comfortaa = Comfortaa({ weight: '500', subsets: ['latin'] })

type SocialLinkProps = LinkProps & {
  icon: React.ComponentType<React.ComponentProps<'svg'>>
}

function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

type Content = {
  name: string
  href: string
  imageUrl: string
}

const contents: Content[] = [
  {
    name: 'Articles',
    href: '/articles',
    imageUrl: '/articles.jpeg',
  },
  {
    name: 'Projects',
    href: '/projects',
    imageUrl: '/projects.jpeg',
  },
  {
    name: 'Uses',
    href: '/uses',
    imageUrl: '/uses.jpeg',
  },
]

export default function Page() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m gleamsoda, a freelance software developer based in Tokyo.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {contents.map((content, idx) => (
            <article
              key={idx}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-40 sm:pt-24 lg:pt-40"
            >
              <Image
                src={content.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                fill
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <h3
                className={clsx(
                  comfortaa.className,
                  'mt-3 text-lg font-semibold leading-6 text-white'
                )}
              >
                <Link href={content.href}>
                  <span className="absolute inset-0" />
                  {content.name}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </>
  )
}
