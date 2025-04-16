import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.white,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 3,
  },
  headerContainer:{ 
    flexDirection: 'row', 
    marginBottom: 10 
  },
  infoContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 3,
    alignSelf: 'flex-start',
    padding: 4
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
});

const formatCount = (count) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  }
  return count.toString();
};

const RepositoryItemHeader = ({ fullName, description, ownerAvatarUrl, language }) => (
  <View style={styles.headerContainer}>
    <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
    <View style={styles.infoContainer}>
      <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>
      <Text color="textSecondary">{description}</Text>
      <Text style={styles.language}>{language}</Text>
    </View>
  </View>
);

const RepositoryItemStats = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => (
  <View>
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text fontWeight="bold">{formatCount(forksCount)}</Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={styles.statItem}>
        <Text fontWeight="bold">{formatCount(stargazersCount)}</Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={styles.statItem}>
        <Text fontWeight="bold">{ratingAverage}</Text>
        <Text color="textSecondary">Rating</Text>
      </View>
      <View style={styles.statItem}>
        <Text fontWeight="bold">{reviewCount}</Text>
        <Text color="textSecondary">Reviews</Text>
      </View>
    </View>
  </View>
);

const RepositoryItem = ({ item }) => {
  const { fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl } = item;

  return (
    <View style={styles.container}>
      <RepositoryItemHeader fullName={fullName} description={description} ownerAvatarUrl={ownerAvatarUrl} language={language} />
      <RepositoryItemStats forksCount={forksCount} stargazersCount={stargazersCount} ratingAverage={ratingAverage} reviewCount={reviewCount} />
    </View>
  );
};

export default RepositoryItem;
