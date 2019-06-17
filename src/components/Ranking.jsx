import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

export default class Ranking extends React.Component{
  componentWillMount(){
    this.props.onMount(this.props.categoryID);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.categoryID !== nextProps.categoryID){
      this.props.onUpdate(nextProps.categoryID);
    }
  }

  render(){
    const { category, ranking, error } = this.props;
    return (
      <div>
        <h1>{
          typeof category !== 'undefined'
            ? `${category.name}のランキング`
            : ''
        }</h1>
        {(() => {
          if(error){
            return <p>Error</p>;
          }else if(typeof ranking === 'undefined'){
            return <p>Now Loading...</p>;
          }else{
            return (
              <div>
                {ranking.map((item, i) => (
                  <Card
                    key={`ranking-item-${item.code}`}
                    style={{ maxWidth: "500px", margin: "32px auto" }}
                  >
                    <CardMedia
                      image={item.imageUrl}
                      title={`${i + 1}位 ${item}`}
                      style={{ height: "300px" }}
                    />
                    <CardContent>
                      <Typography type="title">
                        {`${i + 1}位 ${item.name}`}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        raised="true"
                        color="secondary"
                        fullWidth
                        href={item.url}
                      >商品ページへ</Button>
                    </CardActions>
                  </Card>
                ))}
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

Ranking.propTypes = {
  categoryID: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};
Ranking.defaultProps = {
  categoryID: '1'
}
