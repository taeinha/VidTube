import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
    this.state.disableSubmit = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    const { formType } = this.props;
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    if (this.state.thumbnailFile) {
      formData.append('video[thumbnail_file]', this.state.thumbnailFile);
    }
    if (this.state.videoFile) {
      formData.append('video[video_file]', this.state.videoFile);
    }
    this.setState({disableSubmit: true});
    if (formType === 'Upload video') {
      this.props.submitVideo(formData).then((resp) => {
        this.props.hideModal();
        this.props.history.push(`/videos/${resp.payload.video.id}`);
      }, () => {
        this.setState({ disableSubmit: false });
      });
    } else {
      this.props.submitVideo(formData, this.state.id).then(() => {
        this.props.hideModal();
      }, () => {
        this.setState({ disableSubmit: false });
      });
    }
  }

  handleFile(e, fileName, fileUrl) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        [fileName]: file, 
        [fileUrl]: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    let that = this;
    this.props.removeVideo(this.state.id).then(() => {
      that.props.history.push('/');
      that.props.hideModal();
    });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  _titleInput() {
    const { title } = this.state;
    const error = this._renderError("title");
    return (
      <>
        <label className="video-form-text-inputs-label">
          <textarea
            value={title}
            onChange={this.update('title')}
            className={`video-form-title ${error ? " error-input-style" : null}`}
            placeholder="Add a title that describes your video"
            maxLength="100"
          />
          <span className="input-label-float">Title (required)</span>
          <span className="text-character-remaining">{title.length}/100</span>
        </label>
        {error && (
          <div className="error-input-warnings">
            <img src={window.errorIcon} className="error-icon-img" />
            <span>{error}</span>
          </div>
        )}
      </>
    )
  }

  _descriptionInput() {
    const { description } = this.state
    return (
      <label className="video-form-text-inputs-label">
        <textarea 
          value={description}
          onChange={this.update('description')}
          className="video-form-description"
          placeholder="Tell viewers about your video"
          maxLength="5000"
        />
        <span className="input-label-float">Description</span>
        <span className="text-character-remaining">{description.length}/5000</span>
      </label>
    )
  }

  _thumbnailInput() {
    const preview = this.state.thumbnailUrl ? <img src={this.state.thumbnailUrl} /> : null;
    const error = this._renderError("thumbnail");
    return (
      <div className="video-form-thumbnail-container">
        <h2>Thumbnail</h2>
        <p>Upload a picture that shows what's in your video. A good thumbnail stands out and draws viewer's attention.</p>
        <div className="video-form-thumbnail-input-container">
          <label className={`label-input-file-container pointer ${error ? "error-input-style" : null}`}>
            <img src={window.uploadThumbnailIcon} />
            <p>Upload thumbnail</p>
            <input 
              type="file"
              onChange={(e) => this.handleFile(e, 'thumbnailFile', 'thumbnailUrl')}
            />
          </label>
          <div>
            {preview}
          </div>
        </div>
        {error && (
          <div className="error-input-warnings">
            <img src={window.errorIcon} className="error-icon-img" />
            <span>{error}</span>
          </div>
        )}
      </div>
    )
  }

  _deleteButton() {
    const { formType } = this.props;
    const display = formType === 'Edit video' ? (
      <div
        className="video-delete-button pointer"
        onClick={this.handleDelete}
      >
        <span>DELETE VIDEO</span>
      </div>
    ) : null;
    return (
      <>
        { display }
      </>
    )
  }

  _displayUpload() {
    const { formType } = this.props;
    const preview = this.state.videoFile ? <p>{this.state.videoFile.name}</p> : null;
    const error = this._renderError("video file");
    const display = formType === 'Upload video' ? (
      <>
        <label htmlFor="upload-input" className="label-input-file-container pointer">
          <div className={`upload-icon-div pointer ${error ? "error-input-style" : null}`}>
            <img src={window.uploadIcon} />
          </div>
          <p>Drag and drop a file you want to upload</p>
          <p>Your video will be public when you publish it</p>
          <input
            type="file"
            id="upload-input"
            onChange={(e) => this.handleFile(e, 'videoFile', 'videoUrl')}
          />
          <div className="video-form-select-file-button pointer">
            SELECT FILE
          </div>
        </label>
        {error && (
          <div className="error-input-warnings">
            <img src={window.errorIcon} className="error-icon-img" />
            <span>{error}</span>
          </div>
        )}
        {preview}
      </>
    ) : null;

    return (
      <>
        {display}
      </>
    )
  }

  _renderError(field) {
    const { errors } = this.props;
    return errors.find(error => error.toLowerCase().includes(field));
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
              <div className="video-form-content">
                <div className="video-form-content-left">
                  {this._titleInput()}
                  {this._descriptionInput()}
                  {this._thumbnailInput()}
                </div>
                <div className="video-form-content-right">
                  {this._displayUpload()}
                </div>
              </div>
              <div className="video-form-submit-box">
                <button type="submit" disabled={this.state.disableSubmit}>DONE</button>
              </div>
            </form>
          </div>

        </div>
      </main>
    );
  }
}

export default withRouter(VideoForm);