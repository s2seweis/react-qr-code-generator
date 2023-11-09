import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './QrGenerator.css';

export default function QrGenerator() {
    const [qrData, setQrData] = useState({
        surname: '',
        prename: '',
        street: '',
        region: '',
        zipCode: '',
        country: '',
    }); // State to store form data

    const [isGenerated, setIsGenerated] = useState(false); // State to track if QR code is generated

    const [qrSize, setQrSize] = useState(150); // State to track QR code size

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQrData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsGenerated(true);
    };

    // const handleSizeChange = (value) => {
    //     setQrSize((prevSize) => Math.max(50, prevSize + value));
    // };

    const handleSizeChange = (value) => {
        const screenWidth = window.innerWidth;
        const newQrSize = qrSize + value;

        if (newQrSize >= 50 && newQrSize <= screenWidth - 100) {
            setQrSize(newQrSize);
        }
    };

    return (
        <div className='head-form-container'>
            <div className='form-container'>
                <h1>QrGenerator</h1>
                <a href="https://www.npmjs.com/package/react-qr-code" target="_blank" rel="noopener noreferrer">
                    react-qr-code Documentation
                </a>
                <form style={{ marginTop: '20px' }} onSubmit={handleSubmit}>
                    {Object.keys(qrData).map((key) => (
                        <label key={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                            <input type="text" name={key} value={qrData[key]} onChange={handleInputChange} />
                        </label>
                    ))}
                    <button className='qr-button' type="submit">Generate QR Code</button>
                </form>

            </div>
            {isGenerated && (
                <div className='app-container' style={{ height: 'auto', margin: '20px auto', width: '100%' }}>
                    <h2 style={{ margin: '10px 0' }}>QR Code</h2>
                    <div className="size-controls">
                        <button className='button-qr' onClick={() => handleSizeChange(-10)}>-</button>
                        <button className='button-qr' onClick={() => handleSizeChange(10)}>+</button>
                    </div>
                    <QRCode
                        value={JSON.stringify(qrData)}
                        size={qrSize}
                        style={{ height: 'auto', maxWidth: '100%', minwidth: '50%' }}
                        viewBox={'0 0 556 256'}
                    />
                </div>
            )}
        </div>
    );
}
