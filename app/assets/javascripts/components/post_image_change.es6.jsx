class PostImageChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render () {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<img src={this.props.abc} className="previewText" />);
    }

    return (
      <div className="previewComponent">
        <div className="imgPreview">
          {$imagePreview}
        </div>
        <br />

          <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} name="image" id="image"/>
      </div>
    );
  }
}
