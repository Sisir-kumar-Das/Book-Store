import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<AboutUs />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
