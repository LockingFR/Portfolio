'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Repair() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/edinamic');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirection en cours...</p>
      </div>
    </div>
  );
} 