import React, { PropTypes, Component } from 'react';
import {
    ListView,
    StyleSheet,
    View
} from 'react-native';
import * as globalStyles from '../styles/global';
export default class NewsFeed extends Component {
    render() {
        return (
            <View style={globalStyles.COMMON_STYLES.pageContainer}>
                <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                style={this.props.listStyles}
                 />
            </View>
        );
    }
}

NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: View.propTypes.style
};

constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.title !== row2.title
    });
    this.state = {
        dataSource: this.ds.cloneWithRows(props.news)
    };
}

this.ds = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1.title !== row2.title
});

this.state = {
    dataSource: this.ds.cloneWithRows(props.news)
};

renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return (
        <NewsItem
            style={styles.newsItem}
            index={index}
            {...rowData}
        />
    );
}