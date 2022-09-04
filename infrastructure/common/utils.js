import { Cache } from "./cache";

const defaultHeader = {
  "Content-Type": "application/json",
  "X-Auth-Token": "ySmexXm4GDjPszlMYK6jbrgodZvYPmXl",
};

export const ReqHeader = Cache.checkItem("accessToken")
  ? {
      ...defaultHeader,
      Authorization: `Bearer ${Cache.getItem("accessToken")}`,
    }
  : { ...defaultHeader };
