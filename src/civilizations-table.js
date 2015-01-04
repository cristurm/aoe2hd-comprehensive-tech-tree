var CivTable = React.createClass({
  render: function() {
    var buildings = this.props.unitsAndTechs.buildings;
    var tableHeader = "";

    var civilizations = this.props.civilizations;
    var civilizationNodes = "";

    if (buildings) {
      tableHeader = buildings.map(function (_building, _i) {
        return (
          <BuildingHeader building={_building} />
        );
      });
    }

    if (civilizations) {
      civilizationNodes = civilizations.map(function (_civ) {
        return (
          <CivilizationRow civ={_civ} />
        );
      });
    } 

    console.log(civilizationNodes)

    return (
      <table className="civilizations">
        {tableHeader}

          {civilizationNodes}
      </table>
    );
  }
});

