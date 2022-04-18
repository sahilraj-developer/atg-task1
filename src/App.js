import { BrowserRouter} from "react-router-dom";
import "./App.css";

import Carousel from "./component/Carousel";
import Header from "./component/Header";
import Cards from "./component/Cards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Carousel/>
        <Cards/>
        <hr/>
      </BrowserRouter>
    </div>
  );
}

export default App;
