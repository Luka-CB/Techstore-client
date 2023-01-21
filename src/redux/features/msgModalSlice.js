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
    msgModalStateHandler: (state, { payload }) => {
      state.showMsgModal = payload.state;
      state.msg = payload.msg || "";
      state.msgType = payload.msgType || "";
    },
  },
});

export const { msgModalStateHandler } = msgModalReducer.actions;

export default msgModalReducer.reducer;
