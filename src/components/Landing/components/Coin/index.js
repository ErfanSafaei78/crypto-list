import styles from "./Coin.style.css"

export function Coin({name , image , symbol , price ,marketCap , priceChange}){
    return (
        <div className="container">
            <img src={image} alt={name} className="image" />
            <span className="name" >{name}</span>
            <span className="symbol" >{symbol}</span>
            <span className="currentPrice" >$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? "greenPriceChange" : "redPriceChange"} >
                
                {priceChange} %</span>
            <span className="marketCap" >$ {marketCap.toLocaleString()}</span>

        </div>
    )
}