// tutorial2.js
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
        <CommentList />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentForm />
  ,
  document.getElementById('content')
);
//
//ReactDOM.render(
//  <CommentForm />
//  ,
//  document.getElementById('div')
//);
