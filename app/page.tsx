import Componen from "./components/home-components/componen"
import Ship from "./components/home-components/ship"
import Showcase from "./components/home-components/showcase"

const Home = () => {
  return (
    <section className="main">
        <Showcase/>
        <Ship/>
        <Componen/>
    </section>
  )
}

export default Home