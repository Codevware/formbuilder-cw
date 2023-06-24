import Img2 from "../../assets/image1.png";
import { BiCheck } from "react-icons/bi";
import "./style.css";
const Body2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* First section */}

          <div>
            <img src={Img2} alt="image1" />
          </div>
        </div>
        <div className="col">
          {/* Second section */}
          <div>
            <h2 className="text-warning">02.</h2>
            <h3 className="text-muted">Integration with your digital tools</h3>
            <p>
              Automate workflows within your organization, instead of manually
              exporting and importing data.
            </p>
            <p>
              <span className="icon-text">
                <BiCheck className="green-icon" />
              </span>
              Push and pull data with{" "}
              <span className="text-primary">Salesforce forms</span>,
            </p>
            <p>
              <span className="icon-text">
                <BiCheck className="green-icon" />
              </span>
              Get paid through{" "}
              <span className="text-primary">PayPal order forms</span>,
            </p>
            <p>
              <span className="icon-text">
                <BiCheck className="green-icon" />
              </span>
              Add new contacts to your Mailchimp mailing list,
            </p>
            <p>
              <span className="icon-text">
                <BiCheck className="green-icon" />
              </span>
              Send data to Google spreadsheets or Google Calendar through the{" "}
              <span className="text-primary">Google Workspace integration</span>
              ,
            </p>
            <p>
              <span className="icon-text">
                <BiCheck className="green-icon" />
              </span>
              …and integrate your forms with 4,000 other tools, like Wix,
              Shopify, Dropbox, Marketo or HubSpot, either through direct
              integration or through Zapier.
            </p>

            <button type="button" className="btn btn-warning btn-bg btn-block">
              BROWSE INTEGRATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
