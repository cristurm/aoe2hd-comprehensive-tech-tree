var AOE2HDTechTree = React.createClass({
  getInitialState: function() {
    return {data: [{"name": "try random"}]};
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
  },
  render: function() {
    return (
      <div className="aoe2hd-comprehensive-tech-tree">
        <CivFilter />
        <CivTable data={this.state.data} />
      </div>
    );
  }
});

React.render(
  <AOE2HDTechTree url="../data/civilizations.json" />,
  document.getElementById('app')
);