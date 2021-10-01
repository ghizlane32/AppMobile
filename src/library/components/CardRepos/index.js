import React, {Component, useEffect} from 'react';
import {Card, Divider, List, Paragraph, Title} from 'react-native-paper';
import {Theme} from '../../../data/constants';
import {Text, View} from 'react-native';
import styles from './styles';
const CardRepos = props => {
  return (
    <Card theme={Theme} style={styles.card}>
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.content}</Paragraph>
      </Card.Content>
      <List.Item
        title={props.repoOwner}
        titleStyle={styles.titleStyle}
        left={() => (
          <List.Icon style={styles.leftItem} icon="file-image-outline" />
        )}
        right={() => (
          <View style={styles.rightItem}>
            <List.Icon icon="star" />
            <Text>{props.starsNumber}</Text>
          </View>
        )}
      />
      <Divider />
    </Card>
  );
};

export default CardRepos;
