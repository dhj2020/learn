(function() {
    var Divider = React.createClass({displayName: "Divider",
        render: function() {
        	var text = 'Question';
            return (
                React.createElement("div", {className: "divider"}, 
        			React.createElement("h2", null, text), React.createElement("hr", null)
        		)
            );
        }
    })
})();