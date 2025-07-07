
export const base_url = import.meta.env.VITE_API_URL || "http://localhost:3000/api/";

// auth urls
export const login_url = "auth/login";
export const register_url = "auth/register";
export const forgot_password="auth/forgot-password";
export const verify_otp="auth/verify-otp";
export const reset_password="auth/reset-password";
export const logout_url="auth/logout";
export const auth_token_key = "access";
// get authorization token
export const getAuthToken = () => {
  // const token = JSON.parse(localStorage.getItem(auth_token_key)).token;
  const token = localStorage.getItem(auth_token_key);
  return `Bearer ${token}`;
};
