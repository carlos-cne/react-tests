import React from "react";

function App() {
  const [text, setText] = React.useState("");
  function submit(e: any) {
    e.preventDefault();
    alert(text);
  }
  return (
    <div className="App">
      <h1>Vamos fazer testes!</h1>
      <form onSubmit={e => submit(e)}>
        <input
          type="text"
          placeholder="digite qualquer coisa"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Ok</button>
      </form>
    </div>
  );
}

export default App;
