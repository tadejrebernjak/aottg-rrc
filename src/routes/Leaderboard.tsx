import clsx from "clsx";

type Player = {
  username: string;
  RP: number;
};

function generatePlayers(n: number): Player[] {
  const arr: Player[] = [];

  for (let i = 0; i < n; i++) {
    arr.push({
      username: (Math.random() + 1).toString(36).substring(2),
      RP: Math.floor(Math.random() * 10000),
    });
  }

  return arr;
}

function setText(index: number): string {
  switch (index) {
    case 0:
      return "text-rrc-master font-bold";
    case 1:
      return "text-white font-bold";
    case 2:
      return "text-rrc-bronze font-bold";
    default:
      return "text-rrc-platinum";
  }
}

export default function Leaderboard() {
  const dummyData: Player[] = generatePlayers(100);
  dummyData.sort((a, b) => b.RP - a.RP);

  const tableBody = dummyData.map((player, index) => {
    return (
      <tr
        key={index}
        className={clsx(
          "odd:bg-rrc-blue-darker even:bg-slate-900",
          setText(index)
        )}
      >
        <td className="p-2 w-1/5 font-bignoodleoblique text-2xl">
          {index + 1}
        </td>
        <td className="p-2 w-2/5">{player.username}</td>
        <td className="p-2 w-2/5">{player.RP}</td>
      </tr>
    );
  });

  return (
    <div className="flex flex-col max-w-2xl gap-5 mx-auto">
      <h1 className="text-5xl text-rrc-red-light text-center">Leaderboard</h1>
      <p className="text-center">
        To appear on here, you must join our{" "}
        <a
          href="https://discord.gg/Z3HPvMKgm8"
          target="_blank"
          rel="noreferrer"
          className="text-lg font-bold"
        >
          Discord server
        </a>{" "}
        and rank up in at least one category!
      </p>
      <p className="text-center">
        <span className="text-rrc-blue-lighter font-bold text-lg">Note: </span>
        Ranking points are the sum of points the player has accumulated across
        ALL of our categories. The more ranks you have, the more accurately you
        can be placed! Some players on this list will not be at their true place
        until we know their rank in EVERY skill set!
      </p>
      <div className="overflow-x-auto">
        <table className="w-full max-w-2xl mx-auto text-center border-4 border-rrc-blue text-lg overflow-scroll break-words">
          <thead>
            <tr className="bg-rrc-blue text-2xl tracking-wide [&>th]:p-5">
              <th>Placement</th>
              <th>Name</th>
              <th>Ranking Points</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </div>
  );
}
