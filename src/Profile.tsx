import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function ProfilePage({ navigation }: any) {
  const [profile, setProfile] = useState({
    firstName: "Matheo",
    lastName: "Hanss",
    email: "matheo.hanss@epitech.eu",
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://www.berreletang.fr/local/cache-vignettes/L150xH150/web_jo2024_recrutx150-47d40.png?1711633250",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>
            {profile.firstName} {profile.lastName}
          </Text>
          <Text style={styles.profileEmail}>{profile.email}</Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Followed Events</Text>
        </View>
      </ScrollView>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("MenuPage")}
        >
          <Icon name="home-outline" size={24} color="#000" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("CalendarPage")}
        >
          <Icon name="calendar-outline" size={24} color="#000" />
          <Text style={styles.navButtonText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("MapPage")}
        >
          <Icon name="map-outline" size={24} color="#000" />
          <Text style={styles.navButtonText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name="person-outline" size={24} color="#000" />
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 60,
    paddingHorizontal: 20,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 16,
    color: "#777",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  followedEvents: {
    marginTop: 10,
  },
  eventItem: {
    marginBottom: 15,
  },
  eventImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  eventText: {
    fontSize: 16,
    marginTop: 5,
  },
  eventSubText: {
    fontSize: 14,
    color: "#777",
  },
  eventDate: {
    fontSize: 12,
    color: "#777",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 30,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navButton: {
    alignItems: "center",
  },
  navButtonText: {
    fontSize: 14,
    color: "#000",
  },
});
