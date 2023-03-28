import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMsgModal: false,
  msg: "",
  msgType: "",
};

const msgModalReducer = createSlice({
  name: "msgModalReducer",
  initialState,
  reducers: {
    resetMsgModal: () => initialState,
    msgModalStateHandler: (state, { payload }) => {
      state.showMsgModal = payload.state;
      state.msg = payload.msg || "";
      state.msgType = payload.msgType || "";
    },
  },
});

export const { resetMsgModal, msgModalStateHandler } = msgModalReducer.actions;

export default msgModalReducer.reducer;
