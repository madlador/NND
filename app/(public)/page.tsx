import { HeroSection } from "@/components/home/hero-section"
import { KnowledgeSection } from "@/components/home/knowledge-section"
import { NewsSection } from "@/components/home/news-section"
import { ListingsSection } from "@/components/home/listings-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <KnowledgeSection />
      <NewsSection />
      <ListingsSection />
    </>
  )
}
