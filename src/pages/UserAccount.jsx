import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../components/DeleteModal";
import { getUserAccount, updateUser } from "../redux/actions/authActions";
import { toggleDeleteModal } from "../redux/features/statesSlice";
import MsgModal from "../components/MsgModal";
import { msgModalStateHandler } from "../redux/features/msgModalSlice";
import { resetUpdate } from "../redux/features/users/updateSlice";

const UserAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { showMsgModal, msg, msgType } = useSelector((state) => state.msgModal);
  const { deleteModal } = useSelector((state) => state.states);
  const { account } = useSelector((state) => state.account);
  const { isLoading, isSuccess, error } = useSelector(
    (state) => state.updateUser
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!account.username) {
      dispatch(getUserAccount());
    } else {
      setUsername(account.username);
      setEmail(account.email);
    }
  }, [account, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        msgModalStateHandler({
          state: true,
          msg: "Updated Successfully!",
          msgType: "success",
        })
      );
    }

    if (error) {
      dispatch(
        msgModalStateHandler({ state: true, msg: error, msgType: "error" })
      );
    }

    if (isSuccess || error) {
      setTimeout(() => {
        dispatch(msgModalStateHandler({ state: false, msg: "", msgType: "" }));
        dispatch(resetUpdate());
      }, 3000);
    }
  }, [dispatch, isSuccess, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ username, email, password }));
  };

  return (
    <div className="user-account-container">
      <div className="account-form-container">
        <div className="user-info">
          <p className="info-text">
            <span id="name">{account?.username}</span> registered{" "}
            <span id="date">{account?.date}</span> ago
          </p>
        </div>
        <h1 id="form-container-text">Update or Delete Your Account</h1>
        <form id="account-form" onSubmit={submitHandler}>
          <input
            type="text"
            className="form-input"
            placeholder="Update Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            className="form-input"
            placeholder="Update Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-input"
            placeholder="Update Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="provider">
            <label>Signed In With</label>
            <div className="provider-value">
              <span>{account.provider}</span>
            </div>
          </div>
          <button type="submit" id="update-btn" disabled={!username}>
            Update
          </button>
        </form>

        <button
          type="button"
          id="delete-btn"
          onClick={() => dispatch(toggleDeleteModal(true))}
        >
          Delete Account
        </button>
      </div>

      {deleteModal && (
        <DeleteModal text="Are you sure? You are deleting your account, this will also delete all orders!" />
      )}

      {showMsgModal && <MsgModal classname={msgType} text={msg} />}
    </div>
  );
};

export default UserAccount;
