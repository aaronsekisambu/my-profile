import React, {Fragment} from 'react';

const DetailedInformation = ({className, textInfo, linkTo}) =>
           (
      <Fragment>
      <div className="mt-4 mb-4">
      <button href={linkTo} className={className}>{textInfo}</button>
      <button href="#" className="btn btn-info my-btn" >Experience</button>
      <button href="#" className="btn btn-danger my-btn">Education</button>
      <button href="#" className="btn btn-warning my-btn">Projects</button>
      <button href="#" className="btn btn-primary my-btn">Stacks</button>
      </div>
      </Fragment>
    )

export default DetailedInformation;