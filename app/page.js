import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1
          style={{
            fontSize: "2rem",
          }}
        >
          SueGPT
        </h1>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <p>Document Generation </p>
          <p> Legal Advice</p>
          <p> Who we are</p>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }} className={styles.center}>
        #BeTheLegalForce <br /> #BeTheChange
      </h1>
      <button className={styles.button}>
        <div>Newsfeed</div>
      </button>
      <h1
        style={{
          alignSelf: "self-start",
          fontSize: "1.5rem",
        }}
      >
        Our Mission
      </h1>
      <p
        style={{
          textAlign: "justify",
        }}
      >
        SueGPT is not only a SIH project but a forecoming revolution in the
        legal sector of India. We always hear about the daily legal injustices
        and how hard it is to afford a lawyer or advocate for middle class and
        rural people….and how to cope up with the nuances of a legal document
        and to ensure its legibility? Consider it's done.
        <br />
        We at SueGPT believe that it is high time to integrate the magic of NLP
        efficiently in our legal system. We cater services like legal advice and
        legal notice and agreement pdf generation and legibility checking using
        state-of-the-art ChatGPT 3.5 Turbo LLM to general public, legal
        professionals and corporate firms. With all your support, we can take
        SueGPT to greater heights and fill the void which our legal system is
        going through. <strong>#BeTheLegalForce #BeTheChange</strong>
      </p>
    </main>
  );
}
