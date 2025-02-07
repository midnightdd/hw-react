import Card from "./Card"; 
import "./App.css";

function App() {
  const data = [
    {
      img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      title: "Cute puppies",
      description: "Two puppies sitting on the grass.",
    },
    {
      img: "https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg",
      title: "Sad dog",
      description: "Sad dog.",
    },
  ];

  return (
    <div className="app">
    
      <h3>Proj React Homework</h3>
      
    
      <div className="card-container">
        {data.map((item, index) => (
          <Card key={index} img={item.img} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default App;