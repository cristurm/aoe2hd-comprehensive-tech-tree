var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  render: function() {
    var civilization = this.props.civ;

    var units = "";

    if (civilization.buildings) {
      units = civilization.buildings.map(function (building) {
        // $.each(building.units, function (unit)) {
          console.log(unit)
        // }
      });
    }

    return (
      React.createElement("tr", {className: this.props.name}, 
        React.createElement("td", null, this.props.name), 
        units
      )
    );
  }
});