"use client";
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Profile from './components/Profile';

export default function Home() {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [profile, setProfile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadSuccess = async (url: string) => {
    setUploadedUrl(url);
    setIsUploading(true);

    //makes server side call generate a profile with forge
    try {
      const response = await fetch('/api/generateProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: url }),
      });
      if (response.ok) {
        const data = await response.json();
        setProfile(data.profile);
      } else {
        console.error('Failed to generate profile');
      }
    } catch (error) {
      console.error('Error generating profile:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white text-black">
      {!profile && !isUploading && (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-8 text-center">Professional Profile Generator</h1>
          <div className="w-full max-w-md">
            <FileUpload onUploadSuccess={handleUploadSuccess} />
          </div>
        </div>
      )}
      {isUploading && (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-xl">Generating your professional profile...</p>
        </div>
      )}
      {profile && (
        <div className="w-full h-screen">
          <Profile profile={profile} />
        </div>
      )}
    </main>
  );
}