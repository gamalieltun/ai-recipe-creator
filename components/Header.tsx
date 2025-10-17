
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 text-center">
                <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                    AI Recipe Creator
                </h1>
                <p className="text-gray-600 mt-1">Turn your pantry items into culinary masterpieces.</p>
            </div>
        </header>
    );
};

export default Header;
