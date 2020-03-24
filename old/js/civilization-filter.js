var CivilizationFilter = React.createClass({displayName: "CivilizationFilter",
  handleChange: function () {
    this.props.onUserInput(this.refs._civilizationId.getDOMNode().value);
  },

  render: function() {
    var buildings = this.props.state.unitsAndTechs.buildings;
    var civilizations = this.props.state.civilizations;
    var civiliaztionsOptions = [React.createElement("option", {value: "all"}, "All")];

    // if (buildings) {
    //   buildings.map(function (_b) {
    //     console.log(_b);
    //   });
    // }

    if (civilizations) {
      civilizations.map(function (_civilization) {
        civiliaztionsOptions.push(React.createElement("option", {value: _civilization.id}, _civilization.name));
      });
    }

    return (
      React.createElement("form", null, 
        React.createElement("label", {htmlFor: "civilizations-filter"}, "Civilizations: "), 
        React.createElement("select", {id: "civilizations-filter", ref: "_civilizationId", onChange: this.handleChange}, 
          civiliaztionsOptions
        )
      )
    );
  }
});