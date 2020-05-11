import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { UnorderedList, ListItem } from 'carbon-components-react';
// import { UnorderedList } from 'carbon-components-react/lib/components/UnorderedList';
// import { ListItem } from 'carbon-components-react/lib/components/ListItem';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                <span> &sdot; </span>
                <span>
                  {work.start.year} to {work.isCurrentRole ? 'Present' : work.end.year}
                </span>
              </div>
              <Paragraph>{work.summary}</Paragraph>
              <h5>Highlights</h5>
              <UnorderedList>
              {work.highlights.map((highlight, i) => (
                <ListItem>{highlight}</ListItem>
              ))}
              </UnorderedList>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
