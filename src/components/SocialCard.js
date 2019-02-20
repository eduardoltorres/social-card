import React, { Component } from "react";
import PropTypes from "prop-types";

class SocialCard extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="card__container">
          <div className="card__top-image">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>

          <div className="card__bottom-text">
            <strong>Learning React? Start small.</strong>
            <p>
              Stuck in tutorial purgatory? The cure is to make tiny little
              experiment apps.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialCard;
