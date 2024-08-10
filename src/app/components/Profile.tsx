import React from 'react';
import { z } from 'zod';
import WorkExperienceSchema from '../../../forge/schema/profile';

type ProfileType = z.infer<typeof WorkExperienceSchema>;

interface ProfileProps {
    profile: ProfileType;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
    return (
        <div className="w-full min-h-screen bg-gray-50 text-gray-800">
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-5xl font-bold mb-2 text-gray-900">{profile.name}</h1>
                {profile.description && <p className="text-xl mb-8 text-gray-600">{profile.description}</p>}

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">Work Experience</h2>
                    {profile.workExperience.map((exp, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800">{exp.jobTitle} at {exp.companyName}</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                {exp.startDate} - {exp.endDate || 'Present'}
                            </p>
                            <p className="text-gray-700">{exp.description}</p>
                        </div>
                    ))}
                </section>

                {profile.skills && profile.skills.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">Skills</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {profile.skills.map((skill, index) => (
                                <li key={index} className="bg-gray-100 rounded-full px-4 py-2 text-sm">{skill}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {profile.education && profile.education.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">Education</h2>
                        <ul className="list-disc list-inside">
                            {profile.education.map((edu, index) => (
                                <li key={index}>{edu}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {profile.certifications && profile.certifications.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">Certifications</h2>
                        <ul className="list-disc list-inside">
                            {profile.certifications.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {profile.projects && profile.projects.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">Projects</h2>
                        <ul className="list-disc list-inside">
                            {profile.projects.map((project, index) => (
                                <li key={index}>{project}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {profile.interests && profile.interests.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">Interests</h2>
                        <ul className="list-disc list-inside">
                            {profile.interests.map((interest, index) => (
                                <li key={index}>{interest}</li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">Connect with me</h2>
                    <div className="flex flex-wrap gap-4">
                        {profile.linkedin && (
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                                className="flex items-center text-blue-600 hover:text-blue-800">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                        )}
                        {profile.github && (
                            <a href={profile.github} target="_blank" rel="noopener noreferrer"
                                className="flex items-center text-gray-800 hover:text-gray-600">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                GitHub
                            </a>
                        )}
                        {profile.twitter && (
                            <a href={profile.twitter} target="_blank" rel="noopener noreferrer"
                                className="flex items-center text-blue-400 hover:text-blue-600">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                                Twitter
                            </a>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Profile;

export const config = {
    path: "profile",
    public: true,
    cache: "Individual",
    contentType: "image",
    model: "gpt-4o-mini",
};