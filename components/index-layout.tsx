import { Container } from '@/components/container'

export function IndexLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
