import { useNavigate } from "react-router-dom";
import successImg from "../assets/success-icon .png";
import "../styles/Success.css";

export const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="success-div">
      <img className="success-img" src={successImg} alt="" />
      <h1 className="success-h1">Success!</h1>
      <h2 className="success-h2">THANK YOU! Your Order Has Been Processed</h2>
      <button onClick={() => navigate("/")} className="success-btn">
        CONTINUE
      </button>
    </div>
  );
};
