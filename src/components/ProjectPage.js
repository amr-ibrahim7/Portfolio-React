import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import ProjectInfo from '../assets/data/projects';
import SectionTitle from './SectionTitle';

const ProjectStyles = styled.div`
  padding: 10rem 0;
  .projects__searchbar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchbar input {
    width: 100%;
    padding: 0.8rem;
    font-size: 2rem;
    outline: none;
    border: none;
    color: var(--black);
    border-radius: 8px;
  }
  .projects__searchbar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchbar .searchIcon path {
    color: var(--deep-dark);
  }
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__searchbar,
    .projects__searchbar form,
    .projects__searchbar input {
      width: 100%;
    }
  }
`;
export default function ProjectPage() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }
  return (
    <ProjectStyles>
      <div className="container">
        <SectionTitle subheading="Some of my Recent Works" heading="Projects" />
        <div className="projects__searchbar">
          <form>
            <input
              value={searchText}
              placeholder="Project Name"
              onChange={handleChange}
              type="text"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}
