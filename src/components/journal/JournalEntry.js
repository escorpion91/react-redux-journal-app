import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://images.newscientist.com/wp-content/uploads/2020/05/22112120/sagdig_opo0431b_web.jpg?crop=1:1,smart&width=1200&height=1200&upscale=true)',
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">jas</p>
        <p className="journal__entry-content">
          fdsfhdgdfkgdkfgjdgjdkfgdjfgkdjg
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
