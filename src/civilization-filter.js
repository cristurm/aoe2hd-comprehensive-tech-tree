var CivilizationFilter = React.createClass({
  handleChange: function () {
    this.props.onUserInput(this.refs._civilizationId.getDOMNode().value);
  },

  render: function() {
    var buildings = this.props.state.unitsAndTechs.buildings;
    var civilizations = this.props.state.civilizations;
    var civiliaztionsOptions = [<option value="all">All</option>];

    // if (buildings) {
    //   buildings.map(function (_b) {
    //     console.log(_b);
    //   });
    // }

    if (civilizations) {
      civilizations.map(function (_civilization) {
        civiliaztionsOptions.push(<option value={_civilization.id}>{_civilization.name}</option>);
      });
    }

    return (
      <form>
        <label htmlFor="civilizations-filter">Civilizations: </label>
        <select id="civilizations-filter" ref="_civilizationId" onChange={this.handleChange}>
          {civiliaztionsOptions}
        </select>
      </form>
    );
  }
});