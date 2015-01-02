var CivilizationRow = React.createClass({
  render: function() {
    var civilization = this.props.civ;

    var units = "";

    if (civilization.buildings) {
      units = civilization.buildings.map(function (building) {
        $.each(building.units, function (unit) {
          console.log(unit)
        });
      });
    }

    return (
      <tr className={this.props.name}>
        <td>{this.props.name}</td>
        {units}
      </tr>
    );
  }
});