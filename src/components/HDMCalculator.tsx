import clsx from "clsx";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";

type HDMForm = {
  highestHit: number | null;
  abyJumper: number | null;
  spiral: number | null;
  traditionalCut: number | null;
  correctionalCut: number | null;
  dGyro: number | null;
  rSpin: number | null;
  tradbyFlyby: number | null;
  hydraVector: number | null;
  airEquator: number | null;
};

const nameMap = new Map<keyof HDMForm, string>([
  ["highestHit", "Highest Damage Hit"],
  ["abyJumper", "Highest Damage on Aberrant or Jumper"],
  ["spiral", "Spiral"],
  ["traditionalCut", "Traditional Cut"],
  ["correctionalCut", "Correctional Cut"],
  ["dGyro", "D-Gyro"],
  ["rSpin", "R-Spin"],
  ["tradbyFlyby", "Trad-by or Fly-by"],
  ["hydraVector", "Hydra or Vector"],
  ["airEquator", "Air Equator"],
]);

export default function HDMCalculator() {
  const [form, setForm] = useState<HDMForm>({
    highestHit: null,
    abyJumper: null,
    spiral: null,
    traditionalCut: null,
    correctionalCut: null,
    dGyro: null,
    rSpin: null,
    tradbyFlyby: null,
    hydraVector: null,
    airEquator: null,
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
    let property: keyof HDMForm;
    for (property in form) {
      if (form[property] === null) {
        setScore(null);
        return;
      }
    }

    const values = Object.values(form);
    let hdm = values.reduce((acc, value) => acc! + value!, 0)! / values.length;
    hdm = Math.round(hdm * 100) / 100;

    setScore(hdm);
  }, [form]);

  function handleExport() {
    const blob = new Blob([JSON.stringify(form, null, "\t")], {
      type: "application/json",
    });
    saveAs(blob, "HDM.json");
  }

  function readFile(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target!.result);
      reader.onerror = (err) => reject(err);

      reader.readAsText(file);
    });
  }

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.files === null || e.currentTarget.files === undefined)
      return;
    const file = e.currentTarget.files[0];
    if (file === undefined) return;

    try {
      const data = await readFile(file);
      const object = JSON.parse(data as string);

      if (Object.keys(object).every((key) => form.hasOwnProperty(key))) {
        setForm(object);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const hdmFormProperties: (keyof HDMForm)[] = Object.keys(
    form as HDMForm
  ) as (keyof HDMForm)[];

  return (
    <div className="bg-slate-900 rounded-md border-2 border-rrc-blue-lighter">
      <div
        className="bg-rrc-blue-lighter rounded-t-sm cursor-pointer"
        onMouseUp={() => setOpen(!open)}
      >
        <h2 className="text-4xl text-gray-200 text-center p-5 relative group">
          HDM Calculator
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
          open && "max-h-[1100px] p-5",
          !open && "max-h-0 p-0"
        )}
      >
        {hdmFormProperties.map((property) => {
          return (
            <div key={property}>
              <label htmlFor={property}>{nameMap.get(property)}</label>
              <input
                id={property}
                type="number"
                name={property}
                value={form[property]?.toString() || ""}
                onChange={(e) => updateScore(e)}
              />
            </div>
          );
        })}
        <h3 className="text-center text-4xl font-lithosproblack break-words text-rrc-damage text-shadow">
          {score}
        </h3>
        <div className="flex flex-row justify-around gap-5 flex-wrap">
          <button
            className="p-3 bg-rrc-blue-light text-white text-2xl rounded-lg hover:bg-rrc-blue-lighter transition-colors"
            onClick={handleExport}
          >
            Export
          </button>

          <label
            htmlFor="importFile"
            className="text-white text-2xl p-3 cursor-pointer font-bignoodle bg-rrc-blue-light rounded-lg hover:bg-rrc-blue-lighter transition-colors"
          >
            Import
          </label>
          <input
            type="file"
            id="importFile"
            className="hidden"
            onChange={(e) => handleImport(e)}
            accept="application/JSON"
          />
        </div>
      </div>
    </div>
  );
}
