const rp = require("request-promise");
const exp = require("express")();

const requestOptions = {
  method: "GET",
  uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  qs: {
    start: "1",
    limit: "10",
    convert: "USD",
  },
  headers: {
    "X-CMC_PRO_API_KEY": "8bd10a31-d15e-49e5-8a07-9805e9b8a21e",
  },
  json: true,
  gzip: true,
};

exp.get("/", (req, res) => {
  rp(requestOptions)
    .then((response) => {
      console.log("API call response:", response);
      return res.send(response);
    })
    .catch((err) => {
      console.log("API call error:", err.message);
    });
});
exp.listen(3000, () => console.log("serve is running"));
