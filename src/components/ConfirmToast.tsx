import toast from "react-hot-toast";

type ConfirmToastProps = {
  toastId: string;
  title: string;
  description?: string;
  onConfirm: () => void;
};

export default function ConfirmToast({
  toastId,
  title,
  description,
  onConfirm,
}: ConfirmToastProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="font-semibold text-slate-800">
          {title}
        </p>

        {description && (
          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => toast.dismiss(toastId)}
          className="cursor-pointer rounded-full px-4 py-2 text-sm text-slate-500 hover:bg-slate-100"
        >
          Cancelar
        </button>

        <button
          onClick={() => {
            onConfirm();
            toast.dismiss(toastId);
          }}
          className="cursor-pointer rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}