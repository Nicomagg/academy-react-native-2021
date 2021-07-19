import React, { useEffect, useState } from "react";
import "../App.css";
import CharGrid from "./CharGrid";
import Pagination from "./Pagination";

function GetCharacters() {
  const [info, setInfo] = useState({});
  const [characters, setCharacters] = useState([]);
  const initialurl = "https://rickandmortyapi.com/api/character";
  const pers = (initialurl) => {
    fetch(initialurl)
      .then((rsp) => rsp.json())
      .then((data) => {
        setInfo(data.info);
        setCharacters(data.results);
      })
      .catch((error) => console.log(error));
  };

  const onPrev = () => {
    pers(info.prev);
  };
  const onNext = () => {
    pers(info.next);
  };

  useEffect(() => {
    pers(initialurl);
  }, []);

  return (
    <div className="container">
      <div className="princ">
        <div className="sec">
          <button
            className="navbar-toggler"
            type="button"
            style={{ backgroundColor: "green", color: "white", padding: 10 }}
            data-bs-toggle="collapse"
            data-bs-target="#ShowAll"
          >
            Show All Characters
          </button>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="ShowAll">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrev={onPrev}
          onNext={onNext}
        />
        <CharGrid characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrev={onPrev}
          onNext={onNext}
        />{" "}
      </div>
    </div>
  );
}

export default GetCharacters;
