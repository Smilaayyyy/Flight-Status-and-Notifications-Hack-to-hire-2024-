// src/UpdateFlightStatus.js
import React, { useState } from 'react';
import axios from 'axios';

function UpdateFlightStatus() {
    const [flightId, setFlightId] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/flights/${flightId}`, { status });
            setMessage("Flight status updated successfully");
        } catch (err) {
            setMessage("Error updating flight status");
        }
    };

    return (
        <div>
            <h2>Update Flight Status</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Flight ID:</label>
                    <input
                        type="text"
                        value={flightId}
                        onChange={(e) => setFlightId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update Status</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default UpdateFlightStatus;
