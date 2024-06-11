import Banner from "../components/Banner"
import CharacterCards from "../components/CharacterCards"
import HomeCards from "../components/HomeCards"
import ViewAllCharacters from "../components/ViewAllCharacters"

const HomePage = () => {
  return (
    <>
      <Banner />
      <HomeCards />
      <CharacterCards isHome />
      <ViewAllCharacters />
    </>
  )
}

export default HomePage