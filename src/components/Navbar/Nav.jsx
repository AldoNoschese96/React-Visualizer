import React from "react";

const Nav = ({ generate, selectSorting, speed, setState, state }) => {
  const selectSortingType = (text) => {
    selectSorting(text);
  };

  return (
    <nav>
      <div className="navContainer">
        <div className="divCta">
          <button onClick={generate}>Random Array</button>
          <div className="div_speed">
            <span style={{ marginLeft: "5rem" }}>Speed ms</span>
            <input
              type="number"
              value={speed}
              onChange={(e) => setState({ ...state, speed: e.target.value })}
              style={{ marginLeft: "1rem" }}
            />
          </div>
        </div>
        <div className="listContainer">
          <ul>
            <li>
              <button
                onClick={(e) => selectSortingType(e.currentTarget.textContent)}
              >
                Bubble Sort
              </button>
            </li>
            <li>
              <button
                onClick={(e) => selectSortingType(e.currentTarget.textContent)}
              >
                Selection Sort
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
