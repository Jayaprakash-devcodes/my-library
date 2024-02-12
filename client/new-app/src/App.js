import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigate from "./pages/Navigate";
import UserList from "./pages/UserList";
import NewUser from "./pages/NewUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate />}>
            <Route index element={<Home />} />

            <Route path="About" element={<About />} />

            <Route path="Contact" element={<Contact />} />

            <Route path="userslist" element={<UserList />} />

            <Route path="newuser" element={<NewUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;