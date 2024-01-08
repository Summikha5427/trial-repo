import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reducers/reward.js";

function Reward() {
  const points = useSelector((state) => state.reward.points);
  const dispatch = useDispatch(); //to perform the action

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Points: ${points}</h3>
        <button onClick={() => dispatch(increment())}> 
          Increment + 
        </button>
        <button onClick={() => dispatch(incrementByAmount(6))}> 
          Increment by 6
        </button>
      </div>
    </div>
  );
}

export default Reward;
