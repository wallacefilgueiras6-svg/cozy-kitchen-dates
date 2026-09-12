import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { encontros } from "@/data/encontros";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "Minha área — Cozy Kitchen Dates" },
      {
        name: "description",
        content: "Suas 15 experiências a dois: escolha uma noite e comece o encontro.",
      },
      { property: "og:title", content: "Minha área — Cozy Kitchen Dates" },
      {
        property: "og:description",
        content: "Escolha uma experiência e transforme uma noite comum em uma memória a dois.",
      },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Dashboard() {
  const navigate = useNavigate();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [saindo, setSaindo] = useState(false);

  useEffect(() => {
    let ativo = true;
    (async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user || !ativo) return;
      setEmail(user.email ?? "");
      const { data: perfil } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .maybeSingle();
      if (!ativo) return;
      const meta = (user.user_metadata as { full_name?: string } | null)?.full_name;
      setNome(perfil?.full_name ?? meta ?? "");
    })();
    return () => {
      ativo = false;
    };
  }, []);

  async function sair() {
    setSaindo(true);
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const primeiroNome = nome.trim().split(" ")[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="label-eyebrow">Cozy Kitchen Dates ❤️</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="truncate">{email}</span>
            <button
              onClick={sair}
              disabled={saindo}
              className="rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary disabled:opacity-60"
            >
              {saindo ? "Saindo..." : "Sair"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
        <h1 className="font-display text-4xl leading-[1.05] text-balance lg:text-5xl">
          {primeiroNome ? `Olá, ${primeiroNome} ❤️` : "Bem-vindo ao Cozy Kitchen Dates ❤️"}
        </h1>
        <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          Escolha uma experiência e transforme uma noite comum em uma memória a dois.
        </p>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {encontros.map((e) => (
            <li
              key={e.id}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface"
            >
              <img
                src={e.imagem}
                alt={e.alt}
                loading="lazy"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="label-eyebrow">Encontro {e.numero}</p>
                <h2 className="mt-2 font-display text-2xl leading-tight">{e.titulo}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {e.resumo}
                </p>
                <a
                  href={`/#${e.id}`}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Começar encontro
                </a>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
