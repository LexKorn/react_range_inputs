import React, {useState, useEffect} from 'react';

import './rangeOneValue.sass';

const RangeOneValue = () => {
    const minValue = 1;
    const maxValue = 60;
    const [maxPrice, setMaxPrice] = useState(13);
    const [maxRange, setMaxRange] = useState(13);
    const [right, setRight] = useState(13);
    
    const handlerMaxPrice = () => {
        setMaxRange(maxPrice);
        setRight(100 - (maxPrice / maxValue) * 100);
    };

    const handlerMaxRange = () => {
        setMaxPrice(maxRange);
        setRight(100 - (maxRange / maxValue) * 100);
    };

    useEffect(() => {
        handlerMaxPrice();
    }, [maxPrice]);

    useEffect(() => {
        handlerMaxRange();
    }, [maxRange])
    

    return (
        <div className="wrapper">
            <header>
                <h2>Range One Value</h2>
                <p>Use slider or enter value</p>
            </header>
            <div className="price-input">
                <div className="field">
                    <span>Value</span>
                    <input type="number" className="input-max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                </div>
            </div>
            <div className="slider">
                <div className="progress" style={{left: `0%`, right: `${right}%`}}></div>
            </div>
            <div className="range-input">
                <input type="range" className="range-max" min={minValue} max={maxValue} value={maxRange} step="1" onChange={e => setMaxRange(e.target.value)} />
            </div>
        </div>
    );
};

export default RangeOneValue;