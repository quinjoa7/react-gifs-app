export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=deOwAoERmiLtY69DLutp1XJvE2hRdL14&q=${category}&limit=4`;
  const res = await fetch(url);
  //desestructuramos la data (array) de la respuesta
  const { data } = await res.json();
  //nos quedamos solo con id,titulo,url de la data
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
