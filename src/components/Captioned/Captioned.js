import classes from "../Image/Image.module.css";

const Captioned = (props) => {
  return (
    <div>
      <div className={classes.frame}>
        <img className={classes.image} src={props.src} alt="Red Panda" />
        <p className={classes.caption}>{props.children}</p>
      </div>
    </div>
  );
};
export default Captioned;
