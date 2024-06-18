const getManga = async () => {
  const urlManga = "https://api.jikan.moe/v4/manga";
  const getUrl = await fetch(urlManga);
  const { data } = await getUrl.json();
  //   console.log(data);
  data.forEach((manga) => {
    const divMain = document.createElement("div");
    divMain.innerHTML = `
        <h4>${manga.title}</h4>
        <img src=${manga.images.jpg.large_image_url} alt="Image Manga">
        <p> Ststus Manga :${manga.status}</p>`;
    mainManga.appendChild(divMain);
  });
};

getManga();
