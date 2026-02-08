import React, { useState } from 'react';
import { experiences } from '../../constants';
import { Briefcase, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export const Experience = () => {
    const [expandedId, setExpandedId] = useState(1); // First item expanded by default

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
             {/* Background elements */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Experience</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-text-primary tracking-tight">
                        Professional <span className="text-secondary">Journey</span>
                    </h2>
                    <p className="text-text-secondary font-light text-lg">
                        My work background in software engineering, AI, and full-stack development.
                    </p>
                </div>

                <div className="space-y-4">
                    {experiences.map((exp) => (
                        <div 
                            key={exp.id} 
                            onClick={() => toggleExpand(exp.id)}
                            className={`group relative border rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden
                                ${expandedId === exp.id 
                                    ? 'bg-white border-primary/20 shadow-warm ring-1 ring-primary/10' 
                                    : 'bg-white/40 border-white/60 hover:bg-white/60 hover:shadow-sm'
                                }
                            `}
                        >
                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300
                                        ${expandedId === exp.id ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white text-text-secondary shadow-sm border border-slate-100'}
                                    `}>
                                        <Briefcase size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                                            {exp.company}
                                            <ExternalLink size={14} className="text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                        <p className={`font-medium transition-colors ${expandedId === exp.id ? 'text-primary' : 'text-text-secondary'}`}>
                                            {exp.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between md:justify-end gap-6 pl-19 md:pl-0">
                                    <span className="text-sm font-medium text-text-secondary/80 flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full border border-white/60">
                                        <Calendar size={14} /> {exp.date}
                                    </span>
                                    <div className={`p-2 rounded-full transition-transform duration-300 text-text-secondary ${expandedId === exp.id ? 'rotate-180 bg-primary/10 text-primary' : ''}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Expandable Content */}
                            <div className={`
                                transition-[max-height,opacity,padding] duration-500 ease-in-out overflow-hidden
                                ${expandedId === exp.id ? 'max-h-96 opacity-100 pb-8 px-6 md:px-8' : 'max-h-0 opacity-0'}
                            `}>
                                <div className="pl-0 md:pl-[76px] space-y-4">
                                    <p className="text-text-secondary leading-relaxed font-light text-base border-l-2 border-primary/20 pl-4">
                                        {exp.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pl-4">
                                        {exp.skills.map((skill, i) => (
                                            <span key={i} className="text-xs px-3 py-1 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100/50 rounded-full text-text-secondary font-medium tracking-wide">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
