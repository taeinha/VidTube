import React from 'react';
import CreateVideoForm from '../videos/create_video_form_container';
import EditVideoForm from '../videos/edit_video_form_container';

class Modal extends React.Component {
 
  componentDidUpdate() {
    if (this.props.modal.type) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  render () {
    const {modal, currentUser} = this.props;
    if (!modal.type || !currentUser) return null;

    let display;
    switch (modal.type) {
      case 'create_video':
        display = <CreateVideoForm />;
        break;
      case 'edit_video':
        display = <EditVideoForm />;
        break;
      default:
        return null;
    }

    return (
      <div className="modal-background">
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { display }
        </div>
      </div>
    );
  }
};

export default Modal;