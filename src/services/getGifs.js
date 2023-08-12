// const api_key = "EPmF7Yq9E04FgTbeXOHPmpU8d8wXyJla";
// const trendingApiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`

export default function getGif(URL) {
  // const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=20&offset=0&rating=g&lang=en&`

  return fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;

      const gifs = data.map((gif) => {
        const { id, title, images } = gif;
        const { url } = images.fixed_width_downsampled;
        return { id, title, url };
      });

      return gifs;
    });
}
