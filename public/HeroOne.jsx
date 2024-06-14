import React from 'react';

export function HeroOne() {
  const goToAnotherPage = () => {
    console.log('Button clicked!');
    // Use window.open to open a new tab or window with the specified URL
    window.open('http://localhost:8080');
  };

  return (
    <div className="relative w-full bg-white">
      {/* ... (rest of your component) */}
      <form action="" className="mt-8 flex items-start space-x-2">
        <div>
          {/* ... (email input field) */}
        </div>
        <div>
          <button
            type="button"
            onClick={goToAnotherPage}
            id="startbtn"
            className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Start Button 1
          </button>
        </div>
      </form>
    </div>
  );
}
