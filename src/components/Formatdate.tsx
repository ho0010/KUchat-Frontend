import { differenceInDays, format } from "date-fns";

const Formatdate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const now = new Date();
  const difference = differenceInDays(now, date);

  if (difference < 1) {
    return format(date, "HH:mm");
  } else {
    return format(date, "yyyy-MM-dd");
  }
};
export default Formatdate;
