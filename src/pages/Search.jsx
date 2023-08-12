import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getGif from "../services/getGifs"
import Gifs from "../components/Gifs"
import LinksBtn from "../components/LinksBtn"

const api_key = 'EPmF7Yq9E04FgTbeXOHPmpU8d8wXyJla'


export default function SearchPage() {
    const { keyword } = useParams()
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=20&offset=0&rating=g&lang=en&`

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGif(apiURL).then(gif => {
            setGifs(gif)
            console.log(gif.length)
        })
    }, [keyword])

    if (gifs.length <= 1) return (
        <main style={{textAlign:"center"}}>
            <h2>No hay resultados de la búsqueda</h2>
            <LinksBtn to='/'>Volver</LinksBtn>
        </main>
    )

    return (
        <main>
            <LinksBtn to='/'>Inicio</LinksBtn>
            <h1>Resultados de {keyword} </h1>

            <section className="grid-sec">
                {
                    gifs.map(gif => <Gifs key={gif.id} img={gif.url} title={gif.title} />)
                }
            </section>
        </main>
    )
}