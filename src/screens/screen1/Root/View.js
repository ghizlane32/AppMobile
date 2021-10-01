import React, {Component, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from './styles';
import {getGithubRepos} from '../../../library/network';
import {CardRepos} from '@components';

const Screen1: () => Node = () => {
  const [dataRepos, setdataRepos] = useState([]);

  const backgroundStyle = {
    backgroundColor: 'white',
  };
  const handleGetRepos = () => {
    getGithubRepos().then(response => {
      if (response.status === 200 && response.data) {
        setdataRepos(response.data.items);
      } else {
        alert('we are sorry, there is an internal server error');
      }
    });
  };
  useEffect(() => {
    handleGetRepos();
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <FlatList
        data={dataRepos}
        renderItem={(item, index) => {
          return (
            <CardRepos
              key={index}
              title={item.item.name}
              content={item.item.description}
              repoOwner={item.item.owner.login}
              starsNumber={item.item.stargazers_count}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Screen1;
