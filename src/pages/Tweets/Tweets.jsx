import { TweetsList } from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { getUsers, updateUsers } from 'services/api';
import {
  Button,
  Container,
  FilterSection,
  TweetsWrapper,
  SelectWrapper,
  Wrapper,
} from './Tweets.styled';
import { Dropdown } from 'components/Dropdown/Dropdown';
import useLocalStorage from 'hooks/useLocalStorage';
import { filterUsers } from 'services/filterUsers';
import { filterValues } from 'services/filterValues';
import Loader from 'components/Loader/Loader';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [followings, setFollowings] = useLocalStorage();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(filterValues.all);
  

  let filteredUsers = filterUsers(users, followings, selectedOption.value);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      
      const newUsers = await getUsers(page);

      if (page === 1) {
        setUsers(newUsers);
        setIsLoading(false);
        return;
      }

      if (newUsers.length === 0) {
        setDisabled(true);
        setIsLoading(false);
      }

      setUsers(pervState => [...pervState, ...newUsers]);
      setIsLoading(false);
    };
    fetchUsers();
  }, [page, disabled]);

  const updateUserFollowings = async (id, followers, subscription) => {
    setUsers(stateUsers =>
      stateUsers.map(user => {
        if (user.id !== id) return user;
        return {
          ...user,
          followers: !subscription
            ? (user.followers += 1)
            : (user.followers -= 1),
        };
      })
    );
    if (!subscription) {
      setFollowings(prevState => [...prevState, id]);
      await updateUsers(id, (followers += 1));
    } else {
      setFollowings(prevState => prevState.filter(el => el !== id));
      await updateUsers(id, (followers -= 1));
    }
  };

  const handleLoadMore = () => {
    setPage(pervpage => pervpage + 1);
  };

  return (
    <Container>
      <FilterSection>
        <Button to="/">Go Back</Button>
        <SelectWrapper>
          <Dropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </SelectWrapper>
      </FilterSection>
      <TweetsWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <TweetsList
            items={filteredUsers}
            followings={followings}
            isFollowing={updateUserFollowings}
          />
        )}
      </TweetsWrapper>
      <Wrapper>
        <Button type="button" onClick={handleLoadMore} disabled={disabled}>
          Load More
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Tweets;