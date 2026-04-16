/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Hook para exportar resultado como imagem
 */

import html2canvas from "html2canvas";
import { useCallback } from "react";

export function useExportResult() {
  const exportAsImage = useCallback(async (elementId: string, filename: string = "geodraft-result") => {
    try {
      const element = document.getElementById(elementId);
      if (!element) {
        console.error(`Element with id "${elementId}" not found`);
        return;
      }

      // Adicionar padding e background para melhor visualização
      const canvas = await html2canvas(element, {
        backgroundColor: "#f5f5f5",
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      // Converter canvas para blob e fazer download
      canvas.toBlob((blob) => {
        if (!blob) return;

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${filename}-${new Date().getTime()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
    } catch (error) {
      console.error("Erro ao exportar imagem:", error);
    }
  }, []);

  return { exportAsImage };
}
