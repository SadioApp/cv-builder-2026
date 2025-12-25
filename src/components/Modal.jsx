import React, { useEffect, useState } from 'react';
import { CheckCircle, Printer, X, FileText } from 'lucide-react';

const Modal = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation frame for transition
        requestAnimationFrame(() => {
            setIsVisible(true);
        });
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for animation
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 print:hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                onClick={handleClose}
            ></div>

            {/* Modal Content */}
            <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative transform transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 p-2 rounded-full hover:bg-slate-100"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-green-50/50 shadow-sm">
                        <CheckCircle className="w-10 h-10" />
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-2">CV Finalized!</h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">Your professional resume is ready. Click below to print or save it as a PDF document.</p>

                    <div className="space-y-4">
                        <button
                            onClick={handlePrint}
                            className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
                        >
                            <Printer className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Print / Save as PDF
                        </button>

                        <button
                            onClick={handleClose}
                            className="w-full py-4 bg-white border-2 border-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-50 hover:text-slate-900 hover:border-slate-200 transition-all flex items-center justify-center gap-2"
                        >
                            <FileText className="w-5 h-5" />
                            Continue Editing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
