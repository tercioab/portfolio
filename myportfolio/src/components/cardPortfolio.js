import { Link } from "react-router-dom";

export default function CardPortfolio({text, src, altText}) {
    return (
        <Link>
            <div className="cardP">
                <div className="cardImg">
                    <img src={src} alt={altText} />
                    <div className="cardText">
                    {text}
                </div>
                </div>
                
            </div>
        </Link>
    )
}