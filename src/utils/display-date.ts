import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export default (date: string | Date) => {
    const postedAt = dayjs(date);

    const format = dayjs().isSame(postedAt, "day") ? "LT" : "YY. MM. DD";

    return postedAt.format(format);
};
