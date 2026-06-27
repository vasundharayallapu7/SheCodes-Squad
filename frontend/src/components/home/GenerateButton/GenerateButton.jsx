import { FiZap } from "react-icons/fi";
import Button from "../../common/Button/Button.jsx";
import "./GenerateButton.css";

function GenerateButton({ loading, ...props }) {
  return (
    <Button
      type="submit"
      className="generate-button"
      disabled={loading}
      {...props}
    >
      <FiZap />
      {loading ? "Generating..." : "Generate Study Material"}
    </Button>
  );
}

export default GenerateButton;