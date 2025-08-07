import React from 'react';
import Filter from './components/Filter';
import Review from './components/Review';

const App = () => {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  };

  return (
    <div style={appStyle}>
      <Filter /> 
        {/* ✅ Only keep your updated filter and categorized cart display */}
      <Review />
    </div>
  );
};

export default App;
