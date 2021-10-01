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
import Spinner from 'react-native-loading-spinner-overlay';

const Screen1: () => Node = () => {
  const [dataRepos, setdataRepos] = useState([]);
  const [spinner, setspinner] = useState(true);

  const backgroundStyle = {
    backgroundColor: 'white',
  };
  const handleGetRepos = () => {
    getGithubRepos().then(response => {
      if (response.status === 200 && response.data) {
        setspinner(true);
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
      {!spinner ? (
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
      ) : (
        <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      )}
    </SafeAreaView>
  );
};

export default Screen1;
