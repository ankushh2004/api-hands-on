import axios from "axios";
import { useEffect } from "react";

const Axios = () => {
  // ------------------- GET ------------------------
  //   useEffect(() => {
  //     const fetchApi = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://api.thecatapi.com/v1/images/search"
  //         );
  //         console.log(response.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchApi();
  //   }, []);

  // ------------------- POST ------------------------
  useEffect(() => {
    const postData = async () => {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          firstName: "Fred",
          lastName: "Flintstone",
        }
      );
      console.log(response);
    };
    postData();
  }, []);

  return <div>Axios implementation</div>;
};

export default Axios;
