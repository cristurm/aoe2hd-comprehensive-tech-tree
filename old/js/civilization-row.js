var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  assessAvailability: function (_civ, _item) {
    if (_civ.units_and_techs.indexOf(_item.id) >= 0) {
      return React.createElement("td", {className: "available"}, "Available");
    }

    return React.createElement("td", {className: "unavailable"}, "Unavailable");
  },

  render: function() {
    var self = this;
    var civilization = this.props.civilization;
    var buildings = this.props.buildings;
    var unitsAndTechsCells = [];

    unitsAndTechsCells.push(React.createElement("td", {className: "civilization-name"}, civilization.name));

    $.each(buildings, function (_index, _building) {
      _building.units.map(function (_unit) {
        unitsAndTechsCells.push(self.assessAvailability(civilization, _unit));
      });

      _building.technologies.map(function (_technology) {
        unitsAndTechsCells.push(self.assessAvailability(civilization, _technology));
      });
    });

    return (
      React.createElement("tr", null, 
        unitsAndTechsCells
      )
    );
  }
});