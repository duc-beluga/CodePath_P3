import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DropDownButton from "./components/DropDownButton";
import axios from "axios";

function App() {
  const [events, setEvents] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/events/${location}`).then((res) => {
      console.log(res.data);
      setEvents(Object.values(res.data));
    });
  }, [location]);

  return (
    <div className="">
      <Navbar setEvents={setEvents} setLocation={setLocation} />
      <div className="p-4">
        <DropDownButton setLocation={setLocation} />
        <div className="grid grid-cols-1">
          {events.length != 0 &&
            events.map((event) => (
              <div
                className="card w-96 bg-base-100 shadow-xl m-3"
                key={event.id}
              >
                <figure>
                  <img src={event.img} alt="Img" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{event.band}</h2>
                  <p>{event.eventtime}</p>
                  {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
