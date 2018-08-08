import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

/**
 * Memory Card component
 *
 * @param {type} card value of the card
 * @param {type} feedback status of the card
 * @returns {String} rendering of the component
 */
const Card = ( { card, feedback, onClick } ) => (
	<div className={`card ${feedback}`} onClick = { () => onClick(card) }>
		<span className="symbol">
			{ feedback === 'hidden' ? HIDDEN_SYMBOL : card }
		</span>
	</div>
)

export default Card