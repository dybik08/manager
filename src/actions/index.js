import { EMAIL_CHANGED} from "./const";

export const emailChanged = (text) => {
  return {
      type: EMAIL_CHANGED,
      payload: text,
  };
};