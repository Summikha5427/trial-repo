import { useSelector,useDispatch } from "react-redux";
import "./Carts.css";
import { deleteAsync, updateAsync } from "./CartsSlice";


export function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch =  useDispatch();

  const handleChange = (e,id) => {
   console.log(e.target.value);
    dispatch(updateAsync({id,change:{quantity:+e.target.value}}));
  };

  return (
    <div>
      <div>
        {items.map((item) => <div className="cart-item">
            <img
              src={item.thumbnail}
              alt=""
            />
            <div className="description">
              <p>{item.title}</p>
              <span>{item.brand}</span>
              <strong>{item.price}</strong>
            </div>
            <div className="quantity">
              Quantity
              <select value={item.quantity} onChange={(e)=>handleChange(e,item.id)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className="Close">
              <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
            </div>
          </div>
        )}
      </div>
      {/* The reduce() function is not specific to React; it is a built-in JavaScript method that operates on arrays. It is used to reduce an array to a single value by executing a provided function for each element of the array. This function is often used for various tasks, such as summing up values, finding the maximum or minimum element, or transforming the data within an array.
              =>  array.reduce(callback[, initialValue]) */}

      <h1>Total: {items.reduce((acc,item) => item.price*item.quantity + acc , 0)} </h1>
    </div>
  );
}
