var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  render: function() {
    var buildings = $.each(this.props.civ, function (building) {
      debugger;
      return (
        {building}
      );
    });

    return (
      React.createElement("tr", {className: this.props.name}, 
        React.createElement("td", null, this.props.name), 
        React.createElement("td", null, buildings)
      )
    );
  }
});