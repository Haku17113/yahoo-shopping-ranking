import { connect } from 'react-redux';
import Navi from '../components/Navi';

const mapStateToProps = state => ({
    categories: state.shopping.categories
});

export default connect(mapStateToProps)(Navi);
