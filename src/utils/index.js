import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import axios from "axios";
import { auth_token_key, base_url, getAuthToken } from "./ApiUrls";
import { toast } from "react-toastify";
export const mergeClassNames = (...classNames) => twMerge(clsx(...classNames));
export const apiResponseError = (error) =>
  error.data.message ? error.data.message : "Something went wrong";
export const queryFn = async (url) => {
  try {
    const result = await axios(base_url + "/" + url, {
      headers: {
        Authorization: getAuthToken(),
      },
    });
    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError;
    toast.error(err.response.data.message);
    unAuthorizationHandler(err);
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};
export const tryCatchFn = async (
  action,
  successCallback = () => {},
  errorCallback = () => {},
  actionType = "success"
) => {
  try {
    const data = await action();
    if (successCallback !== "null") {
      toast.dismiss();
      successCallback(data);
      if (actionType === "null") {
        return;
      }
      if (actionType === "success") {
        toast.success(data.message);
      } else if ("warning") {
        toast.warning(data.message);
      } else {
        toast.danger(data.messsage);
      }
    }
  } catch (error) {
    console.error(error);
    if (error.status === 401) {
      toast.error(error.data.message);
      removeRtkQueryApisData();
      store.dispatch(removeLoginData());
    }
    errorCallback(error);
    toast.error(apiResponseError(error));
  }
};
