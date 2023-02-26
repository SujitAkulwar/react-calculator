import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { historyaction } from "../store";

const History = () => {
  const dispatch = useDispatch();

  const history = useSelector((state) => state.history.list);

  const clearhistory = () => {
    dispatch(historyaction.deletehistory());
  };

  return (
    <div className="history">
      <div className="historyhead">
        <div className="historytext">history</div>
        <div className="clear" onClick={(e) => clearhistory()}>
          clear
        </div>
      </div>
      <ul>
        {history.map((text, index) => (
          <li className="box" key={index}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
