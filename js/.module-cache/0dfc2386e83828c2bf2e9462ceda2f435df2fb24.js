var CivTable = React.createClass({displayName: "CivTable",
  render: function() {
    debugger;
    var civNodes = this.props.data.civilizations.map(function (civ) {
      return (
        React.createElement(CivilizationRow, {name: civ.name})
      );
    });

    return (
      React.createElement("table", {className: "civilizations"}, 
        civNodes
      )
    );
  }
});