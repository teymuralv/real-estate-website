import "./dreamHome.css";
import home from "../../Assets/icons/home.png";
import shield from "../../Assets/icons/shield.png";
import user from "../../Assets/icons/user.png";


import React, { useEffect, useState } from 'react';
function DreamHome() {
    const [counters, setCounters] = useState({
        counter1: 2.000,
        counter2: 3.917,
        counter3: 38.000,
        counter4: 1.000,
    });
    const [isVisible, setIsVisible] = useState(false);

    const targetValues = {
        counter1: 2917,
        counter2: 3918,
        counter3: 38928,
        counter4: 1291,
    };

    const duration = 1000;
    const updateInterval = 20;

    const handleScroll = () => {
        const element = document.getElementById('counter');
        const rect = element.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const intervals = {};

            for (const counterKey in counters) {
                const targetValue = targetValues[counterKey];
                const step = (targetValue / duration) * updateInterval;

                intervals[counterKey] = setInterval(() => {
                    setCounters((prevCounters) => ({
                        ...prevCounters,
                        [counterKey]: prevCounters[counterKey] + step,
                    }));
                }, updateInterval);
            }

            setTimeout(() => {
                for (const intervalKey in intervals) {
                    clearInterval(intervals[intervalKey]);
                    setCounters((prevCounters) => ({
                        ...prevCounters,
                        [intervalKey]: targetValues[intervalKey],
                    }));
                }
            }, duration);
        }
    }, [isVisible]);

    return (
        <div className="dreamHome">
            <div className="dreamUp1">
                <div className="dreamUp">
                    <h1>WE BRING DREAM HOMES TO REALITY</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit totam? Quod maiores.</p>
                </div>
            </div>
            <div className="dreamMid">
                <img className="building" src="https://img09.rl0.ru/afisha/-x-i/daily.afisha.ru/uploads/images/3/0e/30e2e4e166e00da20a193b050bcc16ac.png" alt="" />
                <div>
                    <div className="info">
                        <div className="dreamIcon">
                            <img src={home} alt="" />
                        </div>
                        <div className="dreamText">
                            <h3>QUALITY PROPERTIES</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="dreamIcon">
                            <img src={user} alt="" />
                        </div>
                        <div className="dreamText">
                            <h3>TOP RATED AGENTS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="dreamIcon">
                            <img src={shield} alt="" />
                        </div>
                        <div className="dreamText">
                            <h3>EASY AND SAFE</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div id="counter">
                {isVisible && (
                    <div className="counter1">
                      
                            <div >
                                <p className="counterNumber">{Math.round(counters.counter1)}</p>
                                <p className="counterText"># of Buy Properties</p>
                            </div>
                            <div>
                                <p className="counterNumber">{Math.round(counters.counter2)}</p>
                                <p className="counterText"># of Sell Properties</p>
                            </div>
                            <div>
                                <p className="counterNumber">{Math.round(counters.counter3)}</p>
                                <p className="counterText"># of All Properties</p>
                            </div>
                            <div>
                                <p className="counterNumber">{Math.round(counters.counter4)}</p>
                                <p className="counterText"># of Agents</p>
                            </div>
                   
                    </div>
                )}
            </div>

        </div>
    )
}
export default DreamHome