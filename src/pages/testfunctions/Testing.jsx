import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useEffect } from 'react'

import './testing.css'
import soilData from '../../soilData'
import cropData from '../../cropData'
import { useMarkerContext } from '../../context/context'

function Testing() {
    const { markers, setMarkers, filteredGPS } = useMarkerContext();

    let items = markers;
    // const soilData = getSoilData();
    // const cropData = getCropData();
    const handleSubmit = (e) => {
        e.preventDefault();
        cropTest(soilData, cropData[0]);
    }
    const handleSubmits = (e) => {
        e.preventDefault();
        cropTest(soilData, cropData[1]);
    }


    // unique ids
    let i = 0
    let iAdder = () => {
        i++
        return i
    }
    let uniqueList = () => {
        let unique = "List" + i;
        return unique
    }
    let uniqueLat = () => {
        let unique = "Lat" + i;
        return unique
    }
    let uniqueMarker = () => {
        let unique = "Marker" + i;
        return unique
    }
    let uniqueLong = () => {
        let unique = "Long" + i;
        iAdder();
        return unique
    }
    // unique ids

    let tempArray = [];

    const cropTest = (data, crop) => {
        tempArray = [];
        for (let i = 0; i < data.length; i++) {
            if (
                data[i].water >= crop.waterMin &&
                data[i].water <= crop.waterMax &&
                data[i].soil >= crop.soilMin &&
                data[i].soil <= crop.soilMax
                ) 
                { tempArray.push({lat: data[i].lat, long: data[i].long})
            } else {
                console.log("Sorry, but no locations are suitable for this crop.")
            }
        }
        setMarkers(tempArray);
    }

  return (
    <>
    {/* <div>OurStory</div>
    <div className="circle"></div> */}
    <div className="wide">
        <h1> Filter Test </h1>
        <Button variant="warning" onClick={handleSubmits}>Click Here to filter for Apples</Button>
        <Button variant="warning" onClick={handleSubmit}>Click Here to filter for Cabage</Button>


    {items.map((data) => (
        <ul id={uniqueList()} className="bac">
          <li id={uniqueLat()}>Latitude {data.lat}</li>
          <li id={uniqueMarker()} className="circleGreenYellow" ></li>
          <li id={uniqueLong()}>Longitude {data.long}</li>
        </ul>
      ))}
    </div>
    </>

  )
}

export default Testing