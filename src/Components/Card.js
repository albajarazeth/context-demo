import "./Card.css";
import { AiFillLock } from "react-icons/ai";
const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-heading">
            <AiFillLock />
            <h1>Register</h1>
            <form className="drop-down">
              <select name="lang" id="lang">
                <option>English</option>
                <option>Español</option>
                <option>French</option>
              </select>
            </form>
          </div>
          <form className="form">
            <div className="inputs">
              <input type="email" placeholder="Email*"></input>
              <input type="password" placeholder="Password*"></input>
            </div>
            <div className="remember-me">
              <button className="remember-btn"></button>
              <span>Remember me</span>
            </div>
            <button className="register">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
