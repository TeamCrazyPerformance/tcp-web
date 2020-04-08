import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export default (date: string | Date, options = { format: "YY. MM. DD" }) => {
    const postedAt = dayjs(date);

    const format = dayjs().isSame(postedAt, "day") ? "LT" : options.format;

    return postedAt.format(format);
};
