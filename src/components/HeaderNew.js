import React, { useState } from "react";
// import DropdownMenu from './DropdownMenu';
import SearchItems from "./Search";
import { ReactComponent as SearchIcon } from "../search.svg";
// import { ReactComponent as Add } from "../add.svg";
// import { ReactComponent as AddDark } from "../AddDark.svg";


const HeaderNew = (props) => {

  



  //``````````````````````````search````````````````````````

  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState([]);

  function makeActive(path) {
    setSearchText("");
    props.makeActive(path);
  }
  let arr = [];
  function searchdiv(compStructure, t) {
    compStructure.forEach((item) => {
      if (item.name.toLowerCase().includes(t.toLowerCase())) {
        console.log(item.path);
        arr.push(
          <SearchItems
            path={item.path}
            key={item.id}
            name={item.name}
            makeActive={makeActive}
            isFolder={item.isFolder}
          />
        );
      }

      if (item.childNodes.length > 0) {
        searchdiv(item.childNodes, t);
      }
    });
  }
  function func(t) {
    arr = [];

    searchdiv(props.directory.structure, t);
    setItems(arr);

    return arr;
  }

  function handleChange(event) {
    const t = event.target.value;

    setSearchText(() => {
      func(t);
      return t;
    });
  }

  //`````````````````````Search``````````````````````````

  function pathCurrent() {
    let Path = [...props.directory.currPath];
    let pathArr = [];
    let element = props.directory.structure[Path[0]];
    pathArr.push(
      <span key={element.id}>
        <span
          className="span-path"
          onClick={() => {
            makeActive(Path.slice(0, 1));
          }}
        >
          {element.name}{" "}
        </span>{" "}
        /{" "}
      </span>
    );
    for (let i = 1; i < Path.length; i++) {
      element = element.childNodes[Path[i]];
      pathArr.push(
        <span key={element.id}>
          <span
            className="span-path"
            onClick={() => {
              makeActive(Path.slice(0, i + 1));
            }}
          >
            {element.name}
          </span>{" "}
          /{" "}
        </span>
      );
    }

    return pathArr;
  }

  return (
    <div>
      <div className="top-btn-search">
        <div className="search-div">
          <form onSubmit={(e) => e.preventDefault()}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search..."
              id="searchBar"
              className="searchBox"
              onChange={handleChange}
              value={searchText} autoComplete='off'
            />{" "}
            <button type="submit" hidden></button>
            {searchText.length > 0 && (
              <div className="search-items-div">
                {items.length > 0 ? items : <SearchItems name="No results" />}
              </div>
            )}
          </form>
        </div>
        
      </div>
      <div className="bottom-path-div">
        {props.directory.currPath.length > 0 && pathCurrent()}
      </div>
      <hr />
    </div>
  );
};

export default HeaderNew;
