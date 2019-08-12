import React, {Fragment} from 'react';

const Card = ({information, cardTitle, image, company, subTitle, position}) => {
return (
  <Fragment>
    <section className="card-section">
    <div className="image-container card-size">
  <img src={image} className="card-image-size shadow rounded" alt="..." />
  <div className="card-information">
    <span className="card-title">{cardTitle}</span>
    <p className="card-text">{information}</p>
  </div>
</div>
<span className="down-info">
  <span  className="info-btn">{company}</span> <br />
    <span className="position">{position}</span> <br />
    <span className="subTitle">{subTitle}</span>
  </span>

    </section>
  </Fragment>
)
};

export default Card;