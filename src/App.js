import React, { useState, useEffect } from "react";

//Style
import "./App.css";

//Components
import Nav from "./components/Navbar/Nav";

function App() {
  const [state, setState] = useState({
    randomArr: [],
    speed: 1,
    i: 0,
    j: 0,
  });

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const arrayRandom = generateRandomArray();
    setState({ ...state, randomArr: arrayRandom });
  };

  const selectSortingHandler = (type) => {
    switch (type) {
      case "Bubble Sort":
        setState({
          ...state,
          selectedSorting: bubbleSorting(state.randomArr),
        });
        break;
      case "Selection Sort":
        console.log(type);
        setState({
          ...state,
          selectedSorting: selectionSorting(state.randomArr),
        });
        break;

      default:
        return;
    }
  };

  const wait = () => {
    console.log(state.speed);
    return new Promise((resolve) => setTimeout(resolve, parseInt(state.speed)));
  };

  const bubbleSorting = (arr) => {
    const sort = async () => {
      let array = [...arr];
      let len = array.length;

      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            await wait();
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            setState({
              ...state,
              randomArr: array,
              i: array[i],
              j: array[j],
            });
          }
        }
      }
    };
    sort();
  };

  const selectionSorting = async (arr) => {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
      let min = i;

      for (let j = i + 1; j < len; j++) {
        var max = arr[j];
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      setState({
        ...state,
        randomArr: [...arr],
        i: arr[min],
        j: max,
      });
      if (min !== i) {
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
      await wait();
    }
    return arr;
  };

  const generateRandomArray = (min = 0, max = 60, c = 0, arr = []) => {
    let counter = c;
    const array = arr;
    if (c >= max) {
      return array;
    }
    const random = Math.floor(Math.random() * (max - min) + min);

    if (!array.includes(random)) {
      array.push(random);
      counter++;
    }
    return generateRandomArray(min, max, counter, array);
  };

  return (
    <div className="App">
      <Nav
        generate={generateArray}
        selectSorting={selectSortingHandler}
        speed={state.speed}
        setState={setState}
        state={state}
      />
      <div className="visualizerContainer">
        {state.randomArr.map((x) => {
          console.log(state.i, state.j);
          return (
            <div
              key={x}
              className="bar"
              style={{
                minHeight: `${x * 5}px`,
                backgroundColor: x === state.i ? "#39ff14" : "#51c4d3",
                background: x === state.j ? "#ff073a" : "#51c4d3",
                width: "20px",
                margin: "0rem 0.1rem",
                color: "#FFFFFF",
              }}
            >
              <b>{x}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
