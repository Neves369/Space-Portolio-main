export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-xl">
      <div className="flex flex-col items-center gap-3 rounded-[32px] border border-white/10 bg-slate-950/95 px-8 py-8 text-center shadow-2xl shadow-slate-950/30">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 bg-slate-900/80">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-transparent border-t-white/90" />
        </div>
        <p className="text-lg font-semibold text-white">Carregando...</p>
        <p className="text-sm text-slate-300">Aguarde enquanto o conteúdo é exibido.</p>
      </div>
    </div>
  );
}
