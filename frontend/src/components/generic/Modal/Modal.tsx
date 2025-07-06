import React from 'react';

export interface IModalProps {
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ title, isOpen, onClose, children }: IModalProps) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-opacity-90 backdrop-blur-xs border border-gray-400 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative"
                onClick={(e) => e.stopPropagation()}
            >
            <h2 className="text-xl font-semibold mb-4">
                {title}
            </h2>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
                ✕
            </button>
            {children}
            </div>
        </div>
    );
};
