import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  featuredContainer: {
    height: height * 0.4,
    justifyContent: 'space-between',
  },
  featuredImage: {
    width: width - 16,
    height: height * 0.3,
    alignSelf: 'flex-end',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    marginTop: 16,
  },
  featuredProductContainer: {
    position: 'absolute',
    width: width - 80,
    height: height * 0.1,
    bottom: width * 0.05 + 8,
    marginHorizontal: 40,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  featuredProductName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2B2B73',
  },
  featuredProductPublishContainer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  featuredProductPublishIcon: {
    marginRight: 4,
    color: '#2B2B73',
    fontSize: 14,
  },
  featuredProductPublishText: {
    fontSize: 12,
    fontWeight: '300',
    marginRight: 4,
    color: '#9094AD',
  },
  featuredProductPublishDate: {
    fontSize: 13,
    fontWeight: '500',
    color: '#2B2B73',
  },
  indicator: {
    width: width * 0.1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#73c766',
    alignSelf: 'center',
  },
  reportContainer: {
    flex: 1,
    padding: 16,
  },
  reportTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2B2B73',
  },
  reportDescription: {
    fontSize: 12,
    color: '#9094AD',
    marginTop: 8,
  },
  reportChart: {
    flex: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
  reportButton: {
    backgroundColor: '#F6B64F',
    padding: 16,
    alignItems: 'center',
    borderRadius: 24,
    marginBottom: 32,
  },
  reportButtonText: {
    color: '#88581F',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
