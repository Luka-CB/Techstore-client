import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../components/DeleteModal";
import Dots from "../components/Dots";
import {
  deleteUser,
  getUserAccount,
  logout,
  updateUser,
} from "../redux/actions/authActions";
import {
  resetDeleteModal,
  toggleDeleteModal,
} from "../redux/features/deleteModalSlice";
import {
  msgModalStateHandler,
  resetMsgModal,
} from "../redux/features/msgModalSlice";
import { toggleIsModalOpen } from "../redux/features/statesSlice";
import { resetUpdate } from "../redux/features/users/updateSlice";
import Head from "../components/Head";

const UserAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { account } = useSelector((state) => state.account);
  const { isDeleteModalOpen } = useSelector((state) => state.deleteModal);
  const {
    isLoading: isUpdateUserLodaing,
    isSuccess: isUpdateUserSuccess,
    error,
  } = useSelector((state) => state.updateUser);
  const {
    isLoding: isDeleteUserLoading,
    isSuccess: isDeleteUserSuccess,
    successMsg,
    errorMsg,
  } = useSelector((state) => state.deleteUser);

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
    if (isUpdateUserSuccess) {
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

    if (isUpdateUserSuccess || error) {
      setTimeout(() => {
        dispatch(msgModalStateHandler({ state: false, msg: "", msgType: "" }));
        dispatch(resetUpdate());
      }, 3000);
    }
  }, [dispatch, isUpdateUserSuccess, error]);

  useEffect(() => {
    if (isDeleteUserSuccess) {
      dispatch(
        msgModalStateHandler({
          state: true,
          msg: successMsg,
          msgType: "success",
        })
      );
      dispatch(resetDeleteModal());
      dispatch(toggleIsModalOpen(false));
      setTimeout(() => {
        dispatch(logout());
        window.location.reload();
      }, 2500);
    }
  }, [isDeleteUserSuccess, dispatch]);

  useEffect(() => {
    if (errorMsg) {
      dispatch(
        msgModalStateHandler({
          state: true,
          msg: errorMsg,
          msgType: "error",
        })
      );
      dispatch(resetDeleteModal());
      dispatch(toggleIsModalOpen(false));
      setTimeout(() => {
        dispatch(resetMsgModal());
        dispatch(resetDeleteModal());
      }, 2500);
    }
  }, [errorMsg, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ username, email, password }));
  };

  const handleOpenDeleteModal = (e) => {
    e.stopPropagation();
    dispatch(toggleDeleteModal(true));
    dispatch(toggleIsModalOpen(true));
  };

  return (
    <div className="user-account-container">
      <Head
        title={
          account?.username ? `${account?.username}'s Account` : "My Account"
        }
      />
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
          <button
            type="submit"
            id="update-btn"
            disabled={!username || isUpdateUserLodaing}
          >
            {isUpdateUserLodaing ? <Dots color="#d800a6" /> : "Update"}
          </button>
        </form>

        <button
          type="button"
          id="delete-btn"
          onClick={(e) => handleOpenDeleteModal(e)}
        >
          Delete Account
        </button>
      </div>

      {isDeleteModalOpen ? (
        <DeleteModal
          text="Are you sure? You are deleting your account, this will also delete all your orders and reviews!"
          action={() => dispatch(deleteUser())}
          isLoading={isDeleteUserLoading}
        />
      ) : null}
    </div>
  );
};

export default UserAccount;
