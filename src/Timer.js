import React, {Component} from 'react';
import './timer.css';
class Timer extends Component {
   
    render() { 
        return ( 
            <div className='master'>
                <div className='block'>
                  <div className='digits'>
                    00:30:00
                  </div>
                  <div className='items'>
                    <div className='hours-item'>Hour</div>
                    <div className='minutes-item'>Minute</div>
                    <div className='seconds-item'>Second</div>
                  </div>
                </div>

            </div> 

        );
    }
}
 
export default Timer;