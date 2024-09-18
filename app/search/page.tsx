import PageWrapper from '@/components/wrapper/page-wrapper'
import ProfileWrapper from '@/components/ProfileWrapper'
import SearchHero from '@/components/SearchHero'

export default function SearchPage() {
  return (
    <PageWrapper>
      <SearchHero />
      <ProfileWrapper />
    </PageWrapper>
  )
}