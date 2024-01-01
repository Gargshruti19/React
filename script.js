// const heading = React.createElement("h1", {}, "Hello World !! using React");

const root = ReactDOM.createRoot(document.getElementById("root"));

const h1 = React.createElement(
	"h1",
	{
		id: "title",
	},
	"Heading 1"
);
const h2 = React.createElement(
	"h2",
	{
		id: "title",
	},
	"Heading 2"
);

const container = React.createElement(
	"div",
	{
		id: "container",
	},
	[h1, h2]
);

root.render(container);
