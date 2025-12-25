import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Preview = ({ formData }) => {
    return (
        <div id="cv-preview" className="w-[210mm] min-h-[297mm] bg-white shadow-2xl p-[15mm] mx-auto text-slate-800 print:shadow-none print:w-full print:max-w-none print:mx-0 print:p-8 overflow-hidden relative">

            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none print:hidden"></div>

            {/* Header */}
            <div className="flex items-start gap-8 mb-10 pb-10 border-b-2 border-slate-900 relative z-10">
                {formData.personal.photo && (
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0 ring-4 ring-indigo-50">
                        <img src={formData.personal.photo} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                )}
                <div className="flex-1 pt-2">
                    <h1 className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight uppercase leading-none">{formData.personal.fullName || 'Your Name'}</h1>
                    <p className="text-xl text-indigo-600 font-medium mb-5 tracking-wide">{formData.personal.title || 'Professional Title'}</p>

                    <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-600 font-medium">
                        {formData.personal.phone && (
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-slate-100 rounded-full text-slate-900">
                                    <Phone className="w-3 h-3" />
                                </div>
                                {formData.personal.phone}
                            </div>
                        )}
                        {formData.personal.email && (
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-slate-100 rounded-full text-slate-900">
                                    <Mail className="w-3 h-3" />
                                </div>
                                {formData.personal.email}
                            </div>
                        )}
                        {formData.personal.address && (
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-slate-100 rounded-full text-slate-900">
                                    <MapPin className="w-3 h-3" />
                                </div>
                                {formData.personal.address}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Summary */}
            {formData.personal.summary && (
                <div className="mb-10 relative z-10">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-indigo-600"></span> Profile
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-base">{formData.personal.summary}</p>
                </div>
            )}

            <div className="grid grid-cols-12 gap-8 relative z-10">
                <div className="col-span-8">
                    {/* Experience */}
                    <div className="mb-8">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-indigo-600"></span> Experience
                        </h3>
                        <div className="space-y-8 border-l-2 border-slate-100 ml-3 pl-8 relative">
                            {formData.experiences.length > 0 ? formData.experiences.map((exp) => (
                                <div key={exp.id} className="relative">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[39px] top-1.5 w-5 h-5 bg-white border-4 border-indigo-600 rounded-full"></div>

                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-slate-800 text-xl">{exp.role || 'Role'}</h4>
                                    </div>
                                    <div className="flex items-center gap-3 mb-3 text-sm">
                                        <span className="font-semibold text-indigo-600">{exp.company || 'Company'}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span className="text-slate-500 font-medium">{exp.date || 'Date'}</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-wrap">{exp.description}</p>
                                </div>
                            )) : (
                                <p className="text-slate-400 italic text-sm pl-2">No experience listed.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-span-4">
                    {/* Skills */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-indigo-600"></span> Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {formData.skills.map((skill, index) => skill && (
                                <span key={index} className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm border border-slate-700">
                                    {skill}
                                </span>
                            ))}
                            {formData.skills.length === 0 && <span className="text-slate-400 italic text-sm">No skills added.</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
