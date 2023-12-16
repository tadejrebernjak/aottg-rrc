import clsx from "clsx";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

type HDMForm = {
  highestDamage: number | null;
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

export default function HDMCalculator() {
  const [form, setForm] = useState<HDMForm>({
    highestDamage: null,
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

  function updateBalance(e: React.ChangeEvent<HTMLInputElement>) {
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
          open && "max-h-[1000px] p-5",
          !open && "max-h-0 p-0"
        )}
      >
        <div>
          <label>Highest Damage Hit</label>
          <input
            type="number"
            name="highestDamage"
            value={form.highestDamage?.toString() || ""}
            onChange={(e) => updateBalance(e)}
          />
        </div>
        <div>
          <label>Highest Damage on Aberrant or Jumper</label>
          <input
            type="number"
            name="abyJumper"
            value={form.abyJumper?.toString() || ""}
            onChange={(e) => updateBalance(e)}
          />
        </div>
        <div>
          <label>Spiral (Single-Reel)</label>
          <input
            type="number"
            name="spiral"
            value={form.spiral?.toString() || ""}
            onChange={(e) => updateBalance(e)}
          />
        </div>
        <div>
          <label>Traditional Cut</label>
          <input
            type="number"
            name="traditionalCut"
            value={form.traditionalCut?.toString() || ""}
            onChange={(e) => updateBalance(e)}
          />
        </div>
        <div>
          <label>Correctional Cut</label>
          <input
            type="number"
            name="correctionalCut"
            value={form.correctionalCut?.toString() || ""}
            onChange={(e) => updateBalance(e)}
          />
        </div>
        <div>
          <label>D-Gyro</label>
          <input
            type="number"
            name="dGyro"
            value={form.dGyro?.toString() || ""}
            onChange={(e) => updateBalance(e)}
          />
        </div>
        <div>
          <label>R-Spin</label>
          <input
            type="number"
            name="rSpin"
            value={form.rSpin?.toString() || ""}
            onChange={(e) => updateBalance(e)}
          />
        </div>
        <div>
          <label>Trad-By or Fly-By</label>
          <input
            type="number"
            name="tradbyFlyby"
            value={form.tradbyFlyby?.toString() || ""}
            onChange={(e) => updateBalance(e)}
          />
        </div>
        <div>
          <label>Hydra or Vector</label>
          <input
            type="number"
            name="hydraVector"
            value={form.hydraVector?.toString() || ""}
            onChange={(e) => updateBalance(e)}
          />
        </div>
        <div>
          <label>Air Equator</label>
          <input
            type="number"
            name="airEquator"
            value={form.airEquator?.toString() || ""}
            onChange={(e) => updateBalance(e)}
          />
        </div>

        <h3 className="text-center text-4xl font-lithosproblack break-words text-rrc-damage text-shadow">
          {score}
        </h3>
      </div>
    </div>
  );
}
