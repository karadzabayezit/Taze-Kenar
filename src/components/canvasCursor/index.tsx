import useCanvasCursor from "./CanvasCursor";
import "./styles.scss";

const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas className="canvas" id="canvas" />;
};
export default CanvasCursor;
