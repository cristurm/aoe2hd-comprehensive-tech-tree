var CivilizationsTableHeader = React.createClass({displayName: "CivilizationsTableHeader",
  render: function() {
    var buildings = this.props.buildings;
    var buildingName = [React.createElement("th", null)];
    var buildingSubHeader = [React.createElement("th", null)];
    var unitsAndTechsCells = [React.createElement("th", null, "Civilization")];

    $.each(buildings, function (_index, _building) {
      var unitCount = _building.units.length;
      var techCount = _building.technologies.length;
      var unitAndTechCount = unitCount + techCount;

      buildingName.push(React.createElement("th", {colSpan: unitAndTechCount}, _building.name));

      buildingSubHeader.push(React.createElement("th", {colSpan: unitCount}, "Units"));
      _building.units.map(function (_unit) {
        unitsAndTechsCells.push(React.createElement("th", {className: _unit.id}, _unit.name));
      });

      buildingSubHeader.push(React.createElement("th", {colSpan: techCount}, "Technologies"));
      _building.technologies.map(function (_technology) {
        unitsAndTechsCells.push(React.createElement("th", {className: _technology.id}, _technology.name));
      });
    });

    return (
      React.createElement("thead", null, 
        React.createElement("tr", null, 
          buildingName
        ), 
        React.createElement("tr", null, 
          buildingSubHeader
        ), 
        React.createElement("tr", null, 
          unitsAndTechsCells
        )
      )
    );
  }
});