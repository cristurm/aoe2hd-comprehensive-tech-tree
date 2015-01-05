var CivilizationRow = React.createClass({
  render: function() {
    var civilization = this.props.civilization;
    var buildings = this.props.buildings;

    var unitsAndTechsCells = [];

    unitsAndTechsCells.push(<td>{civilization.name}</td>);

    $.each(buildings, function (_index, _building) {
      _building.units.map(function (_unit) {
        if (civilization.units_and_techs.indexOf(_unit.id) > 0) {
          unitsAndTechsCells.push(<td className={_unit.id}>Available</td>);  
        } else {
          unitsAndTechsCells.push(<td className={_unit.id}>Unavailable</td>);  
        }
      });

      _building.technologies.map(function (_technology) {
        if (civilization.units_and_techs.indexOf(_technology.id) > 0) {
          unitsAndTechsCells.push(<td className={_technology.id}>Available</td>);  
        } else {
          unitsAndTechsCells.push(<td className={_technology.id}>Unavailable</td>);  
        }
      });
    });
    
    return (
      <tr>
        {unitsAndTechsCells}
      </tr>
    );
  }
});