import React from "react";
import styles from "./Form.module.css";
import useSelect from "../hooks/useSelect";
import useCountry from "../hooks/useCountry";
import Error from "./Error";

const Form = ({ setCategory, setCountry }) => {
  // opciones de noticias
  const newsType = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];

  // opciones para paises
  const country = [
    { value: "co", label: "Colombia" },
    { value: "us", label: "EEUU" },
    { value: "mx", label: "Mexico" },
    { value: "ar", label: "Argentina" },
  ];

  // custom hooks, mostrar opciones de noticias
  const [SelectCategories, category] = useSelect("general", newsType);

  const [SelectCountry, selectCountry] = useCountry("co", country);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(category);
    setCountry(selectCountry);
  };

  return (
    <div className={`${styles.search} row`}>
      <Error message="Elegir una opcion" />
      <div className="col s12 m8 offset-m2 ">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}> Encuentra Noticias por Categoria</h2>
          <SelectCategories />
          <SelectCountry />
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
