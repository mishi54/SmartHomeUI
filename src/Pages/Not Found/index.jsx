import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/login');
  };

  return (
    <section className="bg-gray-900 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-10 mt-10 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Page not found currently</p>
          <p className="mb-4 text-lg font-light text-gray-300">Sorry, we can't find such page.</p>

          <button
            onClick={handleBackToHome}
            type="button"
            className="text-white text-center bg-primary hover:bg-primary focus:outline-none focus:ring-1 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Back To Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
