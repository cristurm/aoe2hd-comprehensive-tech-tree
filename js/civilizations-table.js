var CivTable = React.createClass({displayName: "CivTable",
  render: function() {
    var buildings = this.props.unitsAndTechs.buildings;
    var tableHeader = "";

    var civilizations = this.props.civilizations;
    var civilizationNodes = "";

    if (buildings) {
      tableHeader = buildings.map(function (_building, _i) {
        return (
          React.createElement(BuildingHeader, {building: _building})
        );
      });
    }

    if (civilizations) {
      civilizationNodes = civilizations.map(function (_civ) {
        return (
          React.createElement(CivilizationRow, {civ: _civ})
        );
      });
    } 

    console.log(civilizationNodes)

    return (
      React.createElement("table", {className: "civilizations"}, 
        React.createElement("div", {clasName: "wtf-yeah-i-know"}, 
          tableHeader
        ), 
        React.createElement("tbody", null, 
          civilizationNodes
        )
      )
    );
  }
});

