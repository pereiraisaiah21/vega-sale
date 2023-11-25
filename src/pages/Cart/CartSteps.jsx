import React from 'react'

/**
 *
 *
 */

const CheckoutSteps = ({ currentStep, steps }) => {
  return (
    <div className='checkout-steps'>
      <div className='checkout-steps__wrap checkout-steps__wrap--cart'>
        <ul className='checkout-steps__list'>
          {steps.map((step, index) => (
            <li
              key={index}
              className={`checkout-steps__item ${
                index === currentStep || index < currentStep ? 'active' : ''
              }`}
            >
              <span className='checkout-steps__number'>{index + 1}</span>
              <span className='checkout-steps__title'>
                {index === currentStep || index < currentStep ? step : null}
              </span>
              {index !== steps.length - 1 && (
                <div className='checkout-steps__line' />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CheckoutSteps
