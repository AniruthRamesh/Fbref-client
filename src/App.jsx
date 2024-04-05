import './App.css'
import Home from './pages/Home'

/**
 * @module App
 * @description The App module is the root component of the application.
 * It renders the main heading and the Home component ({@link module:Pages.Home}), which is the primary
 * page for displaying and interacting with player statistics.
 * 
 * @returns {React.Component} The rendered App component.
 */
function App() {

  return (
    <>
      <h1 className='italic font-mono font-semibold text-center text-3xl'>FBRef</h1>
      <Home/>
    </>
  )
}

export default App
