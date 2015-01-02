// civ table
var CivTable = React.createClass({displayName: "CivTable",
  render: function() {
    return (
      React.createElement("table", {className: "civlizations"}, 
        React.createElement("tr", null, React.createElement("td", null, "Hello, world! I am a CommentBox."))
      )
    );
  }
});

React.render(
  React.createElement(CivTable, null),
  document.getElementById('aoe2hd-comprehensive-tech-tree')
);