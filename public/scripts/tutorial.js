// tutorial.js

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        Hello World! I am a comment box.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
