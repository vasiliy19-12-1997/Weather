import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter/appRouter";
import Header from "./Components/UI/Header/header";
import Navbar from "./Components/UI/Navbar/navbar";
import { AuthContext } from "./Context/context";
import { ThemeProvider } from "./Context/themeProvider";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <ThemeProvider>
      <AuthContext.Provider
        value={{ isAuth, setIsAuth, isLoading, setIsLoading }}
      >
        <div className="container">
          <BrowserRouter>
            <Navbar />
            <div className="app-router">
              <Header />
              <AppRouter />
            </div>
          </BrowserRouter>
        </div>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
