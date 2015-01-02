var CivTable = React.createClass({displayName: "CivTable",
  render: function() {
    return (
      React.createElement("table", {className: "civilizations"}, 
        React.createElement(Civilization, {name: "Celts"}), 
        React.createElement(Civilization, {name: "Persians"})
      )
    );
  }
});