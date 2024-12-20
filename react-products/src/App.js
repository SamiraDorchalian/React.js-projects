import CareBaby from "./components/CareBaby/CareBaby";
import Client from "./components/Client/Client";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/HeroSlider";
import { Products } from "./components/Products/Products";
import { Shoes } from "./components/Shop/Shoes";
import { Shop } from "./components/Shop/Shop";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CareBaby />
      <Products />
      <Shop />
      <Shoes />
      <Client />
    </>
  );
}

export default App;
