import Hero from "./components/Hero";
import Trending from "./components/Trending";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Trending />
    </div>
  );
}
