// civ table
var CivTable = React.createClass({displayName: "CivTable",
  render: function() {
    return (
      React.createElement("table", {className: "civlizations-tech-tree"}, 
        React.createElement("tr", null, React.createElement("td", null, "Hello, world! I am a CommentBox."))
      )
    );
  }
});

React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('example')
);