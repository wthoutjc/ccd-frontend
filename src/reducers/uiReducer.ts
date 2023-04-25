import { createSlice } from "@reduxjs/toolkit";

//Interfaces
import { INotification, UI } from "@/interfaces";
import { AppState } from "@/store";

const initialState: UI = {
  notifications: [],
  isMobile: false,
};

interface NewNotification {
  payload: INotification;
}
interface RemoveNotification {
  payload: string;
}

const uiSlice = createSlice({
  name: "[UI]",
  initialState,
  reducers: {
    newNotification: (state: UI, action: NewNotification) => {
      state.notifications = [...state.notifications, action.payload];
    },
    removeNotification: (state: UI, action: RemoveNotification) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    setIsMobile: (state: UI, action: { payload: boolean }) => {
      state.isMobile = action.payload;
    },
  },
});

export { uiSlice };

// Actions
export const { newNotification, removeNotification, setIsMobile } =
  uiSlice.actions;

// Select to access to the store
export const selectUI = (state: AppState) => state.auth;

export default uiSlice.reducer;
