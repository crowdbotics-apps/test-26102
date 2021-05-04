import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_6_5} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bc0/15cd/cc593b57573622721368c471fe1b598d"
        }}
        style={styles.ImageBackground_5_16}
      />
      <View style={styles.View_5_22}>
        <View style={styles.View_I5_22_5_7}>
          <Text style={styles.Text_I5_22_5_7}>Step 2/3</Text>
        </View>
      </View>
      <View style={styles.View_5_25}>
        <View style={styles.View_I5_25_5_18}>
          <Text style={styles.Text_I5_25_5_18}>Add Items</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_6_5: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_5_16: {
    width: wp("2.4154589371980677%"),
    height: hp("2.185792349726776%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%")
  },
  View_5_22: {
    width: wp("13.768115942028986%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.11594202898551%"),
    top: hp("1.366120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_22_5_7: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I5_22_5_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_25: {
    width: wp("19.082125603864732%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.45893719806764%"),
    top: hp("4.098360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_25_5_18: {
    flexGrow: 1,
    width: wp("19.082125603864732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I5_25_5_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
