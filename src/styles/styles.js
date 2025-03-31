import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F4F4F4', // Light grey background
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lightText: {
    color: 'black',
  },
  darkText: {
    color: 'white',
  },
  input: {
    width: '90%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    fontSize: 16,
    marginBottom: 15,
    color: 'black',
  },
  darkInput: {
    backgroundColor: '#222',
    color: 'white',
    borderColor: '#555',
  },
  button: {
    width: '90%',
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3, // Adds shadow for Android
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    marginVertical: 4,
    width: '90%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  darkCard: {
    backgroundColor: '#333',
    borderColor: '#444',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 16,
    marginVertical: 5,
    textTransform: 'capitalize',
  },
  cardTemp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E65100', // Orange color for emphasis
  },
  weatherIcon: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },
});
