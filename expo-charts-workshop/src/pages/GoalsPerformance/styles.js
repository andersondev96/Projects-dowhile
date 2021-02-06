import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E5FC',
  },
  goalsContainer: {
    flex: 1,
    marginTop: 16,
    backgroundColor: '#FBFBFB',
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  goalsTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B2B73',
  },
  goalsChart: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ddd',
    alignSelf: 'center',
    marginVertical: 48,
  },
  goalsDetailsContainer: {
    backgroundColor: '#F5F6FB',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
  },
  thisMonthGoalsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  thisMonthGoalsTitle: {
    color: '#9094AD',
    fontSize: 12,
  },
  thisMonthGoalsValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  thisMonthGoalsValue: {
    color: '#F6B550',
    fontSize: 18,
    fontWeight: '600',
  },
  thisMonthGoalsVariation: {
    marginLeft: 4,
    fontSize: 12,
    color: '#73c766',
  },
  lastMonthGoalsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  lastMonthGoalsTitle: {
    color: '#9094AD',
    fontSize: 12,
  },
  lastMonthGoalsValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  lastMonthGoalsValue: {
    color: '#F6B550',
    fontSize: 18,
    fontWeight: '600',
  },
  lastMonthGoalsVariation: {
    marginLeft: 4,
    fontSize: 12,
    color: '#73c766',
  },
  impressionsContainer: {
    backgroundColor: '#F5F6FB',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 32,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  impressionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2B2B73',
  },
  impressionsLine: {
    flexDirection: 'row',
    marginTop: 16,
  },
  countryContainer: {
    flex: 1,
  },
  countryNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryMarker: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 3,
    marginRight: 8,
  },
  countryPositiveMarker: {
    borderColor: '#73c766',
  },
  countryNegativeMarker: {
    borderColor: '#F6B550',
  },
  countryNeutralMarker: {
    borderColor: '#2B2B73',
  },
  countryName: {
    fontSize: 18,
    color: '#2B2B73',
  },
  countryVariation: {
    marginLeft: 20,
    marginTop: 4,
    fontSize: 16,
    fontWeight: '300',
    color: '#9094AD',
  },
});

export default styles;
