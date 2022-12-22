// import axios from "axios";
// https://qonaq6e0e7.execute-api.eu-central-1.amazonaws.com/post/search
// {"term":"basketball terms", start_date:"2022-12-14T20:05:00Z" date (ISO 8601)}

const url =
  "https://qonaq6e0e7.execute-api.eu-central-1.amazonaws.com/post/search";

export const getTweets = async (data, token) => {
  console.log(url);
  console.log(data);
  console.log(token);
  let response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  let result = await response.json();
  console.log(result);
  // axios
  //   .post(url, data, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then(response => response)
  //   .catch(error => console.error(error.message));
};