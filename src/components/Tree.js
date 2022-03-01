import React, { useState } from "react";
import { ReactComponent as BigFile } from "../BigFile.svg";
import { ReactComponent as BigFolder } from "../BigFolder.svg";
import { ReactComponent as GreyFolder } from "../GreyFolder.svg";

const Tree = ({ data = [] }) => {
  // console.log("data tree")
  //console.log(data)
  const name = localStorage.getItem("name");
  const type = localStorage.getItem("type");
  const add = localStorage.getItem("add");
  const id = localStorage.getItem("id");
  const exType = localStorage.getItem("exType");
  console.log("exTyte " + exType);
  const newid = parseInt(id);
  //console.log(data[parseInt(id)]);
  const arr = data;
  if (add === "add" && exType === "") {
    arr.push({
      name: name,
      type: type,
      parentId: id,
      folderID: newid + 1,
      childNodes: [],
    });
    console.log(arr);
  }
  if (add === "add" && (exType === "folder" || exType === "")) {
    data.push({
      name: name,
      type: type,
      parentId: id,
      folderID: newid + 1,
      childNodes: [],
    });
  } else if (add === "add" && exType === "file") {
    alert("You cannot add here!!");
  }

  localStorage.setItem("add", "");
  localStorage.setItem("exType", "");

  return (
    <div>
      <ul>
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisibility] = useState(false);
  //    console.log(node.folderID);
  const [id, setId] = useState("");
  const [exType, setExType] = useState("");
  const [nodeName, setNodeName] = useState("");

  function handleClick() {
    setId(node.folderID);
    //console.log(id);

    setExType(node.type);
    //console.log(exType);
    setNodeName(node.name);
    console.log(nodeName);
    //       var el = document.getElementById('folderBox');
    //       el.classList.add('activeBox');
    localStorage.setItem("nodeName", nodeName);
  }

  function handleActive() {
    var el = document.getElementById("folderBox");
    for (var i = 0; i < node.length; i++) {
      el.classList.add("activeBox");
    }
  }

  localStorage.setItem("id", id);
  localStorage.setItem("exType", exType);

  const hasChild = node.childNodes ? true : false;

  return (
    <>
      <div className="top">
        <div>
          <li>
            <div onClick={(e) => setChildVisibility((v) => !v)}>
              {hasChild && (
                <div
                  className={`d-inline d-tree-toggler folder ${
                    childVisible ? "active" : ""
                  }`}
                ></div>
              )}
              <div className="folder" id="folderBox" onClick={handleClick}>
                {/* {node.folderID} */}
                <span onClick={handleActive}><GreyFolder/>{node.name}</span>
              </div>
            </div>

            {hasChild && childVisible && (
              <div className="d-tree-content">
                <ul className="d-flex d-tree-container flex-column">
                  <Tree data={node.childNodes} />
                </ul>
              </div>
            )}
          </li>
        </div>
        <div className="fileDiv">
          <BigFile />

          <div>{nodeName}</div>
        </div>
      </div>
    </>
  );
};

export default Tree;
