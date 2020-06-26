import React, { useState } from 'react';

const BAND_MEMBERS = [
  {
    id: 1,
    name: 'Neil Peart',
    instrument: 'Drums',
  },
  {
    id: 2,
    name: 'Alex Lifeson',
    instrument: 'Guitar',
  },
  {
    id: 3,
    name: 'Geddy Lee',
    instrument: 'Bass',
  },
];

export default function Band() {
  const [bandName, setBandName] = useState('Rush');
  const [bandMembers, setBandMembers] = useState(BAND_MEMBERS);

  return (
    <div>
      <h4>{bandName}</h4>
      <ul>
        {bandMembers.map(({ id, name, instrument }) => {
          return (
            <li key={id}>
              {name} - {instrument}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
