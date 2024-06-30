import theheroesLogo from '/the-heroes.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <img src={theheroesLogo} className="logo" alt="The Heroes logo" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter character name"
        />
      </div>
    </>
  )
}

export default App
