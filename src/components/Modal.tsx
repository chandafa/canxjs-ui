function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export interface ModalProps {
  id: string; // ID important for opening the modal
  title?: string;
  children: any;
  className?: string;
  triggerLabel?: string;
}

/**
 * Native HTML Dialog Modal.
 * Use `(document.getElementById(id) as HTMLDialogElement).showModal()` to open.
 */
export function Modal({ id, title, children, className, triggerLabel }: ModalProps) {
  return (
    <>
      {triggerLabel && (
        <button
          onClick={() => (document.getElementById(id) as HTMLDialogElement)?.showModal()}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          {triggerLabel}
        </button>
      )}
      
      <dialog
        id={id}
        className={cn(
          "p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm rounded-lg shadow-xl min-w-[300px] open:animate-in open:fade-in open:zoom-in-95 backdrop:animate-in backdrop:fade-in",
          className
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            {title && <h3 className="text-lg font-semibold">{title}</h3>}
            <form method="dialog">
              <button className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </form>
          </div>
          <div>{children}</div>
        </div>
      </dialog>
    </>
  );
}
