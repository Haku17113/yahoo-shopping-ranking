import { connect } from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/ranking';

const mapStateToProps = (state, ownProps) => ({
    categoryID: ownProps.categoryID
});

const mapDispatchToProps = dispatch => ({
  onMount(categoryID){
    dispatch(actions.fetchRanking(categoryID));
  },
  onUpdate(categoryID){
    dispatch(actions.fetchRanking(categoryID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
