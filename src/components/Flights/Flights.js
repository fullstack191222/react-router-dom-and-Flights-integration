import React from 'react'
import "./Flights.css"
import Card from "../UI/Card.js"
import {useState, useEffect} from 'react'


export default function Flights() {
    

  const [flightsDB, setFlightsDB] = useState([])
  console.log("flights state:");
  console.log(flightsDB);
  const getFlightsDB = () => {


    fetch('http://127.0.0.1:2000/api/flights/')
      .then(response => response.json())
      .then(data => {
        // Store the fetched data in an array or use it as needed
        setFlightsDB(data.flights)

        // Use the flightsArray for further processing or rendering
        console.log(data.flights);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);
      });

  }

  useEffect(getFlightsDB, [])

//   getFlightsDB()
   
  return (
    <div>
        <Card >
            <h2>Flight List</h2>
        </Card>

       
      <table className="flight-table">
          <thead>
            <tr>
              <th>Flight ID</th>
              <th>Airline ID</th>
              <th>Origin Country ID</th>
              <th>Destination Country ID</th>
              <th>Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {flightsDB.map(flight => (
              <tr key={flight.Id} className="flight-item">
                <td>{flight.Id}</td>
                <td>{flight.Airline_Id}</td>
                <td>{flight.Origin_Country_Id}</td>
                <td>{flight.Destination_Country_Id}</td>
                <td>{flight.Departure_Time}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};
   