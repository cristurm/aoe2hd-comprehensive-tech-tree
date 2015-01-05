var BuildingHeader = React.createClass({displayName: "BuildingHeader",
  render: function() {
    var building = this.props.building;
    var unitCount = building.units.length;
    var techCount = building.technologies.length;
    var unitAndTechCount = unitCount + techCount;

    var unitsAndTechsCells = [];

    building.units.map(function (_unit) {
      unitsAndTechsCells.push(React.createElement("th", {className: _unit.id}, _unit.name));
    });

    building.technologies.map(function (_technology) {
      unitsAndTechsCells.push(React.createElement("th", {className: _technology.id}, _technology.name));
    });

    return (
      React.createElement("thead", null, 
        React.createElement("tr", null, 
          React.createElement("th", null), 
          React.createElement("th", {colSpan: unitAndTechCount}, building.name)
        ), 
        React.createElement("tr", null, 
          React.createElement("th", null), 
          React.createElement("th", {colSpan: unitCount}, "Units"), 
          React.createElement("th", {colSpan: techCount}, "Technologies")
        ), 
        React.createElement("tr", null, 
          React.createElement("th", null, "Civilization"), 
          unitsAndTechsCells
        )
      )
    );
  }
});