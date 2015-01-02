var CivTable = React.createClass({displayName: "CivTable",
  render: function() {
    var data = this.props.data;

    var headerNodes = data.map(function (civ) {
      return (
        React.createElement("th", null, civ.archery_range.units.archer)
      );
    });

    var civNodes = data.map(function (civ) {
      return (
        React.createElement(CivilizationRow, {name: civ.name})
      );
    });

    return (
      React.createElement("table", {className: "civilizations"}, 
        headerNodes, 
        civNodes
      )
    );
  }
});