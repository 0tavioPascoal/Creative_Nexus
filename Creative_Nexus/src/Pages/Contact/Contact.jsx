import styles from "./styles.module.css";

export default function Contact() {
  return (
    <main>
      <div className={styles.cardContact}>
        <div className={styles.contactContainer}>
          <div className={styles.contactHeader}>
            <form
              className={styles.contactForm}
              action="https://formsubmit.co/zoiohenry5@gmail.com"
              method="POST"
              target="_blank"
            >
              <div className={styles.contactDescription}>
                <div className={styles.contactTitle}>
                  <h2>Contact Us</h2>
                </div>
                <div className={styles.contactField}>
                  <p>Your Name</p>
                  <input
                    type="text"
                    placeholder=""
                    className={styles.contactInput}
                    name="name"
                  />
                </div>
                <div className={styles.contactField}>
                  <p>Your Email</p>
                  <input
                    type="email"
                    placeholder=""
                    className={styles.contactInput}
                    name="email"
                  />
                </div>
                <div className={styles.contactField}>
                  <p>Message</p>
                  <textarea
                    type="text"
                    name="message"
                    placeholder=""
                    className={styles.contactTextarea}
                  ></textarea>
                </div>
              </div>
              <button className={styles.btnContact} type="submit">
                Contact
              </button>
            </form>
            <div className={styles.contactInfo}>
              <div className={styles.contactDescription}>
                <div className={styles.contactTitle}>
                  <h2>Creative Nexus</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className={styles.contactTitle}>
                  <h2>Contact Info</h2>
                  <p>
                    <span>Email:</span>
                    creativenexuscommunity@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
