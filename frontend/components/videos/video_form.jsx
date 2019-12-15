import React from 'react';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitVideo(this.state).then(this.props.hideModal);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  _titleInput() {
    const { title } = this.state;

    return (
      <label>
        <textarea
          value={title}
          onChange={this.update('title')}
          className="video-form-title"
          placeholder="Add a title that describes your video"
          maxLength="100"
          required
        />
        <span className="input-label-float">Title (required)</span>
        <span className="text-character-remaining">{title.length}/100</span>
      </label>
    )
  }

  _descriptionInput() {
    const { description } = this.state
    return (
      <label>
        <textarea 
          value={description}
          onChange={this.update('description')}
          className="video-form-description"
          placeholder="Tell viewers about your video"
          maxLength="5000"
          required
        />
        <span className="input-label-float">Description</span>
        <span className="text-character-remaining">{description.length}/5000</span>
      </label>
    )
  }

  _thumbnailInput() {
    return (
      <label className="video-form-thumbnail-container">
        <h2>Thumbnail</h2>
        <p>Upload a picture that shows what's in your video. A good thumbnail stands out and draws viewer's attention.</p>
        <div>
          <img src={window.thumbnail} alt=""/>
        </div>
      </label>
    )
  }

  _deleteButton() {
    const { formType } = this.props;
    const display = formType === 'Edit video' ? (
      <div
        className="video-delete-button pointer"
      >
        <span>DELETE</span>
      </div>
    ) : null;
    return (
      <>
        { display }
      </>
    )
  }

  render() {
    const { formType, hideModal } = this.props;

    return (
      <main className="main-outer-video-form">
        <div className="video-form-title-row">
          <h1>{formType}</h1>
          <img 
            src={window.exitIcon} 
            onClick={hideModal} 
            className="convert-gray pointer convert-black" 
          />
        </div>
        <div className="video-form-outer-container">
          <div className="video-form-container">
            <div className="video-form-details-row">
              <h1>Details</h1>
              {this._deleteButton()}
            </div>
            <form onSubmit={this.handleSubmit}>
              {this._titleInput()}
              {this._descriptionInput()}
              {this._thumbnailInput()}
              <div className="video-form-submit-box">
                <button type="submit">DONE</button>
              </div>
            </form>
          </div>

        </div>
      </main>
    );
  }
}

export default VideoForm;