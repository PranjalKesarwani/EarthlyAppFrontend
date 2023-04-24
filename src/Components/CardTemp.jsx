import React from "react";
import { useSelector } from "react-redux";




const Card = ({ addToCart }) => {

    const cardData = useSelector((state) => {
        return state.products
    })
    let realCards = cardData.products;

    return (
        realCards.map((elem) => {
            return (
                <React.StrictMode>
                    <div key={elem._id} className="card" >
                        <img src={elem.imgUrl} alt="" />
                        <div className="cardInfo">
                            <h1 >{elem.title}</h1>
                            <p>₹ {elem.price}</p>
                            <button type="submit" onClick={() => { addToCart(elem) }} >Add to Cart</button>
                        </div>
                    </div>

                
                </React.StrictMode>

            )

        })
    )
}

export default Card;

