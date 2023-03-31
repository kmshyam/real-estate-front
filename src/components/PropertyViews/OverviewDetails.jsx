import React from "react";
import classes from "./Overview.module.css";

const OverviewDetails = (props) => {
  return (
    <div className={classes["overview-info"]}>
      <div className={classes["icon-title"]}>
        <div className={classes.icons}>
          <p>{props.icon}</p>
        </div>
        <p className={classes.title}>{props.title}</p>
      </div>
      <p className={classes["title-info"]}>{props.info}</p>
    </div>
  );
};

export const BasicDetails = (props) => {
  return (
    <div className={classes["basic-info"]}>
      <p className={classes["basic-title"]}>{props.title}</p>
      <p>{props.info}</p>
    </div>
  );
};

export const ServiceDetails = (props) => {
  return (
    <div className={classes["services-infos"]}>
      <div className={classes["service-icon"]}>
        <p>{props.icon}</p>
      </div>
      <p className={classes["service-title"]}>{props.title}</p>
    </div>
  );
};

export const OwnerDetails = (props) => {
  return (
    <div className={classes.contact}>
      <p className={classes["contact-title"]}>{props.title}</p>
      <p className={classes["contact-info"]}>{props.info}</p>
    </div>
  );
};

export const LocationDetails = (props) => {
  return (
    <div className={classes.location}>
      <p className={classes["location-title"]}>{props.title}</p>
      <p className={classes["location-info"]}>{props.info}</p>
    </div>
  );
};

export default OverviewDetails;
