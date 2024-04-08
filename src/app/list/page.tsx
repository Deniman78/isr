import Link from "next/link";

export const revalidate = 10;

export default async function ListPage() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);

  const json = await response.json();
  const time = new Date().toISOString();

  return (
    <div className="flex gap-3">
      <div>
        {json.map((it: any) => (
          <div key={it.id}>
            <Link href={`/list/${it.id}`}>{it.id}</Link>

            <br />
          </div>
        ))}
      </div>
      {time}
    </div>
  );
}
