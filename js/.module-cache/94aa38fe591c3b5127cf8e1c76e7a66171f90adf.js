var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  render: function() {
    var civilization = this.props.civ;

    var units = civilization.buildings.map(function (building) {
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