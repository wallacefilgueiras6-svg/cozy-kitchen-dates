import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
  head: () => ({
    meta: [
      { title: "Entrar — Cozy Kitchen Dates" },
      {
        name: "description",
        content:
          "Acesse sua conta do Cozy Kitchen Dates e abra as suas 15 experiências a dois na cozinha.",
      },
      { property: "og:title", content: "Entrar — Cozy Kitchen Dates" },
      {
        property: "og:description",
        content: "Entre na sua conta para acessar suas experiências a dois.",
      },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

type Modo = "login" | "cadastro" | "recuperar";

function AuthPage() {
  const navigate = useNavigate();
  const [modo, setModo] = useState<Modo>("login");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard", replace: true });
    });
  }, [navigate]);

  function trocarModo(novo: Modo) {
    setModo(novo);
    setErro(null);
    setAviso(null);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setAviso(null);
    setCarregando(true);
    try {
      if (modo === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
        if (error) throw error;
        navigate({ to: "/dashboard", replace: true });
        return;
      }

      if (modo === "cadastro") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password: senha,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: { full_name: nome },
          },
        });
        if (error) throw error;
        if (data.session) {
          navigate({ to: "/dashboard", replace: true });
          return;
        }
        setAviso(
          "Conta criada. Confirme o e-mail que acabamos de enviar para entrar na sua área.",
        );
        return;
      }

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setAviso("Enviamos um link para você criar uma nova senha. Confira seu e-mail.");
    } catch (err) {
      setErro(traduzErro(err));
    } finally {
      setCarregando(false);
    }
  }

  const titulos: Record<Modo, { titulo: string; texto: string; botao: string }> = {
    login: {
      titulo: "Seu encontro começa aqui ❤️",
      texto: "Entre na sua conta para acessar suas experiências.",
      botao: "Entrar",
    },
    cadastro: {
      titulo: "Criar a sua conta ❤️",
      texto: "Cadastre-se para acessar as experiências do Cozy Kitchen Dates.",
      botao: "Criar conta",
    },
    recuperar: {
      titulo: "Recuperar acesso",
      texto: "Informe seu e-mail e enviaremos um link para criar uma nova senha.",
      botao: "Enviar link",
    },
  };

  const t = titulos[modo];

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-14">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="label-eyebrow transition-colors hover:text-primary"
        >
          Cozy Kitchen Dates
        </Link>

        <h1 className="mt-5 font-display text-4xl leading-tight text-balance">{t.titulo}</h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{t.texto}</p>

        <form
          onSubmit={onSubmit}
          className="mt-8 rounded-lg border border-border bg-surface p-6 sm:p-7"
        >
          {modo === "cadastro" && (
            <label className="block">
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Nome
              </span>
              <input
                type="text"
                required
                autoComplete="name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
              />
            </label>
          )}

          <label className="mt-4 block first:mt-0">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              E-mail
            </span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
            />
          </label>

          {modo !== "recuperar" && (
            <label className="mt-4 block">
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Senha
              </span>
              <input
                type="password"
                required
                minLength={6}
                autoComplete={modo === "login" ? "current-password" : "new-password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
              />
            </label>
          )}

          {erro && <p className="mt-4 text-sm text-destructive">{erro}</p>}
          {aviso && <p className="mt-4 text-sm text-primary">{aviso}</p>}

          <button
            type="submit"
            disabled={carregando}
            className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
          >
            {carregando ? "Um instante..." : t.botao}
          </button>

          <div className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
            {modo === "login" && (
              <>
                <button
                  type="button"
                  onClick={() => trocarModo("recuperar")}
                  className="text-left transition-colors hover:text-primary"
                >
                  Esqueci minha senha
                </button>
                <button
                  type="button"
                  onClick={() => trocarModo("cadastro")}
                  className="text-left transition-colors hover:text-primary"
                >
                  Ainda não tenho uma conta
                </button>
              </>
            )}
            {modo !== "login" && (
              <button
                type="button"
                onClick={() => trocarModo("login")}
                className="text-left transition-colors hover:text-primary"
              >
                Já tenho conta — voltar para o login
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

function traduzErro(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);
  if (/Invalid login credentials/i.test(msg)) return "E-mail ou senha incorretos.";
  if (/Email not confirmed/i.test(msg))
    return "Confirme seu e-mail antes de entrar. Veja a mensagem que enviamos.";
  if (/User already registered/i.test(msg))
    return "Já existe uma conta com esse e-mail. Tente entrar.";
  if (/Password should be at least/i.test(msg))
    return "A senha precisa ter pelo menos 6 caracteres.";
  if (/rate limit|too many/i.test(msg))
    return "Muitas tentativas em pouco tempo. Aguarde alguns minutos.";
  return "Não conseguimos concluir agora. Tente novamente em instantes.";
}
