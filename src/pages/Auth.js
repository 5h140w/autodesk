import axios from "axios";

async function getAccess() {
  return axios
    .get("http://localhost:8000/token")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
}

const client = { getAccess };

export default client;
