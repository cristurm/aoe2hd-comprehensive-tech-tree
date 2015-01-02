var CivilizationRow = React.createClass({displayName: "CivilizationRow",
  render: function() {
    return (
      React.createElement("table", {className: "civilizations"}, 
        React.createElement(Civilization, {name: "Celts"}), 
        React.createElement(Civilization, {name: "Persians"})
      )
    );
  }
});