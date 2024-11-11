import { PDFDocument } from 'pdf-lib';
import { v4 as uuidv4 } from 'uuid';

export async function extractImagesFromPDF(file: File): Promise<File[]> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const images: File[] = [];
    
    for (let i = 0; i < pdfDoc.getPageCount(); i++) {
      const page = pdfDoc.getPage(i);
      const { width, height } = page.getSize();
      
      // Create a new PDF document for this page
      const singlePagePdf = await PDFDocument.create();
      const [copiedPage] = await singlePagePdf.copyPages(pdfDoc, [i]);
      singlePagePdf.addPage(copiedPage);
      
      // Convert page to PNG
      const pngBytes = await singlePagePdf.saveAsBase64({ dataUri: true });
      const base64Data = pngBytes.split(',')[1];
      const binaryData = atob(base64Data);
      const byteArray = new Uint8Array(binaryData.length);
      
      for (let j = 0; j < binaryData.length; j++) {
        byteArray[j] = binaryData.charCodeAt(j);
      }
      
      const blob = new Blob([byteArray], { type: 'image/png' });
      const imageFile = new File(
        [blob],
        `${uuidv4()}.png`,
        { type: 'image/png' }
      );
      
      images.push(imageFile);
    }
    
    return images;
  } catch (error) {
    console.error('Error extracting images from PDF:', error);
    throw new Error('Failed to extract images from PDF');
  }
}