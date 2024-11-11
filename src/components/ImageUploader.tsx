import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploaderProps {
  onUpload: (files: FileList) => Promise<void>;
  loading: boolean;
  processingPDF: boolean;
}

export default function ImageUploader({ onUpload, loading, processingPDF }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await onUpload(files);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="relative">
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        multiple
        accept="image/*,.pdf"
        className="hidden"
        disabled={loading || processingPDF}
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={loading || processingPDF}
        className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          {loading ? 'Uploading...' : 
           processingPDF ? 'Processing PDF...' : 
           'Click to upload images or PDF'}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Supported formats: JPG, PNG, PDF
        </p>
      </button>
    </div>
  );
}