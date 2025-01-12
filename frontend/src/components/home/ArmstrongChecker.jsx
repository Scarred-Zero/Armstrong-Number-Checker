import React, {useContext} from 'react';
import { AlertContext } from '../alert/AlertContext';
import Tooltip from '../Tooltip/Tooltip';
import Alert from '../alert/Alert';

const ArmstrongChecker = () => {
    const { alert, showAlert, closeAlert } = useContext(AlertContext);

  return (
    <section className="armstrong__section section__padding">
        <div className="container">
            <div className="armstrong__container">    

                <form id="armstrong-form" className="armstrong__form form__row" method="POST" action="{{ url_for('arm_num_checker.home_page') }}">
                    {/* {{ form.csrf_token }} */}
                    <div className="armstrong__content">

                        <div className="armstrong__content-item">
                            <div className="form__group">
                                {/* {{ form.min_num.label }} {{ form.min_num(size=10) }} */}
                                <label htmlFor="min_num">Minimum Number:</label>
                                <input type="number" name="min_num" className="form__input" id='min_num' placeholder='Enter Min Value'/>
                                <div className="clear__input-container">
                                    <Tooltip text="Clear Input">
                                        <button className="btn btn__small btn__danger btn__clear" id="reset_min_num">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>

                        <div className="armstrong__content-item">
                            <div className="form__group">
                                {/* {{ form.max_num.label }} {{ form.max_num(size=10) }} */}
                                <label htmlFor="max_num">Maximum Number:</label>
                                <input type="number" name="max_num" className="form__input" id='max_num' placeholder='Enter Max Value'/>
                                <div className="clear__input-container">
                                    <Tooltip text="Clear Input">
                                        <button className="btn btn__small btn__danger btn__clear" id="reset_max_num">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>

                        <div className="armstrong__content-item">
                            <div className="btn__container">
                                <div className="clear__allInputs-container">
                                    <button className="btn btn__danger btn__clear" type="reset">
                                    Clear All <i className="fa fa-trash"></i>
                                    </button>
                                </div>

                                <div className="find_armstg_num__container">
                                    <Tooltip text="Find Armstrong Numbers">
                                        {/* {{ form.submit() }} */}
                                        <button type="submit" className='btn' id='find_armstrong_nums'>
                                        <i className="fa fa-search"></i>
                                        </button>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>

                    </div>    
                </form> 

                <form className="armstrong__form form__row" action="{{ url_for('arm_num_checker.home_page') }}" method="POST" id="check-number-form">
                    {/* {{ form2.csrf_token }} */}
                    <div className="check__num-content">
                        <div className="form__group">
                            {/* {{ form2.check_particular_num.label }} {{ form2.check_particular_num(size=10) }} */}

                            <label htmlFor="check_particular_num">Enter a Number:</label>
                            <input type="number" name="check_particular_num" className="form__input" id='check_particular_num' placeholder='Enter a Number'/>

                            <div className="btn__container">
                                <div className="clear__allInputs-container">
                                    <Tooltip text="Clear Input">
                                        <button className="btn btn__small btn__danger btn__clear" id="reset_check_particular_num" type="reset">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </Tooltip>
                                </div>

                                <div className="find_armstg_num__container">
                                    {/* {{ form2.submit() }} */}
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
                    
            </div>
        </div>
    </section>
  )
}

export default ArmstrongChecker;
