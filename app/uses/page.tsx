import { Card } from '@/components/card'
import { Section, type SectionProps } from './section'
import { IndexLayout } from '@/components/index-layout'
import _toolSections from './tools.json'
import { ToolSections } from 'types'

const toolSections = _toolSections as ToolSections

export const metadata = {
  title: 'Uses',
}

function ToolSectionComponent({ children, ...props }: SectionProps) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function ToolComponent({
  title,
  href,
  children,
}: React.PropsWithChildren<{ title: string; href?: string }>) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Page() {
  return (
    <IndexLayout>
      <div className="space-y-20">
        {Object.entries(toolSections).map(([section, tools]) => (
          <ToolSectionComponent key={section} title={section}>
            {tools.map((tool, idx) => (
              <ToolComponent key={idx} title={tool.title}>
                {tool.description}
              </ToolComponent>
            ))}
          </ToolSectionComponent>
        ))}
      </div>
    </IndexLayout>
  )
}
