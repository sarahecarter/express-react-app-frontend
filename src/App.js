// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
// import router components
import {Route, Routes} from "react-router-dom"

function App() {
  // heroku url
  const URL = "http://sc-express-react-app.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/projects" element={<Projects URL={URL}/>}></Route>
        <Route exact path="/about" element={<About URL={URL}/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
