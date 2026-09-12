import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  component: ResetPassword,
  head: () => ({
    meta: [
      { title: "Criar nova senha — Cozy Kitchen Dates" },
      {
        name: "description",
        content: "Defina uma nova senha para voltar à sua área do Cozy Kitchen Dates.",
      },
      { property: "og:title", content: "Criar nova senha — Cozy Kitchen Dates" },
      {
        property: "og:description",
        content: "Defina uma nova senha e volte para as suas experiências a dois.",
      },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function ResetPassword() {
  const navigate = useNavigate();
  const [senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [pronto, setPronto] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    if (senha !== confirma) {
      setErro("As duas senhas precisam ser iguais.");
      return;
    }
    setCarregando(true);
    const { error } = await supabase.auth.updateUser({ password: senha });
    setCarregando(false);
    if (error) {
      setErro(
        /expired|invalid/i.test(error.message)
          ? "Esse link expirou. Peça um novo na tela de login."
          : "Não conseguimos alterar a senha agora. Tente novamente.",
      );
      return;
    }
    setPronto(true);
    setTimeout(() => navigate({ to: "/dashboard", replace: true }), 1200);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-14">
      <div className="w-full max-w-md">
        <Link to="/" className="label-eyebrow transition-colors hover:text-primary">
          Cozy Kitchen Dates
        </Link>
        <h1 className="mt-5 font-display text-4xl leading-tight text-balance">
          Criar uma nova senha
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Escolha a senha que você vai usar para entrar na sua área.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 rounded-lg border border-border bg-surface p-6 sm:p-7"
        >
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Nova senha
            </span>
            <input
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Repetir a senha
            </span>
            <input
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              value={confirma}
              onChange={(e) => setConfirma(e.target.value)}
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
            />
          </label>

          {erro && <p className="mt-4 text-sm text-destructive">{erro}</p>}
          {pronto && (
            <p className="mt-4 text-sm text-primary">
              Senha alterada. Levando você para a sua área...
            </p>
          )}

          <button
            type="submit"
            disabled={carregando || pronto}
            className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
          >
            {carregando ? "Salvando..." : "Salvar nova senha"}
          </button>
        </form>
      </div>
    </main>
  );
}
