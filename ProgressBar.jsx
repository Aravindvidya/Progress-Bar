import React from "react";
import './ProgressBar.css';
import {useState , useEffect} from 'react';


function ProgressBar({ initialValue = 0 }) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        // Set an interval to update the value
        const intervalId = setInterval(() => {
            setValue((val) => {
                if (val < 100) {
                    return val + 1;
                } else {
                    clearInterval(intervalId);
                    return val;
                }
            });
        }, 100);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // Ensure value is within 0-100 bounds
        setValue((prevValue) => Math.min(100, Math.max(0, prevValue)));
    }, [initialValue]);

    return (
        <div className="container">
            <h2 className="title">Progress-Bar</h2>
            <div className="progress-bar" >
               <div style={{width: `${value}%`}} className="increment">
                 <span style={{color: value > 55?'white':'black'}}>{value.toFixed()}%</span>
                 </div>
               
            </div>
        </div>
    );
}

export default ProgressBar;
