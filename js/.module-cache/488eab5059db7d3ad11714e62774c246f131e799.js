var CivTable = React.createClass({displayName: "CivTable",
  render: function() {
    return (
      React.createElement("table", {className: "civilizations"}, 
        React.createElement(CivilizationRow, {name: "Celts"}), 
        React.createElement(CivilizationRow, {name: "Persians"})
      )
    );
  }
});