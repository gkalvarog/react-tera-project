import { format, parseISO } from "date-fns";

export const getFriendlyDate = (str) => format(parseISO(str), "dd/MM/yyyy");
