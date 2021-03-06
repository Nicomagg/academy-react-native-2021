import React, { useEffect, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { CharGrid } from "./CharGrid";
import Pagination from "./Pagination";

function GetCharacters() {
  const [info, setInfo] = useState({});
  const [characters, setCharacters] = useState([]);
  const [searcht, setSearcht] = useState("");
  const initialurl = `https://rickandmortyapi.com/api/character?name=${searcht}`;
  const pers = (initialurl) => {
    fetch(initialurl)
      .then((rsp) => rsp.json())
      .then((data) => {
        data.error && (data = { info: null, results: [] });
        setInfo(data.info);
        setCharacters(data.results);
      })
      .catch((error) => console.log(error));
  };

  const renderPagination = () =>
    info && (
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrev={onPrev}
        onNext={onNext}
      />
    );

  const onPrev = () => {
    pers(info.prev);
  };
  const onNext = () => {
    pers(info.next);
  };

  useEffect(() => {
    pers(initialurl);
  }, [initialurl]);

  const onType = (t) => {
    setSearcht(t.target.value);
    filt(t.target.value);
  };

  const filt = (sTerm) => {
    var sResults = characters.filter((term) => {
      if (term.name.toString().toLowerCase().includes(sTerm.toLowerCase())) {
        return term;
      }
    });
    setCharacters(sResults);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="containerInput">
          <input
            className="form-control src"
            value={searcht}
            placeholder="Search Your Favourite Character"
            onChange={onType}
          />
          <a href="/">
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faSync} />
            </button>
          </a>
        </div>
        <div className="mt-1">
          <p id="welcome">
            This is a simple WebApp which permits you to find any character from
            famous Rick & Morty animated show. <br /> Use pagination buttons to
            see all characters or search any character in particular.
          </p>
        </div>
      </div>
      {renderPagination()}
      <CharGrid className="grid" characters={characters} />
      {renderPagination()}
    </>
  );
}

export default GetCharacters;
