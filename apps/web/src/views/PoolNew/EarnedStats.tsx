import * as React from 'react'
import styled from 'styled-components'

type StatCardProps = {
  title: string
  amount: string
}

type DetailedProps = {
  title: string
  details: string
}

const Container = styled.section`
  display: flex;
  max-width: 862px;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 80px;
  margin-bottom: 80px;
`

const Title = styled.h1`
  color: #fff;
  width: 100%;
  font: 700 20px Sen, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`

const StatsContainer = styled.div`
  margin-top: 35px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`

const Row = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`

const StatGroup = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 75%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`

const StatCardWrapper = styled.div`
  border-radius: 30px;
  background-color: #1f2229;
  flex-grow: 1;
  width: 100%;
  padding: 0 38px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`

const StatCard = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 991px) {
    width: 100%;
  }
`

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding: 0 1px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const ContentItem = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`

const Label = styled.h2`
  color: #31eaf6;
  font: 800 17px Sen, sans-serif;
`

const Amount = styled.p`
  color: #fff;
  margin-top: 22px;
  font: 700 22px Sen, sans-serif;
`

const Divider = styled.hr`
  border: 1px solid rgba(208, 208, 208, 1);
  background-color: #d0d0d0;
  height: 100px;
`

const DetailedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const DetailedSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`

const DetailedTitle = styled.h2`
  color: #31eaf6;
  font: 800 17px Sen, sans-serif;
`

const DetailedLink = styled.a`
  color: #8d31b7;
  margin-top: 22px;
  font: 400 15px Sen, sans-serif;
`

const SingleStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`

const SingleStatCard = styled.div`
  border-radius: 30px;
  background-color: #1f2229;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 34px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`

const StatCardComponent: React.FC<StatCardProps> = ({ title, amount }) => (
  <ContentItem>
    <Label>{title}</Label>
    <Amount>{amount}</Amount>
  </ContentItem>
)

const DetailedComponent: React.FC<DetailedProps> = ({ title, details }) => (
  <DetailedSection>
    <DetailedTitle>{title}</DetailedTitle>
    <DetailedLink>{details}</DetailedLink>
  </DetailedSection>
)

const MyComponent: React.FC = () => {
  return (
    <Container>
      <Title>Earned Stats</Title>
      <StatsContainer>
        <Row>
          <StatGroup>
            <StatCardWrapper>
              <StatCard>
                <Col>
                  <CardContent>
                    <StatCardComponent title="Revenue" amount="$ 22,345,6.506" />
                    <Divider />
                    <StatCardComponent title="Payments" amount="$101.45" />
                  </CardContent>
                </Col>
                <DetailedContainer>
                  <Divider />
                  <DetailedComponent title="Detailed Breakdown" details="View Details" />
                </DetailedContainer>
              </StatCard>
            </StatCardWrapper>
          </StatGroup>
          <SingleStatWrapper>
            <SingleStatCard>
              <StatCardComponent title="Socialized Loss" amount="$1.06$" />
            </SingleStatCard>
          </SingleStatWrapper>
        </Row>
      </StatsContainer>
    </Container>
  )
}

export default MyComponent
