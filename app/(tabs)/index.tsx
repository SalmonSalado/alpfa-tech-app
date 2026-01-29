
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#0F2A44", dark: "#0F2A44" }}
      headerImage={
        <Image
          source={require("../../assets/images/alpfa_logo.png")}
          style={styles.headerLogo}
          resizeMode="contain"
        />
      }
    >
      <ThemedView style={styles.page}>
        {/* Top Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillsRow}
        >
          <NavPill href="/about" label="About Us" />
          <NavPill href="/(tabs)/eboard" label="Meet the EBoard" />
          <NavPill href="/faq" label="FAQ" />
          <NavPill href="/join" label="Join" />
        </ScrollView>

        {/* Our ALPFAmilia */}
        <SectionHeader
          title="Our ALPFAmilia"
          actionLabel="See more"
          href="/(tabs)/eboard"
        />
        <Card>
          <Image
            source={require("../../assets/images/alpfamilia.jpg")}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardBody}>
            <ThemedText type="defaultSemiBold">Rutgers–Newark</ThemedText>
            <ThemedText style={styles.muted}>
              Community • Leadership • Impact
            </ThemedText>
          </View>
        </Card>

        {/* Upcoming Events */}
        <SectionHeader
          title="Upcoming Events"
          actionLabel="View all"
          href="/(tabs)/events"
        />
        <Card>
          <Image
            source={require("../../assets/images/event_flyer.png")}
            style={styles.eventImage}
            resizeMode="cover"
          />

          <View style={styles.eventInfo}>
            <ThemedText type="defaultSemiBold" style={styles.eventTitle}>
              Blueprint for MLT
            </ThemedText>

            <View style={styles.metaRow}>
              <MetaPill text="Business & Tech" />
              <MetaPill text="Room TBD" />
              <MetaPill text="11:30–12:00" />
            </View>

            <Link href="/(tabs)/events" asChild>
              <Pressable style={styles.primaryBtn}>
                <ThemedText style={styles.primaryBtnText}>Select</ThemedText>
              </Pressable>
            </Link>
          </View>
        </Card>

        {/* Quick Links (optional, but useful) */}
        <ThemedView style={styles.quickLinksCard}>
          <ThemedText type="subtitle">Quick links</ThemedText>

          <QuickLink href="/(tabs)/events" label="Events" />
          <QuickLink href="/about" label="About ALPFA" />
          <QuickLink href="/join" label="Join" />
          <QuickLink href="/(tabs)/eboard" label="Meet the EBoard" />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

/** Small reusable UI components */

function NavPill({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.pill}>
        <ThemedText style={styles.pillText}>{label}</ThemedText>
      </Pressable>
    </Link>
  );
}

function SectionHeader({
  title,
  actionLabel,
  href,
}: {
  title: string;
  actionLabel: string;
  href: string;
}) {
  return (
    <View style={styles.sectionHeaderRow}>
      <ThemedText type="subtitle">{title}</ThemedText>
      <Link href={href} asChild>
        <Pressable hitSlop={10}>
          <ThemedText style={styles.sectionAction}>{actionLabel} →</ThemedText>
        </Pressable>
      </Link>
    </View>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

function MetaPill({ text }: { text: string }) {
  return (
    <View style={styles.metaPill}>
      <ThemedText style={styles.metaPillText}>{text}</ThemedText>
    </View>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.quickLinkRow}>
        <ThemedText style={styles.quickLinkArrow}>→</ThemedText>
        <ThemedText style={styles.quickLinkLabel}>{label}</ThemedText>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  headerLogo: {
    width: "92%",
    height: 240,
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -120 }],
    alignSelf: "center",
  },

  page: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 28,
    gap: 14,
  },

  pillsRow: {
    paddingVertical: 6,
    gap: 10,
  },
  pill: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.10)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
  },
  pillText: {
    fontSize: 13,
    opacity: 0.95,
  },

  sectionHeaderRow: {
    marginTop: 10,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionAction: {
    fontSize: 13,
    opacity: 0.85,
  },

  card: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.18,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 10 },
      },
      android: { elevation: 3 },
    }),
  },

  cardImage: {
    width: "100%",
    height: 190,
  },
  cardBody: {
    padding: 14,
    gap: 6,
  },
  muted: {
    opacity: 0.75,
    fontSize: 13,
    lineHeight: 18,
  },

  eventImage: {
    width: "100%",
    height: 210,
  },
  eventInfo: {
    padding: 14,
    gap: 10,
  },
  eventTitle: {
    fontSize: 16,
  },

  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  metaPill: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: "rgba(0,0,0,0.25)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },
  metaPillText: {
    fontSize: 12,
    opacity: 0.9,
  },

  primaryBtn: {
    marginTop: 2,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#0B0B0B",
    alignItems: "center",
  },
  primaryBtnText: {
    color: "white",
    fontSize: 14,
  },

  quickLinksCard: {
    borderRadius: 16,
    padding: 14,
    gap: 10,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    marginTop: 6,
  },
  quickLinkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
    borderRadius: 12,
  },
  quickLinkArrow: { opacity: 0.8 },
  quickLinkLabel: { fontSize: 15 },
});
