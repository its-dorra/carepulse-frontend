import { cookies } from "next/headers";

export function setCookies(setCookie: string[]) {
  setCookie.forEach((cookieString) => {
    const [nameValue, ...options] = cookieString.split("; ");
    const [name, value] = nameValue.split("=");

    const cookieOptions: any = {};
    options.forEach((option) => {
      const [key, val] = option.split("=");
      if (key === "Max-Age") {
        cookieOptions.maxAge = Number(val);
      }
      if (key === "HttpOnly") cookieOptions.httpOnly = true;
      if (key === "SameSite") cookieOptions.sameSite = val.toLowerCase();
    });
    if (cookieOptions.maxAge && !cookieOptions.expires) {
      cookieOptions.expires = new Date(
        Date.now() + cookieOptions.maxAge * 1000,
      );
    }
    cookies().set(name, value, cookieOptions);
  });
}
