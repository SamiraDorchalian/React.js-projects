import { useState, useEffect } from "react";
import ImagesCard from "./components/ImagesCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const BASE_URL = "https://pixabay.com/api/";
  const API_KEY = "47227297-8f449cb8a777893f1c3992569";

  useEffect(() => {
    fetch(`${BASE_URL}?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImagesCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
