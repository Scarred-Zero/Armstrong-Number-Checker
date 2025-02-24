import React, { useState } from 'react';
import axios from 'axios';
import Tooltip from '../Tooltip/Tooltip';
import './Home.css'

const ArmstrongChecker = () => {
    const [minNum, setMinNum] = useState('');
    const [maxNum, setMaxNum] = useState('');
    const [particularNum, setParticularNum] = useState('');
    const [rangeResult, setRangeResult] = useState(null);
    const [checkResult, setCheckResult] = useState(null);
    const [error, setError] = useState(null);

    const handleRangeSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/check-range', {
                min_num: parseInt(minNum),
                max_num: parseInt(maxNum)
            });
            if (response.status === 200) {
                setRangeResult(response.data.armstrong_numbers);
                console.log(response.data.armstrong_numbers);
                setError(null);
            } else {
                setError('Unexpected response status');
                setRangeResult(null);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred');
            console.log(err.response?.data?.error   );
            setRangeResult(null);
        }
    };


    const handleCheckSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/check-number', {
                number: parseInt(particularNum)
            });
            setCheckResult(response.data.result);
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
                                    <label htmlFor="min_num">Minimum Number:</label>
                                    <input type="number" name="min_num" className="form__input" id='min_num' placeholder='Enter Min Value' value={minNum} onChange={(e) => setMinNum(e.target.value)} />
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
                                    <label htmlFor="max_num">Maximum Number:</label>
                                    <input type="number" name="max_num" className="form__input" id='max_num' placeholder='Enter Max Value' value={maxNum} onChange={(e) => setMaxNum(e.target.value)} />
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
                                            <button type="submit" className='btn' id='find_armstrong_nums'>
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
                                <input type="number" name="check_particular_num" className="form__input" id='check_particular_num' placeholder='Enter a Number' value={particularNum} onChange={(e) => setParticularNum(e.target.value)} />
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

                    {error && <div className="alert alert-danger">{error}</div>}
                    {rangeResult && (
                        <div className="result">
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
                            <h3>Check Result:</h3>
                            <p>{checkResult}</p>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default ArmstrongChecker;
