import Img3 from "../../assets/image3.png";

const Body3 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* First section */}
          <div>
            <h2 className="text-primary">03.</h2>
            <h3 className="text-muted">Secure Online Forms</h3>
            <p>
              Beautiful forms can be safe, too! Build GDPR-ready forms and
              <span className="text-primary"> HIPAA-compliant forms</span> with
              our form maker. Create{" "}
              <span className="text-primary"> secure online forms</span> with
              multiple layers of security and various levels of compliance, all
              to make sure you collect data in a highly safe and protected
              environment.
            </p>
            <p>
              Our data residency options allow you to choose where your forms
              and collected data are stored: in the US or in the EU. Building
              secure and compliant forms that follow your organization’s
              security protocols has never been easier!
            </p>

            <button type="button" className="btn btn-primary btn-bg btn-block">
              CREATE YOUR FORM
            </button>
          </div>
        </div>
        <div className="col">
          {/* Second section */}
          <div>
            <img src={Img3} alt="image1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body3;
