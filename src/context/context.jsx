import React, { useState, createContext, useContext, useEffect } from 'react'

const MarkerContext = createContext();

export const useMarkerContext = () => useContext(MarkerContext);

export const MarkerProvider = ({ children }) => {
    const [markers, setMarkers] = useState(
        [
            // {lat: 1, long: 2},
            // {lat: 3, long: 4},
            // {lat: 5, long: 23},
        ]

    );
    const [filteredGPS, setFilteredGPS] = useState(
        []
    )
    
    const setLat = (newLat, newLong) => {
        setFilteredGPS({
            ...filteredGPS,
            lat: newLat,
            long: newLong,
        })
    }

    // const cropTest = (data, crop) => {
    //     for (let obj in data) {
    //         // console.log(data[obj].water)
    //         if (
    //             data[obj].water >= crop.waterMin &&
    //   data[obj].water <= crop.waterMax &&
    //   data[obj].soil >= crop.soilMin &&
    //   data[obj].soil <= crop.soilMax
    //             ) {
    //             // console.log(data[obj].water);
    //             // setLat(data[obj].lat, data[obj].long);
    //             // console.log(filteredGPS);
    //             setMarkers(
    //                 [
    //                     ...markers,
    //                     { lat: data[obj].lat, long: data[obj].long }
    //                 ]
    //             );
    //             console.log(data[obj])
    //         } else {
    //             console.log("Sorry, but no locations are suitable for this crop.")
    //         }
    //     }
    // }

  return (
    <MarkerContext.Provider value={{
        markers,
        setMarkers,
        filteredGPS,
        setLat,
    }}>
        {children}
    </MarkerContext.Provider>
  );
}
