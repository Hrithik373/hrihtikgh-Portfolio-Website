import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Bg from '../components/Bg';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import { Scrollbars } from 'react-custom-scrollbars';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocial } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home: NextPage<Props> = ({ projects, skills, pageInfo, experiences, socials }: Props) => {
  return (
<div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00FFFF]/80 text-white z-0"
  style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(https://t3.ftcdn.net/jpg/03/22/30/46/360_F_322304683_7ysRarFkmy2osfPKTOYQv7qTPofKelfb.jpg) center/cover no-repeat' }}>
      
      <Head>
        <title>hrithikgh-portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id='Bg' className="snap-center">
        <Bg pageinfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageinfo={pageInfo} />
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
e
      {/* Projects Section */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <a href="#bg">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer '
              src='./logo.jpg'
              alt=''
            />
          </div>
        </footer>
      </a>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};