var CivFilter = React.createClass({displayName: "CivFilter",
  render: function() {
    return (
      React.createElement("div", {className: "civilization-filter"}, 
        "Filter"
      )
    );
  }
});

var CivTable = React.createClass({displayName: "CivTable",
  render: function() {
    return (
      React.createElement("table", {className: "civlizations"}, 
        React.createElement("tr", null, React.createElement("td", null, "Civilizations Table here!"))
      )
    );
  }
});