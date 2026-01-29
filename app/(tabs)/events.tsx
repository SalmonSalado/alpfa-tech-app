import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function EventsScreen() {
  return (
    <ThemedView style={{ flex: 1, padding: 20 }}>
      <ThemedText type="title">Events</ThemedText>
    </ThemedView>
  );
}