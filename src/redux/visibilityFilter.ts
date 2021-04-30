import { SET_FILTER } from "./actions";
import { VISIBILITY_FILTERS } from '../constans';

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;