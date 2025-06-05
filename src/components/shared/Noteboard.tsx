// components/shared/Noteboard.tsx
'use client';

import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function Noteboard() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Real-time listener for noteboard updates
    const unsubscribe = onSnapshot(doc(db, 'content', 'noteboard'), (doc) => {
      if (doc.exists()) {
        setContent(doc.data().content || '');
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching noteboard:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Don't show anything while loading or if no content
  if (loading || !content || content.trim() === '') {
    return null;
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg shadow-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Viktigt meddelande
              </h3>
              <div className="mt-2 text-sm text-yellow-700 whitespace-pre-wrap">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}