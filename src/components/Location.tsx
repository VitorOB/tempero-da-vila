import { Banknote, Clock, CreditCard, MapPin, Navigation, QrCode, Ticket, Wallet } from "lucide-react";
import { address, hours, hoursNote, locationSection, payments } from "../data/site";
import { getWeekday } from "../lib/today";
import { Img } from "./Img";

const paymentIcons = { qr: QrCode, cash: Banknote, card: CreditCard, ticket: Ticket };

export function Location() {
  const weekday = getWeekday();

  return (
    <section id="onde-estamos" aria-labelledby="onde-title" className="bg-butter py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal">
          <p className="eyebrow">{locationSection.eyebrow}</p>
          <h2 id="onde-title" className="section-title mt-1">
            {locationSection.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {/* Endereço */}
            <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-tomato text-white">
                  <MapPin aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h3 className="flex flex-wrap items-center gap-2 text-2xl font-extrabold">
                    Endereço
                    {address.isDemo && <span className="stamp stamp-light text-sm">Demonstrativo</span>}
                  </h3>
                  <address className="mt-2 not-italic">
                    {address.street}
                    <br />
                    {address.district} · {address.city} – {address.state}
                    <br />
                    CEP {address.postalCode}
                  </address>
                  <p className="mt-2 text-muted">{address.reference}</p>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-7">
              <h3 id="horarios-title" className="flex items-center gap-3 text-2xl font-extrabold">
                <Clock aria-hidden="true" className="size-6 text-tomato" />
                {locationSection.hoursTitle}
              </h3>
              <table aria-labelledby="horarios-title" className="mt-4 w-full border-collapse text-left">
                <tbody>
                  {hours.map((h) => {
                    const isToday = h.weekdays.includes(weekday);
                    return (
                      <tr key={h.days} className={`border-t border-ink/10 first:border-t-0 ${isToday ? "bg-butter" : ""}`}>
                        <th scope="row" className="py-3 pl-3 pr-4 font-bold">
                          {h.days}
                          {isToday && <span className="stamp stamp-tomato ml-2 text-sm">Hoje</span>}
                        </th>
                        <td className="py-3 pr-3 text-right">{h.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-3 text-muted">{hoursNote}</p>
            </div>

            {/* Pagamento */}
            <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-7">
              <h3 className="flex items-center gap-3 text-2xl font-extrabold">
                <Wallet aria-hidden="true" className="size-6 text-tomato" />
                {locationSection.paymentsTitle}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {payments.map((p) => {
                  const Icon = paymentIcons[p.icon];
                  return (
                    <li
                      key={p.label}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-cream px-4 font-bold ring-1 ring-ink/15"
                    >
                      <Icon aria-hidden="true" className="size-5 text-brand" />
                      {p.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Bloco no lugar do mapa (sem embed) */}
            <div className="tiles relative flex min-h-64 flex-1 flex-col items-center justify-center gap-3 rounded-3xl bg-cream p-6 text-center ring-1 ring-ink/10">
              <span className="flex size-16 items-center justify-center rounded-full bg-tomato text-white shadow-lg">
                <MapPin aria-hidden="true" className="size-8" />
              </span>
              <h3 className="text-2xl font-extrabold">
                {locationSection.mapTitle}
                <span className="sr-only"> (área reservada)</span>
              </h3>
              <p className="max-w-xs text-muted">{locationSection.mapNote}</p>
              {address.mapsUrl && (
                <a href={address.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Navigation aria-hidden="true" className="size-5" />
                  Como chegar
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              )}
            </div>

            <figure className="card-lift overflow-hidden rounded-3xl bg-white ring-1 ring-ink/10">
              <div className="aspect-3/2 overflow-hidden">
                <Img
                  name="ambiente"
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="card-photo size-full object-cover"
                />
              </div>
              <figcaption className="px-5 py-3 text-muted">{locationSection.photoCaption}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
