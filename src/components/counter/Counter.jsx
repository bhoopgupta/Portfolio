import React from 'react'

import './Counter.css'
const Counter = () => {
  return (
    <div>
      <div class="counter">
    <div class="counter-section">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                    <h2>
                        <span id="count1"></span>+
                    </h2>
                    <p>SAVINGS</p>
                </div>
                <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                    <h2>
                        <span id="count2"></span>+
                    </h2>
                    <p>PHOTOS</p>
                </div>
                <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                    <h2>
                        <span id="count3"></span>+
                    </h2>
                    <p>ROCKETS</p>
                </div>
                <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                    <h2>
                        <span id="count4"></span>+
                    </h2>
                    <p>GLOBES</p>
                </div>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Counter;
