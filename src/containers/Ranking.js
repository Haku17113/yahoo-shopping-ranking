import { connect } from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';

const mapStateToProps = (state, ownProps) => ({
  category: state.ranking.category,
  ranking: state.ranking.ranking,
  error: state.ranking.error,
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
