var AOE2HDTechTree = React.createClass({displayName: "AOE2HDTechTree",
  render: function() {
    return (
      React.createElement("div", {className: "aoe2hd-comprehensive-tech-tree"}, 
        React.createElement(CivFilter, null), 
        React.createElement(CivTable, null)
      )
    );
  }
});

React.render(
  React.createElement(AOE2HDTechTree, null),
  document.getElementById('app')
);