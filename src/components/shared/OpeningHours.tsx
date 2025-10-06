// components/shared/OpeningHours.tsx
'use client';

import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface OpeningHoursProps {
  showTitle?: boolean;
  className?: string;
}

export default function OpeningHours({ showTitle = true, className = '' }: OpeningHoursProps) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Real-time listener for opening hours updates
    const unsubscribe = onSnapshot(doc(db, 'content', 'openingHours'), (doc) => {
      if (doc.exists()) {
        setContent(doc.data().content || '');
      } else {
        // Fallback to NEW default opening hours if no content in Firebase
        setContent(`Måndag - Fredag: 9:00 - 17:00

Övrig information:
För akuta frågor, vänligen ring oss på 036 - 16 59 90.`);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching opening hours:', error);
      // Fallback to NEW default content
      setContent(`Måndag - Fredag: 9:00 - 17:00

Övrig information:
För akuta frågor, vänligen ring oss på 036 - 16 59 90.`);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className={`animate-pulse space-y-4 ${className}`}>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {showTitle && <h3 className="text-lg font-medium text-gray-900">Öppettider</h3>}
      <div className="whitespace-pre-wrap leading-relaxed">
        {content}
      </div>
    </div>
  );
}