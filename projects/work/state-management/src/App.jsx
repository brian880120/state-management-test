import './App.css'
import Child from './components/Child'
import Count from './components/Count'
import { CounterContextProvider } from './context/count.context'

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Count />
        <Child />
      </CounterContextProvider>
    </div>
  )
}

export default App
