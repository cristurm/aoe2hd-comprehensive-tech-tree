var AOE2HDTechTree = React.createClass({
  getInitialState: function() {
    return {
      unitsAndTechs: {},
      civilizations: []
    };
  },

  loadData: function() {
    var unitsAndTechs, civilizations;

    $.ajax({
      url: this.props.unitsAndTechsUrl,
      dataType: 'json',
      success: function(_unitsAndTechs) {
        this.setState({unitsAndTechs: _unitsAndTechs});
      }.bind(this),
      error: function(_xhr, _status, _err) {
        console.error(this.props.unitsAndTechsUrl, _status, _err.toString());
      }.bind(this)
    });

    $.ajax({
      url: this.props.civsUrl,
      dataType: 'json',
      success: function(_civilizations) {
        this.setState({civilizations: _civilizations});
      }.bind(this),
      error: function(_xhr, _status, _err) {
        console.error(this.props.civsUrl, _status, _err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadData();
  },

  render: function() {
    return (
      <div className="aoe2hd-comprehensive-tech-tree">
        <CivilizationsTable unitsAndTechs={this.state.unitsAndTechs} civilizations={this.state.civilizations} />
      </div>
    );
  }
});

React.render(
  <AOE2HDTechTree unitsAndTechsUrl="data/all_units_and_techs.json" civsUrl="data/civilizations.json" />,
  document.getElementById('app')
);