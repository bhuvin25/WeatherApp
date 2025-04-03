import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F4F4F4",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  lightText: {
    color: "black",
  },
  darkText: {
    color: "white",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: "white",
    fontSize: 18,
    marginBottom: 15,
    color: "black",
    elevation: 3, // Shadow for better appearance
  },
  darkInput: {
    backgroundColor: "#222",
    color: "white",
    borderColor: "#555",
  },
  button: {
    width: "90%",
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
    elevation: 4, // More shadow effect
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    width: "90%",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  darkCard: {
    borderColor: "#555",
  },
  lightCard: {
    borderColor: "#ddd",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 18,
    marginVertical: 5,
    textTransform: "capitalize",
  },
  cardTemp: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFD700", // Gold for contrast
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  switchText: {
    fontSize: 16,
    marginLeft: 10,
  },
  error: {
    fontSize: 16,
    color: "red",
    marginVertical: 10,
    textAlign: "center",
  },
});
