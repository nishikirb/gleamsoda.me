'use client'

import { createContext } from 'react'
import { usePathname } from 'next/navigation'
import { usePrevious } from '@/hooks/use-previous'

export const PreviousContext = createContext('')

export function PreviousProvider({ children }: React.PropsWithChildren<{}>) {
  const prev = usePrevious(usePathname())
  return (
    <PreviousContext.Provider value={prev}>{children}</PreviousContext.Provider>
  )
}
