import BookingForm from "../components/BookingForm";
import { capsFont } from "../fonts";

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const params = await searchParams;
  const selectedService = Array.isArray(params.service)
    ? params.service[0]
    : params.service;

  return (
    <section className="bg-[#fff7f8] px-6 py-20 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-rose-500">
            Booking
          </span>
          <h1 className={`${capsFont.className} mt-4 max-w-full text-[2rem] font-bold leading-none tracking-tight text-stone-900 sm:text-5xl md:text-7xl md:tracking-tighter`}>
            დაჯავშნა<span className="text-rose-500">.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-stone-600 md:text-base">
            შეავსე ფორმა და დაგიკავშირდებით დროის დასაზუსტებლად. თუ ზუსტად არ იცი
            რომელი სერვისი გჭირდება, აირჩიე კონსულტაცია.
          </p>

          <div className="mt-10 grid gap-4 text-sm text-stone-700">
            <div className="rounded-[1.5rem] bg-white/70 p-5">
              <p className="font-bold text-stone-900">სამუშაო საათები</p>
              <p className="mt-2">ყოველდღე, 10:00 - 20:00</p>
            </div>
            <div className="rounded-[1.5rem] bg-white/70 p-5">
              <p className="font-bold text-stone-900">კონტაქტი</p>
              <p className="mt-2">+995 555 55 55 55</p>
            </div>
          </div>
        </div>

        <BookingForm initialService={selectedService} />
      </div>
    </section>
  );
}
