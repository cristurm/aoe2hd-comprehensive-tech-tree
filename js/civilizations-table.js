var CivilizationsTable = React.createClass({displayName: "CivilizationsTable",
  objArrayIndexOf: function (_array, _id) {
    return _array.map(function (_item) {
      return _item.id
    }).indexOf(_id);
  },

  render: function() {
    var buildings = this.props.state.unitsAndTechs.buildings;
    var tableHeader = [];

    var civilizations = this.props.state.civilizations;
    var civilizationRows = [];

    if (buildings) {
      tableHeader = React.createElement(CivilizationsTableHeader, {buildings: buildings});
    }

    if (civilizations) {
      var civilizationFilter = this.props.state.civilizationFilter;

      if (civilizationFilter != "all") {
        var index = this.objArrayIndexOf(civilizations, civilizationFilter);

        if (index >= 0) {
          civilizationRows.push(React.createElement(CivilizationRow, {civilization: civilizations[index], buildings: buildings}));
        }
      } else {
        civilizations.map(function (_civilization) {
          civilizationRows.push(React.createElement(CivilizationRow, {civilization: _civilization, buildings: buildings}));
        });
      }
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

