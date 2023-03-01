import Link from "next/link";
import { ChangeEvent, FormEvent } from "react";
import styles from "./Form.module.css";

export type LoginFormProps = {
	username: string;
	password: string;
	usernameOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
	passwordOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
	loginOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function LoginForm({
	username,
	password,
	usernameOnChange,
	passwordOnChange,
	loginOnSubmit,
}: LoginFormProps) {
	return (
		<main className={styles.Main}>
			<header className={styles.Header}>
				<Link href="/">Home</Link>
			</header>
			<div className={styles.Wrapper}>
				<h1 className={styles.FormTitle}>Sign In</h1>
				<form className={styles.Form} onSubmit={loginOnSubmit}>
					<div>
						<div className={styles.Label_div}>
							<label>Username</label>
						</div>
						<input type="text" value={username} onChange={usernameOnChange} />
					</div>
					<div>
						<div className={styles.Label_div}>
							<label>Password</label>
						</div>
						<input
							type="password"
							value={password}
							onChange={passwordOnChange}
						/>
					</div>
					<button type="submit">Sign In</button>
				</form>
				<Link className={styles.Link} href="join">
					Create Account
				</Link>
			</div>
		</main>
	);
}
