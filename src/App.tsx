import AppRouter from "./Components/AppRouter/appRouter";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./Context/context";
import { useEffect, useState } from "react";
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
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, isLoading, setIsLoading }}
    >
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
