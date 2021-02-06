import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  comparisonContainer: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  comparisonTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
  },
  comparisonTitle: {
    color: '#2B2B73',
    fontSize: 16,
    fontWeight: 'bold',
  },
  comparisonIcon: {
    fontSize: 20,
    color: '#2B2B73',
  },
  businessAnalyticsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  businessAnalyticsData: {
    flex: 1,
  },
  businessAnalyticsTitle: {
    color: '#9094AD',
    fontSize: 14,
  },
  businessAnalyticsValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  businessAnalyticsValue: {
    color: '#2B2B73',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  businessAnalyticsValueVariation: {
    fontSize: 14,
  },
  businessAnalyticsValuePositiveVariation: {
    color: '#73c766',
  },
  businessAnalyticsValueNegativeVariation: {
    color: '#F0836F',
  },
  businessAnalyticsChart: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ddd',
  },
  comparisonButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6B64F',
    paddingVertical: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  comparisonButtonText: {
    color: '#88581F',
    fontSize: 14,
    fontWeight: 'bold',
  },
  goalsTitle: {
    marginVertical: 32,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B2B73',
  },
  goalsAnalyticsContainer: {
    backgroundColor: '#F5F6FB',
    borderRadius: 8,
    marginBottom: 32,
  },
  weekBalance: {
    padding: 16,
    flexDirection: 'row',
  },
  weekBalanceChart: {
    width: 50,
    alignSelf: 'stretch',
    backgroundColor: '#ddd',
  },
  weekBalanceData: {
    flex: 1,
    marginLeft: 16,
  },
  weekBalanceDataDayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weekBalanceDataDayTitle: {
    color: '#9094AD',
    fontSize: 12,
  },
  weekBalanceDataDayTitleValue: {
    color: '#73c766',
  },
  weekBalanceDataProductContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weekBalanceDataProductTitle: {
    color: '#2B2B73',
    fontSize: 16,
    fontWeight: '600',
  },
  lastMonthBalance: {
    marginHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: 'rgba(144, 148, 173, 0.24)',
  },
  lastMonthBalanceText: {
    color: '#9094AD',
    fontSize: 12,
  },
  lastMonthBalanceValue: {
    color: '#2B2B73',
  },
});

export default styles;
