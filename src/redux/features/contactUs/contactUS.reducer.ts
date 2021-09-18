import { ActionReducerInterface } from 'src/redux/redux.interface';
import { actionSuccess, actionFailure } from 'src/redux/utils/actions';
import { createContactMessage } from 'src//redux/features/contactUs';

export const initialState = {
  messages: [],
};

export const contactUsReducer = (
  state = initialState,
  action: ActionReducerInterface
) => {
  switch (action.type) {
    case actionSuccess(createContactMessage.type):
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};
