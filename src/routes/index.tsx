import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { encontros } from "@/data/encontros";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "15 Encontros Românticos na Cozinha — Mesa de Dois" },
      {
        name: "description",
        content:
          "Quinze encontros para cozinhar a dois: receita passo a passo, brincadeira, bebida, trilha sonora e dica de clima para cada noite.",
      },
      { property: "og:title", content: "15 Encontros Românticos na Cozinha" },
      {
        property: "og:description",
        content:
          "Receita, brincadeira, bebida e trilha sonora para quinze noites a dois na cozinha.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const checklist = [
  "Lista de compras fechada com antecedência",
  "Bebidas resfriadas e taças lavadas",
  "Playlist montada antes de acender o fogo",
  "Velas e luz baixa posicionadas",
  "Louça da pia vazia — começa limpo",
  "Uma sobremesa de reserva na geladeira",
  "Celular no silencioso, longe da bancada",
  "Combinado de quem lava a louça no fim",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-24">
          <div>
            <p className="rise label-eyebrow">Um guia em 15 pratos</p>
            <h1 className="rise mt-5 font-display text-5xl leading-[1.03] text-balance sm:text-6xl lg:text-7xl">
              15 Encontros Românticos na Cozinha
            </h1>
            <p className="rise mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Cozinhar a dois é o encontro mais honesto que existe. Cada noite tem
              receita completa, uma brincadeira para jogar enquanto a panela trabalha,
              bebida, trilha sonora e o clima certo da sala.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3">
              <a
                href="#carta"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Abrir a carta
              </a>
              <a
                href="#checklist"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Checklist da noite
              </a>
            </div>
          </div>
          <figure className="relative">
            <img
              src={heroImg}
              alt="Casal cozinhando junto à luz de velas numa cozinha escura"
              width={1400}
              height={1000}
              className="w-full rounded-lg object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-8 flex -translate-x-1/2 gap-3"
            >
              <span className="steam h-20 w-[3px] rounded-full bg-foreground/25" />
              <span
                className="steam h-28 w-[3px] rounded-full bg-foreground/15"
                style={{ animationDelay: "1.1s" }}
              />
              <span
                className="steam h-16 w-[3px] rounded-full bg-foreground/30"
                style={{ animationDelay: "2.2s" }}
              />
            </div>
          </figure>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:px-8">
            <span>15 receitas</span>
            <span className="text-primary">·</span>
            <span>15 brincadeiras</span>
            <span className="text-primary">·</span>
            <span>15 trilhas</span>
            <span className="text-primary">·</span>
            <span>2 pessoas</span>
          </div>
        </div>
      </header>

      {/* CARTA / ÍNDICE */}
      <section id="carta" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <div className="mb-8 flex items-baseline justify-between border-b border-border pb-5">
            <h2 className="font-display text-3xl lg:text-4xl">A carta</h2>
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              quinze encontros
            </span>
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2">
            {encontros.map((e) => (
              <li key={e.id}>
                <a
                  href={`#${e.id}`}
                  className="group flex items-baseline gap-4 border-b border-border py-3.5"
                >
                  <span className="font-display text-lg tabular-nums text-primary/80">
                    {e.numero}
                  </span>
                  <span className="text-base transition-colors group-hover:text-primary">
                    {e.titulo}
                  </span>
                  <span className="ml-auto hidden text-[11px] uppercase tracking-widest text-muted-foreground sm:block">
                    {e.clima}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ENCONTROS */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="space-y-20">
          {encontros.map((e, i) => (
            <article key={e.id} id={e.id} className="scroll-mt-8">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
                <figure className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <img
                    src={e.imagem}
                    alt={e.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full rounded-lg object-cover"
                  />
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    {e.resumo}
                  </figcaption>
                </figure>

                <div>
                  <p className="label-eyebrow">Encontro {e.numero}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
                    {e.titulo}
                  </h3>
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Clima: {e.clima}</span>
                    <span>Tempo: {e.tempo}</span>
                  </p>

                  <div className="mt-6 rounded-lg border border-border bg-surface p-5 sm:p-6">
                    <p className="label-eyebrow">A receita</p>
                    <h4 className="mt-2 font-display text-xl">{e.receita.nome}</h4>

                    <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Ingredientes
                    </p>
                    <ul className="mt-2 grid gap-1.5 text-sm sm:grid-cols-2">
                      {e.receita.ingredientes.map((ing) => (
                        <li key={ing} className="flex gap-2">
                          <span className="text-primary">—</span>
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Modo de fazer
                    </p>
                    <ol className="mt-2 space-y-2 text-sm leading-relaxed">
                      {e.receita.passos.map((passo, idx) => (
                        <li key={passo} className="flex gap-3">
                          <span className="font-display tabular-nums text-primary">
                            {idx + 1}
                          </span>
                          <span>{passo}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-4 rounded-lg border border-primary/40 bg-surface-2 p-5 sm:p-6">
                    <p className="label-eyebrow">A brincadeira</p>
                    <h4 className="mt-2 font-display text-xl">{e.brincadeira.nome}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {e.brincadeira.comoJogar}
                    </p>
                  </div>

                  <dl className="mt-4 divide-y divide-border border-y border-border text-sm">
                    <div className="flex gap-4 py-3">
                      <dt className="w-24 shrink-0 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        Bebida
                      </dt>
                      <dd>{e.bebida}</dd>
                    </div>
                    <div className="flex gap-4 py-3">
                      <dt className="w-24 shrink-0 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        Trilha
                      </dt>
                      <dd>{e.trilha}</dd>
                    </div>
                    <div className="flex gap-4 py-3">
                      <dt className="w-24 shrink-0 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        Clima
                      </dt>
                      <dd>{e.ambiente}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CHECKLIST */}
      <section id="checklist" className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="label-eyebrow">Antes de acender o fogo</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] lg:text-5xl">
              A checklist do encontro
            </h2>
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Nada apaga o clima como uma panela sem sal. Deixe pronto o que não dá
              para resolver com a comida no fogo.
            </p>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-border py-3">
                <span className="mt-1 size-3 shrink-0 rounded-full border border-primary/60" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>Mesa de Dois — cozinhar a dois</span>
          <span>Feito à mão, à luz de vela</span>
        </div>
      </footer>
    </div>
  );
}
