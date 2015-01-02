var CivTable = React.createClass({displayName: "CivTable",
  render: function() {
    var civNodes = this.props.data.map(function (civ) {
      return (
        React.createElement(CivilizationRow, {name: "Celts"})
      );
    });

    return (
      React.createElement("table", {className: "civilizations"}, 
        "civNodes"
      )
    );
  }
});