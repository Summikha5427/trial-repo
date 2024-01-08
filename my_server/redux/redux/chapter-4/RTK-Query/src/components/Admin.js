import {
  useGetAccountsQuery,
  useAddAccountsMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} from "../api/adminSlice";

function Admin() {
  const { data, error, isLoading , isSuccess } = useGetAccountsQuery(); //pre-built in names "{data,error,isLoading}
  const [addAccounts] = useAddAccountsMutation(); //creates an array od destructuring
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {isLoading ? <p>Loading...</p> : null}
        {isSuccess && data &&
          data.map((accounts) => (
            <p>
              {accounts.id} : {accounts.amount}
              <button
                onClick={() => {
                  deleteAccount(accounts.id);
                }}
              >
                Delete Account
              </button>
              <button onClick={() => updateAccount({ id : accounts.id ,amount :777})}> 
                Update Account
              </button>
            </p>
          ))}
        <button onClick={() => addAccounts(101, data.length + 1)}>
          AddAccount
        </button>
      </div>
    </div>
  );
}

export default Admin;
