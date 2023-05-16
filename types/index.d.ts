import { type ForwardRefExoticComponent, PropsWithRef } from 'react'
import { type LinkProps } from 'next/link'

export type SiteConfig = {
  owner: string
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type Project = {
  name: string
  description: string
  link: ContentLink
  logo: string
}

export type Tool = {
  title: string
  description: string
  link?: ContentLink
}

export type ToolSections = {
  [key: string]: Tool[]
}

export type ContentLink = {
  href: string
  label: string
}

export type ForwardRefComponent<T extends keyof JSX.IntrinsicElements> =
  ForwardRefExoticComponent<PropsWithRef<JSX.IntrinsicElements[T]>>

export type LinkPropsWithAttr = LinkProps &
  React.HTMLAttributes<HTMLAnchorElement>
