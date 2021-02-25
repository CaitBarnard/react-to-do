import React from "react";
import classes from "./Image.module.css";

const Image = () => (
  <div className={classes.frame}>
    <img
      className={classes.image}
      src="https://cdn.mos.cms.futurecdn.net/2Gwau7TtiHM5PdsjFeaxnm-320-80.jpg"
      alt="Red Panda"
    />
  </div>
);
export default Image;
