import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, getUserAccount } from "../actions";

function Account() {
  const [value, setValue] = useState(0);
  
  const amount = useSelector((state) => state.account.amount); //to get the value of the state from the selected State
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch(); //to perform the action

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <h3>Points:${points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} + </button>
        <button onClick={() => dispatch(getUserAccount(1))}>
          Init Account </button>
      </div>
    </div>
  );
}

export default Account;
