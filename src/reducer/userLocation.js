export const userLocation = ( state = [ 39.7392,  104.9903 ], action ) => {
  switch(action.type) {
    case "SET_USER_LOCATION":
      return action.position
    default: 
      return state;
  }
}