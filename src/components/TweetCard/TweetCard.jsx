import {
    CardItem,
    Image,
    ItemContainer,
    ImageBox,
    Avatar,
    TextTweets,
    TextFollower,
    Button,
  } from './TweetCard.styled';
import { useState } from 'react';
import logo from '../../images/Logo.png'

export const TweetCard = ({ item, followings, isFollowing }) => {
    const { tweets, followers, user, avatar, id } = item;
  
    const [subscription, setSubscription] = useState(followings.includes(id));
  
    const onFollowBtnClick = () => {
      isFollowing(id, followers, subscription);
      setSubscription(pervState => !pervState);
    };
  
    return (
      <CardItem>
        <Image src={logo} alt="logo" /> 
        <ItemContainer>
          <ImageBox>
            <Avatar src={avatar} alt={`${user} avatar`} />
          </ImageBox>
          <TextTweets>{tweets.toLocaleString('en-US')} tweets</TextTweets>
          <TextFollower>
            {followers.toLocaleString('en-US')} followers
          </TextFollower>
          <Button
            type="button"
            onClick={() => onFollowBtnClick(id)}
            style={{ backgroundColor: subscription ? '#5CD3A8' : '#EBD8FF' }}
          >
            {subscription ? 'following' : 'follow'}
          </Button>
        </ItemContainer>
      </CardItem>
    );
};