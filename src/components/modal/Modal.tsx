import type { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  title?: string;
  children: ReactNode;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export default function Modal({
  open,
  title,
  children,
  onClose,
  size = "md",
}: ModalProps) {
  if (!open) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/60 p-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full ${sizes[size]} rounded-2xl bg-white shadow-2xl`}
      >
        {(title) && (
          <div className="flex items-center justify-between border-b border-slate-700 px-6 py-3">
            <h2 className="text-lg font-semibold text-slate-800">
              {title}
            </h2>

            <button onClick={onClose} className="rounded-full p-2 transition hover:bg-slate-100">
              <X size={20} />
            </button>
          </div>
        )}

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}