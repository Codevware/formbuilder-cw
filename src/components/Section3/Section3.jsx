import { section3data } from "../../assets/section3data";
import styles from "./Section3.module.css";

export default function Section3() {
  return (
    <section>
      <div className="text-center">
        <h2 className="fw-bold mb-4 fs-1">
          Discover our Form Maker Capabilities
        </h2>
        <p className="my-4">
          Increase productivity and accelerate growth by streamlining your
          external and internal processes. <br /> Get the right data in the
          right ways with the help of digital forms & surveys.
        </p>
      </div>
      <div
        className={`d-flex justify-content-between flex-wrap mx-auto ${styles.sec_3}`}
      >
        {section3data.map((data) => (
          <div key={data.id} className={`mt-4 ${styles.sec_3_info}`}>
            <img src={data.img} alt="" className={styles.sec_3_img} />
            <h4 className="fw-bold my-4">{data.title}</h4>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
      <div>
        <p className={`mt-4 mx-auto ${styles.sec_3}`}>
          All with an easy-to-use drag & drop interface, built by humans, for
          humans. We also provide stellar customer service, free of charge! Your
          team will love to use 123FormBuilder to generate leads, receive
          inquiries, process orders, manage registrations, gather feedback, and
          collect and manage any other type of data, through smart and powerful
          forms, as easy as 1-2-3.
        </p>
      </div>
    </section>
  );
}
