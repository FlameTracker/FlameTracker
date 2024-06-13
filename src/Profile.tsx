import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const defaultImageUrl = "https://via.placeholder.com/150";

export default function ProfilePage({ navigation }: any) {
  const [profile, setProfile] = useState({
    firstName: "Matheo",
    lastName: "Hanss",
    email: "matheo.hanss@epitech.eu",
  });
  const [followedEvents, setFollowedEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFollowedEvents = async () => {
      try {
        const response = await fetch(
          "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=10"
        );
        const data = await response.json();
        const eventsData: any[] = [];

        if (data && data.results) {
          data.results.forEach((record: any) => {
            if (record && record.start_date) {
              const startDate = record.start_date.split("T")[0];
              const endDate = record.end_date.split("T")[0];
              const title = record.nom_site;
              const sports = record.sports;
              const latitude = parseFloat(record.latitude.replace(",", "."));
              const longitude = parseFloat(record.longitude.replace(",", "."));
              eventsData.push({
                startDate,
                endDate,
                title,
                sports,
                latitude,
                longitude,
                imageUrl: defaultImageUrl,
              });
            }
          });
        }

        setFollowedEvents(eventsData);
      } catch (error) {
        console.error("Error fetching followed events:", error);
        setError("Error fetching followed events");
      } finally {
        setLoading(false);
      }
    };

    fetchFollowedEvents();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3A689C" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

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
        <View style={styles.followedEvents}>
          {followedEvents.map((event, index) => (
            <TouchableOpacity key={index} style={styles.eventItem}>
              <Image
                source={{ uri: event.imageUrl }}
                style={styles.eventImage}
              />
              <Text style={styles.eventText}>{event.title}</Text>
              <Text style={styles.eventSubText}>{event.sports}</Text>
              <Text style={styles.eventDate}>
                {event.startDate} - {event.endDate}
              </Text>
            </TouchableOpacity>
          ))}
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
