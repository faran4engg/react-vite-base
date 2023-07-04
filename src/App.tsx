import { Card } from "./components";
import "./app.css";
import { useState } from "react";

const App = () => {

  const url =
    "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  const [position, setPosition] = useState('top');
  
  const setTop = () => {
    setPosition('top');
    }

  const setBottom = () => {
    setPosition('bottom');
    }
     
    return (
      <>
    <main className="main-section">
      <Card
        title="I am Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatibus?"
        imgSrc={url}
        imgPosition={position}
      /> 
      
      <div className="button">
        <button onClick={() => setPosition('top')}>Top</button>
        <button onClick={() => setPosition('bottom')}>Bottom</button>
      </div>
    </main>
    </>
  );
};

export default App;
