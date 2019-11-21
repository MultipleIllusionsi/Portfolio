import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import "./WorkItem.scss";

const WorkItem = ({ data }) => {
  console.log("props from workitem", data);
  return (
    <li className="WorkItem">
      <Link to={`/work/${data.title}`}>
        <div className="WorkItem-content">
          <p className="WorkItem-content__text">{data.title}</p>
          <ArrowIcon />
          <div className="WorkItem-content__img">
            <img src={data.preview} alt="" />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default WorkItem;
