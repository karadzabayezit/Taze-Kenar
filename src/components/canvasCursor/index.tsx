import useCanvasCursor from "./CanvasCursor";
import "./styles.scss";

const CanvasCursor = () => {
  const width = window.innerWidth;
  if (width < 500) return;
  useCanvasCursor();
  return <canvas className="canvas" id="canvas" />;
};
export default CanvasCursor;
