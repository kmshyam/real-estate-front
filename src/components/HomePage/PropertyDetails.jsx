import React from "react";
import "./PropertyDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const PropertyDetailsHeadings = (props) => {
  return (
    <div className="grid-container grid-heading">
      <p>{props.ppdID}</p>
      <p>{props.image}</p>
      <p>{props.propertyType}</p>
      <p>{props.mobile}</p>
      <p>{props.totalArea}</p>
      <p>{props.views}</p>
      <p>{props.status}</p>
      <p>{props.daysLeft}</p>
      <p>{props.action}</p>
    </div>
  );
};

export const UserPropertyDetailsList = (props) => {
  const deletePropertyHandler = () => {
    props.onDelete(props.ppdID);
  };
  const editPropertyHandler = () => {
    props.onEdit(props.ppdID);
  };

  return (
    <li className="grid-container property-list">
      <p>{props.ppdID}</p>
      <div className="image">
        <img src={props.image} alt="avatar" />
      </div>
      <p>{props.propertyType}</p>
      <p>{props.mobile}</p>
      <p>{props.totalArea}</p>
      <p>{props.views}</p>
      <div className="status">
        <p>{props.status}</p>
      </div>
      <p>{props.daysLeft}</p>
      <div className="actions">
        <button
          className="edit-btn action-btn"
          onClick={editPropertyHandler}
          title="Edit"
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button
          className="delete-btn action-btn"
          onClick={deletePropertyHandler}
          title="Delete"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export const AllPropertyDetailsList = (props) => {
  const viewPropertyHandler = () => {
    props.onView(props.ppdID);
  };
  return (
    <li className="grid-container property-list">
      <p>{props.ppdID}</p>
      <div className="image">
        <img src={props.image} alt="avatar" />
      </div>
      <p>{props.propertyType}</p>
      <p>{props.mobile}</p>
      <p>{props.totalArea}</p>
      <p>{props.views}</p>
      <div className="status">
        <p>{props.status}</p>
      </div>
      <p>{props.daysLeft}</p>
      <div className="actions">
        <button
          className="views-btn"
          title="Views"
          onClick={viewPropertyHandler}
        >
          View Detail
        </button>
      </div>
    </li>
  );
};

export default PropertyDetailsHeadings;
