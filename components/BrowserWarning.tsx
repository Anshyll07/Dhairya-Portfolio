import React from 'react';

interface BrowserWarningProps {
  onClose: () => void;
}

const BrowserWarning: React.FC<BrowserWarningProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-surface rounded-lg shadow-xl max-w-md w-full p-6 text-center border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-3">Browser Notice</h2>
        <p className="text-slate-300 mb-6">
          It looks like you're using Google Chrome. Due to the complex animations on this site, you might experience some performance issues.
        </p>
        <p className="text-slate-300 mb-6">
          For the smoothest experience, we recommend using a different browser like <span className="font-bold text-white">Firefox</span> or <span className="font-bold text-white">Brave</span>.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary/80 transition-colors"
        >
          Continue Anyway
        </button>
      </div>
    </div>
  );
};

export default BrowserWarning;
