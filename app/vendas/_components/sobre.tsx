import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { DR_ERALDO } from "@/lib/oferta";

/* TODO: foto do Dr. Eraldo. O cliente rejeitou as fotos do branding; a
   direção fotográfica ainda será definida. O bloco à esquerda é a reserva
   de espaço (3:4) pra foto final entrar sem mexer no layout. */
const CREDENCIAIS = [
  `Cardiologista ${DR_ERALDO.crm}`,
  DR_ERALDO.anosExperiencia,
  "Especialização em Medicina do Estilo de Vida",
  "Membro da Sociedade Brasileira de Cardiologia",
  DR_ERALDO.pacientes,
  "Palestrante em congressos médicos",
];

export function Sobre() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="dm-navy-textura relative flex aspect-[3/4] max-h-[560px] w-full items-center justify-center overflow-hidden rounded-card">
            <Image src="/marca/docmev-logo-branco.svg" alt="" width={200} height={43} className="relative w-40 opacity-60" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Por que confiar no {DR_ERALDO.nome}?
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {CREDENCIAIS.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-card bg-white p-4 ring-1 ring-borda">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-azul-claro text-navy">
                  <Check weight="bold" className="size-4" aria-hidden />
                </span>
                <span className="font-semibold leading-snug">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
