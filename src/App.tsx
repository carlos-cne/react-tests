import React from "react";
import { useCarlos } from "./common/customHooks/hooks";

interface AppProps {
  showErrors: boolean;
}

const App: React.FC<AppProps> = () => {
  function submit(e: any) {
    e.preventDefault();
    alert(input.value);
  }
  const [showErrors, setShowErrors] = React.useState(false);

  const rules = ["8 characteres", "lowercase word", "uppercase word"];

  const Errors = ({ active }: any) => {
    return (
      active && (
        <ul>
          {rules.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )
    );
  };

  const input = useCarlos("");

  function CheckError() {
    function onChange(e: any) {
      setShowErrors(e.target.value.length < 8);
      input.onChange(e);
    }
    return { onChange };
  }

  const memoized = React.useMemo(() => <Errors active={showErrors} />, [
    showErrors
  ]);

  return (
    <form onSubmit={e => submit(e)}>
      <input
        type="text"
        placeholder="digite qualquer coisa"
        value={input.value}
        onChange={e => CheckError().onChange(e)}
      />
      <button type="submit">Ok</button>
      {memoized}
      {/* <Errors active={showErrors} />1 */}
    </form>
  );
};

export default App;
