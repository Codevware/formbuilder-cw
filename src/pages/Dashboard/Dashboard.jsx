import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={`${styles.dashboard} d-flex`}>
      <div
        className={`${styles.dashboard_lt} d-flex flex-column justify-content-between`}
      >
        <div className="mb-4">
          <div className="p-2">
            <Link to="dashboard">Dashboard</Link>
          </div>
          <div className="p-2">
            <Link to="">My Forms</Link>
          </div>
          <div className="p-2">
            <Link to="">Users</Link>
          </div>
        </div>

        <div>
          <div style={{ background: "#f0f0f0" }} className="p-2 m-2">
            <h4>Your plan: Free</h4>

            <div>
              <p className="mb-0">Forms</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar w-75"></div>
              </div>
            </div>

            <div>
              <p className="mb-0">Submissions/mo</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar w-75"></div>
              </div>
            </div>

            <button type="button" className="btn btn-warning mt-2">
              Upgrade
            </button>
          </div>

          <div className="d-flex align-items-center p-2">
            <i className="fa-solid fa-circle-info"></i>
            <p className="mb-0">Help</p>
          </div>
          <div className="d-flex align-items-center p-2">
            <i className="fa-solid fa-user"></i>
            <p className="mb-0">user@email.com</p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
