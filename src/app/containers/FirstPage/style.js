import { StyleSheet } from 'aphrodite';
import { formCard, flexColumn } from '../../styles/utils/mixins';


export const styles = StyleSheet.create({

  formCard: {
    ...formCard(),
    ...flexColumn('space-between'),
    visibility: 'hidden',
    opacity: 0,
  },

  formCardAppears: {
    visibility: 'visible',
    opacity: 1,
    transition: '0.6s ease',
  },

  formWrapper: {
    ...flexColumn('flex-start', 'center'),
    marginTop: 60,
  },

});
