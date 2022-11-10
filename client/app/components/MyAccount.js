import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Icon } from "@rneui/base";

const MyAccount = () => {
  const LeftContent = (props) => (
    <Icon
      color="#0032AF"
      name="quick-contacts-mail"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      type="MaterialIcons"
      size={40}
    />
  );
  return (
    // <View style={styles.container}>
    //   </View>
    <Card>
      <Card.Title
        title="My account"
        left={LeftContent}
        style={{ backgroundColor: "#F7F7F7" }}
        // subtitle="Card Subtitle"
      />

      <Card.Content style={{ backgroundColor: "#F7F7F7", width: "50%" }}>
        <Card.Cover
          // source={{ uri: "https://picsum.photos/700" }}
          source={{
            uri: "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
          }}
          style={{ opacity: 0.8 }}
        />
        <Title>Balance : LKR 1250</Title>
        <Title>Valid</Title>
        {/* <Paragraph>Card content</Paragraph> */}
      </Card.Content>

      <Card.Actions style={{ backgroundColor: "#F7F7F7", marginLeft: "10%" }}>
        {/* <Button>Cancel</Button> */}
        <Button mode="contained" color="#2A9000" style={{ width: "40%" }}>
          Begin trip
        </Button>
        <Button
          mode="contained"
          color="#F57E3A"
          style={{ width: "40%", marginLeft: 30 }}
        >
          Deactivate
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyAccount;
