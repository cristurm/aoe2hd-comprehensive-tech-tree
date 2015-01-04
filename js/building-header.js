var BuildingHeader = React.createClass({displayName: "BuildingHeader",
  render: function() {
    var building = this.props.building;
    var unitCount = building.units.length;
    var techCount = building.technologies.length;
    var unitAndTechCount = unitCount + techCount;

    var unitsAndTechsRows = [] 

    unitsAndTechsRows.push(building.units.map(function (_unit) {
      return (
        React.createElement("th", {className: _unit.id}, _unit.name)
      )
    }));

     unitsAndTechsRows.push(building.technologies.map(function (_tech) {
      return (
        React.createElement("th", {className: _tech.id}, _tech.name)
      )
    }));

    return (
      React.createElement("thead", null, 
        React.createElement("tr", null, 
          React.createElement("th", {colSpan: unitAndTechCount}, building.name)
        ), 

        React.createElement("tr", null, 
          React.createElement("th", {colSpan: unitCount}, "Units"), 
          React.createElement("th", {colSpan: techCount}, "Technologies")
        ), 

        React.createElement("tr", null, 
          unitsAndTechsRows
        )
      )
    );
  }
});