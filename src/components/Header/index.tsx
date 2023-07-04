import {HeaderProps} from './interface';
import {Container, Section, SectionText, SectionsContainer} from './styles';

export const Header = ({
  firstSectionName,
  secondSectionName,
  activePage,
  setActivePage,
}: HeaderProps) => {
  return (
    <Container>
      <SectionsContainer>
        <Section
          active={activePage == firstSectionName}
          onPress={() => setActivePage(firstSectionName)}>
          <SectionText active={activePage == firstSectionName}>
            {firstSectionName}
          </SectionText>
        </Section>
        <Section
          active={activePage == secondSectionName}
          onPress={() => setActivePage(secondSectionName)}>
          <SectionText active={activePage == secondSectionName}>
            {secondSectionName}
          </SectionText>
        </Section>
      </SectionsContainer>
    </Container>
  );
};
