import React from 'react';
import { experiences } from '../../constants';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
    return (
        <section id="experience" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-medium mb-4 text-text-primary tracking-tight">Work <span className="text-slate-400">Experience</span></h2>
                    <p className="text-text-secondary max-w-2xl mx-auto font-light">
                        My professional journey in building software and solving problems.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-slate-200"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-12`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-slate-300 z-10 mt-8"></div>

                                {/* Content */}
                                <div className="md:w-1/2 pl-8 md:pl-0">
                                    <div className={`glass-card p-8 relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} border-none shadow-soft hover:shadow-card bg-white group`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-medium text-text-primary tracking-tight">{exp.role}</h3>
                                            <span className="text-xs font-medium px-3 py-1 bg-slate-50 rounded-full text-slate-500 flex items-center gap-1">
                                                <Calendar size={12} strokeWidth={1.5} /> {exp.date}
                                            </span>
                                        </div>
                                        <h4 className="text-lg text-slate-500 font-medium mb-6 flex items-center gap-2">
                                            <Briefcase size={16} strokeWidth={1.5} /> {exp.company}
                                        </h4>
                                        <p className="text-text-secondary text-sm mb-6 leading-relaxed font-light">
                                            {exp.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="text-xs px-3 py-1 bg-slate-50 rounded-full text-slate-600 font-medium tracking-wide">
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
            </div>
        </section>
    );
};
