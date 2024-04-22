import "./App.css";
import NavBar from "./components/navBar";
import SignInModal from "./components/signInModal";
import { Routes, Route, HashRouter } from "react-router-dom";
import HomeIn from "./components/HomeIn";

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <SignInModal />
        <div className="bg-gray-300 w-full h-screen flex flex-col items-center text-center">
           
          <Routes>
            <Route path="Home" element={<HomeIn/>}/>

          </Routes>
         
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
