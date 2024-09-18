"use client"

import { useTheme } from 'next-themes'
import PageWrapper from '@/components/wrapper/page-wrapper'
import ContentLayout from '@/components/layout/ContentLayout'
import ProfileWrapper from '@/components/ProfileWrapper'
import SearchHero from '@/components/SearchHero'

const BackgroundPattern = () => {
  const { theme } = useTheme()

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${theme === 'dark' ? 'bg-zinc-900' : 'bg-background'}`}>
      <div className="absolute inset-0 bg-dot-pattern opacity-10 dark:opacity-20" />
    </div>
  )
}

export default function SearchPage() {
  return (
    <PageWrapper>
      <BackgroundPattern />
      <ContentLayout className="relative py-1 sm:py-2 lg:py-3">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <SearchHero />
          <ProfileWrapper />
        </div>
      </ContentLayout>
    </PageWrapper>
  )
}