import Img1 from "../../assets/image2.jpg";
import { BiCheck } from "react-icons/bi";
import "./style.css";
const Body1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* First section */}
          <div>
            <h2 className="text-success">01.</h2>
            <h3 className="text-muted">Free Online Form Builder</h3>
            <p>
              Create secure online forms and surveys using our no-code, drag &
              drop free form builder. 2000+{" "}
              <span className="text-primary">form templates</span> are available
              to get you started. Build beautiful forms, collect data securely,
              and improve your productivity -- all with just a few clicks.
            </p>
            <p>123FormBuilder handles a wide variety of uses cases, such as:</p>
            <p>
              <span className="icon-text">
                <BiCheck className="green-icon" />
              </span>
              <span className="text-primary">Event registration forms</span> for
              a better planning of events
            </p>
            <p>
              <span className="icon-text">
                <BiCheck className="green-icon" />
              </span>
              <span className="text-primary">Order forms</span> for collecting
              payments{" "}
            </p>
            <p>
              <span className="icon-text">
                <BiCheck className="green-icon" />
              </span>
              <span className="text-primary">Application forms</span> for
              enrolling new members
            </p>
            <p>
              <span className="icon-text">
                <BiCheck className="green-icon" />
              </span>
              <span className="text-primary">Survey forms</span> for collecting
              client feedback.
            </p>
            <button type="button" className="btn btn-success btn-bg btn-block">
              TAKE PRODUCT TOUR
            </button>
          </div>
        </div>
        <div className="col">
          {/* Second section */}
          <div>
            <img src={Img1} alt="image1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body1;
