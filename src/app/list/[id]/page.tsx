async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const json = await response.json();
  return json;
}

export const revalidate = 10;

export async function generateStaticParams() {
  return ["1"];
}
// export const dynamic = "force-static";

export default async function ItemPage({ params: { id } }: any) {
  const d = await getData(id);
  const time = new Date().toISOString();
  return (
    <>
      {JSON.stringify(d)}
      <br />
      {time}
    </>
  );
}
