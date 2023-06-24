import { reviewInfo } from "../../assets/reviewInfo";
import styles from "./ReviewInfo.module.css";

export default function ReviewInfo() {
  return (
    <section className="container">
      <div>
        <h2 className="text-center my-4 fw-bold">See what others are saying</h2>
        <div className="d-flex justify-content-between gap-5">
          {reviewInfo.map((info) => (
            <div key={info.id} className={styles.review_info}>
              <img src={info.star} alt="" />
              <p className="mt-4 fst-italic">{info.desc}</p>
              <h4>{info.personName}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="fw-bold mt-4">
          {Math.round(Math.random() * 100000000)}
        </h2>
        <h2 className="mt-4">Delivered form submission. Reday to get yours!</h2>
        <button type="button" className="btn btn-primary px-4 py-2 mt-4 mb-4">
          Get Started - It&apos;s Free
        </button>
      </div>
    </section>
  );
}
