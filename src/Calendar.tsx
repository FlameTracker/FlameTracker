import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import { Calendar as Agenda } from "react-native-calendars";
import Icon from "react-native-vector-icons/Ionicons";

interface Event {
  date: string;
  title: string;
  sports: string;
}

const events: { [date: string]: Event[] } = {
  "2024-07-27": [{
    "date": "2024-07-27",
    "title": "Arena Paris Sud 4",
    "sports": "Tennis de table (TTE)",
  }],
};

const Calendar = ({ navigation }: { navigation: any }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    if (events[day.dateString]) {
      const eventsForSelectedDate = events[day.dateString];
      setSelectedEvent(eventsForSelectedDate[0]);
      setModalVisible(true);
    }
  };

  const renderEventDetailsModal = () => {
    return (
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{selectedEvent?.title}</Text>
            <Text>{selectedEvent?.sports}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={events}
        onDayPress={handleDayPress}
        renderEmptyDate={() => <View />}
        style={styles.agendaContainer}
      />
      {renderEventDetailsModal()}
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
          <Icon name="calendar-outline" size={24} />
          <Text style={[styles.navButtonText]}>Calendar</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    maxWidth: 300,
    maxHeight: 200,
  },
  closeButton: {
    marginTop: 20,
    color: "#1e90ff",
  },
  agendaContainer: {
    width: "100%",
  },
});

export default Calendar;
