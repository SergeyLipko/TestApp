import { StyleSheet } from 'aphrodite';
import { flexCenter } from './styles/utils/mixins';
import { variables as v } from './styles/utils/variables';


export const styles = StyleSheet.create({

  appWrapper: {
    ...flexCenter(),
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    background: v.colors.backgroundGradient,
  },

});
