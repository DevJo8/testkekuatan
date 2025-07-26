'use client'

import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const WalletProvider: FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
} 