import { Card } from "./components";
import "./app.css";

const App = () => {
  const url =
    "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <main className="main-section">
      <Card
        title="I am Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatibus?"
        imgSrc={url}
        position="bottom"
      />
    </main>
  );
};

export default App;
