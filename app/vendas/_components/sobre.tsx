import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { DR_ERALDO } from "@/lib/oferta";

/* Foto: ensaio enviado pelo cliente em 2026-09-22 (jaleco, estetoscópio,
   diplomas ao fundo). Original em 01_ALICERCE/05_REPOSITORIO-DE-ASSETS/Fotos-Eraldo. */
const CREDENCIAIS = [
  `Cardiologista ${DR_ERALDO.crm}`,
  DR_ERALDO.rqe,
  DR_ERALDO.anosExperiencia,
  DR_ERALDO.doutorado,
  "Membro da Sociedade Brasileira de Cardiologia",
  "Especialização em Medicina do Estilo de Vida",
];

export function Sobre() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] max-h-[560px] w-full overflow-hidden rounded-card bg-navy shadow-[0_30px_80px_rgba(10,39,64,0.25)]">
            <Image
              src={DR_ERALDO.foto}
              alt={`${DR_ERALDO.nome}, cardiologista, de jaleco e estetoscópio em seu consultório`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
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
