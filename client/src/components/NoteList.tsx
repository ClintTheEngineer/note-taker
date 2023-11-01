import React, { useEffect, useState } from 'react';

export const NoteList: React.FC = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('/api/notes');
        if (response.ok) {
          const data = await response.json();
          setNotes(data);
        } else {
          console.error('Error fetching notes');
        }
      } catch (error) {
        console.error('Error fetching notes: ', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h2>My Notes</h2>
      <ul>
        {notes.map((note: any) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};



