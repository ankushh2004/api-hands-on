// import { useEffect } from "react";

import Axios from "./Axios";

function App() {
  // ------------- Sending data in GET request ---------------
  // const params = new URLSearchParams();
  // params.append("name", "Ankush");
  // params.append("username", "as");
  // async function sendDataUsingGET() {
  //   const response = await fetch(`https://example.org/login?${params}`); // Query params
  // }

  // ------------- GET ---------------------
  // async function getData() {
  //   const url = "https://api.thecatapi.com/v1/images/search?limit=10";

  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) throw new Error(`Response Status: ${response.status}`);
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     if (error instanceof Error) console.log(error.message);
  //     else console.log("Unknown error type");
  //   }
  // }

  // ------------ POST ------------------------
  // const data = {
  //   title: "Sending Post data",
  //   body: "This is a data sent to the server",
  //   userId: 1,
  // };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       console.log("Response status:", response.status);
  //       if (!response.ok) throw new Error(`Response status:${response.status}`);
  //       return response.json();
  //     })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // }, []);

  // ------------- PUT -----------------------
  // const updatedData = {
  //   title: "Sending updates to Post data",
  //   body: "This is a updated data sent to the server",
  //   userId: 1,
  // };
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //     method: "PUT",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(updatedData),
  //   })
  //     .then((response) => {
  //       console.log(response.status);
  //       if (!response.ok)
  //         throw new Error(`Response status: ${response.status}`);
  //       return response.json();
  //     })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }, []);

  // --------------- PATCH -----------------------------
  // const partialDataUpdate = {
  //   title: "Sending partial update using PATCH",
  // };
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //     method: "PUT",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(partialDataUpdate),
  //   })
  //     .then((response) => {
  //       console.log(response.status);
  //       if (!response.ok)
  //         throw new Error(`Response status: ${response.status}`);
  //       return response.json();
  //     })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }, []);

  // ---------------- DELETE ---------------------------
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       console.log(response.status);
  //       return response.json();
  //     })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // }, [])
  // ;

  // ---------------- HEAD --------------------------
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //     method: "HEAD",
  //   })
  //     .then((response) => {
  //       console.log(response.status);

  //       console.log("Response headers:", response.headers);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <>
      <div>Hello Jeee</div>
      {/* <button onClick={getData}>Fetch</button> */}
      <Axios />
    </>
  );
}

export default App;
