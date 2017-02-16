import { StyleSheet } from 'aphrodite';
import { formCard, flexColumn } from '../../styles/utils/mixins';


export const styles = StyleSheet.create({

  formCard: {
    ...formCard(),
    ...flexColumn('space-between'),
  },

  customTest1: {
    visibility: 'hidden',
  }

});
