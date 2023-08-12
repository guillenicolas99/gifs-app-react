import { useEffect, useState } from "react";
import getGif from "../services/getGifs";
import Gifs from "../components/Gifs";
import LinksBtn from "../components/LinksBtn";

const apiTrending = 'https://api.giphy.com/v1/gifs/trending?api_key=EPmF7Yq9E04FgTbeXOHPmpU8d8wXyJla&limit=25&offset=0&rating=g&bundle=messaging_non_clips'

export default function HomePage() {

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGif(apiTrending)
            .then(gif => setGifs(gif))
    })
    return (
        <div className='side-gif-module'>
            <div className="btn-container">
                <LinksBtn to='/search/argentina'>Argentina</LinksBtn>
                <LinksBtn to='/search/colombia'>Colombia</LinksBtn>
                <LinksBtn to='/search/chile'>Chile</LinksBtn>
            </div>

            <h1>Giphy API</h1>
            <p>Trending Gifs</p>


            <section className="grid-sec">
                {
                    gifs.map(gif => <Gifs key={gif.id} img={gif.url} title={gif.title} />)
                }
            </section>
        </div>
    )
}