import { Container } from '@/components/container'
import { Back } from './back'
import React from 'react'

export default function ArticleLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Back />
          {children}
        </div>
      </div>
    </Container>
  )
}
