import React from "react";
import classes from "./PropertyViews.module.css";
import { useLocation } from "react-router-dom";
import {
  FaRegBuilding,
  FaRegCompass,
  FaChair,
  FaBed,
  FaCarSide,
  FaStoreAlt,
  FaChartArea,
  FaPowerOff,
  FaHouseUser,
  FaPaintRoller,
  FaRegMoneyBillAlt,
  FaHome,
  FaHammer,
  FaStamp,
} from "react-icons/fa";
import OverviewDetails, {
  BasicDetails,
  LocationDetails,
  OwnerDetails,
  ServiceDetails,
} from "./OverviewDetails";
import { date } from "../../utils/math";

const PropertyViews = () => {
  const location = useLocation();
  const propertyData = location.state.property_data;
  const basicInfo = propertyData.basic_info;
  const propertyDetails = propertyData.property_detail;
  const generalInfo = propertyData.general_info;
  const locationInfo = propertyData.location_info;
  const postedOnDate = date(propertyData.createdAt);
  const expiryDate = date(propertyData.date_of_expiry);
  const postedOn = `${postedOnDate[0]} ${postedOnDate[1]}, ${postedOnDate[2]}`;
  const expiresOn = `${expiryDate[0]} ${expiryDate[1]}, ${expiryDate[2]}`;
  // console.log(basicInfo);
  // console.log(propertyDetails);
  // console.log(generalInfo);
  // console.log(locationInfo);
  const basicDetails = [
    {
      title: "Property ID",
      info: `${propertyData.PPD_ID}`,
    },
    {
      title: "Property Type",
      info: `${basicInfo.property_type}`,
    },
    {
      title: "Featured Package",
      info: `${generalInfo.featured_package}`,
    },
    {
      title: "PPD Package",
      info: `${generalInfo.PPD_package}`,
    },
    {
      title: "Posted On",
      info: `${postedOn}`,
    },
    {
      title: "Expires On",
      info: `${expiresOn}`,
    },
    {
      title: "Negotiable",
      info: `${basicInfo.negotiable}`,
    },
    {
      title: "Bank Loan",
      info: `${basicInfo.bank_loan}`,
    },
  ];

  const overviewData = [
    {
      icon: <FaStoreAlt />,
      title: "Age of building",
      info: `${basicInfo.property_age}`,
    },
    {
      icon: <FaHouseUser />,
      title: "Ownership",
      info: `${basicInfo.ownership}`,
    },
    {
      icon: <FaChartArea />,
      title: "Plot Area",
      info: `${propertyDetails.total_area} ${propertyDetails.area_unit}`,
    },
    {
      icon: <FaBed />,
      title: "Number of BHK",
      info: `${propertyDetails.number_of_bhk}`,
    },
    {
      icon: <FaChair />,
      title: "Furnishing Status",
      info: `${propertyDetails.furnished}`,
    },
    {
      icon: <FaRegCompass />,
      title: "Facing",
      info: `${propertyDetails.facing}`,
    },
    {
      icon: <FaRegBuilding />,
      title: "Floors",
      info: `${propertyDetails.number_of_floor}`,
    },
    {
      icon: <FaCarSide />,
      title: "Parking",
      info: `${propertyDetails.car_parking}`,
    },
    {
      icon: <FaPowerOff />,
      title: "Electricity",
      info: `${propertyDetails.electricity}`,
    },
  ];

  const services = [
    {
      icon: <FaPaintRoller />,
      title: "Painting",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Check Loan Eligibility",
    },
    {
      icon: <FaHome />,
      title: "Estimate Interior cost",
    },
    {
      icon: <FaHammer />,
      title: "Book legal services",
    },
    {
      icon: <FaStamp />,
      title: "Create Agreement",
    },
  ];

  const ownerDetails = [
    {
      title: "Owner Name",
      info: `${generalInfo.name}`,
    },
    {
      title: "Posted By",
      info: `${generalInfo.posted_by}`,
    },
    {
      title: "Email ID",
      info: `${locationInfo.email}`,
    },
    {
      title: "Contact Number",
      info: `${generalInfo.mobile}`,
    },
    {
      title: "Sales Type",
      info: `${generalInfo.sales_type}`,
    },
    {
      title: "City",
      info: `${locationInfo.city}`,
    },
  ];

  const locationDetail = [
    {
      title: "Address",
      info: `${locationInfo.address}`,
    },
    {
      title: "Area",
      info: `${locationInfo.area}`,
    },
    {
      title: "City",
      info: `${locationInfo.city}`,
    },
    {
      title: "Pincode",
      info: `${locationInfo.pincode}`,
    },
  ];
  return (
    <section className={classes["property-container"]}>
      <section className={classes.heading}>
        <h1>
          {propertyDetails.number_of_bhk} House for sale in {locationInfo.area}
        </h1>
      </section>
      <section className={`${classes["property-details"]} ${classes.section}`}>
        <div className={classes.image}>
          <img
            src={`${generalInfo.imageURL}`}
            alt={`Property with PPD ID ${propertyData.PPD_ID} pic`}
          />
        </div>
        <section className={classes["basic-details-section"]}>
          <h1>Basic Details</h1>
          <div className={classes["basic-details"]}>
            {basicDetails.map((data) => (
              <BasicDetails
                key={Math.random().toString()}
                title={data.title}
                info={data.info}
              />
            ))}
          </div>
        </section>
      </section>

      <section className={`${classes.overview} ${classes.section}`}>
        <h1>Overview</h1>
        <div className={classes.infos}>
          {overviewData.map((data) => (
            <OverviewDetails
              key={Math.random().toString()}
              icon={data.icon}
              title={data.title}
              info={data.info}
            />
          ))}
        </div>
      </section>

      <section className={`${classes.services} ${classes.section}`}>
        <h1>10X Real Estate Services</h1>
        <div className={classes["service-detail"]}>
          {services.map((data) => (
            <ServiceDetails
              key={Math.random().toString()}
              icon={data.icon}
              title={data.title}
            />
          ))}
        </div>
      </section>

      <section
        className={`${classes["description-section"]} ${classes.section}`}
      >
        <h1>Description</h1>
        <p>{`${basicInfo.property_description}`}</p>
      </section>

      <section className={`${classes["contact-section"]} ${classes.section}`}>
        <h1>Owner Details</h1>
        <div className={classes["contact-detail"]}>
          {ownerDetails.map((data) => (
            <OwnerDetails
              key={Math.random().toString()}
              title={data.title}
              info={data.info}
            />
          ))}
        </div>
      </section>

      <section className={`${classes["location-section"]}  ${classes.section}`}>
        <h1>Location</h1>
        <div className={classes["location-detail"]}>
          {locationDetail.map((data) => (
            <LocationDetails
              key={Math.random().toString()}
              title={data.title}
              info={data.info}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default PropertyViews;
