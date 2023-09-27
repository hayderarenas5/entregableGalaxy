import "./GalaxyCard.css"
import { getRandomElemet } from '../utils/random.js'
import galaxys from "../db/galaxy.json"
const GalaxyCard = ({galaxy, setGalaxy, setCurrentBg, backgraunds}) => {

    const handleChangeGalaxy=()=>{
        setGalaxy(getRandomElemet(galaxys))
        setCurrentBg(getRandomElemet(backgraunds))
        
    }

  return (
    <section className="galaxyCard">
        <article className="galaxyCard__container">
            <h1 className="galaxyCard__title">InfoGalax</h1>
            <p className="galaxyCard__phrafe">{galaxy.phrase}</p>

            <button className="galaxyCard__btn" onClick={handleChangeGalaxy}>Change</button>
        </article>
    
        <footer className="galaxyCard__footer">
            Author: {galaxy.author}
        </footer>
    </section>
  )
}
export default GalaxyCard