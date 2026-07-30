import { useEffect, useState } from "react";
import { getButtonCount } from "../services/certificates.service";

export default function ClickCounter({
  label = "Clicks en botón",
}) {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    async function loadClicks() {
      try {
        const count = await getButtonCount();
        setClicks(count);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    }

    loadClicks();
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 rounded-lg border border-gray-200 bg-slate-800 px-4 py-4 shadow-lg">
      <p className="text-sm text-white">
        <span>{label}:</span> <b className="text-lg">{clicks}</b>
      </p>
    </div>
  );
}