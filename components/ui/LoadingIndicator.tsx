"use client";

import { useLoading } from "@/context/loading";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingIndicator() {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 rounded-[32px] border border-white/10 bg-slate-950/95 px-8 py-8 text-center shadow-2xl shadow-slate-950/30"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 bg-slate-900/80">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-transparent border-t-white/90" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Carregando...</p>
              <p className="mt-1 text-sm text-slate-300">Aguarde enquanto o conteúdo é carregado.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
