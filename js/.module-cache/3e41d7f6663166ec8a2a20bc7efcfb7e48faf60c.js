var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  render: function() {
    var units = $.each(this.props.civ.buildings, function (building) {
      debugger;
      // $.each(building.units, function (unit)) {

      // }
    });

    return (
      React.createElement("tr", {className: this.props.name}, 
        React.createElement("td", null, this.props.name), 
        units
      )
    );
  }
});