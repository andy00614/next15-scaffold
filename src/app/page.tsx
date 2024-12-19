import { getFoo } from "~/server/api/test";

export default async function Home() {
  const fooData = await getFoo();
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      {JSON.stringify(fooData)}
    </div>
  );
}
