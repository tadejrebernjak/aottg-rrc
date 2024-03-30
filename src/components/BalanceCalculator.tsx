import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

type BalanceForm = {
  kills: number | null;
  deaths: number | null;
  highestDamage: number | null;
  totalDamage: number | null;
};

const nameMap = new Map<keyof BalanceForm, string>([
  ["kills", "Kills"],
  ["deaths", "Deaths"],
  ["highestDamage", "Highest Damage Hit"],
  ["totalDamage", "Total Damage"],
]);

const keys: (keyof BalanceForm)[] = Array.from(nameMap.keys());

export default function BalanceCalculator() {
  const [form, setForm] = useState<BalanceForm>({
    kills: null,
    deaths: null,
    highestDamage: null,
    totalDamage: null,
  });
  const [score, setScore] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  function updateScore(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(e.target.value);
    setForm({
      ...form,
      [e.target.name]: !isNaN(newValue) ? newValue : null,
    });
  }

  useEffect(() => {
    let property: keyof BalanceForm;
    for (property in form) {
      if (form[property] === null) {
        setScore(null);
        return;
      }
    }

    let balance =
      ((1200 * form.kills! + form.totalDamage!) *
        (10000 + form.highestDamage!)) /
      (5 * 100000 * (20 + form.deaths!));
    balance = Math.round(balance * 100) / 100;

    setScore(balance);
  }, [form]);

  return (
    <div className="bg-slate-900 rounded-md border-2 border-rrc-red-dark">
      <div
        className="bg-rrc-red-dark rounded-t-sm cursor-pointer"
        onMouseUp={() => setOpen(!open)}
      >
        <h2 className="text-4xl text-gray-200 text-center p-5 relative group">
          Balance Calculator
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
          "flex flex-col gap-5 transition-all duration-500 overflow-hidden",
          open && "max-h-[500px] p-5",
          !open && "max-h-0 p-0"
        )}
      >
        {keys.map((key) => {
          return (
            <div key={key}>
              <label htmlFor={key}>{nameMap.get(key)}</label>
              <input
                id={key}
                type="number"
                name={key}
                value={form[key]?.toString() || ""}
                onChange={(e) => updateScore(e)}
              />
            </div>
          );
        })}
        <h3 className="text-center text-4xl font-lithosproblack break-words text-rrc-damage text-shadow">
          {score}
        </h3>
      </div>
    </div>
  );
}
