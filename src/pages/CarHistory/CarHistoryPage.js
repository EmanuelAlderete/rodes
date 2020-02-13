import React, { useState, useEffect } from "react";
import CarHistoryStyled from "./CarHistoryStyles";
import BreadcrumbComponent from "../../components/Breadcrumb/BreadCrumbComponent";

import OutIcon from "../../assets/icons/out.svg";
import InIcon from "../../assets/icons/in.svg";

const CarHistoryPage = props => {
  const [visits, setVisits] = useState([{ failures: [] }]);

  async function getVisitInfo() {
    const response = await fetch(
      `http://localhost:3333/api/car/${props.match.params.id}/history`
    );
    const data = await response.json();
    setVisits(data);
  }

  useEffect(() => {
    getVisitInfo();
  }, []);

  return (
    <CarHistoryStyled>
      <BreadcrumbComponent _id={props.match.params.id} text="Voltar" />
      {visits.map(visit => (
        <article key={visit._id}>
          <div>
            <p>
              <img src={InIcon} alt="entrada" /> {visit.date_arrival}
            </p>
            <p>
              <img src={OutIcon} alt="entrada" /> {visit.date_departure}
            </p>
          </div>
          <div>
            <ul>
              {visit.failures.map(failure => (
                <li key={failure}>{failure}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </CarHistoryStyled>
  );
};

export default CarHistoryPage;
