var CivilizationsTable = React.createClass({displayName: "CivilizationsTable",
  render: function() {
    var buildings = this.props.unitsAndTechs.buildings;
    var tableHeader = [];

    var civilizations = this.props.civilizations;
    var civilizationRows = [];

    if (buildings) {
      tableHeader = React.createElement(CivilizationsTableHeader, {buildings: buildings});
    }

    if (civilizations) {
      civilizations.map(function (_civilization) {
        civilizationRows.push(React.createElement(CivilizationRow, {civilization: _civilization, buildings: buildings}));
      });
    }

    return (
      React.createElement("table", {className: "civilizations"}, 
        tableHeader, 
        React.createElement("tbody", null, 
          civilizationRows
        )
      )
    );
  }
});

