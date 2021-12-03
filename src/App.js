import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useAppContext } from "./context/AppContext";

function App() {
  const { user } = useAppContext();
  const isLoggedin = user.email !== "" && user.name !== "";

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={isLoggedin ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
