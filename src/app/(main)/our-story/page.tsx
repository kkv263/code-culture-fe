import ArtistCards from "@modules/our-story/components/artist-cards"
import OurStoryBody from "@modules/our-story/components/our-story-body"
import OurStoryHeader from "@modules/our-story/components/our-story-header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Our Story",
}

const OurStory = () => {
  return (
    <>
      <OurStoryHeader/>
      <OurStoryBody />
      <ArtistCards />
    </>
  )
}

export default OurStory
