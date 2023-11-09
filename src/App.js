// import logo from './logo.svg';
import './App.css';
// import QRCode from "react-qr-code";
import QrGenerator from './components/QrGenerator/QrGenerator';


export default function App() {
  // const { data, error } = useSWR("/api/user", fetch);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  return (
    <div className="App">
      <QrGenerator/>
    </div>
  );
}

