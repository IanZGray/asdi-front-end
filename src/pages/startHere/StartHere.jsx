// import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import mapboxgl from 'mapbox-gl';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './startHere.css';

function StartHere() {
    
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwY291bnQiLCJhIjoiY2wxanI2OHZ1MGNsMjNqcWdud2czMmF5byJ9.UU3AZXsZeB4yOGG8AgoimA';
    const url = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11.html?title=true&zoomwheel=true&access_token=${mapboxgl.accessToken}#2.8/0.00/18.537755/0/0`

    // new Marker(options: Object?, legacyOptions: Options?)

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
// const map = new mapboxgl.Map({
// container: 'map', // container ID
// style: 'mapbox://styles/mapbox/streets-v11', // style URL
// center: [-74.5, 40], // starting position [lng, lat]
// zoom: 9, // starting zoom
// projection: 'globe' // display the map as a 3D globe
// });
// map.on('style.load', () => {
// map.setFog({}); // Set the default atmosphere style
// });

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     center: [-122.420679, 37.772537], // starting position [lng, lat]
//     zoom: 13, // starting zoom
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL or style object
//     hash: true, // sync `center`, `zoom`, `pitch`, and `bearing` with URL
//     // Use `transformRequest` to modify requests that begin with `http://myHost`.
//     transformRequest: (url, resourceType) => {
//         if (resourceType === 'Source' && url.startsWith('http://myHost')) {
//             return {
//                 url: url.replace('http', 'https'),
//                 headers: {'my-custom-header': true},
//                 credentials: 'include'  // Include cookies for cross-origin requests
//             };
//         }
//     }
// });
// // Create a new marker.
// const marker = new mapboxgl.Marker()
//     .setLngLat([30.5, 50.5])
//     .addTo(map);
  return (
    <>
    <Button variant="secondary" onClick={handleShow} className="btn2">
        Settings
    </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          We can have our display settings here.
        </Offcanvas.Body>
      </Offcanvas>
        <div className="popup" text="light" style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Title>Select Crop</Card.Title>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Fruit</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item><Button variant="warning">Banana</Button></ListGroup.Item>
                                <ListGroup.Item><Button variant="warning">Apple</Button></ListGroup.Item>
                                <ListGroup.Item><Button variant="warning">Grape</Button></ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Vegitable</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item><Button variant="warning">Cabage</Button></ListGroup.Item>
                                <ListGroup.Item><Button variant="warning">Beet</Button></ListGroup.Item>
                                <ListGroup.Item><Button variant="warning">Avacado</Button></ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Nuts</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item><Button variant="warning">Almond</Button></ListGroup.Item>
                                <ListGroup.Item><Button variant="warning">Walnut</Button></ListGroup.Item>
                                <ListGroup.Item><Button variant="warning">Pistachio</Button></ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </div>
        <iframe className='maps'
        src={url} />
    </>
  )
}

export default StartHere