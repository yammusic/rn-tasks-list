import React from 'react'
import { PaperProvider } from 'react-native-paper'

import { StoreProvider } from '@/domain/store/StoreProvider'
import type { AppLayoutProps } from './types'

/**
 * AppLayout component which serves as the layout for the application.
 *
 * @param props - The properties for the AppLayout component.
 * @returns The rendered AppLayout component.
 */
export function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <StoreProvider>
      <PaperProvider>
        { children }
      </PaperProvider>
    </StoreProvider>
  )
}