import Cookies from "universal-cookie";

export interface authCookies {
  isAuth: Boolean;
  uid: string;
}

export const setAuthCookies = (props: authCookies) => {
  const cookies = new Cookies();
  cookies.set("userAuthData", props, { maxAge: 7200 });
};
