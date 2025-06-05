// app/admin/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [noteboard, setNoteboard] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        loadData();
      }
    });

    return () => unsubscribe();
  }, []);

  const loadData = async () => {
    try {
      const noteboardDoc = await getDoc(doc(db, 'content', 'noteboard'));
      const hoursDoc = await getDoc(doc(db, 'content', 'openingHours'));
      
      if (noteboardDoc.exists()) {
        setNoteboard(noteboardDoc.data().content || '');
      }
      
      if (hoursDoc.exists()) {
        setOpeningHours(hoursDoc.data().content || '');
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setMessage('Fel email eller lösenord');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setEmail('');
      setPassword('');
      setMessage('');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const saveNoteboard = async () => {
    setSaving(true);
    try {
      await updateDoc(doc(db, 'content', 'noteboard'), {
        content: noteboard,
        updatedAt: new Date()
      });
      setMessage('Anslagstavlan uppdaterad!');
    } catch (error) {
      setMessage('Fel vid sparande');
      console.error('Error saving noteboard:', error);
    }
    setSaving(false);
  };

  const saveOpeningHours = async () => {
    setSaving(true);
    try {
      await updateDoc(doc(db, 'content', 'openingHours'), {
        content: openingHours,
        updatedAt: new Date()
      });
      setMessage('Öppettider uppdaterade!');
    } catch (error) {
      setMessage('Fel vid sparande');
      console.error('Error saving opening hours:', error);
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Laddar...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin-inloggning
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative block w-full px-3 py-2 border border-gray-300 rounded-t-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder="E-postadress"
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Lösenord"
                />
              </div>
            </div>

            {message && (
              <div className="text-red-600 text-center">{message}</div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Logga in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logga ut
          </button>
        </div>

        {message && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Noteboard Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Anslagstavla</h2>
            <p className="text-sm text-gray-600 mb-4">
              Anslagstavlan visas på startsidan endast när du skriver något här. Lämna tom för att dölja den.
            </p>
            <textarea
              value={noteboard}
              onChange={(e) => setNoteboard(e.target.value)}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              placeholder="Skriv viktiga meddelanden här... (ex: 'Semesterstängt 15-30 juli')"
            />
            <button
              onClick={saveNoteboard}
              disabled={saving}
              className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 disabled:opacity-50"
            >
              {saving ? 'Sparar...' : 'Spara anslagstavla'}
            </button>
          </div>

          {/* Opening Hours Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Öppettider</h2>
            <textarea
              value={openingHours}
              onChange={(e) => setOpeningHours(e.target.value)}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              placeholder="Uppdatera öppettider här..."
            />
            <button
              onClick={saveOpeningHours}
              disabled={saving}
              className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 disabled:opacity-50"
            >
              {saving ? 'Sparar...' : 'Spara öppettider'}
            </button>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-medium text-blue-900 mb-2">Tips:</h3>
          <ul className="text-blue-800 space-y-1">
            <li>• Anslagstavlan visas automatiskt på startsidan när du skriver något</li>
            <li>• Lämna anslagstavlan tom för att dölja den helt från besökare</li>
            <li>• Öppettider uppdateras automatiskt på kontaktsidan och i sidfoten</li>
            <li>• Alla ändringar syns direkt på hemsidan</li>
          </ul>
        </div>
      </div>
    </div>
  );
}