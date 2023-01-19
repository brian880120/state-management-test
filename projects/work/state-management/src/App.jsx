import './App.css'
import Child from './components/Child'
import Count from './components/Count'
import FakeFetch from './components/FakeFetch'

function App() {
  return (
    <div className="App">
      <Count />
      <Child />
      <FakeFetch />
    </div>
  )
}

export default App
