import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function login() {
  const router = useRouter();
  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userName = event.currentTarget.userName.value;
    const userPassword = event.currentTarget.userPassword.value;
    // console.log(userName);
    // console.log(userPassword);

    const response = await axios.post("http://localhost:3000/login", {
      username: userName,
      password: userPassword,
    });
    console.log(response.data.token); // we are getting the token)
    localStorage.setItem("token", response.data.token);
    router.push("/");
  }
  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)}>
        <label htmlFor="name">Username</label>
        <br></br>
        <input type="text" id="name" name="userName" />
        <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
        <input type="password" id="password" name="userPassword" />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default login;
