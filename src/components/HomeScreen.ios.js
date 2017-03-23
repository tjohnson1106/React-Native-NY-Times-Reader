import React, { Component } from 'react';
import {
    TabBarIOS,
    Text
} from 'react-native';
import NewsFeed from './NewsFeed';
import * as globalStyles from '../styles/global';
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 'newsFeed'
        };
    }
    render() {
        return (
            <TabBarIOS
                barTintColor={globalStyles.BAR_COLOR}
                tintColor={globalStyles.LINK_COLOR}
                translucent={false}
            >
                <TabBarIOS.Item
                    systemIcon = { 'featured'}
                    selected={this.state.tab === 'newsFeed'}
                    onPress={() => this.setState({ tab: 'newsFeed' })}
                >
                    <NewsFeed />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon = { 'search'}
                    selected={this.state.tab === 'search'}
                    onPress={() => this.setState({ tab: 'search' })}
                >
                        </Search>
                        </TabBarIOS.Item>
            <TabBarIOS.Item
                systemIcon = { 'bookmarks'}
                selected={this.state.tab === 'bookmarks'}
                onPress={() => this.setState({ tab: 'bookmarks' })}
            >
                <Text>Bookmarks</Text>
            </TabBarIOS.Item>
                
            </TabBarIOS >
        );
    }
