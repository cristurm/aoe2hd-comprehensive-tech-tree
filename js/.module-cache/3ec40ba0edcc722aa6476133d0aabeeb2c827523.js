var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  render: function() {
    return (
      React.createElement("tr", {className: "{this.props.name}"}, 
        React.createElement("td", null)
      )
    );
  }
});