var CivTable = React.createClass({
  render: function() {
    var data = this.props.data;

    var civNodes = data.map(function (civ) {
      return (
        <CivilizationRow civ={civ} />
      );
    });

    return (
      <table className="civilizations">
        {civNodes}
      </table>
    );
  }
});