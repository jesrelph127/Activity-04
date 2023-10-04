import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function UserProfile() {
    
   
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
          source={require('../assets/prof.png')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Jesrel Pilipino</Text>
        <Text style={styles.userBio}>Front-end Developer</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque elit ac justo tincidunt, a interdum sapien malesuada.
        </Text>

        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.contactText}>
          Email: jesrelpilino@gmail.com
        </Text>
        <Text style={styles.contactText}>
          Phone: 0936-166-9883
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  userBio: {
    fontSize: 16,
    color: '#777',
  },
  content: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
