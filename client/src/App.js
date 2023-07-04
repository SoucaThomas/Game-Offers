import "./App.scss";
import "./GameWindow.scss";
import { GameWindow } from "./GameWindow";
import { freeGameData } from "./testdata";

function App() {
  return (
    <div className="App">
      <div className="Content">
        <div className="Section">
          <div className="Carousel">
            <div className="Carousel-Content">
              {freeGameData.map((val, key) => {
                return (
                  <GameWindow
                    img={val.img}
                    title={val.title}
                    description={val.description}
                    price="Free"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
