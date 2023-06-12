import { TweetCard } from "components/TweetCard/TweetCard";
import { CardsList } from './TweetsList.styled';

export const TweetsList = ({ items, followings, isFollowing }) => {
  return (
    <CardsList>
      {items.map(item => {
        return (
          <TweetCard
            key={item.id}
            item={item}
            followings={followings}
            isFollowing={isFollowing}
          />
        );
      })}
    </CardsList>
  );
};