import React from 'react'
import Button from 'react-bootstrap/esm/Button'

import './testing.css'
import soilData from '../../soilData'
import cropData from '../../cropData'
import { useMarkerContext } from '../../context/context'

function Testing() {
    const { markers, setMarkers } = useMarkerContext();
    let crops = cropData;
    let items = markers;

    const handleSubmitz = (e) => {
        e.preventDefault();
        // console.log(e.target.id)
        cropTest(soilData, cropData[e.target.id]);
    }

    // unique ids gps
    let i = 0;
    let iAdder = () => {
        i++;
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
    // unique ids crop buttons
    let j = 0;
    let cropID = () => {
        let unique = j;
        j++;
        return unique
    }

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
    <div className="wide">
    {crops.map((crop) => 
    <Button variant="warning" id={cropID()} onClick={handleSubmitz}>Click Here to filter for {crop.name}</Button>
    )}

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