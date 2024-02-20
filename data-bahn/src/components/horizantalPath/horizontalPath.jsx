import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./horizontalPath.css";

const HorizontalTree = (props) => {
  const treeContainer = useRef(null);

  useEffect(() => {
    console.log(props);
    const data = props.leftTreeData;

    const updateTree = () => {
      const containerWidth = treeContainer.current.clientWidth;
      const containerHeight = treeContainer.current.clientHeight;

      const svg = d3.select(treeContainer.current).select("svg");
      svg.selectAll("*").remove(); // Clear existing content on resize

      const treeLayout = d3.tree().size([containerHeight, containerWidth]);

      const root = d3.hierarchy(data);
      const treeData = treeLayout(root);

      const diagonal = d3
        .linkHorizontal()
        .x((d) => containerWidth - d.y)
        .y((d) => d.x);

      // Draw links
      svg
        .selectAll("path")
        .data(treeData.links())
        .enter()
        .append("path")
        .attr("d", diagonal)
        .attr("fill", "none")
        .attr("stroke-width", 6) 
        .attr("stroke", "#0f3d63");

      // Draw rectangles for nodes on the left side (including the root)
      const nodes = svg
        .selectAll("g.left-node")
        .data(treeData.descendants())
        .enter()
        .append("g")
        .attr("class", "left-node")
        .attr(
          "transform",
          (d) => `translate(${containerWidth - d.y - 20},${d.x - 15})`
        );

      nodes
        .append("rect")
        .attr("width", (d) => (d.parent ? 90 : 150)) // Different width for root node
        .attr("height", 30)
        .attr("fill", (d) => (d.parent ? "lightblue" : "#0f3d63")); // Different color for root node

      nodes
        .append("text")
        .attr("x", (d) => (d.parent ? 55 : 55)) // Adjust x position for root node
        .attr("y", 10)
        .attr("dy", "10")
        .attr("text-anchor", "middle")
        .attr("fill", (d) => (d.parent ? "black" : "white")) // Text color for root node
        .text((d) => d.data.name);
    };

    // Initial render
    updateTree();

    // Update on window resize
    window.addEventListener("resize", updateTree);

    return () => {
      window.removeEventListener("resize", updateTree);
    };
  }, [props]); // Empty dependency array to run the effect only once on mount

  return (
    <div ref={treeContainer} className = "mainContainer">
      <svg className ="svgStyle" ></svg>
    </div>
  );
};

export default HorizontalTree;
