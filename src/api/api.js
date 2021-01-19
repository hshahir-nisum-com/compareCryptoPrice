import axios from "axios";

export default async function getData() {
  let data;
  await axios
    .get("http://localhost:3000/")
    .then((resp) => {
      data = resp.data.data;
      console.log("first log :", resp.data.data);
    })
    .catch((err) => {
      console.error(err);
    });
  return data;
}
