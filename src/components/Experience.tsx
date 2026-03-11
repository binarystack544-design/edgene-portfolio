"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const jobs = [
        {
            role: "Full Stack Engineer",
            company: "Extradom.pl sp. z o.o ",
            period: "May 2020 - Jan 2026",
            tech: ["Next.js", "TypeScript", "NestJS", "MongoDB", "RESTful APIs"],
            points: [
                "Took ownership of features end-to-end across React/Next.js, Node.js/NestJS, and MongoDB, from initial requirements through release and support.",
                "Sped up key flows by improving API performance, tightening database queries/indexes, and adding practical caching (cut latency from ~800ms to ~300ms).",
                "Kept projects scalable by building modular services and clean UI patterns that were easy to extend without piling on tech debt.",
                "Worked closely with Product, Design, and QA in a fully remote setup—scoping work, breaking down tasks, and shipping on schedule.",
                "Integrated Stripe and PayPal payments with solid validation, webhook handling, and edge-case coverage (retries, failures, refunds).",
                "Built online booking + calendar features, including automated confirmations, reminders, and status updates.",
                "Supported deployments and scaling on AWS, improving stability through refactoring, stronger input validation, and better error handling."
            ],
        },
        {
            role: "Senior Frontend Developer",
            company: "Lightweight Solutions",
            period: "Nov 2016 – Mar 2020",
            tech: ["React.js", "Next.js", "JavaScript (ES6+)"],
            points: [
                "Led frontend work for e-commerce storefronts and dashboards using React and Next.js, owning UI delivery from start to finish.",
                "Built reusable components and page layouts to keep styling consistent and speed up development across new features.",
                "Improved page speed and Core Web Vitals by reducing bundle size, optimizing images/assets, and fine-tuning rendering behavior.",
                "Implemented product browsing UX (collections, search, filters, product pages) with smooth interactions and conversion-friendly layouts.",
                "Connected the frontend to REST APIs and handled real production states cleanly (loading, empty data, errors, edge cases).",
                "Raised frontend quality by introducing repeatable checks (tests where it mattered, safer PR reviews, and regression prevention).",
                "Worked day-to-day with design remotely to ship pixel-clean, responsive UI.",
                "Cleaned up and refactored older UI code to make it easier to maintain and safer to build on.",
            ],
        },
        {
            role: "Frontend Developer",
            company: "Upwork & Freelancer",
            period: "Apr 2013 – Oct 2016",
            tech: ["React.js", "Bootstrap", "Material UI"],
            points: [
                "Delivered frontend work for multiple client projects via Upwork and Freelancer.com, mainly on e-commerce and marketing sites.",
                "Built responsive interfaces using React, turning designs into clean, reusable components and consistent page layouts.",
                "Implemented common e-commerce UI pieces like product grids, product detail sections, carts, and account-related pages.",
                "Integrated UI with backend APIs and handled real-world states (slow networks, validation errors, partial data, retries).",
                "Focused on user-facing polish—forms, helpful error messages, empty states, and mobile-friendly interactions.",
                "Fixed bugs and UI regressions quickly, then cleaned up the code to avoid the same issues coming back.",
                "Managed remote client communication clearly (requirements, updates, timelines), and delivered work in milestones.",
            ],
        },
    ];

    return (
        <section id="experience" aria-label="Professional Experience" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Professional Experience
                    </h2>
                    <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-8">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-500 z-10" />

                            <div
                                className="bg-slate-800/20 rounded-xl border border-slate-700/50 p-6 cursor-pointer hover:bg-slate-800/40 transition-colors"
                                onClick={() => toggleExpand(index)}
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-100">
                                            {job.role}
                                        </h3>
                                        <p className="text-violet-400 font-medium text-lg">
                                            {job.company}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                                        <Calendar className="w-4 h-4" />
                                        {job.period}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {job.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full border border-slate-700 bg-slate-900/30 text-slate-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Always visible brief or first item? No, let's just toggle the list */}
                                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mt-2">
                                    {expandedIndex === index ? (
                                        <>
                                            Hide Responsibilities <ChevronUp className="w-4 h-4" />
                                        </>
                                    ) : (
                                        <>
                                            View Responsibilities <ChevronDown className="w-4 h-4" />
                                        </>
                                    )}
                                </div>

                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="mt-4 space-y-3 pt-4 border-t border-slate-700/50">
                                                {job.points.map((point, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                                                    >
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
