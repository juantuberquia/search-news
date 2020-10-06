import React from "react";
import styles from "./Form.module.css";
import useSelect from "../hooks/useSelect";
import Error from "./Error";

const Form = () => {
  // opciones de noticias
  const opciones = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];
  // custom hooks, mostrar opciones de noticias
  const [SelectCategories, category] = useSelect("general", opciones);

  const getData = async () => {
    const url = await fetch(
      `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=748cf20534484e0392326ee7b8732977`
    );
    const res = await url.json();
    console.log(res.articles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className={`${styles.search} row`}>
      <Error message="Elegir una opcion" />
      <div className="col s12 m8 offset-m2 ">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}> Encuentra Noticias por Categoria</h2>
          <SelectCategories />
          <div>
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
