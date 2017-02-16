import { StyleSheet } from 'aphrodite';
import { formCard, flexColumn } from '../../styles/utils/mixins';
import { variables as v } from '../../styles/utils/variables';


export const styles = StyleSheet.create({

  formCard: {
    ...formCard(),
    ...flexColumn('flex-start'),
    visibility: 'hidden',
    opacity: 0,
  },

  formCardAppears: {
    visibility: 'visible',
    opacity: 1,
    transition: '0.6s ease',
  },

  lastFormContent: {
    ...flexColumn('flex-start'),
    marginTop: 50,
  },

  greenCircle: {
    ...flexColumn('center'),
    width: 175,
    height: 175,
    borderRadius: '100%',
    backgroundColor: '#8cf186',
    transform: 'scale(0.7)'
  },

  greenCircleAnimate: {
    transition: '0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    transform: 'scale(1)'
  },

  doneIcon: {
    width: 125,
    height: 125,
  },

  confirmButton: {
    width: 150,
    height: 40,
    marginTop: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    outline: 'none',
    cursor: 'pointer',
    border: `1px solid ${v.colors.blue}`,
    transition: '0.2s ease',
    color: v.colors.blue,
    fontSize: 13,
    ':hover': {
      backgroundColor: v.colors.blue,
      color: '#fff',
      border: 'none',
    },
  },

});
