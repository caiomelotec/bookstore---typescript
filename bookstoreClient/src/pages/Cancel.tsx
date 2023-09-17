import { useNavigate } from "react-router-dom";
import failImg from "../assets/fail-icon.png";
import "../styles/Cancel.css";

export const Cancel = () => {
  const navigate = useNavigate();
  return (
    <div className="success-div">
      <img className="success-img" src={failImg} alt="" />
      <h1 className="success-h1">Error!</h1>
      <p className="p-fail">Oops!</p>
      <h2 className="success-h2">Something went wrong!</h2>
      <button onClick={() => navigate("/")} className="fail-btn">
        TRY AGAIN
      </button>
    </div>
  );
};
