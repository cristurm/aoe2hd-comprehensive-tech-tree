var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  render: function() {
    var civilization = this.props.civilization;
    var buildings = this.props.buildings;

    var unitsAndTechsCells = [];

    unitsAndTechsCells.push(React.createElement("td", null, civilization.name));

    $.each(buildings, function (_index, _building) {
      _building.units.map(function (_unit) {
        if (civilization.units_and_techs.indexOf(_unit.id) >= 0) {
          unitsAndTechsCells.push(React.createElement("td", {className: _unit.id}, "Available"));
        } else {
          unitsAndTechsCells.push(React.createElement("td", {className: _unit.id}, "Unavailable"));
        }
      });

      _building.technologies.map(function (_technology) {
        if (civilization.units_and_techs.indexOf(_technology.id) >= 0) {
          unitsAndTechsCells.push(React.createElement("td", {className: _technology.id}, "Available"));
        } else {
          unitsAndTechsCells.push(React.createElement("td", {className: _technology.id}, "Unavailable"));
        }
      });
    });

    return (
      React.createElement("tr", null, 
        unitsAndTechsCells
      )
    );
  }
});