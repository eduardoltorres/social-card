import React, { Component } from "react";

class SocialCard extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="card__container">
          <div className="card__top-image">
            <img src="https://via.placeholder.com/450x240" alt="placeholder" />
          </div>

          <div className="card__bottom-text">
            <p>
              <strong>Learning React? Start small.</strong>
            </p>
            <p>
              Stuck in tutorial purgatory? The cure is to make tiny little
              experiment apps.
            </p>
            <p>tryreact.io</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialCard;
