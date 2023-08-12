import { useEffect, useState } from "react"
import getGif from "../services/getGifs"
import Gifs from "./Gifs"


export default function ListOfGifs({ keyword }) {

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGif({keyword}).then(gif => setGifs(gif))
    }, [keyword])

    return (
        gifs.map(gif => <Gifs key={gif.id} img={gif.url} title={gif.title} />)
    )
}