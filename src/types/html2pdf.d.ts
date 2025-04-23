declare module 'html2pdf.js' {
  // Define jsPDF type to avoid using 'unknown'
  interface JsPDFInstance {
    // Basic jsPDF methods that might be used
    output: (type: string, options?: object) => string | Uint8Array | Blob;
    save: (filename: string) => JsPDFInstance;
    // Add more methods as needed
  }

  interface Html2PdfOptions {
    margin?: number | [number, number, number, number];
    filename?: string;
    image?: {
      type?: string;
      quality?: number;
    };
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      letterRendering?: boolean;
      height?: number;
      width?: number;
      windowWidth?: number;
      windowHeight?: number;
    };
    jsPDF?: {
      unit?: string;
      format?: string | [number, number];
      orientation?: 'portrait' | 'landscape';
      compress?: boolean;
      precision?: number;
      hotfixes?: string[];
      pagesplit?: boolean;
    };
    pagebreak?: {
      mode?: string;
      before?: string[];
      after?: string[];
      avoid?: string[];
    };
  }

  interface Html2Pdf {
    set(options: Html2PdfOptions): Html2Pdf;
    from(element: HTMLElement | string): Html2Pdf;
    save(): Promise<void>;
    toPdf(): JsPDFInstance; // More specific return type
    get(arg: string): Record<string, unknown>; // More specific return type
  }

  function html2pdf(): Html2Pdf;

  export default html2pdf;
}