import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessageDetail from "./pages/MessageDetail";
import CreateMessage from "./pages/CreateMessage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages/:id" element={<MessageDetail />} />
            <Route path="/create" element={<CreateMessage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
