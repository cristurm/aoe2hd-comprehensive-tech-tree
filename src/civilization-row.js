var CivilizationRow = React.createClass({
  render: function() {
    var civ = this.props.civ;

    return (
      <tr>
        <td>{civ.name}</td>
      </tr>
    );
  }
});