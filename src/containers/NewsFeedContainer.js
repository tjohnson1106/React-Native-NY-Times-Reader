import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsAction';
import NewsFeed from '../components/NewsFeed';

const mapStateToProps = state => ({
    news: state.news
});

const mapDispatchtoProps = dispatch => (
    bindActionCreators({
        loadNews

    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchtoProps)(NewsFeed);