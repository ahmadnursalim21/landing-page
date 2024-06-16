console.log("Hello World");
const mainAnime = document.getElementById("mainAnime");

const urlAnime = "https://api.jikan.moe/v4/anime";
const getAnime = async () => {
  const getUrl = await fetch(urlAnime);
  const { data } = await getUrl.json();
  console.log(data);
  data.forEach((anime, i) => {
    const divMain = document.createElement("div");
    divMain.innerHTML = `
        <h4>${anime.title}</h4>
        <img src=${anime.images.jpg.large_image_url} alt="Image Anime">
        <p> Ststus Anime :${anime.status}</p>`;
    mainAnime.appendChild(divMain);
  });
};

getAnime();
