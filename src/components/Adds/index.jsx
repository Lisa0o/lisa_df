import { Link } from "react-router-dom";
import {StickersDog as StDog} from "../../assets/images";

import "./index.css";


const Adds = ({
    name,
    img,
    text,
    tag
}) => {
    const imgStyle = { backgroundImage: `url(${StDog[img]})` }
    return <div className="adds">
        <div className="adds__text">
            <h3>{name}</h3>
            <p>{text}</p>
            <Link to={`/products/category/${tag}`}>Подробнее</Link>
        </div>
        <div className="adds__img" style={imgStyle} />
    </div>
}

export default Adds;