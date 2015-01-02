var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  render: function() {
    var buildings = this.props.map(function (building) {
      return (
        React.createElement("td", null, "buildings")
      );
    });

    return (
      React.createElement("tr", {className: this.props.name}, 
        React.createElement("td", null, this.props.name)
      )
    );
  }
});