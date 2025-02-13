import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useHospitalAuthContext } from "../hooks/useHospitalAuthContext";
import { useAdminAuthContext } from "../hooks/useAdminAuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, dispatch } = useAuthContext();
  const { hospital, dispatch: hospitaldispatch } = useHospitalAuthContext();
  const { admin } = useAdminAuthContext();

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

  return (
    <>
      <nav>
        <div className="flex text-black font-semibold text-xl px-20 py-5 justify-between tracking-wider">
          <div className="leftnav ">
            <h1
              onClick={handleClick}
              className="text-black cursor-pointer text-2xl font-semibold ml-5 "
            >
              MEDICARE
            </h1>
          </div>
          <div className="rightnav flex gap-4 ">
            {!hospital && !admin ? (
              <>
                <Link
                  className="font-normal px-2 py-1  hover:bg-blue-500 hover:text-white duration-200 rounded-lg "
                  to={"/insurance"}
                >
                  Insurance
                </Link>
                <Link
                  className="font-normal px-2 py-1  hover:bg-blue-500 hover:text-white duration-200 rounded-lg"
                  to={"/hospitals"}
                >
                  Hospitals
                </Link>
              </>
            ) : (
              <></>
            )}
            {/* {hospital?<Link to={'/hospitalappoinments'}>Appointments</Link>:<></>} */}
            {user || hospital ? (
              <>
                <Link
                  className="font-normal px-2 py-1  hover:bg-blue-500 hover:text-white duration-200 rounded-lg"
                  to={user ? "/appointments" : "/hospitalappoinments"}
                >
                  Appointments
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 font-normal px-2 h-8 rounded-md text-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {!admin ? (
                  <>
                    <Link
                      className="font-normal px-2 py-1  hover:bg-blue-500 hover:text-white duration-200 rounded-lg"
                      to={"/login"}
                    >
                      Login
                    </Link>
                    <Link
                      className="font-normal px-2 py-1  hover:bg-blue-500 hover:text-white duration-200 rounded-lg"
                      to={"/signup"}
                    >
                      Signup
                    </Link>
                    <Link
                      className="font-normal px-2 py-1  hover:bg-blue-500 hover:text-white duration-200 rounded-lg"
                      to={"/loginhospital"}
                    >
                      For Hospital
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="font-thin px-2 py-1  hover:bg-blue-500 hover:text-white duration-200 rounded-lg"
                      to={"/dashboard"}
                    >
                      Dashboard
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
