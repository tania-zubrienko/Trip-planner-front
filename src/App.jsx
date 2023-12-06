import './App.css'
import AppRoutes from './AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  )
}

export default App