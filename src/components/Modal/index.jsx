import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';


const Modal = ({
  show,
  onClose,
  onSubmit,
  title,
  children,
}) => (
  <>
    <div
      className="modal"
      style={{ display: show ? 'block' : 'none' }}
      onClick={onClose}
      onKeyUp={onClose}
      tabIndex={0}
      role="button"
      label="background"
    />
    <div className="modal_main" style={{ display: show ? 'flex' : 'none' }}>
      <div className="modal_header">{title}</div>
      <div className="modal_content">{children}</div>
      <div className="modal_footer">
        <button
          type="button"
          className="modal_btn modal_btn__sbm"
          onClick={onSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="modal_btn modal_btn__cls"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </>
);

Modal.defaultProps = {
  title: '',
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Modal;
