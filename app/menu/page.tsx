import MenuClient from "@/components/MenuClient";

export default async function MenuPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  const currentCategory = params.category ?? "All";
  return <div><MenuClient currentCategory={currentCategory} /></div>;
}
