import {APIClient} from './axios';
import {GET_USER_HOLDINGS} from './endPoints';
import {ERROR_MESSAGES} from '../constants/string';

export async function getUserHoldingApi() {
  const response = await APIClient().get(GET_USER_HOLDINGS);
  if (response?.status == 200) {
    return response?.data;
  } else {
    throw ERROR_MESSAGES.SOMETHING_WENT_WRONG;
  }
}
