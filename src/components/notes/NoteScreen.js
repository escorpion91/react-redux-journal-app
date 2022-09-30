import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          className="notes__title-input"
          type="text"
          placeholder="Some title"
          autoComplete="off"
        />
        <textarea
          placeholder="how was your day"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://images3.alphacoders.com/667/thumb-1920-667142.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
