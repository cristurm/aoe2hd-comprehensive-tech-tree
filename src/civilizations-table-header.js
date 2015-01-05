var CivilizationsTableHeader = React.createClass({
  render: function() {
    var buildings = this.props.buildings;
    var buildingName = [<th></th>];
    var buildingSubHeader = [<th></th>];
    var unitsAndTechsCells = [<th>Civilization</th>];

    debugger;
    $.each(buildings, function (_index, _building) {
      var unitCount = _building.units.length;
      var techCount = _building.technologies.length;
      var unitAndTechCount = unitCount + techCount;

      buildingName.push(<th colSpan={unitAndTechCount}>{_building.name}</th>);

      buildingSubHeader.push(<th colSpan={unitCount}>Units</th>);
      _building.units.map(function (_unit) {
        unitsAndTechsCells.push(<th className={_unit.id}>{_unit.name}</th>);
      });

      buildingSubHeader.push(<th colSpan={techCount}>Technologies</th>);
      _building.technologies.map(function (_technology) {
        unitsAndTechsCells.push(<th className={_technology.id}>{_technology.name}</th>);
      });
    });

    return (
      <thead>
        <tr>
          {buildingName}
        </tr>
        <tr>
          {buildingSubHeader}
        </tr>
        <tr>
          {unitsAndTechsCells}
        </tr>
      </thead>
    );
  }
});