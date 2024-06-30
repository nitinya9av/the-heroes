import './App.css'
import theheroesLogo from '/the-heroes.svg'
import Search from './components/Search'

function App() {
  return (
    <>
      <div>
        <img src={theheroesLogo} className="logo" alt="The Heroes logo" />
      </div>
      <div>
        <Search />
      </div>
    </>
  )
}

export default App
