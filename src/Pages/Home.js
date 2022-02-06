import Header from './../components/Header/Header.js'
import Search from './../components/Search/Search.js'
import MapContainer from './../components/MapContainer.js'
import NavBar from './../components/NavBar.js'

function Home() {
  return (
      <div>
      <Header />
      <Search />
      <MapContainer />
      <NavBar />
      </div>
  );
}

export default Home;