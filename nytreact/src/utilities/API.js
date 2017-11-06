import axios from "axios";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
//const authKey = "2f1413f340504d3bb041d7d6eb0b967e" // &begin_date=20120101&end_date=20121231
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=dogs";

export default {
  getArticles: (params) => {

    return axios.get(queryURLBase);
  }
};
