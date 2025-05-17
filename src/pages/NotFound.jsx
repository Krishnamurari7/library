import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="p-8 text-center">
    <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
    <p className="mt-4">
      Go back to <Link to="/" className="text-blue-600 underline">Home</Link>
    </p>
  </div>
);

export default NotFound;