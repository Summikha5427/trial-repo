import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";

function Bonus() {
  const amount = useSelector((state) => state.account.amount); //to get the value of the state from the selected State
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch(); //to perform the action

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Amount : ${amount}</h3>
        <h3>Total Point : ${points}</h3>
        <button onClick={() => dispatch(increment())}>
          Increment +
        </button>
      </div>
    </div>
  );
}

export default Bonus;
