import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1c54555838cc4763b5d7bf9ef7420af1",
  },
});
