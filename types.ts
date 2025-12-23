import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string; // For hover glow effects
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}