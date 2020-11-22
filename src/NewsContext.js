import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "c97ea626b93e4f8a9e1b319b729cdbe7";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=politics&from=2020-11-19&sortBy=popularityAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};