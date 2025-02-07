import "./App.css";

function App() {
  const data = [
    {
      img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      title: "Cute Dog",
      description: "A lovely dog sitting on the grass.",
    },
    {
      img: "https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg",
      title: "Happy Puppy",
      description: "A small puppy enjoying the sunshine.",
    },
  ];

  return (
    <div className="app">
      {data.map((item, index) => (
        <Card key={index} img={item.img} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

export default App;
