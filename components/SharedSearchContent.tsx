"use client"

import { useTheme } from 'next-themes'
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

const GradientShadow = () => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div 
        className={`absolute inset-x-0 top-0 h-[800px] 
          ${isDark 
            ? 'bg-gradient-to-b from-primary/10 via-primary/5 to-transparent' 
            : 'bg-gradient-to-b from-primary/25 via-secondary/20 to-transparent'
          }`}
        style={{
          transform: isDark ? 'translateY(-35%)' : 'translateY(-30%)',
          filter: 'blur(120px)',
          WebkitMaskImage: isDark 
            ? 'radial-gradient(ellipse at 50% 0%, black 60%, transparent 90%)' 
            : 'radial-gradient(ellipse at 50% 0%, black 70%, transparent 100%)'
        }}
      />
      {!isDark && (
        <div 
          className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-accent/30 via-accent/20 to-transparent"
          style={{
            transform: 'translateY(-20%) rotate(-10deg)',
            filter: 'blur(80px)',
            WebkitMaskImage: 'radial-gradient(ellipse at 70% 0%, black 60%, transparent 90%)'
          }}
        />
      )}
    </div>
  )
}

export default function SharedSearchContent() {
  return (
    <>
      <BackgroundPattern />
      <GradientShadow />
      <ContentLayout className="relative py-1 sm:py-2 lg:py-3">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <SearchHero />
          <ProfileWrapper />
        </div>
      </ContentLayout>
    </>
  )
}