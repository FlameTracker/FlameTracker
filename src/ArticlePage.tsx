import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ArticlePage({ route }: { route: any }) {
  const { article } = route.params;

  if (!article) {
    return (
      <View style={styles.container}>
        <Text>Article not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={styles.articleTitle}>{article.title}</Text>
          <Image
            source={{ uri: article.imageUrl }}
            style={styles.articleImage}
          />
          <Text style={styles.articleDescription}>{article.description}</Text>
          <Text style={styles.articleDescription}>{article.sports}</Text>
        </View>
      </ScrollView>
      <View style={styles.navBar}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  articleTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  articleImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  articleDescription: {
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: "left",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 30,
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
