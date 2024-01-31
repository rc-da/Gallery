import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";

const key = "41946682-5b38ddbcf73809982be084d1b";

export default function Gallery() {
  const navigate = useNavigate();
  const [img, setImg] = useState([]);
  const [isLoding, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchedParams] = useSearchParams();
  const name = searchedParams.get("q");
  const category = searchedParams.get("c");

  useEffect(
    function () {
      const controller = new AbortController();

      async function data() {
        try {
          if (name.length < 3) {
            setError("");
            return;
          }
          console.log(name);

          if (name === "") return;

          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://pixabay.com/api/?key=${key}&q=${name}&&category=${category}&orientation=horizontal&order=popular&per_page=10&image_type=photo`,
            { signal: controller.signal }
          );

          // if (!res.ok)
          //   throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          console.log(data.hits);

          if (data.hits.length === 0) throw new Error("Image not found !");

          setImg(data.hits);
          setError("");
          setIsLoading(false);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err);
            setImg([]);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      data();
      return function () {
        if (name < 3) controller.abort();
      };
    },
    [category, name, setImg, setIsLoading]
  );
  if (name === "undefined") return navigate("/");
  return (
    <>
      <Header />
      <div className="gallery">
        {(isLoding || (img.length === 0 && error === "")) && <Loader />}
        {error && <ErrorMessage message={error} />}
        {(!isLoding || error) &&
          img.map((i) => <Images key={i.id} url={i.webformatURL} />)}
      </div>
    </>
  );
}

function Images({ url }) {
  return <img src={url} alt="img" id="img" loading="lazy" />;
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}
