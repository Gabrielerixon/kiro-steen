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
        // Fallback to default opening hours if no content in Firebase
        setContent(`Steen:
Måndag och tisdag: 9.00 - 16.00 på ojämna veckor och 9.00 - 18.00 på jämna veckor
Onsdag: 9.00 - 12.00
Torsdag och fredag: 9.00 - 16.00 på ojämna veckor och 9.00 - 18.00 på jämna veckor

Övrig information:
Thomas har nu gått i pension.
Brian finns numera på Rosenlundsbadet, Elmiavägen 4.
Han nås på 07 07 33 88 37.`);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching opening hours:', error);
      // Fallback to default content
      setContent(`Steen:
Måndag och tisdag: 9.00 - 16.00 på ojämna veckor och 9.00 - 18.00 på jämna veckor
Onsdag: 9.00 - 12.00
Torsdag och fredag: 9.00 - 16.00 på ojämna veckor och 9.00 - 18.00 på jämna veckor

Övrig information:
Thomas har nu gått i pension.
Brian finns numera på Rosenlundsbadet, Elmiavägen 4.
Han nås på 07 07 33 88 37.`);
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