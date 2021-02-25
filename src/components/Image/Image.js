import classes from "./Image.module.css";

const Image = (props) => (
  <div className={classes.frame}>
    <img className={classes.image} src={props.src} alt={props.alt} />
    <p className={classes.caption}>{props.children}</p>
  </div>
);
export default Image;
