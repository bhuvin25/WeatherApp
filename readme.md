### **🌤 Weather App**  
A simple React Native app that fetches and displays real-time weather data from the OpenWeatherMap API.  

---

## **🚀 Features**  
- 🌍 Search weather by city name  
- ☀️ Displays **temperature, weather condition, and icon**  
- 🍗 **Light & Dark Mode Toggle**  
- ⚡ **Fast & Responsive UI**  

---

## **🛠️ Installation & Setup**  

### **1️⃣ Prerequisites**  
Ensure you have:  
- **Node.js** (v16+ recommended)  
- **React Native CLI**  
- **Android Studio / Xcode** (for Android/iOS development)  

---

### **2️⃣ Clone the Repository**  
```sh
git clone https://github.com/yourusername/WeatherApp.git
cd WeatherApp
```

---

### **3️⃣ Install Dependencies**  
```sh
npm install
```

---

### **4️⃣ Setup OpenWeatherMap API Key**  
1. Get an API key from [OpenWeatherMap](https://home.openweathermap.org/api_keys).  
2. Create a `.env` file in the root directory and add:  
   ```
   API_KEY=your_api_key_here
   ```
3. Restart your app after setting up the key.

---

### **5️⃣ Run the App**  
For Android:  
```sh
npx react-native run-android
```
For iOS:  
```sh
cd ios && pod install && cd ..
npx react-native run-ios
```

---

## **📾 Folder Structure**  
```
WeatherApp/
│── src/
│   ├── components/    # Reusable UI components
│   ├── screens/       # App screens (WeatherScreen.js)
│   ├── context/       # Weather context (WeatherProvider.js)
│   ├── styles/        # Stylesheets (styles.js)
│── App.js             # Main App Component
│── README.md          # Project Documentation
│── package.json       # Dependencies & scripts
```

---

## **🛠️ Technologies Used**  
- **React Native** – Cross-platform development  
- **React Context API** – State management  
- **Axios** – API calls  
- **OpenWeatherMap API** – Weather data  

---

## **✅ To-Do List (Future Enhancements)**  
- 📍 **Location-based weather** (auto-fetch city)  
- 📊 **Hourly & Weekly Forecast**  
- 🌈 **Animated Weather Icons**  

---

## **🐝 License**  
This project is open-source. Feel free to modify and improve it.  

---

### **💡 Need Help?**  
If you face any issues, feel free to [open an issue](https://github.com/yourusername/WeatherApp/issues).  

---

