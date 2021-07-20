import React, { useEffect, useState } from "react";
import "../App.css";
import AccordionLocat from "./AccordionLocat";
import AccordionEpi from "./AccordionEpi";
import PaginationE from "./PaginationE";
import PaginationL from "./PaginationL";

function GetEpiLocat() {
  const [info1, setInfo1] = useState({});
  const [locations, setLocations] = useState([]);
  const initurl = "https://rickandmortyapi.com/api/location";
  const loca = (initurl) => {
    fetch(initurl)
      .then((rsp) => rsp.json())
      .then((dataL) => {
        setInfo1(dataL.info);
        setLocations(dataL.results);
      })
      .catch((error) => console.log(error));
  };

  const onPrev1 = () => {
    loca(info1.prev);
  };
  const onNext1 = () => {
    loca(info1.next);
  };

  useEffect(() => {
    loca(initurl);
  }, []);

  const [info2, setInfo2] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const url = "https://rickandmortyapi.com/api/episode";
  const epis = (url) => {
    fetch(url)
      .then((rsp) => rsp.json())
      .then((dataE) => {
        setInfo2(dataE.info);
        setEpisodes(dataE.results);
      })
      .catch((error) => console.log(error));
  };

  const onPrev2 = () => {
    epis(info2.prev);
  };
  const onNext2 = () => {
    epis(info2.next);
  };

  useEffect(() => {
    epis(url);
  }, []);

  return (
    <div className="accordion accordion-flush" id="accordionEpisLoca">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed btn-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Locations
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionEpisLoca"
        >
          <div className="accordion-body">
            <PaginationL
              prev={info1.prev}
              next={info1.next}
              onPrev1={onPrev1}
              onNext1={onNext1}
            />
            <AccordionLocat locations={locations} />
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed btn-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Episodes
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionEpisLoca"
        >
          <div className="accordion-body">
            <PaginationE
              prev={info2.prev}
              next={info2.next}
              onPrev2={onPrev2}
              onNext2={onNext2}
            />
            <AccordionEpi episodes={episodes} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default GetEpiLocat;
