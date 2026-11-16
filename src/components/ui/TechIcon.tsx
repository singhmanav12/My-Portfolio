import React from 'react';
import { Code2, Server } from 'lucide-react';
import { FaAws, FaJava } from 'react-icons/fa';
import {
  SiPython,
  SiDocker,
  SiKubernetes,
  SiReact,
  SiGit,
  SiJavascript,
  SiLinux,
  SiTerraform,
  SiHtml5,
  SiCss,
  SiGithub,
  SiGo,
  SiPostgresql,
} from 'react-icons/si';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, size = 16, className = '' }) => {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    case 'python':
      return <SiPython size={size} className={`text-[#3776AB] ${className}`} />;
    case 'aws':
      return <FaAws size={size} className={`text-[#FF9900] ${className}`} />;
    case 'docker':
      return <SiDocker size={size} className={`text-[#2496ED] ${className}`} />;
    case 'kubernetes':
    case 'k8s':
      return <SiKubernetes size={size} className={`text-[#326CE5] ${className}`} />;
    case 'go':
    case 'golang':
      return <SiGo size={size} className={`text-[#00ADD8] ${className}`} />;
    case 'postgresql':
    case 'postgres':
    case 'postreg sql':
    case 'postgres sql':
      return <SiPostgresql size={size} className={`text-[#336791] ${className}`} />;
    case 'react':
      return <SiReact size={size} className={`text-[#61DAFB] ${className}`} />;
    case 'git':
      return <SiGit size={size} className={`text-[#F05032] ${className}`} />;
    case 'java':
      return <FaJava size={size} className={`text-[#007396] ${className}`} />;
    case 'javascript':
      return <SiJavascript size={size} className={`text-[#F7DF1E] ${className}`} />;
    case 'linux':
      return <SiLinux size={size} className={`text-white ${className}`} />;
    case 'terraform':
      return <SiTerraform size={size} className={`text-[#844FBA] ${className}`} />;
    case 'html':
      return <SiHtml5 size={size} className={`text-[#E34F26] ${className}`} />;
    case 'css':
      return <SiCss size={size} className={`text-[#1572B6] ${className}`} />;
    case 'rest apis':
      return <Server size={size} className={`text-slate-400 ${className}`} />;
    case 'github':
      return <SiGithub size={size} className={`text-white ${className}`} />;
    default:
      return <Code2 size={size} className={`text-slate-400 ${className}`} />;
  }
};

