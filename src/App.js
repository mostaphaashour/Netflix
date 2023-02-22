import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRouters from "./components/ProtectedRouters";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/Account"
            element={
              <ProtectedRouters>
                <Account />
              </ProtectedRouters>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
