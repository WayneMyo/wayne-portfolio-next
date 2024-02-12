import { FC, createContext, useCallback, useReducer, ReactNode } from "react";

// Create Context
interface ContextType {
  nav: string;
  changeNav: (value: string, toggleValue: boolean) => void;
  toggle: boolean;
}

const Context = createContext<ContextType>({
  nav: "home",
  changeNav: () => {},
  toggle: false,
});

// Type
const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
};
const { NAV, TOGGLE } = type;

// Initial Value
interface InitialState {
  nav: string;
  toggle: boolean;
}

const initialState: InitialState = {
  nav: "home",
  toggle: false,
};

// Reducer
interface Action {
  type: string;
  payload: any;
}

const reducer = (state: InitialState, action: Action): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    default:
      return state;
  }
};

interface StateProps {
  children: ReactNode;
}

const State: FC<StateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = useCallback((value: string, toggleValue: boolean) => {
    dispatch({
      type: NAV,
      payload: value,
    });
    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);

  const { nav, toggle } = state;

  return (
    <Context.Provider
      value={{
        nav,
        changeNav,
        toggle,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default State;
export { Context };
