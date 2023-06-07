import Image from "next/image";

type Games = {
  id: number;
  background_images: string;
  rating: number;
  name: string;
};

const getGames = async (): Promise<Games[]> => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await response.json();
  return data.results;
};

export default async function Home() {
  const games = await getGames();
  console.log(games);

  return (
    <main className="m-24">
      {games.map((game) => (
        <div key={game.id}>
          <h1>{game.name}</h1>
          <p>{game.rating}</p>
          <div className="aspect-video relative">
            {game?.background_images && (
              <Image
                src={`${game.background_images}`}
                width={32}
                height={32}
                fill
                alt={game.name}
                className="object-cover"
              />
            )}
          </div>
        </div>
      ))}
    </main>
  );
}
