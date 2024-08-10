import { useState } from 'react';

export default function FileUpload({ onUploadSuccess }: { onUploadSuccess: (url: string) => void }) {
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('key', file.name);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('From File Upload, Upload successful:', data);
                onUploadSuccess(data.url);
            } else {
                const errorData = await response.json();
                console.error('Upload failed:', errorData);
            }
        } catch (error) {
            console.error('Error during upload:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 border-2 border-black">Upload</button>
        </form>
    );
}