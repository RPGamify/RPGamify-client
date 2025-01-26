import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/ui/Header";
import Home from "./Home";
import Auth from "./Auth";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main className="bg-bg w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
