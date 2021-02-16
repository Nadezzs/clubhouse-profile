import React from 'react';
import styled from 'styled-components';

import profile from '../data/profile.json';

import ServiceWrapper from '../components/ServiceWrapper';

const Home = () => {
  return (
    <ServiceWrapper>
      <Wrapper>
        <Avatar src={profile.photo_url} />
        <Name>{profile.name}</Name>
        <Username>{`@${profile.username}`}</Username>
        <FollowRow>
          <Followers>
            {profile.num_followers}
            <FollowPrefix>followers</FollowPrefix>
          </Followers>
          <Following>
            {profile.num_following}
            <FollowPrefix>following</FollowPrefix>
          </Following>
        </FollowRow>
        <Bio>{profile.bio}</Bio>
        <SocialRow>
          <Instagram>{profile.instagram}</Instagram>
          <Twitter>{profile.twitter}</Twitter>
        </SocialRow>
        <NorminationContainer>
          <NorminationProfile src={profile.invited_by_user_profile.photo_url} />
          <NorminationInformation>
            <JoinedAt>{`Joined ${profile.time_created}`}</JoinedAt>
            <NorminationText>
              Norminated by{' '}
              <Norminator>{profile.invited_by_user_profile.name}</Norminator>
            </NorminationText>
          </NorminationInformation>
        </NorminationContainer>
      </Wrapper>
    </ServiceWrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 52px 16px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 36px;
`;

const Name = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const Username = styled.h2`
  margin-top: 15px;
  font-size: 0.95rem;
  font-weight: normal;
`;

const FollowRow = styled.div`
  margin-top: 27px;
`;

const Followers = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

const Following = styled(Followers)`
  margin-left: 36px;
`;

const FollowPrefix = styled.span`
  font-size: 1rem;
  margin-left: 4px;
  font-weight: 300;
`;

const Bio = styled.p`
  margin-top: 34px;
  white-space: pre-line;
  font-size: 1.02rem;
  font-weight: 300;
  line-height: 1.45;
`;

const SocialRow = styled.div``;

const Instagram = styled.span``;

const Twitter = styled(Instagram)``;

const NorminationContainer = styled.div`
  margin-top: 45px;
  display: flex;
`;

const NorminationProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 16px;
`;

const NorminationInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

const JoinedAt = styled.span`
  font-size: 0.92rem;
  font-weight: 300;
`;

const NorminationText = styled(JoinedAt)`
  margin-top: 4px;
`;

const Norminator = styled.strong`
  font-weight: 600;
`;
