import React from 'react';

const Modal = ({modal, hideModal}) => {
  if (!modal) return null;

  let display;
  switch (modal) {
    case 'create_video':
      // display = <CreateVideoForm />;
      break;
    case 'edit_video':
      // display = <EditVideoForm />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={hideModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { display }
      </div>
    </div>
  );
};

export default Modal;