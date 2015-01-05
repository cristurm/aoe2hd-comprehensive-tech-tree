var CivilizationsTable = React.createClass({
  render: function() {
    var buildings = this.props.unitsAndTechs.buildings;
    var tableHeader = [];

    var civilizations = this.props.civilizations;
    var civilizationRows = [];

    if (buildings) {
      tableHeader = <CivilizationsTableHeader buildings={buildings} />;
    }

    if (civilizations) {
      civilizations.map(function (_civilization) {
        civilizationRows.push(<CivilizationRow civilization={_civilization} buildings={buildings} />);
      });
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

