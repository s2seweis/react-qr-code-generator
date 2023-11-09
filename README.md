# QR Code Generator

QR Code Generator is a simple web application that allows users to generate QR codes based on their input data. Users can enter their personal information such as name, surname, age, and address, and the application will generate a QR code containing this data. This QR code can be scanned by any QR code reader to access the stored information.

<div align="center">
<img src="/qr-generator.png" alt="Example Image">
</div>

## Features

- **User Input**: Users can enter their personal information through the user-friendly input form.

- **Dynamic QR Code Generation**: QR codes are dynamically generated based on the user input. The QR code content updates in real-time as the user types.

- **Easy Scanning**: The generated QR code can be easily scanned using any QR code reader or mobile device camera.

## Technologies Used

- **React**: The application is built using React, a popular JavaScript library for building user interfaces.

- **react-qr-code**: The `react-qr-code` library is used to generate QR codes dynamically based on user input.

## How to Use

1. **Input Personal Information**: Fill out the form fields for Surname, Prename, Age, and Address.

2. **Generate QR Code**: Click on the "Generate QR Code" button to generate the QR code based on the entered information.

3. **Scan QR Code**: Use any QR code reader or a mobile device camera to scan the generated QR code.

## Installation

To run the application locally, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**: Change your directory to the cloned project folder:

   ```
   cd qr-code-generator
   ```

3. **Install Dependencies**: Install the project dependencies using npm or yarn:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. **Start the Application**: Start the development server and run the application:

   ```
   npm start
   ```

   or

   ```
   yarn start
   ```

   The application will be accessible at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.