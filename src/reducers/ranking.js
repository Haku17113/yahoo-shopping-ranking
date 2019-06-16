const getRanking = response => {
  const ranking = [];
  const itemLength = response.ResultSet.totalResultReturned;
  for(let index = 0; index < itemLength; index++){
    const item = response.ResultSet['0'].Result[index + ''];
    ranking.push({
      code: item.Code,
      name: item.Name,
      url: item.Url,
      imageUrl: item.Image.Meium
    });
  }

  return ranking;
}

const initialStore = {
  categoryID: undefined,
  ranking: undefined,
  error: false
};

export default (state = initialStore, action) => {
  switch(action.type){
    case 'START_REQUEST':
      return {
        categoryID: action.payload.categoryID,
        reanking: undefined,
        error: false
      };
    case 'RECEIVE_DATA':
      return action.payload.error
        ? {...state, error: true}
        : {
            ...state,
            ranking: getRanking(action.payload.response)
          };
    default:
      return state;
  }
}
