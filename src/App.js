import Header from './components/Header/Header.js'
import Search from './components/Search/Search.js'
import Map from './components/Map/Map.js'

const x = false

function App() {
  return (
    <div className="Container">
      <Header />
      <Search />
      {/* <h2>{x ? 'yes': 'no'}</h2> */}
      <Map />
    </div>
  );
}

export default App;
