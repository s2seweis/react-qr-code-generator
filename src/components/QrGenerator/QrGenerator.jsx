import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './QrGenerator.css';

export default function QrGenerator() {
    const [qrData, setQrData] = useState({
        surname: '',
        prename: '',
        age: '',
        address: '',
    }); // State to store form data
    const [isGenerated, setIsGenerated] = useState(false); // State to track if QR code is generated

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQrData({ ...qrData, [name]: value }); // Update form data based on user input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsGenerated(true); // Set the flag to indicate the QR code should be generated
    };

    return (
        <div>
            <h1>QrGenerator</h1>
            <a href="https://www.npmjs.com/package/react-qr-code" target="_blank" rel="noopener noreferrer">
                react-qr-code Documentation
            </a>
            <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
                <label>
                    Surname:
                    <input type="text" name="surname" value={qrData.surname} onChange={handleInputChange} />
                </label>
                <label>
                    Prename:
                    <input type="text" name="prename" value={qrData.prename} onChange={handleInputChange} />
                </label>
                <label>
                    Age:
                    <input type="text" name="age" value={qrData.age} onChange={handleInputChange} />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={qrData.address} onChange={handleInputChange} />
                </label>
                <button type="submit">Generate QR Code</button>
            </form>
            {isGenerated && (
                <div className='app-container' style={{ height: 'auto', margin: '20px auto', maxWidth: 150, width: '100%' }}>
                    <QRCode
                        value={JSON.stringify(qrData)} // Use qrData as the QR code value after converting it to a JSON string
                        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                        viewBox={`0 0 556 256`}
                    />
                </div>
            )}
        </div>
    );
}
