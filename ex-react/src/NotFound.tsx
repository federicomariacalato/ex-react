export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <span className="font-serif text-7xl text-[#b87d4b] font-bold mb-2">
        404
      </span>
      <h1 className="font-serif text-3xl text-[#1a1a1a] mb-4">
        Pagina Non Trovata
      </h1>
      <p className="font-sans text-[#7c7c7c] max-w-md mb-8">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
    </div>
  );
}
