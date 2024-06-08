
import React from 'react';

const HomePage = ({friend}) => {
  console.log(friend);
  
  return (
    <div className="container mt-5">
      <h1>Welcome to MyApp</h1>
      <p>This is the home page. Feel free to explore the application.</p>
    </div>
  );
};

export default HomePage;
