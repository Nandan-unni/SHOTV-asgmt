import { get } from "./common/base";

export const getFullSchedule = () => {
  return get(`schedule/full`);
};
