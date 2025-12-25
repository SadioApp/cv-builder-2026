import React from 'react';
import { User, Briefcase, Wrench, Upload, Plus, Trash2, Mail, Phone, MapPin } from 'lucide-react';

const ControlPanel = ({ formData, setFormData, onFinalize }) => {
    const updatePersonal = (field, value) => {
        setFormData(prev => ({
            ...prev,
            personal: { ...prev.personal, [field]: value }
        }));
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, photo: reader.result }
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const addExperience = () => {
        setFormData(prev => ({
            ...prev,
            experiences: [
                ...prev.experiences,
                { id: Date.now(), role: '', company: '', date: '', description: '' }
            ]
        }));
    };

    const removeExperience = (id) => {
        setFormData(prev => ({
            ...prev,
            experiences: prev.experiences.filter(exp => exp.id !== id)
        }));
    };

    const updateExperience = (id, field, value) => {
        setFormData(prev => ({
            ...prev,
            experiences: prev.experiences.map(exp =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        }));
    };

    const addSkill = () => {
        setFormData(prev => ({
            ...prev,
            skills: [...prev.skills, '']
        }));
    };

    const removeSkill = (index) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }));
    };

    const updateSkill = (index, value) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.map((skill, i) => (i === index ? value : skill))
        }));
    };

    return (
        <div className="p-6 md:p-8 space-y-8 pb-32 max-w-2xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Editor</h1>
                <p className="text-slate-500">Fill in your details to generate your CV.</p>
            </header>

            {/* Personal Info */}
            <section className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                <div className="flex items-center gap-2 mb-2 border-b border-slate-100 pb-3">
                    <User className="text-indigo-600 w-5 h-5" />
                    <h2 className="text-lg font-semibold text-slate-800">Personal Information</h2>
                </div>

                <div className="space-y-4">
                    {/* Photo Upload */}
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-200 shadow-inner">
                            {formData.personal.photo ? (
                                <img src={formData.personal.photo} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <User className="text-slate-300 w-8 h-8" />
                            )}
                        </div>
                        <div>
                            <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors shadow-sm">
                                <Upload className="w-4 h-4" />
                                Upload Photo
                                <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                            </label>
                            <p className="text-xs text-slate-400 mt-1 pl-1">Recommended: Square JPG/PNG</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
                            <input
                                type="text"
                                value={formData.personal.fullName}
                                onChange={(e) => updatePersonal('fullName', e.target.value)}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                                placeholder="e.g. Sarah Connor"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Job Title</label>
                            <input
                                type="text"
                                value={formData.personal.title}
                                onChange={(e) => updatePersonal('title', e.target.value)}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                                placeholder="e.g. Senior Product Designer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Phone</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={formData.personal.phone}
                                    onChange={(e) => updatePersonal('phone', e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="+1 234 567 890"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                                <input
                                    type="email"
                                    value={formData.personal.email}
                                    onChange={(e) => updatePersonal('email', e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="sarah@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={formData.personal.address}
                                    onChange={(e) => updatePersonal('address', e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="San Francisco, CA"
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-slate-600 mb-1">Professional Summary</label>
                            <textarea
                                value={formData.personal.summary}
                                onChange={(e) => updatePersonal('summary', e.target.value)}
                                rows={4}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all resize-none"
                                placeholder="Briefly describe your professional background and goals..."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                        <Briefcase className="text-indigo-600 w-5 h-5" />
                        <h2 className="text-lg font-semibold text-slate-800">Experience</h2>
                    </div>
                    <button onClick={addExperience} className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                        <Plus className="w-4 h-4" /> Add
                    </button>
                </div>

                <div className="space-y-6">
                    {formData.experiences.map((exp) => (
                        <div key={exp.id} className="group relative p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-100 transition-all">
                            <button
                                onClick={() => removeExperience(exp.id)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                title="Remove"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-8">
                                <div className="col-span-2 md:col-span-1">
                                    <input
                                        type="text"
                                        value={exp.role}
                                        onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                                        className="w-full bg-transparent border-b border-slate-200 focus:border-indigo-500 outline-none py-1 font-medium text-slate-800 placeholder-slate-400"
                                        placeholder="Role (e.g. Senior dev)"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <input
                                        type="text"
                                        value={exp.company}
                                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                        className="w-full bg-transparent border-b border-slate-200 focus:border-indigo-500 outline-none py-1 text-slate-600 placeholder-slate-400"
                                        placeholder="Company"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <input
                                        type="text"
                                        value={exp.date}
                                        onChange={(e) => updateExperience(exp.id, 'date', e.target.value)}
                                        className="w-full bg-transparent border-b border-slate-200 focus:border-indigo-500 outline-none py-1 text-sm text-slate-500 placeholder-slate-400"
                                        placeholder="Date Range (e.g. 2020 - Present)"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <textarea
                                        value={exp.description}
                                        onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                                        rows={3}
                                        className="w-full bg-transparent border-b border-slate-200 focus:border-indigo-500 outline-none py-2 text-sm text-slate-600 placeholder-slate-400 resize-none"
                                        placeholder="Description of your responsibilities..."
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    {formData.experiences.length === 0 && (
                        <div className="text-center py-8 text-slate-400 text-sm bg-slate-50 rounded-lg border border-dashed border-slate-200">
                            No experience added yet.
                        </div>
                    )}
                </div>
            </section>

            {/* Skills */}
            <section className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                        <Wrench className="text-indigo-600 w-5 h-5" />
                        <h2 className="text-lg font-semibold text-slate-800">Skills</h2>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 group hover:border-indigo-200 hover:bg-indigo-50 transition-all">
                            <input
                                type="text"
                                value={skill}
                                onChange={(e) => updateSkill(index, e.target.value)}
                                className="bg-transparent outline-none w-24 text-sm text-slate-700 placeholder-slate-400 font-medium"
                                placeholder="Skill"
                            />
                            <button onClick={() => removeSkill(index)} className="text-slate-400 hover:text-red-500">
                                <Trash2 className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={addSkill}
                        className="flex items-center gap-1 px-3 py-1 rounded-full border border-dashed border-slate-300 text-slate-500 text-sm hover:border-indigo-300 hover:text-indigo-600 transition-all"
                    >
                        <Plus className="w-3 h-3" /> Add Skill
                    </button>
                </div>
            </section>


            {/* Finalize Button */}
            <div className="fixed bottom-0 left-0 w-full md:w-1/2 bg-white/80 backdrop-blur-md p-4 border-t border-slate-200 flex justify-center z-10">
                <button
                    onClick={onFinalize}
                    className="w-full max-w-md py-3.5 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-600 hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                    Finalize & Download
                </button>
            </div>
        </div>
    );
};

export default ControlPanel;
