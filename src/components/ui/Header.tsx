import LinkItem from "./LinkItem";

const Header = () => {
  const dirs = [
    { dir: "/dashboard", text: "Dashboard" },
    { dir: "/notes", text: "Notes" },
    { dir: "/quests", text: "Quests" },
    { dir: "/guild", text: "Guild" },
    { dir: "/shop", text: "Shop" },
    { dir: "/profile", text: "Profile" },
  ];

  return (
    <header className="bg-white pb-2 border-solid border-4 border-black">
      <div>
        <h1 className="text-4xl font-display pt-1 pl-3 text-mainAccent">
          Rpgamify👾
        </h1>
      </div>
      <nav className="flex gap-10 mt-5 ml-3" aria-label="Main Navigation">
        {dirs.map((dir) => (
          <LinkItem dir={dir.dir} text={dir.text} key={dir.text} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
