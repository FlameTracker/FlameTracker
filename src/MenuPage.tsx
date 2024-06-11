import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const defaultImageUrl =
  "https://img.lemde.fr/2019/10/21/0/0/2954/2954/664/0/75/0/4720a24_xOn_i9bVmi4i4W6jPJrSzUxM.png";
const INITIAL_NEWS_LIMIT = 1;

export default function MenuPage({ navigation }: { navigation: any }) {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [featuredNews, setFeaturedNews] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAllEvents, setShowAllEvents] = useState<boolean>(false);
  const [showAllNews, setShowAllNews] = useState<boolean>(false);

  useEffect(() => {
    const fetchFeaturedNews = async () => {
      try {
        const response = await fetch(
          "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-evenements-olympiade-culturelle/records?limit=20"
        );
        const data = await response.json();
        const newsData: any[] = [];

        if (data && data.results) {
          data.results.forEach((record: any) => {
            const title = record.name;
            let description = record.presentation_synthetique_du_projet_c;
            const url = record.id;
            newsData.push({ title, description, imageUrl: defaultImageUrl });
          });
        }

        setFeaturedNews(newsData);
      } catch (error) {
        console.error("Error fetching Olympic news:", error);
        setError("Error fetching Olympic news");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedNews();
  }, []);

  const handleTabPress = (tab: string) => {
    setSelectedTab(selectedTab === tab ? null : tab);
  };

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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.tabBar}>
          {["Videos", "Schedule", "Results", "Medals", "Overview", "More"].map(
            (tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabButton,
                  selectedTab === tab && styles.selectedTabButton,
                ]}
                onPress={() => handleTabPress(tab)}
              >
                <Text
                  style={[
                    styles.tabButtonText,
                    selectedTab === tab && styles.selectedTabButtonText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
        <View style={styles.featuredEvents}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Events</Text>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => setShowAllEvents(!showAllEvents)}
            >
              <Text style={styles.viewAllText}>
                {showAllEvents ? "Show Less" : "View All"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.featuredNews}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured News</Text>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => setShowAllNews(!showAllNews)}
            >
              <Text style={styles.viewAllText}>
                {showAllNews ? "Show Less" : "View All"}
              </Text>
            </TouchableOpacity>
          </View>
          {(showAllNews
            ? featuredNews
            : featuredNews.slice(0, INITIAL_NEWS_LIMIT)
          ).map((article, index) => (
            <TouchableOpacity
              key={index}
              style={styles.eventItem}
              onPress={() =>
                navigation.navigate("ArticlePage", { article: article })
              }
            >
              <Image
                source={{ uri: article.imageUrl }}
                style={styles.eventImage}
              />
              <Text style={styles.eventText}>{article.title}</Text>
              <Text style={styles.eventSubText}>{article.author}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("LoginPage")}
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
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  tabBar: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 50,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  tabButton: {
    width: "30%",
    margin: "1.5%",
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  selectedTabButton: {
    backgroundColor: "#1e90ff",
  },
  tabButtonText: {
    fontSize: 14,
    color: "#000",
  },
  selectedTabButtonText: {
    color: "#fff",
  },
  featuredEvents: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    width: width * 0.9,
  },
  featuredNews: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    width: width * 0.9,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllButton: {
    paddingVertical: 10,
  },
  viewAllText: {
    fontSize: 16,
    color: "#1e90ff",
  },
  eventRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  eventItem: {
    width: (width - 60) / 2,
    marginRight: 10,
  },
  eventImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  eventText: {
    fontSize: 14,
    marginTop: 5,
  },
  eventSubText: {
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
  eventDescription: {
    fontSize: 12,
    color: "#777",
  },
});
