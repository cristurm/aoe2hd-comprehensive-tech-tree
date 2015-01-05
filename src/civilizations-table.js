var CivTable = React.createClass({
  render: function() {
    var buildings = this.props.unitsAndTechs.buildings;
    var tableHeader = [];

    var civilizations = this.props.civilizations;
    var civilizationRows = [];

    if (buildings) {
      buildings.map(function (_building, _i) {
        tableHeader.push(<BuildingHeader building={_building} />);
      });
    }

    if (civilizations) {
      civilizations.map(function (_civilization) {
        civilizationRows.push(<CivilizationRow civilization={_civilization} buildings={buildings} />);
      });
    }

    return (
      <table className="civilizations">
        <div clasName="wtf-yeah-i-know">
          {tableHeader}
        </div>
        <tbody>
          {civilizationRows}
        </tbody>
      </table>
    );
  }
});

