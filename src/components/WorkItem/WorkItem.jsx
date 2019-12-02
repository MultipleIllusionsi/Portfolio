import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import "./WorkItem.scss";

const WorkItem = ({ data: { title, preview, nonPage, link } }) => (
  <li className="WorkItem">
    {nonPage ? (
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <div className="WorkItem-content">
          <p className="WorkItem-content__text">{title}</p>
          <ArrowIcon />
        </div>
      </a>
    ) : (
      <Link to={`/work/${title}`}>
        <div className="WorkItem-content">
          <p className="WorkItem-content__text">{title}</p>
          <ArrowIcon />
          <div className="WorkItem-content__img">
            <img src={preview} alt={`${title}`} />
          </div>
        </div>
      </Link>
    )}
  </li>
);

export default WorkItem;
