import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/data.json";
import "./Styles/Selected.css";
import marspic from "./assets/destination/image-mars.png";

export default function Selected() {
  const [currentData, setCurrentData] = useState(null);
  const [urlImage, setUrlImage] = useState(null);

  const dataObj = data.destinations;
  const { id } = useParams();

  useEffect(() => {
    // const dataObj = data.destinations.find(({ name }) => name === id )
    setCurrentData(dataObj.find(({ name }) => name === id));
    // setUrlImage("/src/Components/" + currentData.images.png);
    // console.log(currentData.images.webp);
  }, [id]);

  return (
    <>
      <div className="image-selected">
        {/* <img src={marspic} alt="" /> */}
        <img
          src={currentData && "/src/Components/" + currentData.images.png}
          alt=""
        />
      </div>
      <div className="info-selected">
        <div className="title-info">
          <h2>{currentData && currentData.name}</h2>
        </div>
        <div className="description-info">
          <p>{currentData && currentData.description}</p>
        </div>
        <div className="detail">
          <div className="distance">
            <h6>AVG. DISTANCE</h6>
            <h5>{currentData && currentData.distance}</h5>
          </div>
          <div className="time">
            <h6>EST. TRAVEL TIME</h6>
            <h5>
                {currentData && currentData.travel}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
