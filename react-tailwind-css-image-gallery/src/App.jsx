import { useState, useEffect } from "react";
import ImagesCard from "./components/ImagesCard";
import ImageSearch from "./components/ImageSearch";

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
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">
          No Images Found ...
        </h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading ...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImagesCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
