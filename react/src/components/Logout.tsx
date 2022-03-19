import { useEffect } from "react";

export const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("tokenData");
    window.location.href = "/login";
  }, []);

  return <></>;
};
