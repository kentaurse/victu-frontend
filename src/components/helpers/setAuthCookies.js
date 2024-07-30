import Cookies from "universal-cookie";

const setAuthCookies = props => {
  const cookies = new Cookies();

  cookies.set("userAuthData", { ...props }, { maxAge: 7200 });
};

export default setAuthCookies;
