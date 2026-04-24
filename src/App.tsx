import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ListProvider } from "./context/ListContext";
import { HomePage } from "./pages/HomePage";
import { MyListPage } from "./pages/MyListPage";

function App() {
  return (
    <BrowserRouter>
      <ListProvider>
        <nav className="bg-gray-950 border-b border-gray-800 px-6 py-4 flex gap-6">
          <Link to="/" className="text-purple-400 hover:text-purple-300 font-semibold">
            🔍 Buscar
          </Link>
          <Link to="/milista" className="text-purple-400 hover:text-purple-300 font-semibold">
            📋 Mi Lista
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/milista" element={<MyListPage />} />
        </Routes>
      </ListProvider>
    </BrowserRouter>
  );
}

export default App;