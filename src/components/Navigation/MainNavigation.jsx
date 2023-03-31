import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./MainNavigation.css";
import homeLogo from "../../assets/home-logo.jpg";
import {
  faHome,
  faBell,
  faDownload,
  faUpload,
  faEye,
  faTag,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import SideNavebarList from "./SideNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuthToken } from "../../utils/auth";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const navbarList = [
  { icon: faHome, listName: "All Properties", color: "#6ab3eb" },
  { icon: faHome, listName: "My Property" },
  { icon: faBell, listName: "Assistance" },
  { icon: faDownload, listName: "Recieved Interest" },
  { icon: faUpload, listName: "Sent Interest" },
  { icon: faEye, listName: "Property Views" },
  { icon: faTag, listName: "Tariff Plans" },
];

const MainNavigation = () => {
  const [userID, setUserID] = useState("");
  const [username, setUserName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [popUp, setPopUp] = useState();
  const navigate = useNavigate();
  const token = getAuthToken();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("USER_ID");
    localStorage.removeItem("USERNAME");
    navigate("/");
  };

  const deactivateAccountHandler = () => {
    setPopUp({
      title: "Account Deletion!!",
      message:
        "Are you sure want to delete your account permanently! This action can't be undone!",
      btn1: "Cancel",
      btn2: "Confirm",
      userID: localStorage.getItem("USER_ID"),
    });
  };

  const cancelHandler = () => {
    setPopUp();
  };

  const deleteProperties = (USER_ID, token) => {
    fetch(`http://localhost:8080/api/property/delete-all/${USER_ID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteUser = (USER_ID, token) => {
    fetch(`http://localhost:8080/api/users/delete/${USER_ID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPopUp({
          title: "Success",
          message: `${data.message}✅`,
          btn1: "Done👍",
          btn2: undefined,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteAccountHandler = (USER_ID) => {
    const token = getAuthToken();
    deleteProperties(USER_ID, token);
    deleteUser(USER_ID, token);
  };

  const successHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("USER_ID");
    localStorage.removeItem("USERNAME");
    setPopUp();
    navigate("/");
  };

  useEffect(() => {
    const token = getAuthToken().toString();
    fetch(`http://localhost:8080/api/users/userId`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("USER_ID", data.userID);
        localStorage.setItem("USERNAME", data.username.split("-")[0]);
        setUserID(localStorage.getItem("USER_ID"));
        setUserName(localStorage.getItem("USERNAME"));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [token]);

  const showAuthSettings = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const navigateHomeHandler = () => {
    navigate("../../../user");
  };
  const location = useLocation();

  const navigateHandler = (listName) => {
    if (listName === "My Property" && location.pathname === "/user") {
      navigate(`property`);
    } else if (
      listName === "All Properties" &&
      location.pathname === "/user/property"
    ) {
      navigate("../user");
    } else if (listName === "All Properties" && location.pathname === "user") {
      navigate("../user");
    } else if (
      listName === "My Property" &&
      location.pathname === "/user/property"
    ) {
      navigate("../user/property");
    } else {
      return;
    }
  };

  return (
    <Fragment>
      {popUp && (
        <ErrorModal
          title={popUp.title}
          message={popUp.message}
          btn1={popUp.btn1}
          btn2={popUp.btn2}
          userId={popUp.userID}
          onCancel={cancelHandler}
          onAccountDelete={deleteAccountHandler}
          onSuccess={successHandler}
        />
      )}
      <div className="main-container">
        <section className="aside-container">
          <div className="main-logo" onClick={navigateHomeHandler}>
            <img src={homeLogo} alt="main-logo" />
          </div>
          <nav className="side-navbar">
            <ul>
              {navbarList.map((listItem) => (
                <SideNavebarList
                  key={Math.random().toString()}
                  icon={listItem.icon}
                  listName={listItem.listName}
                  color={listItem.color ? listItem.color : ""}
                  onClick={navigateHandler}
                />
              ))}
            </ul>
          </nav>
        </section>
        <nav className="navbar">
          <div className="user-id">
            <p>User Id :</p>
            <span>{userID}</span>
          </div>
          <div className="profile">
            <div className="profile-username">
              <p className="username">{username}</p>
              <div onClick={showAuthSettings} className="profile-auth">
                {!isActive ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronUp} />
                )}
              </div>
            </div>

            <ul className="auth-actions">
              {isActive && <li onClick={logoutHandler}>Logout</li>}
              {isActive && (
                <li onClick={deactivateAccountHandler}>Deactivate Account</li>
              )}
            </ul>
          </div>
        </nav>
        <section className="main-section">
          <Outlet />
        </section>
      </div>
    </Fragment>
  );
};

export default MainNavigation;
