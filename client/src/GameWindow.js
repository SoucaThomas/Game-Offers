export const GameWindow = (props) => {
  return (
    <div className="GameWindow">
      <div className="Game">
        <img className="IMG" src={props.img}></img>
        <div className="Title">
          <h1 className="Game-Title">{props.title}</h1>
          <div className="Price">
            <p>{props.price}</p>
          </div>
        </div>
        <p className="Description"> {props.description}</p>
      </div>
    </div>
  );
};
