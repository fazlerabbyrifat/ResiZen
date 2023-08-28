import Banner from "@/components/Home/Banner/Banner";
import Features from "@/components/Home/Features/Features";
import Gallery from "@/components/Home/Gallery/Gallery";
import Room from "@/components/Home/Room/Room";


const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <Room></Room>
      <Features></Features>
      <Gallery></Gallery>
    </main>
  )
}

export default HomePage;