import React from "react";
import "./road.css";


const CurvedRoad = (props) => {
  
  return (
    <>
    <div className="road">
      <div className="center-line"></div>
        {props.endPoints[0] ? (
          <div className="path1">
            <div className="center-line"></div>
            <div className="path1a">
              <div className="center-line"></div>
              <div className="node1">{props.endPoints[0].nodeTitle}</div>
            </div>
            <div className="path1-sign">Security relevant data</div>
          </div>

        ) : (
          ""
        )}
        {props.endPoints && props.endPoints[1] ? (
          <div className="path2">
            <div className="center-line"></div>
            <div className="path2a">
              <div className="center-line"></div>
              <div className="node2">{props.endPoints[1].nodeTitle}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        {props.endPoints && props.endPoints[2] ? (
          <div className="path3">
            <div className="center-line"></div>
            <div className="path3a">
              <div className="center-line"></div>
              <div className="node3">{props.endPoints[2].nodeTitle}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        {props.endPoints && props.endPoints[3] ? (
          <div className="path4">
            <div className="center-line"></div>
            <div className="path4a">
              <div className="center-line"></div>
              <div className="node4">{props.endPoints[3].nodeTitle}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        {props.endPoints && props.endPoints[4] ? (
          <div className="path5">
            <div className="center-line"></div>
            <div className="path5a">
              <div className="center-line"></div>
              <div className="node5">{props.endPoints[4].nodeTitle}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        {props.endPoints && props.endPoints[5] ? (
          <div className="path6">
            <div className="center-line"></div>
            <div className="path6a">
              <div className="center-line"></div>
              <div className="node6">{props.endPoints[5].nodeTitle}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      <span className="sign1">Data Forking</span>
    </div>
    </>
  );
};

export default CurvedRoad;
