import React from 'react';

const Modals = ({handleClose, show, details, title}) => {
  const showHideClassName = show ? "modals display-block" : "modals display-none";
  return (
  <div className={showHideClassName} role="document">
    <div className="modal-content content-inside">
      <div className="modal-header">
        <h1 className="modal-title" id="exampleModalLongTitle">{title}</h1>
        <button type="button" onClick={handleClose} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {details}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-danger" onClick={handleClose}>Close</button>
      </div>
    </div>
  </div>
  )
};

export default Modals;