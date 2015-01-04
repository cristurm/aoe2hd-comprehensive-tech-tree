var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  render: function() {
    var civ = this.props.civ;

    return (
      React.createElement("tr", null, 
        React.createElement("td", null, civ.name)
      )
    );
  }
});