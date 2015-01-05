var BuildingHeader = React.createClass({
  render: function() {
    var building = this.props.building;
    var unitCount = building.units.length;
    var techCount = building.technologies.length;
    var unitAndTechCount = unitCount + techCount;

    var unitsAndTechsCells = [];

    building.units.map(function (_unit) {
      unitsAndTechsCells.push(<th className={_unit.id}>{_unit.name}</th>);
    });

    building.technologies.map(function (_technology) {
      unitsAndTechsCells.push(<th className={_technology.id}>{_technology.name}</th>);
    });

    return (
      <thead>
        <tr>
          <th></th>
          <th colSpan={unitAndTechCount}>{building.name}</th>
        </tr>
        <tr>
          <th></th>
          <th colSpan={unitCount}>Units</th>
          <th colSpan={techCount}>Technologies</th>
        </tr>
        <tr>
          <th>Civilization</th>
          {unitsAndTechsCells}
        </tr>
      </thead>
    );
  }
});