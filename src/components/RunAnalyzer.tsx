import { useEffect, useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

type Row = {
  split: number | null;
  splitPace: number | null;
  totalPace: number | null;
};

export default function RunAnalyzer() {
  const [open, setOpen] = useState<boolean>(true);
  const [values, setValues] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [rows, setRows] = useState<Row[]>([
    { split: null, splitPace: null, totalPace: null },
    { split: null, splitPace: null, totalPace: null },
    { split: null, splitPace: null, totalPace: null },
    { split: null, splitPace: null, totalPace: null },
    { split: null, splitPace: null, totalPace: null },
    { split: null, splitPace: null, totalPace: null },
  ]);

  const tableRows = ["100s", "200s", "300s", "400s", "500s", "600s"];

  useEffect(() => {
    const newRows = [...rows];
    newRows.forEach((row, i) => {
      row.split = i === 0 ? values[i] || 0 : values[i]! - values[i - 1]!;
      row.splitPace = row.split! * 6;
      row.totalPace =
        i === 0 ? values[i]! * 6 : Math.round(values[i]! * (6 / (i + 1)));
    });

    setRows(newRows);
  }, [values]);

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    let newValue: number | null = parseInt(e.target.value);
    newValue = isNaN(newValue) ? null : newValue;

    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  }

  return (
    <div className="bg-slate-900 rounded-md border-2 border-indigo-800">
      <div
        className="bg-indigo-800 rounded-t-sm cursor-pointer"
        onMouseUp={() => setOpen(!open)}
      >
        <h2 className="text-4xl text-gray-200 text-center p-5 relative group">
          Run Analyzer
          <FontAwesomeIcon
            icon={faCaretDown}
            className={clsx(
              "absolute right-5 group-hover:text-gray-300 transition-all duration-500",
              open && "rotate-180"
            )}
          />
        </h2>
      </div>
      <div
        className={clsx(
          "transition-all duration-500 overflow-hidden",
          open && "max-h-[1000px] p-5",
          !open && "max-h-0 p-0"
        )}
      >
        <table className="w-full text-center">
          <thead>
            <tr className="text-2xl [&>th]:p-5">
              <th>Time</th>
              <th>Kills/Damage</th>
              <th>Split</th>
              <th>Split Pace</th>
              <th>Total Pace</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {tableRows.map((time, index) => {
              return (
                <tr key={time} className="[&>td]:py-1">
                  <td className="font-bold italic">{time}</td>
                  <td className="w-[150px]">
                    <input
                      className="text-center"
                      type="number"
                      value={values[index]?.toString() || ""}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </td>
                  <td>{rows[index].split?.toString() || ""}</td>
                  <td>{rows[index].splitPace?.toString() || ""}</td>
                  <td>{rows[index].totalPace?.toString() || ""}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
