/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CAREERS_DATA } from '../../data';
import { Briefcase, MapPin, Clock, DollarSign, Plus, Minus, UserCheck, Heart, Coffee, ShieldCheck, FileCheck, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { JobOpening } from '../../types';

export default function Careers() {
  const [activeJob, setActiveJob] = useState<string | null>(null);
  const [applyModalJob, setApplyModalJob] = useState<JobOpening | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  const benefits = [
    { icon: Heart, title: 'Comprehensive Medical', desc: 'Full family health insurance coverage plus annual body checkups.' },
    { icon: Coffee, title: 'Catered Lunch & Pantry', desc: 'Complimentary high-quality South & North Indian meals at our Chennai plant.' },
    { icon: ShieldCheck, title: 'FSC Safety Protocols', desc: 'Working with highly audited, safe, ventilated print lines.' },
    { icon: DollarSign, title: 'Performance Bonuses', desc: 'Bi-annual bonuses matching production speed and client satisfaction indices.' }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setApplyModalJob(null);
      setName('');
      setEmail('');
      setPortfolio('');
      setUploadedFile(null);
    }, 4000);
  };

  const simulateResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      const name = e.target.files[0].name;
      setTimeout(() => {
        setIsUploading(false);
        setUploadedFile(name);
      }, 1200);
    }
  };

  return (
    <div className="space-y-20 pb-16 pt-4">
      
      {/* Header */}
      <div id="careers-header" className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full">
          We Are Hiring
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Join the Press Revolution
        </h1>
        <p className="text-slate-500 text-sm">
          Want to operate the absolute finest Heidelberg offset presses or lead structural packaging designs? Explore open roles and build your physical design career path.
        </p>
      </div>

      {/* Benefits / Perks */}
      <section id="careers-benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Why Work With AxoPrint?</h3>
          <p className="text-slate-400 text-xs mt-1">We believe premium workspace conditions yield flawless print precision.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-transparent dark:border-slate-800/60 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg transition-all"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl w-11 h-11 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{b.title}</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings-list" className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Positions</h3>
          <p className="text-slate-400 text-xs mt-1">Chennai Guindy Plant positions updated as of July 2026.</p>
        </div>

        <div className="space-y-4">
          {CAREERS_DATA.map((job) => {
            const isOpen = activeJob === job.id;
            return (
              <div
                key={job.id}
                id={`job-panel-${job.id}`}
                className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 rounded-2xl overflow-hidden"
              >
                {/* Header panel click to expand */}
                <button
                  onClick={() => setActiveJob(isOpen ? null : job.id)}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-6 text-left gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-1.5">
                    <span className="text-[9px] bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                      {job.department}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">{job.title}</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 self-end sm:self-center">
                    <span>View details</span>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-slate-100 dark:border-slate-800"
                    >
                      <div className="p-6 space-y-4 text-left text-xs text-slate-500">
                        <p className="leading-relaxed">{job.description}</p>
                        
                        <div className="space-y-1.5">
                          <h5 className="font-bold text-slate-700 dark:text-slate-300">Basic Requirements:</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
                          <div className="text-[11px]">
                            <p><span className="font-bold text-slate-400">Salary:</span> <span className="text-slate-800 dark:text-slate-200 font-extrabold">{job.salaryRange}</span></p>
                            <p><span className="font-bold text-slate-400">Experience:</span> {job.experience}</p>
                          </div>
                          
                          <button
                            id={`apply-job-btn-${job.id}`}
                            onClick={() => setApplyModalJob(job)}
                            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-md shadow-blue-500/10"
                          >
                            Apply For This Role
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Careers Drawer Application Modal */}
      <AnimatePresence>
        {applyModalJob && (
          <motion.div
            id="apply-job-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-[32px] p-6 sm:p-8 max-w-lg w-full border border-slate-150 dark:border-slate-800 shadow-2xl relative text-left"
            >
              <button
                id="close-apply-modal"
                onClick={() => setApplyModalJob(null)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!applySuccess ? (
                <form id="careers-apply-form" onSubmit={handleApplySubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                      {applyModalJob.department} Application
                    </span>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white pt-1">
                      {applyModalJob.title}
                    </h3>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Full Name</label>
                    <input
                      id="apply-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Amit Kumar"
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email ID</label>
                    <input
                      id="apply-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. amit@gmail.com"
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Portfolio link (Optional)</label>
                    <input
                      id="apply-portfolio"
                      type="url"
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      placeholder="e.g. https://behance.net/myprofile"
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Upload Resume (.PDF only)</label>
                    <div className="relative border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center hover:bg-slate-50 dark:hover:bg-slate-950 transition-all">
                      <input
                        id="resume-upload-input"
                        type="file"
                        className="hidden"
                        accept=".pdf"
                        onChange={simulateResumeUpload}
                        required={!uploadedFile}
                      />
                      {!uploadedFile && !isUploading && (
                        <label htmlFor="resume-upload-input" className="cursor-pointer space-y-1 block">
                          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Choose resume file</p>
                          <span className="text-[10px] text-slate-400 block">Standard PDF profiles under 5MB</span>
                        </label>
                      )}
                      {isUploading && (
                        <span className="text-[10px] text-slate-400 animate-pulse">Checking document schema...</span>
                      )}
                      {uploadedFile && (
                        <div className="flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                          <span>{uploadedFile}</span>
                          <button type="button" onClick={() => setUploadedFile(null)} className="text-red-500">Remove</button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      id="apply-submit-action-btn"
                      type="submit"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg"
                    >
                      Submit Candidate Credentials
                    </button>
                  </div>
                </form>
              ) : (
                /* Application Success overlay */
                <div className="text-center py-8 space-y-4">
                  <div className="mx-auto w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Credentials Submitted!</h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Thank you, {name}. Our HR studio lead Amit Sharma will review your portfolio vectors and follow up in 48 working hours.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
