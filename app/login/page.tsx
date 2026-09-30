import LoginClient from "@/components/LoginClient";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ from?: string }> }) {
  const params = await searchParams;
  return <LoginClient from={params.from ?? "/menu"} />;
}
