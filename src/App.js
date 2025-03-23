import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Checkout from './Checkout';
import Login from './Login';
function App() {
  return (
    <Router>
      <div className="app">
        {/* <h1>Amazon Clone Website</h1> */}
        <Routes>
          <Route 
            path="/checkout" 
            element={
              <>
              <Header/>
              <Checkout/>
              {/* <Footer/> */}
              </>
              }
          />
          <Route 
            path="/login" 
            element={
            <>
            <Login/>
            </>} 
          />
          <Route 
            path="/" 
            element={
            <>
            <Header/>
            <Home/>
            <Footer/>
            <Cards/>
            </>
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
