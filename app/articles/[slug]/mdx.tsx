import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

const components = {
  Image,
}

// This file is required to use MDX in `app` directory.
export function MDX({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
