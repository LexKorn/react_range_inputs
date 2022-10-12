import React, {useState, useEffect} from 'react';

import './range.sass';

const Range = () => {
    const [minPrice, setMinPrice] = useState(2500);
    const [maxPrice, setMaxPrice] = useState(7500);
    const [minRange, setMinRange] = useState(2500);
    const [maxRange, setMaxRange] = useState(7500);
    const [left, setLeft] = useState(2500);
    const [right, setRight] = useState(7500);
    const priceGap = 500;

    const handlerMinPrice = () => {
        if ((maxPrice - minPrice >= priceGap) && maxPrice <= 10000) {
            setMinRange(minPrice);            
            setLeft((minPrice / 10000) * 100);
        }
    };

    const handlerMaxPrice = () => {
        if ((maxPrice - minPrice >= priceGap) && maxPrice <= 10000) {
            setMaxRange(maxPrice);
            setRight(100 - (maxPrice / 10000) * 100);
        }
    };

    const handlerMinRange = () => {
        if (maxRange - minRange < priceGap) {
            setMinRange(maxRange - priceGap);
        } else {
            setMinPrice(minRange);
            setLeft((minRange / 10000) * 100);
        }
    };

    const handlerMaxRange = () => {
        if (maxRange - minRange < priceGap) {
            setMaxRange(minRange + priceGap);
        } else {
            setMaxPrice(maxRange);
            setRight(100 - (maxRange / 10000) * 100);
        }
    };

    useEffect(() => {
        handlerMinPrice();
        handlerMaxPrice();
    }, [minPrice, maxPrice]);

    useEffect(() => {
        handlerMinRange();
        handlerMaxRange();
    }, [minRange, maxRange])
    

    return (
        <div className="wrapper">
            <header>
                <h2>Range Price</h2>
                <p>Use slider or enter min and max price</p>
            </header>
            <div className="price-input">
                <div className="field">
                    <span>Min</span>
                    <input type="number" className="input-min" value={minPrice} onChange={e => setMinPrice(e.target.value)} />  
                </div>
                <div className="separator">-</div>
                <div className="field">
                    <span>Max</span>
                    <input type="number" className="input-max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                </div>
            </div>
            <div className="slider">
                <div className="progress" style={{left: `${left}%`, right: `${right}%`}}></div>
            </div>
            <div className="range-input">
                <input type="range" className="range-min" min="0" max="10000" value={minRange} step="100" onChange={e => setMinRange(e.target.value)} />
                <input type="range" className="range-max" min="0" max="10000" value={maxRange} step="100" onChange={e => setMaxRange(e.target.value)} />
            </div>
        </div>
    );
};

export default Range;