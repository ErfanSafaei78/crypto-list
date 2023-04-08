//Hooks
import React ,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//Components
import { Coin } from "./components/Coin";
//style
import "./Landing.style.css";
//Loading
import ReactLoading from 'react-loading'

export function Landing() {

    const [coins, setCoins] = useState([])
    const [inputValue, setInputValue] = useState("")

    
    const dispatch = useDispatch();
    const storeState = useSelector(state => state);
    
    
    useEffect(() => {
        const FetchAPI = () => {
             dispatch({
                type: "LOAD_DATA"
            });
        }
        FetchAPI();
    }, [])
    
    useEffect(()=>{
        setCoins(storeState.coinList.data)
    },[storeState.coinList.data])
    
    function inputHandller(e) {
        const value = e.target.value;
        setInputValue(state => state = value);
    }
    const searchCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(inputValue.toLowerCase());
    })
    return (
        <>
            {searchCoins.length ? <>
                < input type="text" className="input" placeholder="Search" onChange={inputHandller} ></input >
                <div className="coinContainer">
                    {searchCoins.map(coin => {
                        return (
                            <Coin key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.market_cap_change_percentage_24h}
                            />
                        )
                    })}
                </div>
                        
            </> : <div className="loading">
                    <ReactLoading type="spinningBubbles" color="black"/>
                    <span className="loadingSpan">Loading... Please Wait.</span>
                </div>}
        </>
    )
}

