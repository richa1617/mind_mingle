import axios from "axios";

const getHello = async () => {
  const response = await axios.get("http://127.0.0.1:3001/hello");
  console.log(response.data);
};

getHello();
