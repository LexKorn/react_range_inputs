import React, {useState, useEffect} from 'react';

import './rangeOneValue.sass';

const RangeOneValue = ({minValue, maxValue, step, init}) => {
    // const minValue = 10;
    // const maxValue = 60;
    const [maxPrice, setMaxPrice] = useState(init);
    const [maxRange, setMaxRange] = useState(init);
    const [right, setRight] = useState(init);
    
    const handlerMaxPrice = () => {
        setMaxRange(maxPrice);
        setRight(100 - ((maxPrice - minValue) * 100 )/ (maxValue - minValue));
    };

    const handlerMaxRange = () => {
        setMaxPrice(maxRange);
        setRight(100 - ((maxRange - minValue) * 100 )/ (maxValue - minValue));
    };

    useEffect(() => {
        if (maxPrice > maxValue) {
        }
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
                    <input 
                        type="number" 
                        className="input-max" 
                        value={maxPrice} 
                        onChange={e => {
                            (e.target.value > minValue) ? 
                                (e.target.value > maxValue) ? setMaxPrice(maxValue) : setMaxPrice(e.target.value)
                            : setMaxPrice(minValue)
                        }} 
                    />
                </div>
            </div>
            <div className="slider">
                <div className="progress" style={{left: `0%`, right: `${right}%`}}></div>
            </div>
            <div className="range-input">
                <input 
                    type="range" 
                    className="range-max" 
                    min={minValue} 
                    max={maxValue} 
                    value={maxRange} 
                    step={step} 
                    onChange={e => setMaxRange(e.target.value)} 
                />
            </div>
        </div>
    );
};

export default RangeOneValue;