import React from 'react';
import Statistics from './components/Statistics';
import data from './data.json';

export default function App() {
  return (
    <>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
}
