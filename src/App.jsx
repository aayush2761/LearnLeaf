import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true); 
  // condition rendering 

  const dispatch = useDispatch();
// merger for react to redux 

  useEffect(() => {  
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch(() => console.log("No user"))
      .finally(() => setLoading(false));
  }, []);
  // checks for user authenticated or not with the help of auth service 
  
  // conditional rendering 
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-[#edf1f7]">
      <div className="w-full block">
        <Header />
        <main className=" mt-20">
          <Outlet /> 
           {/* handled by react router dom  */}
        </main>
        <Footer className=" mt-auto"/>
      </div>
    </div>
  ) : null;
}

export default App;
