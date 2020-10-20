const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Leela",
      animal: "Dog",
      breed: "Ausie",
    }),
    React.createElement(Pet, {
      name: "Ada",
      animal: "Cat",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Droggo",
      animal: "Dragon",
      breed: "Anglo-Saxon Red Coat",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
