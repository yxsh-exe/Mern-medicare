import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useHospitalAuthContext } from "../hooks/useHospitalAuthContext";
import { useAdminAuthContext } from "../hooks/useAdminAuthContext";
import { 
  Home, 
  Shield, 
  Building2, 
  Calendar, 
  LogOut, 
  LogIn, 
  UserPlus, 
  Phone,
  BarChart3,
  Menu,
  X,
  HeartPulse
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const { user, dispatch } = useAuthContext();
  const { hospital, dispatch: hospitaldispatch } = useHospitalAuthContext();
  const { admin } = useAdminAuthContext();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT", payload: "" });
      navigate("/");
    } else {
      localStorage.removeItem("hospital");
      hospitaldispatch({ type: "LOGOUT", payload: "" });
      navigate("/");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        {/* Top bar with contact info */}
        <div className="bg-blue-600 text-white px-6 md:px-20 py-1.5 text-sm flex justify-between items-center">
          <div className="flex items-center">
            <Phone size={14} className="mr-2" />
            <span>1-800-MEDICARE (1-800-633-4227)</span>
          </div>
          <div className="hidden md:block">
            <span>24/7 Customer Support Available</span>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex items-center justify-between px-6 md:px-20 py-4">
          <div className="flex items-center">
            <div 
              onClick={handleClick}
              className="flex items-center cursor-pointer group"
            >
              <HeartPulse className="text-blue-600 mr-2 h-6 w-6 group-hover:text-blue-700 transition-colors" />
              <h1 className="text-blue-800 text-2xl font-bold tracking-wide group-hover:text-blue-700 transition-colors">
                MEDICARE
              </h1>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {!hospital && !admin ? (
              <>
                <Link
                  className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  to={"/insurance"}
                >
                  <Shield className="mr-1.5 h-4 w-4" />
                  Insurance
                </Link>
                <Link
                  className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  to={"/hospitals"}
                >
                  <Building2 className="mr-1.5 h-4 w-4" />
                  Hospitals
                </Link>
              </>
            ) : null}
            
            {user || hospital ? (
              <>
                <Link
                  className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  to={user ? "/appointments" : "/hospitalappoinments"}
                >
                  <Calendar className="mr-1.5 h-4 w-4" />
                  Appointments
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center bg-red-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-600 transition-colors ml-2"
                >
                  <LogOut className="mr-1.5 h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                {!admin ? (
                  <>
                    <Link
                      className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      to={"/login"}
                    >
                      <LogIn className="mr-1.5 h-4 w-4" />
                      Login
                    </Link>
                    <Link
                      className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      to={"/signup"}
                    >
                      <UserPlus className="mr-1.5 h-4 w-4" />
                      Signup
                    </Link>
                    <Link
                      className="flex items-center bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      to={"/loginhospital"}
                    >
                      <Building2 className="mr-1.5 h-4 w-4" />
                      For Hospital
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      to={"/dashboard"}
                    >
                      <BarChart3 className="mr-1.5 h-4 w-4" />
                      Dashboard
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-2 px-6">
            <div className="flex flex-col space-y-2">
              {!hospital && !admin ? (
                <>
                  <Link
                    className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    to={"/insurance"}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Shield className="mr-1.5 h-4 w-4" />
                    Insurance
                  </Link>
                  <Link
                    className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    to={"/hospitals"}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Building2 className="mr-1.5 h-4 w-4" />
                    Hospitals
                  </Link>
                </>
              ) : null}
              
              {user || hospital ? (
                <>
                  <Link
                    className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    to={user ? "/appointments" : "/hospitalappoinments"}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Calendar className="mr-1.5 h-4 w-4" />
                    Appointments
                  </Link>
                  <button
                    onClick={(e) => {
                      handleLogout(e);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center w-full bg-red-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    <LogOut className="mr-1.5 h-4 w-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {!admin ? (
                    <>
                      <Link
                        className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                        to={"/login"}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <LogIn className="mr-1.5 h-4 w-4" />
                        Login
                      </Link>
                      <Link
                        className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                        to={"/signup"}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <UserPlus className="mr-1.5 h-4 w-4" />
                        Signup
                      </Link>
                      <Link
                        className="flex items-center justify-center w-full bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 mt-2"
                        to={"/loginhospital"}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Building2 className="mr-1.5 h-4 w-4" />
                        For Hospital
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        className="flex items-center font-medium px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                        to={"/dashboard"}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <BarChart3 className="mr-1.5 h-4 w-4" />
                        Dashboard
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;