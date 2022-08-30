import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Slider } from '@mui/material';
import { valueToPercent } from '@mui/base';


import mapboxgl from 'mapbox-gl';




import './startHere.css';

function StartHere() {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];
  
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFwY291bnQiLCJhIjoiY2wxanI2OHZ1MGNsMjNqcWdud2czMmF5byJ9.UU3AZXsZeB4yOGG8AgoimA';
  const url = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11.html?title=true&zoomwheel=true&access_token=${mapboxgl.accessToken}#2.8/0.00/18.537755/0/0`


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



  return (
    <>

    <Card style={{ width: '18rem' }} className='popup fixed-bottom'>
      <Card.Body>
        <h2>Filters</h2>
        <Card.Text>
        Select optional filters below for a more refined crop list. 
        </Card.Text>
      </Card.Body>

      <h3>Timeframe</h3>
<h4>slidebar here</h4>

      <h3>Specify Macronutrients</h3>

      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant='outline-warning'
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>



      {/* <Card.Body>
        <Button variant="danger">Find Crops</Button>
      </Card.Body> */}
    </Card>


    {/* <Button variant="secondary" onClick={handleShow} className="btn2">
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
        </div> */}
        <iframe className='maps'
        src={url} />
    </>
  )
}

export default StartHere