import React from "react";
import "./Home.css";
import HorizontalTree from "../../components/horizantalPath/horizontalPath.jsx";
import CurvedRoad from "../../components/curvedRoad/road.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  let EndPath = [
    { id: 1, nodeTitle: "SIEM/ UEBA" },
    { id: 2, nodeTitle: "AI CANVAS" },
    { id: 3, nodeTitle: "DATA LAKE" },
    { id: 4, nodeTitle: "COLD STORAGE" },
    { id: 5, nodeTitle: "DATA LAKE" },
    { id: 6, nodeTitle: "COLD STORAGE" },
  ];

  const leftTreeData = {
    name: "Root",
    children: [
      { name: "Node 1" },
      { name: "Node 2" },
      { name: "Node 3" },
      { name: "Node 4" },
      { name: "Node 5" },
      { name: "Node 6" },
      { name: "Node 7" },
      { name: "Node 8" },
      { name: "Node 9" },
      { name: "Node 10" },
      { name: "Node 11" },
    ],
  };

  return (
    <>
      <div className="wrapper">
        <div className="inner-wrapper">
          <div className="app flex-row">
            <div className="horizontal-tree">
              <HorizontalTree leftTreeData={leftTreeData}></HorizontalTree>
            </div>
            <div className="outer-circle">
              <Link to="/transform" className="link">
                <p className="section-text text1">Normaize/ Transform</p>
              </Link>
              <Link to="/volume-reduction" className="link">
                <p className="section-text text2">Volume Reduction</p>
              </Link>
              <Link to="/insights" className="link">
                <p className="section-text text3">Insights/ Lineage</p>
              </Link>
              <Link to="/ai-tags" className="link">
                <p className="section-text text4">Ai tags</p>
              </Link>
              <div className="center-circle flex-row">
                <span>Data Highway</span>
              </div>
            </div>
            <CurvedRoad endPoints={EndPath}></CurvedRoad>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
