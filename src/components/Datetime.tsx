import { LOCALE } from "@config";
import { _t } from "lang/lang";

interface DatetimesProps {
  date: string | Date;
  updated: string | Date | undefined | null;
}

interface Props extends DatetimesProps {
  size?: "sm" | "lg";
  className?: string;
  isPost?: boolean;
}

export default function Datetime({
  date,
  updated,
  size = "sm",
  className = "",
  isPost = false,
}: Props) {
  return (
    <div
      className={`flex items-center space-x-2 opacity-80 ${className}`.trim()}
    >
      {updated && updated > date ? (
        <>
          <div className="flex flex-col space-y-1">
            <span className={`${size === "sm" ? "text-sm" : "text-base"} `}>
              <FormattedDatetime date={updated} /> {_t.date.updated}
            </span>
            {isPost && (
              <span className={`${size === "sm" ? "text-sm" : "text-base"}`}>
                <FormattedDatetime date={date} /> {_t.date.published}
              </span>
            )}
          </div>
        </>
      ) : (
        <div>
          <span className={`${size === "sm" ? "text-sm" : "text-base"}`}>
            <FormattedDatetime date={date} />
          </span>
          <span className="sr-only">{_t.date.published}</span>
        </div>
      )}
    </div>
  );
}

const FormattedDatetime = ({ date }: { date: string | Date }) => {
  const myDatetime = new Date(date);
  const fmtDate = formatDate(date);
  const fmtTime = formatTime(date);

  return (
    <>
      <time
        dateTime={myDatetime.toISOString()}
        title={`${fmtDate}  ${fmtTime}`}
      >
        {fmtDate}
      </time>
      {/* <span aria-hidden="true"> </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
      <span className="text-nowrap">{fmtTime}</span> */}
    </>
  );
};

const formatDate = (date: string | Date) => {
  const myDatetime = new Date(date);

  // const fmtDate = myDatetime.toLocaleDateString(LOCALE.langTag, {
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric",
  // });
  const fmtDate = `${myDatetime.getFullYear()}/${String(myDatetime.getMonth() + 1).padStart(2, "0")}/${String(myDatetime.getDate()).padStart(2, "0")}`;
  return fmtDate;
};

const formatTime = (date: string | Date) => {
  const myDatetime = new Date(date);

  const fmtTime = myDatetime.toLocaleTimeString(LOCALE.langTag, {
    hour: "2-digit",
    minute: "2-digit",
  });
  // const fmtTime =`${String(myDatetime.getHours()).padStart(2, "0")}:${String(myDatetime.getMinutes()).padStart(2, "0")}`;
  return fmtTime;
};
