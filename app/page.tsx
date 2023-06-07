const getGames = async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await response.json();
  return data;
};

export default async function Home() {
  const games = await getGames();
  console.log(games);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  );
}
