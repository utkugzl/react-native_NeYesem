import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const scaleByHeight = percentage => {
  return height * (parseFloat(percentage) / 100);
};

export default scaleByHeight;