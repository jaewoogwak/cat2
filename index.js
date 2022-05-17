const img = document.querySelector(".image");
const getUsers = () => {
  axios
    .get("https://api.thecatapi.com/v1/images/search?size=full")
    .then(async (response) => {
      const users = response.data;
      console.log(`GET users`, users[0].url);
      img.src = users[0].url;
    })
    .catch((error) => console.error(error));
};

getUsers();
