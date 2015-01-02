var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  render: function() {
    var buildings = $.each(this.props.civ, function (building) {
      if (building == "archery_range") {
        // $.each(building.unit, function (unit)) {
          return building.name
        // }
      }
      return "";
    });

    return (
      React.createElement("tr", {className: this.props.name}, 
        React.createElement("td", null, this.props.name), 
        React.createElement("td", null, buildings)
      )
    );
  }
});