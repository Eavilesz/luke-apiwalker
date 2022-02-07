import axios from "axios";
import React, { useState, useEffect } from "react";

const LukeApiwalker = () => {
  const [list, setList] = useState([]);
  const [atributeList, setAtributeList] = useState([]);
  const [atributeValueList, setAtributeValueList] = useState([]);
  const [atributeNumber, setAtributeNumber] = useState(1);
  const [selectedElement, setSelectedElement] = useState(["people"]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isApiValid, setIsApiValid] = useState(false);
  const [val, setVal] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api")
      .then((response) => {
        return response;
      })
      .then((response) => {
        setList(Object.keys(response.data));
        // console.log(Object.keys(response.data));
      });
    // .then(() => {
    //   setSelectedElement(list[0]);
    // });
  }, []);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${selectedElement}/`)
      .then((response) => {
        return response;
      })
      .then((response) => {
        setAtributeList(Object.keys(response.data.results[atributeNumber - 1]));
        setAtributeValueList(
          Object.values(response.data.results[atributeNumber - 1])
        );
        setIsApiValid(false);
      })
      .catch((err) => {
        setIsApiValid(true);
        setIsSubmitted(false);
      });
  }, [submitClicked]);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setSubmitClicked(!submitClicked);
  };

  return (
    <form onSubmit={submitHandler}>
      search for:&nbsp;&nbsp;
      <select
        // value={selectedElement}
        onChange={(e) => setSelectedElement(e.target.value)}
      >
        {list.map((element, idx) => (
          <option key={idx} value={element}>
            {element}
          </option>
        ))}
      </select>
      <div style={{ display: "inline", marginLeft: "50px" }}>
        ID&nbsp;&nbsp;
        <input
          type="text"
          onChange={(e) => setAtributeNumber(e.target.value)}
        ></input>
        <button>Search</button>
      </div>
      {isSubmitted && (
        <div style={{ margin: "50px" }}>
          <h1>{atributeValueList[0]}</h1>
          <p>
            {atributeList[1]}:&nbsp;&nbsp;{atributeValueList[1]}
          </p>
          <p>
            {atributeList[2]}:&nbsp;&nbsp;{atributeValueList[2]}
          </p>
          <p>
            {atributeList[3]}:&nbsp;&nbsp;{atributeValueList[3]}
          </p>
          <p>
            {atributeList[4]}:&nbsp;&nbsp;{atributeValueList[4]}
          </p>
        </div>
      )}
      {isApiValid && (
        <div style={{ margin: "50px" }}>
          <p>Estos no son los droides que estas buscando!</p>
          <img
            style={{ width: "300px" }}
            src="https://www.cinemascomics.com/wp-content/uploads/2020/07/serie-kenobi-star-wars.jpg"
            alt="Foto de Obi Wan Kenobi"
          ></img>
        </div>
      )}
    </form>
  );
};

export default LukeApiwalker;
