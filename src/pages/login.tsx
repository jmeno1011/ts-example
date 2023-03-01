import LoginForm, { LoginFormProps } from '@/components/auth/LoginForm';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function Login() {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const usernameOnChange: LoginFormProps["usernameOnChange"] = (e) => {
		setUsername(e.target.value);
	};
	const passwordOnChange: LoginFormProps["passwordOnChange"] = (e) => {
		setPassword(e.target.value);
	};
	const loginOnSubmit: LoginFormProps["loginOnSubmit"] = (e) => {
		e.preventDefault();
		localStorage.setItem("user", JSON.stringify({ name: username }));
		console.log("login success!");
		router.push("/");
	};
	return (
		<LoginForm
			username={username}
			password={password}
			usernameOnChange={usernameOnChange}
			passwordOnChange={passwordOnChange}
			loginOnSubmit={loginOnSubmit}
		/>
	)
}
