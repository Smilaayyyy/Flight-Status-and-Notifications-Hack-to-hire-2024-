import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function FlightForm() {
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState(null);
    const [flightId, setFlightId] = useState('');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [scheduledTime, setScheduledTime] = useState('');
    const [flightData, setFlightData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredFlightIds, setFilteredFlightIds] = useState([]);
    const [flightDetails, setFlightDetails] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/flights');
                setFlights(response.data);
            } catch (err) {
                setError("Error fetching flight schedule");
            }
        };
        fetchFlights();
    }, []);

    useEffect(() => {
        // Filter the flight IDs based on the search term
        const filtered = flights.filter(flight => 
            flight.flight_id.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setFilteredFlightIds(filtered);
    }, [searchTerm, flights]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://127.0.0.1:8000/flights/${flightId}`);
            setError(null);
            setFlightDetails(response.data);
        } catch (err) {
            setFlightDetails(null);
            setError("Flight not found");
        }
    };

    return (
        <div className="page-container">
            <div className="opaque-box">
                <h2>Indigo Airlines Flight Schedule Today</h2>

                {/* Flight Schedule Table */}
                <table className="flight-table">
                    <thead>
                        <tr>
                            <th>Flight</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Departure</th>
                            <th>Status</th>
                            <th>Track</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map(flight => (
                            <tr key={flight.flight_id}>
                                <td>{flight.flight_id}</td>
                                <td>{flight.departure}</td>
                                <td>{flight.arrival}</td>
                                <td>{flight.scheduled_time}</td>
                                <td>{flight.status}</td>
                                <td>
                                    <button className="track-button" onClick={() => setFlightId(flight.flight_id)}>Track</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Flight Search Form */}
            <div className="flight-form-container">
                <form onSubmit={handleSearch} className="flight-form">
                    <div>
                        <label>Search by Flight ID:</label>
                        <input
                            type="text"
                            value={flightId}
                            onChange={(e) => {
                                setFlightId(e.target.value);
                                setSearchTerm(e.target.value);
                            }}
                            list="flight-ids"
                            required
                        />
                        <datalist id="flight-ids">
                            {filteredFlightIds.map(flight => (
                                <option key={flight.flight_id} value={flight.flight_id} />
                            ))}
                        </datalist>
                    </div>
                    <div>
                        <label>Departure:</label>
                        <input
                            type="text"
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Arrival:</label>
                        <input
                            type="text"
                            value={arrival}
                            onChange={(e) => setArrival(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Scheduled Time:</label>
                        <input type="datetime-local" value={scheduledTime} onChange={(e) => setScheduledTime(e.target.value)} />
                    </div>
                    <button type="submit">Get Status</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>

            {/* Flight Details Display */}
            {flightDetails && (
                <div className="flight-details">
                    <p><strong>Flight ID:</strong> {flightDetails.flight_id}</p>
                    <p><strong>From:</strong> {flightDetails.departure}</p>
                    <p><strong>To:</strong> {flightDetails.arrival}</p>
                    <p><strong>Departure:</strong> {flightDetails.scheduled_time}</p>
                    <p><strong>Status:</strong> {flightDetails.status}</p>
                </div>
            )}
        </div>
    );
}

export default FlightForm;
