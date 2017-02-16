import { StyleSheet } from 'aphrodite';
import { formCard, flexColumn } from '../../styles/utils/mixins';
import { variables as v } from '../../styles/utils/variables';


export const styles = StyleSheet.create({

  formCard: {
    ...formCard(),
    ...flexColumn('flex-start'),
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
    backgroundColor: '#8cf186'
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
