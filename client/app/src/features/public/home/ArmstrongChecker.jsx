import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Tooltip from '../../../components/Tooltip/Tooltip';
import './Home.css'

const ArmstrongChecker = () => {
    const [minNum, setMinNum] = useState('');
    const [maxNum, setMaxNum] = useState('');
    const [particularNum, setParticularNum] = useState('');
    const [rangeResult, setRangeResult] = useState(null);
    const [checkResult, setCheckResult] = useState(null);
    const [error, setError] = useState(null);
    const resultRef = useRef(null);
    const errorRef = useRef(null);
    const apiAppUrlPrefix = import.meta.env.VITE_API_APP_URL_PREFIX;

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 10000); // 10 seconds
            return () => clearTimeout(timer);
        }
    }, [error]);

    useEffect(() => {
        if (error && errorRef.current) {
            errorRef.current.scrollIntoView({ behavior: 'smooth' });
            // Adjust offset (e.g., scroll up by 80px)
            setTimeout(() => {
                window.scrollBy({ top: -150, left: 0, behavior: 'smooth' });
            }, 400); // Delay to allow scrollIntoView to finish
        }
    }, [error]);

    useEffect(() => {
        if ((rangeResult || checkResult) && resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth' });
            // Adjust offset (e.g., scroll up by 80px)
            setTimeout(() => {
                window.scrollBy({ top: -150, left: 0, behavior: 'smooth' });
            }, 400); // Delay to allow scrollIntoView to finish
        }
    }, [rangeResult, checkResult]);

    const handleRangeSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiAppUrlPrefix}/check-range`, {
                minNum: parseInt(minNum),
                maxNum: parseInt(maxNum)
            });
            if (response.status === 200) {
                setRangeResult(response.data.armstrong_numbers);
                // setMaxNum('');
                // setMinNum('');
                setError(null);
            } else {
                setError('Unexpected response status');
                setRangeResult(null);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred');
            setRangeResult(null);
        }
    };


    const handleCheckSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiAppUrlPrefix}/check-number`, {
                number: parseInt(particularNum)
            });
            setCheckResult(response.data.result);
            setParticularNum('');
            setError(null);
        } catch (err) {
            setError(err.response.data.error);
            setCheckResult(null);
        }
    };

    return (
        <section className="armstrong__section section__padding">
            <div className="container">
                <div className="armstrong__container">

                    <form id="armstrong-form" className="armstrong__form form__row" method="POST" onSubmit={handleRangeSubmit}>
                        <div className="armstrong__content">
                            <div className="armstrong__content-item">
                                <div className="form__group">
                                    <label htmlFor="minNum">Minimum Number:</label>
                                    <input type="number" name="minNum" className="form__input" id='minNum' placeholder='Enter Min Value' value={minNum} onChange={(e) => setMinNum(e.target.value)} />
                                    <div className="clear__input-container">
                                        <Tooltip text="Clear Input">
                                            <button className="btn btn__small btn__danger btn__clear" type="button" onClick={() => setMinNum('')}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>

                            <div className="armstrong__content-item">
                                <div className="form__group">
                                    <label htmlFor="maxNum">Maximum Number:</label>
                                    <input type="number" name="maxNum" className="form__input" id='maxNum' placeholder='Enter Max Value' value={maxNum} onChange={(e) => setMaxNum(e.target.value)} />
                                    <div className="clear__input-container">
                                        <Tooltip text="Clear Input">
                                            <button className="btn btn__small btn__danger btn__clear" type="button" onClick={() => setMaxNum('')}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>

                            <div className="armstrong__content-item">
                                <div className="btn__container">
                                    <div className="clear__allInputs-container">
                                        <button className="btn btn__danger btn__clear" type="reset" onClick={() => { setMinNum(''); setMaxNum(''); }}>
                                            Clear All <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                    <div className="find_armstg_num__container">
                                        <Tooltip text="Find Armstrong Numbers">
                                            <button type="submit" className='btn btn__clear' id='find_armstrong_nums'>
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <form className="armstrong__form form__row" method="POST" onSubmit={handleCheckSubmit}>
                        <div className="check__num-content">
                            <div className="form__group">
                                <label htmlFor="check_particular_num">Enter a Number:</label>
                                <input type="number" name="check_particular_num" className="form__input" id='check_particular_num' placeholder='Enter a Number' value={particularNum} onChange={(e) => setParticularNum(e.target.value)} required />
                                <div className="btn__container">
                                    <div className="clear__allInputs-container">
                                        <Tooltip text="Clear Input">
                                            <button className="btn btn__small btn__danger btn__clear" type="button" onClick={() => setParticularNum('')}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                    <div className="find_armstg_num__container">
                                        <Tooltip text="Check Number">
                                            <button type="submit" className='btn btn__small' id='find_armstrong_num'>
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    {error && (
                        <div ref={errorRef} id="error" className="alert alert-danger">
                            {error}
                        </div>
                    )}

                </div>
                {(rangeResult || checkResult) && (
                    <div ref={resultRef} className='results__container'>
                        {rangeResult && (
                            <div className="result">
                                <button
                                    className="btn btn__close"
                                    style={{ float: 'right', marginLeft: '10px' }}
                                    onClick={() => setRangeResult(null)}
                                    aria-label="Close"
                                    type="button"
                                >
                                    <i className="fa fa-times"></i>
                                </button>
                                <h3>Armstrong Numbers in Range:</h3>
                                <ul>
                                    {rangeResult.map((num, index) => (
                                        <li key={index}>{num}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {checkResult && (
                            <div className="result">
                                <button
                                    className="btn btn__close"
                                    style={{ float: 'right', marginLeft: '10px' }}
                                    onClick={() => setCheckResult(null)}
                                    aria-label="Close"
                                    type="button"
                                >
                                    <i className="fa fa-times"></i>
                                </button>
                                <h3>Check Result:</h3>
                                <p><strong>{checkResult}</strong></p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ArmstrongChecker;
