import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, Text, FlatList} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {API_CLIENT} from '../util/apiClient';
import {theme, THEME_CONFIG} from '../style';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

const SubTitle = ({text, tags}) => (
  <View>
    {
      !!text &&
      <Text
        style={{fontFamily: THEME_CONFIG.primaryFontFamily, fontSize: THEME_CONFIG.fontSize - 2}}
        numberOfLines={2}
        ellipsizeMode="tail">
        {text}
      </Text>
    }
    <View style={{flexDirection: 'row', marginTop: 10}}>
      {
        tags.map( (tag) => (
          <View key={tag} style={{backgroundColor: THEME_CONFIG.primaryColor, marginHorizontal: 3, paddingHorizontal: 10, paddingBottom: 5, borderRadius: 20}}>
            <Text style={{color: THEME_CONFIG.primaryTextColor, fontFamily: THEME_CONFIG.primaryFontFamily, fontSize: THEME_CONFIG.fontSize-2}}>{tag}</Text>
          </View>
        ))
      }
    </View>
  </View>
);

class List extends Component{
  constructor(props){
    super(props);

    this.state = {list : []};
  }

  componentDidMount(){
    API_CLIENT.get('menu')
      .then((res) => {
        console.log("response.data", res.data);
        this.setState({list: res.data})
      })
      .catch((error) => {
        console.log("error.response")
      });
  }

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      titleProps={{numberOfLines: 1, ellipsizeMode: 'tail'}}
      titleStyle={{fontFamily: THEME_CONFIG.primaryFontFamily, fontSize: THEME_CONFIG.fontSize, color: THEME_CONFIG.primaryColor}}
      subtitle={<SubTitle text={item.description} tags={item.tags} />}
      leftAvatar={{source: { uri: item.images[0]}, size: "medium"}}
      badge={{badgeStyle: {backgroundColor: THEME_CONFIG.primaryColor, paddingHorizontal: 5, paddingVertical: 17, borderRadius: 50}, value: item.rating}}
      bottomDivider
    />
  );

  keyExtractor = (item, index) => index;

  render () {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.list}
        renderItem={this.renderItem}
      />
    )
  }
}

List.propTypes = {}

List.defaultProps = {}


export default List;