import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <h2>Jose</h2>
      <GoogleMap />
      <Helmet>
      <script defer data-key="307e76ff-a303-4d18-9d3a-27fbe0f7b734" src="https://widget.tochat.be/bundle.js"></script>
       </Helmet>
    </div>
  );
}

export default App;
