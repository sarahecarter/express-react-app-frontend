// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
// import router components
import {Route, Routes} from "react-router-dom"
import "./scss/styles.scss"

function App() {
  // heroku url
  const URL = "https://sc-express-react-app.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects URL={URL}/>}/>
        <Route exact path="/about" element={<About URL={URL}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
