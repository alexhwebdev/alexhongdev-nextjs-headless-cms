'use client';
import { useState } from 'react';
import styles from './page.module.scss';
import Titles from './titles/page';
import Descriptions from './descriptions/page';

const data = [
  {
    title: "Ford",
    description: "Working on the Next-Generation HMI Experience without no driving experience.",
    speed: 0.5
  },
  {
    title: "UFC",
    description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
    speed: 0.5
  },
  {
    title: "Lincoln",
    description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
    speed: 0.67
  },
  {
    title: "Royal Caribbean",
    description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
    speed: 0.8
  },
  {
    title: "Sleepiq",
    description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
    speed: 0.8
  },
  {
    title: "NFL",
    description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
    speed: 0.8
  }
]

export interface Project {
  title: string;
  description: string;
  speed: number;
}

interface ProjectsProps {
  data: Project[];
}

export interface DescriptionProps {
  data: Project[];
  selectedProject: number | null;
}

export default function ScrollTextFill() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <Titles data={data} setSelectedProject={setSelectedProject}/>
      <Descriptions data={data} selectedProject={selectedProject}/>
    </div>
  )
}

