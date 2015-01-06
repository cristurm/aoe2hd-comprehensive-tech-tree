var CivilizationsTable = React.createClass({
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
      tableHeader = <CivilizationsTableHeader buildings={buildings} />;
    }

    if (civilizations) {
      var civilizationFilter = this.props.state.civilizationFilter;

      if (civilizationFilter != "all") {
        var index = this.objArrayIndexOf(civilizations, civilizationFilter);

        if (index >= 0) {
          civilizationRows.push(<CivilizationRow civilization={civilizations[index]} buildings={buildings} />);
        }
      } else {
        civilizations.map(function (_civilization) {
          civilizationRows.push(<CivilizationRow civilization={_civilization} buildings={buildings} />);
        });
      }
    }

    return (
      <table className="civilizations">
        {tableHeader}
        <tbody>
          {civilizationRows}
        </tbody>
      </table>
    );
  }
});

