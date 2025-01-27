import { axiosInstance } from "./index";

// Register a new user
export const RegisterUser = async (value) => {
  try {
    const response = await axiosInstance.post("api/users/register", value);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Login a user
export const LoginUser = async (value) => {
  try {
    const response = await axiosInstance.post("api/users/login", value);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// get current user
export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("api/users/current");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
// Forget Password
export const ForgetPassword = async (values) => {
  try {
    const response = await axiosInstance.post(
      "api/users/forgetPassword",
      values
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
// Reset Password
export const ResetPassword = async (values) => {
  try {
    const response = await axiosInstance.post(
      "api/users/resetPassword",
      values
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
