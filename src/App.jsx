
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate , useLocation} from "react-router-dom";
import NewProduct from './components/ProductAdded/NewProduct'

function App() {

  return (
   <>
    <Router>
      <Routes>
      <Route path="/" element={<NewProduct to="/" />} />
      </Routes>
      </Router>
   </>
  )
}

export default App
