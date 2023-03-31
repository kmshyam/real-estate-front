import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const PageNotFound = () => {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/*")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPopUp({
          title: "404",
          message: data.message,
          btn1: "Okay",
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const cancelHandler = () => {
    setPopUp();
    navigate("../user");
  };

  return (
    <>
      {popUp && (
        <ErrorModal
          title={popUp.title}
          message={popUp.message}
          btn1={popUp.btn1}
          onCancel={cancelHandler}
        />
      )}
    </>
  );
};

export default PageNotFound;
