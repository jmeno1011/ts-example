import Link from "next/link";
import styles from "./Form.module.css";

export default function JoinForm() {
  return (
    <main className={styles.Main}>
      <header className={styles.Header}>
        <Link href="/">Home</Link>
      </header>
      <div className={styles.Wrapper}>
        <h1 className={styles.FormTitle}>Sign Up</h1>
        <form className={styles.Form}>
          <div>
            <div className={styles.Label_div}>
              <label>Username *</label>
            </div>
            <input type="text" />
          </div>
          <div>
            <div className={styles.Label_div}>
              <label>Email *</label>
            </div>
            <input type="email" />
          </div>
          <div>
            <div className={styles.Label_div}>
              <label>Password *</label>
            </div>
            <input type="password" />
          </div>
          <button type="submit">Create an Account</button>
        </form>
      </div>
      <p className={styles.Alert}>Already have an account?</p>
      <Link className={styles.Link} href="login">
        Sign In
      </Link>
    </main>
  );
}
