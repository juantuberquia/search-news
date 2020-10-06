import React, { Fragment, useState, useEffect } from "react";
import Headering from "./components/Headering.jsx";
import Form from "./components/Form.jsx";
import ShowNews from "./components/ShowNews";

function App() {
  // array de noticias, articulos
  const [news, setNews] = useState([]);

  //categoria de noticia , pais seleccionado
  const [category, setCategory] = useState(false);
  const [country, setCountry] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const url = await fetch(
        `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=748cf20534484e0392326ee7b8732977`
      );
      const res = await url.json();
      setNews(res.articles);
    };
    getData();
  }, [category, country]);

  return (
    <Fragment>
      <Headering />
      <div className="container white">
        <Form setCategory={setCategory} setCountry={setCountry} />
        <ShowNews news={news} />
      </div>
    </Fragment>
  );
}

export default App;
