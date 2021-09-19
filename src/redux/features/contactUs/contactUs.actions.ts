import ENDPOINTS from 'src/redux/urls';
import { apiRequest } from 'src/services/apiRequest';
import { createAsyncAction } from 'src/redux/utils/actions';
import { MessageDataInterface } from './contactUs.interface';
import { DispatchType } from 'src/redux';
const CREATE_CONTACT_MESSAGE = 'CREATE_CONTACT_MESSAGE';
export const createContactMessage = createAsyncAction(
  CREATE_CONTACT_MESSAGE,
  (
      data: MessageDataInterface | {} = {},
      onSuccess: () => {},
      onFailure: () => {}
    ) =>
    async (dispatch: DispatchType) => {
      return await apiRequest({
        dispatch,
        actionType: CREATE_CONTACT_MESSAGE,
        method: 'POST',
        url: ENDPOINTS.CREATE_CONTACT_MESSAGE,
        data: data,
        onSuccess,
        onFailure,
      });
    }
);
