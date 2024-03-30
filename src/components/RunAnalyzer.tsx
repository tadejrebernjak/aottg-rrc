import clsx from "clsx";
import { useState } from "react";

type Row = {
  split: number | null;
  splitPace: number | null;
  totalPace: number | null;
};

export default function RunAnalyzer() {
  const [kills, setKills] = useState<(number | null)[]>(Array(6).fill(null));
  const [damage, setDamage] = useState<(number | null)[]>(Array(6).fill(null));
  const [killResults, setKillResults] = useState<Row[]>(
    new Array(6)
      .fill(null)
      .map(() => ({ split: null, splitPace: null, totalPace: null }))
  );
  const [damageResults, setDamageResults] = useState<Row[]>(
    new Array(6)
      .fill(null)
      .map(() => ({ split: null, splitPace: null, totalPace: null }))
  );
  const [average, setAverage] = useState<number | null>(null);

  const tableRows = ["100s", "200s", "300s", "400s", "500s", "600s"];

  function calculateResults(
    values: (number | null)[],
    target: "kills" | "damage"
  ): Row[] {
    const newResults: Row[] =
      target === "kills" ? [...killResults] : [...damageResults];

    newResults.forEach((row, i) => {
      row.split = i === 0 ? values[i] || 0 : values[i]! - values[i - 1]!;
      row.splitPace = row.split! * 6;
      row.totalPace =
        i === 0 ? values[i]! * 6 : Math.round(values[i]! * (6 / (i + 1)));
    });

    if (target === "kills") {
      checkAverage(values, damage);
    } else {
      checkAverage(kills, values);
    }
    return newResults;
  }

  function checkAverage(kills: (number | null)[], damage: (number | null)[]) {
    if (kills[5] !== null && damage[5] !== null) {
      setAverage(Math.round(((damage[5] / kills[5]) * 100) / 100));
    } else {
      setAverage(null);
    }
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    values: "kills" | "damage"
  ) {
    let newValue: number | null = parseInt(e.target.value);
    newValue = isNaN(newValue) ? null : newValue;

    if (values === "kills") {
      const newValues = [...kills];
      newValues[index] = newValue;
      setKills(newValues);
      setKillResults(calculateResults(newValues, "kills"));
    } else {
      const newValues = [...damage];
      newValues[index] = newValue;
      setDamage(newValues);
      setDamageResults(calculateResults(newValues, "damage"));
    }
  }

  return (
    <div className="bg-slate-900 rounded-md border-2 border-indigo-800">
      <div className="bg-indigo-800 rounded-t-sm">
        <h2 className="text-4xl text-gray-200 text-center p-5">Run Analyzer</h2>
      </div>
      <div className="transition-all duration-500 p-5 overflow-auto">
        <table className="w-full text-center overflow-x-scroll">
          <thead>
            <tr className="text-2xl [&>th]:p-5">
              <th>Time</th>
              <th>Kills</th>
              <th>Damage</th>
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
                      name={"kills-" + time}
                      value={kills[index]?.toString() || ""}
                      onChange={(e) => handleInputChange(e, index, "kills")}
                    />
                  </td>
                  <td className="w-[150px]">
                    <input
                      className="text-center"
                      type="number"
                      name={"kills-" + time}
                      value={damage[index]?.toString() || ""}
                      onChange={(e) => handleInputChange(e, index, "damage")}
                    />
                  </td>
                  <td>
                    {killResults[index].split?.toString() || ""} /{" "}
                    {damageResults[index].split?.toString() || ""}
                  </td>
                  <td>
                    {killResults[index].splitPace?.toString() || ""} /{" "}
                    {damageResults[index].splitPace?.toString() || ""}
                  </td>
                  <td className="font-bold">
                    {killResults[index].totalPace?.toString() || ""} /{" "}
                    {damageResults[index].totalPace?.toString() || ""}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p
          className={clsx(
            average !== null && "block",
            average === null && "hidden",
            "text-center text-2xl mt-5"
          )}
        >
          Damage Average: {average}
        </p>
      </div>
    </div>
  );
}
