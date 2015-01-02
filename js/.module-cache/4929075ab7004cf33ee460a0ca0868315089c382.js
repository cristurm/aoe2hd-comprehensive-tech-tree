var AOE2HDTechTree = React.createClass({displayName: "AOE2HDTechTree",
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      React.createElement("div", {className: "aoe2hd-comprehensive-tech-tree"}, 
        React.createElement(CivFilter, null), 
        React.createElement(CivTable, {data: this.state.data})
      )
    );
  }
});

React.render(
  React.createElement(AOE2HDTechTree, {url: "../data/civilizations.json"}),
  document.getElementById('app')
);