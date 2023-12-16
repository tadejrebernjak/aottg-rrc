import clsx from "clsx";

function generatePlayers(n: number) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    const rp = Math.floor(Math.random() * 10000);
    arr.push({
      name: (Math.random() + 1).toString(36).substring(2),
      rp,
    });
  }

  return arr;
}

function setColor(index: number) {
  if (index > 7) return "";

  switch (index) {
    case 0:
      return "text-rrc-master font-bold bg-brown-600";
    case 1:
      return "text-white font-bold";
    case 2:
      return "text-rrc-bronze font-bold";
    default:
      return null;
  }
}

export default function Leaderboard() {
  const dummyData = generatePlayers(100);
  dummyData.sort((a, b) => b.rp - a.rp);

  const tableBody = dummyData.map((player, index) => {
    return (
      <tr
        key={index}
        className={clsx(
          "odd:bg-rrc-blue-darker even:bg-slate-900",
          setColor(index) || "text-rrc-platinum"
        )}
      >
        <td className="p-2 w-1/5 font-bignoodleoblique text-2xl">
          {index + 1}
        </td>
        <td className="p-2 w-2/5">{player.name}</td>
        <td className="p-2 w-2/5">{player.rp}</td>
      </tr>
    );
  });

  return (
    <>
      <h1 className="text-5xl text-rrc-red-light mb-10 text-center">
        Leaderboard
      </h1>
      <p className="text-center m-5">
        Note: To appear on here, you must join our{" "}
        <a
          href="https://discord.gg/Z3HPvMKgm8"
          target="_blank"
          rel="noreferrer"
          className="text-lg"
        >
          Discord server
        </a>{" "}
        and rank up in at least one category!
      </p>
      <table className="w-full max-w-2xl mx-auto text-center border-4 border-rrc-blue text-lg">
        <thead className="bg-rrc-blue text-2xl tracking-wide">
          <th className="p-5">Placement</th>
          <th className="p-5">Name</th>
          <th className="p-5">Ranking Points</th>
        </thead>
        <tbody className="">{tableBody}</tbody>
      </table>
    </>
  );
}
