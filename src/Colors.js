import React from "react";

const styles = {
  buttons: {
    display: "flex",
    gap: 10,
  },
};

function Colors({ changeColor }) {
  return (
    <div className="color-buttons" style={styles.buttons}>
      <div className="button-group">
        <button
          style={{ backgroundColor: "#E9EDC9" }}
          className="circular-button"
          onClick={() => changeColor("#E9EDC9")}
        ></button>
        <button
          style={{ backgroundColor: "#BE97C6" }}
          className="circular-button"
          onClick={() => changeColor("#BE97C6")}
        ></button>

        <button
          style={{ backgroundColor: "#2F97C1" }}
          className="circular-button"
          onClick={() => changeColor("#2F97C1")}
        ></button>
        <button
          style={{ backgroundColor: "#D90812" }}
          className="circular-button"
          onClick={() => changeColor("#D90812")}
        ></button>
        <button
          style={{ backgroundColor: "#169873" }}
          className="circular-button"
          onClick={() => changeColor("#169873")}
        ></button>
      </div>
    </div>
  );
}

export default Colors;
