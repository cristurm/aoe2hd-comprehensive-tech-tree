var BuildingHeader = React.createClass({
  render: function() {
    var building = this.props.building;
    var unitCount = building.units.length;
    var techCount = building.technologies.length;
    var unitAndTechCount = unitCount + techCount;

    var unitsAndTechsRows = [] 

    unitsAndTechsRows.push(building.units.map(function (_unit) {
      return (
        <th className={_unit.id}>{_unit.name}</th>
      )
    }));

     unitsAndTechsRows.push(building.technologies.map(function (_tech) {
      return (
        <th className={_tech.id}>{_tech.name}</th>
      )
    }));

    return (
      <thead>
        <tr>
          <th colSpan={unitAndTechCount}>{building.name}</th>
        </tr>

        <tr>
          <th colSpan={unitCount}>Units</th>
          <th colSpan={techCount}>Technologies</th>
        </tr>

        <tr>
          {unitsAndTechsRows}
        </tr>
      </thead>
    );
  }
});