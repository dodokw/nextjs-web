import React, { createContext, useContext, useReducer } from "react";

//유저 타입
export interface User {
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

//유저 상태
interface State {
  authenticated: boolean;
  user: User | null;
  loading: boolean;
}

//유저 초기값
const StateContext = createContext<State>({
  authenticated: false,
  user: null,
  loading: true,
});

const DispatchContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  //actiontype
  // type Action ={
  //   type: string;
  //   payload: any;
  // }

  //유저 상태 변경
  const LoginReducer = (state: State, action: any) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          authenticated: true,
          user: action.payload,
        };
      case "LOGOUT":
        return {
          ...state,
          authenticated: false,
          user: null,
        };
      case "STOP_LOADING":
        return {
          ...state,
          loading: false,
        };
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };

  const [state, defaultDispatch] = useReducer(LoginReducer, {
    authenticated: false,
    user: null,
    loading: true,
  });

  const dispatch = (action: any) => {
    defaultDispatch(action);
  };

  console.log("state", state);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);
