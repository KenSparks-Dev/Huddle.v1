import React from 'react';
import '../css/text.css';

function Text({textTitle, textPara, button}){
		return (
			<div className="text">
				<h4 className="fade-in-text">{textTitle}</h4>
				<p className="fade-in-text">
					{textPara}
				</p>
				<button className="fade-in-text">{button} </button>
			</div>
		);
	}

export default Text;

