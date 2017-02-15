import { StyleSheet } from 'aphrodite';
import { flexDefault } from '../../styles/utils/mixins';
import { variables as v } from '../../styles/utils/variables';


export const styles = StyleSheet.create({

  formBottomWrapper: {
    ...flexDefault('space-between'),
    width: '100%',
    height: 60,
    borderTop: `1px solid ${v.colors.grey}`,
  },

  formBottomWrapperSingleBtn: {
    ...flexDefault('flex-end'),
    width: '100%',
    height: 60,
    borderTop: `1px solid ${v.colors.grey}`,
  },

  formBottomBack: {
    marginLeft: 18,
  },

  backText: {
    color: v.colors.grey,
  },

  formBottomNext: {
    ...flexDefault(),
    marginRight: 18,
  },

  formBottomBtn: {
    minWidth: 20,
    width: 45,
  },

  nextText: {
    paddingRight: 5,
    color: v.colors.blue,
  }

});