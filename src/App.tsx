import Card from "./components/Card";
import "./app.css";

const App = () => {
  return (
    <>
    <main className="main-section">
       <Card
        title="I am Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatibus?"
        imgSrc= "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        position= 'top'
      />
    </main>
    </>
  );
};

export default App;
