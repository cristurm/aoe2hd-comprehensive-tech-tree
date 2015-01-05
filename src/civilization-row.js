var CivilizationRow = React.createClass({
  assessAvailability: function (_civ, _item) {
    if (_civ.units_and_techs.indexOf(_item.id) >= 0) {
      return <td className="available">Available</td>);
    }

    return <td className=unavailable>Unavailable</td>);
  },

  render: function() {
    var civilization = this.props.civilization;
    var buildings = this.props.buildings;

    var unitsAndTechsCells = [];

    unitsAndTechsCells.push(<td>{civilization.name}</td>);

    $.each(buildings, function (_index, _building) {
      _building.units.map(function (_unit) {
        unitsAndTechsCells.push(this.assessAvailability(civilization, _unit));
      });

      _building.technologies.map(function (_technology) {
        unitsAndTechsCells.push(this.assessAvailability(civilization, _technology));
      });
    });

    return (
      <tr>
        {unitsAndTechsCells}
      </tr>
    );
  }
});