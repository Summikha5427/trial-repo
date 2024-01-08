import "./App.css";
import Account from "./components/Account.js";
import Bonus from "./components/Bonus.js";
import { useSelector } from "react-redux";

function App() {
  //using hook to create the SELECTORS from the Store to acces the properties
  // --useSelector is a hook and {account , bonus } are being selected to the particular Value
  //of that patircular selected state

  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const account = useSelector((state) => state.account);

  return (
    <div className="App">
      <h4>App</h4>
      {account.pending ? (
        <p>loading....</p>
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <h3>Current Amount : {amount} </h3>
      )}

      <h3>Total Bonus : {points} </h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
