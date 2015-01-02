var AOE2HDTechTree = React.createClass({displayName: "AOE2HDTechTree",
  getInitialState: function() {
    return {data: ["try random"]};
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
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      React.createElement("div", {className: "aoe2hd-comprehensive-tech-tree"}, 
        React.createElement(CivFilter, null), 
        React.createElement(CivTable, {data: this.state.data})
      )
    );
  }
});

React.render(
  React.createElement(AOE2HDTechTree, {url: "../data/civilizations.json", pollInterval: 2000}),
  document.getElementById('app')
);