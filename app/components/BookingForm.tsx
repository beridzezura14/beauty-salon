"use client";

import { FormEvent, useState } from "react";

const services = [
  "სახე",
  "სხეული",
  "ბიკინი",
  "პაკეტები",
  "კონსულტაცია",
];

export default function BookingForm({ initialService = "" }: { initialService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [selectedService, setSelectedService] = useState(
    services.includes(initialService) ? initialService : "",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    window.setTimeout(() => {
      form.reset();
      setSelectedService("");
      setStatus("success");
    }, 700);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_20px_70px_rgba(120,60,70,0.10)] backdrop-blur-md md:p-8"
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-stone-700">
          სახელი
          <input
            name="name"
            type="text"
            required
            placeholder="მაგ: ანა"
            className="h-14 rounded-full border border-rose-100 bg-white/85 px-6 text-sm outline-none transition placeholder:text-stone-400 focus:border-rose-400"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-stone-700">
          ტელეფონი
          <input
            name="phone"
            type="tel"
            required
            placeholder="+995 5XX XX XX XX"
            className="h-14 rounded-full border border-rose-100 bg-white/85 px-6 text-sm outline-none transition placeholder:text-stone-400 focus:border-rose-400"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-stone-700">
          სერვისი
          <select
            name="service"
            required
            value={selectedService}
            onChange={(event) => setSelectedService(event.target.value)}
            className="h-14 rounded-full border border-rose-100 bg-white/85 px-6 text-sm text-stone-600 outline-none transition focus:border-rose-400"
          >
            <option value="" disabled>
              აირჩიე სერვისი
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-stone-700">
          შეტყობინება
          <textarea
            name="message"
            rows={5}
            placeholder="სასურველი დღე, დრო ან დამატებითი კითხვა"
            className="resize-none rounded-[1.7rem] border border-rose-100 bg-white/85 p-6 text-sm outline-none transition placeholder:text-stone-400 focus:border-rose-400"
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 h-14 rounded-full bg-rose-600 text-sm font-bold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          {status === "sending" ? "იგზავნება..." : "გაგზავნა"}
        </button>

        {status === "success" && (
          <p className="rounded-full bg-emerald-50 px-5 py-3 text-center text-sm font-semibold text-emerald-700">
            მოთხოვნა წარმატებით გაიგზავნა. მალე დაგიკავშირდებით.
          </p>
        )}
      </div>
    </form>
  );
}
