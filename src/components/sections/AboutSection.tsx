'use client';

import { Card } from '@/components/ui/card';
import { Code, Database, Figma, GitMerge, Server } from 'lucide-react';
import { ReactIcon } from '../icons/ReactIcon';
import { motion } from 'framer-motion';

const skills = [
  { icon: ReactIcon, name: 'React', color: 'text-sky-400' },
  { icon: Server, name: 'Node.js', color: 'text-emerald-400' },
  { icon: Code, name: 'TypeScript', color: 'text-blue-400' },
  { icon: Database, name: 'Databases', color: 'text-orange-400' },
  { icon: GitMerge, name: 'Git & GitHub', color: 'text-slate-400' },
  { icon: Figma, name: 'Figma', color: 'text-pink-400' },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 + index * 0.1 }}
    whileHover={{ scale: 1.1, y: -5 }}
  >
    <Card className="p-4 flex flex-col items-center justify-center gap-2 bg-card/50 hover:bg-card transition-colors h-full">
      <skill.icon className={`w-8 h-8 ${skill.color}`} />
      <p className="text-sm font-medium text-center">{skill.name}</p>
    </Card>
  </motion.div>
);

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-4 md:col-span-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
            About Me
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed">
            I'm a passionate full-stack developer with a knack for building elegant and efficient web applications. With a background in both front-end and back-end technologies, I enjoy bringing ideas to life and solving complex problems. My goal is to create software that is not only functional but also provides a great user experience.
          </p>
          <p className="text-muted-foreground md:text-lg/relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and brewing the perfect cup of coffee.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 md:col-span-2">
          <div className="w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-center font-headline text-primary">My Skills</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
