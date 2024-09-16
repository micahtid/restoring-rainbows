import SearchBar from "./components/SearchBar";
import StoryDisplay from "./components/StoryDisplay";
import Highlight from "@/components/Highlight";

const Stories = () => {
  return (
    <section className="max-w-max mx-auto px-4 py-8
    flex flex-col justify-start items-start gap-y-4
    min-h-[75vh]">
      <Highlight text="Filter Our Stories" />
      <SearchBar />
      <StoryDisplay />
    </section>
  )
}

export default Stories;