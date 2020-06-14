import React, { Component } from 'react'
import Illustration from '../images/illustration-mockups.svg'
export class MainImage extends Component {
  render() {
    return (
      <div className="illustration">
        <div className="header">
          <h3><span><i className="fa fa-comments"></i></span> Huddle</h3>
        </div>
        <img src={Illustration} alt="Main-img"/>
      </div>
    )
  }
}
export default MainImage