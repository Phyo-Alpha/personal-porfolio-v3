import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const calculateWorkDuration = (startDate: Date, endDate: Date) => {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Handle case where we haven't completed a full month yet
  if (endDate.getDate() < startDate.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months = 11;
    }
  }

  if (years === 0) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  } else {
    return `${years} year${years !== 1 ? "s" : ""}, ${months} month${
      months !== 1 ? "s" : ""
    }`;
  }
};
