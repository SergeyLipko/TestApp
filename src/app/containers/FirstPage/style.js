import { StyleSheet } from 'aphrodite';
import { formCard, flexColumn } from '../../styles/utils/mixins';
import { variables as v } from '../../styles/utils/variables';


export const styles = StyleSheet.create({

  formCard: {
    ...formCard(),
    ...flexColumn('space-between'),
  },

  formWrapper: {
    ...flexColumn('flex-start', 'center'),
    marginTop: 60,
  },

});
