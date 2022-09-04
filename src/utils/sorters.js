import moment from "moment";

export const timeSort = (aStamp, bStamp) =>
  moment(bStamp).valueOf() - moment(aStamp).valueOf();

export const numericalSort = (aNum, bNum) => {
  if (!aNum) aNum = 0;
  if (!bNum) bNum = 0;
  return parseInt(bNum) - parseInt(aNum);
};
