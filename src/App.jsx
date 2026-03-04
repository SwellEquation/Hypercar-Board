import "./App.css"
import Card from "./Card"

function App() {

  const cars = [
    {
      name: "W Motors Lykan Hypersport",
      country: "Dubai",
      image: "https://www.hdcarwallpapers.com/thumbs/2016/2017_w_motors_lykan_hypersport-t2.jpg",
      website: "https://www.wmotors.ae/lykan-hypersport/"
    },
    {
      name: "Nilu 27",
      country: "USA",
      image: "https://mycarheaven.com/wp-content/smush-webp/2024/08/Nilu-27-Front-1320x736.jpg.webp",
      website: "https://nilu27.com/"
    },
    {
      name: "VLF Force 1 v10",
      country: "USA",
      image: "https://www.slashgear.com/img/gallery/2016-vlf-force-1-v10-gallery/intro-import.webp",
      website: "https://vl-automotive.com/"
    },
    {
      name: "Ferrari f12tdf",
      country: "Italy",
      image: "https://cdn.motor1.com/images/mgl/3xWP1/s3/2016-ferrari-f12tdf-mecum-auction.webp",
      website: "https://www.ferrari.com/en-EN/auto/f12tdf"
    },
    {
      name: "Bugatti Chiron Pur Sport",
      country: "France",
      image: "https://spots.ag/2023/04/03/bugatti-chiron-pur-sport-c807303042023175250_1.jpg?1680537232",
      website: "https://www.bugatti.com/en/models/chiron-pur-sport"
    },
    {
      name: "Porsche 911",
      country: "Germany",
      image: "https://static0.topspeedimages.com/wordpress/wp-content/uploads/2024/02/porsche-911-turbo-s.jpg?q=70&fit=crop&w=1600&h=900&dpr=1",
      website: "https://www.porsche.com/usa/models/911/"
    },
    {
      name: "Lamborghini Centenario",
      country: "Italy",
      image: "https://vignette.wikia.nocookie.net/forzamotorsport/images/e/ee/FH4_Lambo_Centenario_Front.jpg/revision/latest?cb=20190213123523",
      website: "https://www.lamborghini.com/en-en/history/centenario"
    },
    {
      name: "Venom Hennessy F5",
      country: "USA",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/2022_Hennessey_Venom_F5.jpg/1280px-2022_Hennessey_Venom_F5.jpg",
      website: "https://www.hennesseyspecialvehicles.com/venom-f5/"
    },
    {
      name: "Trion Nemesis",
      country: "USA",
      image: "https://www.blessthisstuff.com/imagens/listagem/2014/grande/grande_trion-nemesis.jpg",
      website: "https://www.trionsupercars.com/nemesis"
    },
    {
      name: "FV Frangivento Asfane",
      country: "Italy",
      image: "https://24tv.ua/auto/resources/photos/news/201905/13295__14f08e9c-3a8e-4430-a039-d48a2dca3bb4.jpg?fit=cover&w=1200&h=0&q=65&output=webp&q=80",
      website: "https://www.frangiventoauto.com/frangivento-asfane/"
    },
  ]

  return (
    <div className="app">
      <h1 className="title">Hyper Car Link Page</h1>
      <div className="board">
        {cars.map((car, index) => (
          <Card 
            key={index}
            name={car.name}
            country={car.country}
            image={car.image}
            website={car.website}
          />
        ))}
      </div>
    </div>
  )
}

export default App