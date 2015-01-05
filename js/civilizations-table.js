var CivTable = React.createClass({displayName: "CivTable",
  render: function() {
    var buildings = this.props.unitsAndTechs.buildings;
    var tableHeader = "";

    var civilizations = this.props.civilizations;
    var civilizationRows = "";

    if (buildings) {
      tableHeader = buildings.map(function (_building, _i) {
        return (
          React.createElement(BuildingHeader, {building: _building})
        );
      });
    }

    if (civilizations) {
      civilizationRows = civilizations.map(function (_civilization) {
        return (
          React.createElement(CivilizationRow, {civilization: _civilization, buildings: buildings})
        );
      });
    } 

    return (
      React.createElement("table", {className: "civilizations"}, 
        React.createElement("div", {clasName: "wtf-yeah-i-know"}, 
          tableHeader
        ), 
        React.createElement("tbody", null, 
          civilizationRows
        )
      )
    );
  }
});

