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
      <View style={styles.View_429_528}>
        <View style={styles.View_116_383} />
        <View style={styles.View_116_762}>
          <Text style={styles.Text_116_762}>Select car</Text>
        </View>
      </View>
      <View style={styles.View_96_303}>
        <View style={styles.View_96_292}>
          <View style={styles.View_96_293} />
          <View style={styles.View_96_295}>
            <Text style={styles.Text_96_295}>Exclusive Cars</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/820c/1e66/1191e2a4a763d595558e33af4cb91f49"
          }}
          style={styles.ImageBackground_96_300}
        />
      </View>
      <View style={styles.View_96_304}>
        <View style={styles.View_96_305}>
          <View style={styles.View_96_306} />
          <View style={styles.View_96_307}>
            <Text style={styles.Text_96_307}>0 - 500$</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/820c/1e66/1191e2a4a763d595558e33af4cb91f49"
          }}
          style={styles.ImageBackground_96_308}
        />
      </View>
      <View style={styles.View_96_288}>
        <View style={styles.View_96_289} />
        <View style={styles.View_96_291}>
          <Text style={styles.Text_96_291}>Filter</Text>
        </View>
      </View>
      <View style={styles.View_429_526}>
        <View style={styles.View_303_334}>
          <View style={styles.View_303_335} />
          <View style={styles.View_429_235}>
            <View style={styles.View_303_336}>
              <View style={styles.View_303_337}>
                <Text style={styles.Text_303_337}>star</Text>
              </View>
              <View style={styles.View_303_338}>
                <Text style={styles.Text_303_338}>star</Text>
              </View>
              <View style={styles.View_303_339}>
                <Text style={styles.Text_303_339}>star</Text>
              </View>
              <View style={styles.View_303_340}>
                <Text style={styles.Text_303_340}>star</Text>
              </View>
              <View style={styles.View_303_341}>
                <Text style={styles.Text_303_341}>star_border</Text>
              </View>
            </View>
            <View style={styles.View_303_342}>
              <Text style={styles.Text_303_342}>4.0</Text>
            </View>
            <View style={styles.View_303_343}>
              <Text style={styles.Text_303_343}>Exclusive car</Text>
            </View>
            <View style={styles.View_303_344}>
              <Text style={styles.Text_303_344}>Audi V8 2016</Text>
            </View>
            <View style={styles.View_303_354}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdec/7a40/18fa29be35a575784871c47108cc7a6b"
                }}
                style={styles.ImageBackground_303_355}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1810/34e9/8eb8af28813b20d1fe3b3737ac6aab0e"
                }}
                style={styles.ImageBackground_303_356}
              />
              <View style={styles.View_303_357}>
                <Text style={styles.Text_303_357}>5 Passenger(s)</Text>
              </View>
              <View style={styles.View_303_358}>
                <Text style={styles.Text_303_358}>Provide by hub</Text>
              </View>
              <View style={styles.View_303_359}>
                <Text style={styles.Text_303_359}>50$/day</Text>
              </View>
              <View style={styles.View_303_360}>
                <Text style={styles.Text_303_360}>3 bags</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1906/10df/c9520fb350745d2b82976ef34f26d81f"
                }}
                style={styles.ImageBackground_303_361}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c2/ee33/720e6569da3b72570c73f6b8cdfdba00"
                }}
                style={styles.ImageBackground_303_362}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e342/9ac1/39ff8f2abc3cb6ac8c321b97324d3048"
            }}
            style={styles.ImageBackground_429_234}
          />
        </View>
        <View style={styles.View_429_448}>
          <View style={styles.View_429_449} />
          <View style={styles.View_429_450}>
            <View style={styles.View_429_451}>
              <View style={styles.View_429_452}>
                <Text style={styles.Text_429_452}>star</Text>
              </View>
              <View style={styles.View_429_453}>
                <Text style={styles.Text_429_453}>star</Text>
              </View>
              <View style={styles.View_429_454}>
                <Text style={styles.Text_429_454}>star</Text>
              </View>
              <View style={styles.View_429_455}>
                <Text style={styles.Text_429_455}>star</Text>
              </View>
              <View style={styles.View_429_456}>
                <Text style={styles.Text_429_456}>star_border</Text>
              </View>
            </View>
            <View style={styles.View_429_457}>
              <Text style={styles.Text_429_457}>4.0</Text>
            </View>
            <View style={styles.View_429_458}>
              <Text style={styles.Text_429_458}>Exclusive car</Text>
            </View>
            <View style={styles.View_429_459}>
              <Text style={styles.Text_429_459}>Audi V8 2016</Text>
            </View>
            <View style={styles.View_429_460}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdec/7a40/18fa29be35a575784871c47108cc7a6b"
                }}
                style={styles.ImageBackground_429_461}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1810/34e9/8eb8af28813b20d1fe3b3737ac6aab0e"
                }}
                style={styles.ImageBackground_429_462}
              />
              <View style={styles.View_429_463}>
                <Text style={styles.Text_429_463}>5 Passenger(s)</Text>
              </View>
              <View style={styles.View_429_464}>
                <Text style={styles.Text_429_464}>Provide by hub</Text>
              </View>
              <View style={styles.View_429_465}>
                <Text style={styles.Text_429_465}>50$/day</Text>
              </View>
              <View style={styles.View_429_466}>
                <Text style={styles.Text_429_466}>3 bags</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1906/10df/c9520fb350745d2b82976ef34f26d81f"
                }}
                style={styles.ImageBackground_429_467}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c2/ee33/720e6569da3b72570c73f6b8cdfdba00"
                }}
                style={styles.ImageBackground_429_468}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afa/9e5b/9391ddea6fbed31ed63156b035a65563"
            }}
            style={styles.ImageBackground_429_469}
          />
        </View>
        <View style={styles.View_429_474}>
          <View style={styles.View_429_475} />
          <View style={styles.View_429_476}>
            <View style={styles.View_429_477}>
              <View style={styles.View_429_478}>
                <Text style={styles.Text_429_478}>star</Text>
              </View>
              <View style={styles.View_429_479}>
                <Text style={styles.Text_429_479}>star</Text>
              </View>
              <View style={styles.View_429_480}>
                <Text style={styles.Text_429_480}>star</Text>
              </View>
              <View style={styles.View_429_481}>
                <Text style={styles.Text_429_481}>star</Text>
              </View>
              <View style={styles.View_429_482}>
                <Text style={styles.Text_429_482}>star_border</Text>
              </View>
            </View>
            <View style={styles.View_429_483}>
              <Text style={styles.Text_429_483}>4.0</Text>
            </View>
            <View style={styles.View_429_484}>
              <Text style={styles.Text_429_484}>Exclusive car</Text>
            </View>
            <View style={styles.View_429_485}>
              <Text style={styles.Text_429_485}>Audi V8 2016</Text>
            </View>
            <View style={styles.View_429_486}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdec/7a40/18fa29be35a575784871c47108cc7a6b"
                }}
                style={styles.ImageBackground_429_487}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1810/34e9/8eb8af28813b20d1fe3b3737ac6aab0e"
                }}
                style={styles.ImageBackground_429_488}
              />
              <View style={styles.View_429_489}>
                <Text style={styles.Text_429_489}>5 Passenger(s)</Text>
              </View>
              <View style={styles.View_429_490}>
                <Text style={styles.Text_429_490}>Provide by hub</Text>
              </View>
              <View style={styles.View_429_491}>
                <Text style={styles.Text_429_491}>50$/day</Text>
              </View>
              <View style={styles.View_429_492}>
                <Text style={styles.Text_429_492}>3 bags</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1906/10df/c9520fb350745d2b82976ef34f26d81f"
                }}
                style={styles.ImageBackground_429_493}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c2/ee33/720e6569da3b72570c73f6b8cdfdba00"
                }}
                style={styles.ImageBackground_429_494}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37e7/5ded/a82f87053d1e55af95084b8c11af9d7e"
            }}
            style={styles.ImageBackground_429_495}
          />
        </View>
        <View style={styles.View_429_500}>
          <View style={styles.View_429_501} />
          <View style={styles.View_429_502}>
            <View style={styles.View_429_503}>
              <View style={styles.View_429_504}>
                <Text style={styles.Text_429_504}>star</Text>
              </View>
              <View style={styles.View_429_505}>
                <Text style={styles.Text_429_505}>star</Text>
              </View>
              <View style={styles.View_429_506}>
                <Text style={styles.Text_429_506}>star</Text>
              </View>
              <View style={styles.View_429_507}>
                <Text style={styles.Text_429_507}>star</Text>
              </View>
              <View style={styles.View_429_508}>
                <Text style={styles.Text_429_508}>star_border</Text>
              </View>
            </View>
            <View style={styles.View_429_509}>
              <Text style={styles.Text_429_509}>4.0</Text>
            </View>
            <View style={styles.View_429_510}>
              <Text style={styles.Text_429_510}>Exclusive car</Text>
            </View>
            <View style={styles.View_429_511}>
              <Text style={styles.Text_429_511}>Audi V8 2016</Text>
            </View>
            <View style={styles.View_429_512}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdec/7a40/18fa29be35a575784871c47108cc7a6b"
                }}
                style={styles.ImageBackground_429_513}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1810/34e9/8eb8af28813b20d1fe3b3737ac6aab0e"
                }}
                style={styles.ImageBackground_429_514}
              />
              <View style={styles.View_429_515}>
                <Text style={styles.Text_429_515}>5 Passenger(s)</Text>
              </View>
              <View style={styles.View_429_516}>
                <Text style={styles.Text_429_516}>Provide by hub</Text>
              </View>
              <View style={styles.View_429_517}>
                <Text style={styles.Text_429_517}>50$/day</Text>
              </View>
              <View style={styles.View_429_518}>
                <Text style={styles.Text_429_518}>3 bags</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1906/10df/c9520fb350745d2b82976ef34f26d81f"
                }}
                style={styles.ImageBackground_429_519}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c2/ee33/720e6569da3b72570c73f6b8cdfdba00"
                }}
                style={styles.ImageBackground_429_520}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9afa/9e5b/9391ddea6fbed31ed63156b035a65563"
            }}
            style={styles.ImageBackground_429_521}
          />
        </View>
      </View>
      <View style={styles.View_116_763}>
        <Text style={styles.Text_116_763}>Ho Chi Minh, District 4</Text>
      </View>
      <View style={styles.View_116_764}>
        <Text style={styles.Text_116_764}>Aug 20 - Sep 20</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37c8/238b/83d969b5d641ce138fa6e58873491e23"
        }}
        style={styles.ImageBackground_96_236}
      />
      <View style={styles.View_429_543}>
        <View style={styles.View_429_540}>
          <View style={styles.View_429_541} />
          <View style={styles.View_429_542}>
            <Text style={styles.Text_429_542}>Select car</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2ab/a99a/3996e2bf57855e055c82387ad2d2bde7"
          }}
          style={styles.ImageBackground_429_529}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_429_528: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("0%")
  },
  View_116_383: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(81, 151, 105, 1)"
  },
  View_116_762: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("2.3224043715846996%")
  },
  Text_116_762: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_303: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("17.349726775956285%")
  },
  View_96_292: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_96_293: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_96_295: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333336%"),
    top: hp("1.0928961748633874%")
  },
  Text_96_295: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_96_300: {
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    top: hp("1.6393442622950793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666664%")
  },
  View_96_304: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%"),
    top: hp("17.349726775956285%")
  },
  View_96_305: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_96_306: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_96_307: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("1.0928961748633874%")
  },
  Text_96_307: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_96_308: {
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    top: hp("1.6393442622950793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.799999999999997%")
  },
  View_96_288: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.73333333333333%"),
    top: hp("10.655737704918032%")
  },
  View_96_289: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(154, 159, 163, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_96_291: {
    width: wp("11.065201822916666%"),
    minWidth: wp("11.065201822916666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9384765625%"),
    top: hp("0.9562841530054662%")
  },
  Text_96_291: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_526: {
    width: wp("85.86666666666667%"),
    minWidth: wp("85.86666666666667%"),
    height: hp("193.5792349726776%"),
    minHeight: hp("193.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_334: {
    width: wp("85.86666666666667%"),
    minWidth: wp("85.86666666666667%"),
    height: hp("49.31693989071038%"),
    minHeight: hp("49.31693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_335: {
    width: wp("85.86666666666667%"),
    height: hp("41.939890710382514%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_429_235: {
    width: wp("77.86666666666666%"),
    minWidth: wp("77.86666666666666%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000001%"),
    top: hp("25.13661202185792%")
  },
  View_303_336: {
    width: wp("32%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  View_303_337: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_303_337: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_338: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%")
  },
  Text_303_338: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_339: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.800000000000004%")
  },
  Text_303_339: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_340: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.20000000000001%")
  },
  Text_303_340: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_341: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%")
  },
  Text_303_341: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_342: {
    width: wp("5.866666666666666%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  Text_303_342: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_343: {
    width: wp("20.533333333333335%"),
    top: hp("3.278688524590173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_303_343: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_344: {
    width: wp("28.799999999999997%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_303_344: {
    color: "rgba(2, 14, 25, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_354: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("7.923497267759565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_355: {
    width: wp("6.133333333333333%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_356: {
    width: wp("6.666666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333334%")
  },
  View_303_357: {
    width: wp("26.93333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%")
  },
  Text_303_357: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_358: {
    width: wp("28.26666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.2%")
  },
  Text_303_358: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_359: {
    width: wp("14.666666666666666%"),
    top: hp("3.6885245901639294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%")
  },
  Text_303_359: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_360: {
    width: wp("12.266666666666666%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%")
  },
  Text_303_360: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_303_361: {
    width: wp("6.133333333333333%"),
    height: hp("2.185792349726776%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_362: {
    width: wp("4%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%")
  },
  ImageBackground_429_234: {
    width: wp("85.86666666666667%"),
    height: hp("22.950819672131146%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_429_448: {
    width: wp("85.86666666666667%"),
    minWidth: wp("85.86666666666667%"),
    height: hp("49.31693989071038%"),
    minHeight: hp("49.31693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.087431693989075%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_429_449: {
    width: wp("85.86666666666667%"),
    height: hp("41.939890710382514%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_429_450: {
    width: wp("77.86666666666666%"),
    minWidth: wp("77.86666666666666%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000001%"),
    top: hp("25.136612021857914%")
  },
  View_429_451: {
    width: wp("32%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  View_429_452: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_429_452: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_453: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%")
  },
  Text_429_453: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_454: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.800000000000004%")
  },
  Text_429_454: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_455: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.20000000000001%")
  },
  Text_429_455: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_456: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%")
  },
  Text_429_456: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_457: {
    width: wp("5.866666666666666%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  Text_429_457: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_458: {
    width: wp("20.533333333333335%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_429_458: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_459: {
    width: wp("28.799999999999997%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_429_459: {
    color: "rgba(2, 14, 25, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_460: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_429_461: {
    width: wp("6.133333333333333%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_429_462: {
    width: wp("6.666666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333334%")
  },
  View_429_463: {
    width: wp("26.93333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%")
  },
  Text_429_463: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_464: {
    width: wp("28.26666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.2%")
  },
  Text_429_464: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_465: {
    width: wp("14.666666666666666%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%")
  },
  Text_429_465: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_466: {
    width: wp("12.266666666666666%"),
    top: hp("3.4153005464481083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%")
  },
  Text_429_466: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_429_467: {
    width: wp("6.133333333333333%"),
    height: hp("2.185792349726776%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_429_468: {
    width: wp("4%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.1420765027322517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%")
  },
  ImageBackground_429_469: {
    width: wp("85.86666666666667%"),
    height: hp("22.950819672131146%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_429_474: {
    width: wp("85.86666666666667%"),
    minWidth: wp("85.86666666666667%"),
    height: hp("49.31693989071038%"),
    minHeight: hp("49.31693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96.17486338797815%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_429_475: {
    width: wp("85.86666666666667%"),
    height: hp("41.939890710382514%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_429_476: {
    width: wp("77.86666666666666%"),
    minWidth: wp("77.86666666666666%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000001%"),
    top: hp("25.136612021857914%")
  },
  View_429_477: {
    width: wp("32%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  View_429_478: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_429_478: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_479: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%")
  },
  Text_429_479: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_480: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.800000000000004%")
  },
  Text_429_480: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_481: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.20000000000001%")
  },
  Text_429_481: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_482: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%")
  },
  Text_429_482: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_483: {
    width: wp("5.866666666666666%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  Text_429_483: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_484: {
    width: wp("20.533333333333335%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_429_484: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_485: {
    width: wp("28.799999999999997%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_429_485: {
    color: "rgba(2, 14, 25, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_486: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_429_487: {
    width: wp("6.133333333333333%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_429_488: {
    width: wp("6.666666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333334%")
  },
  View_429_489: {
    width: wp("26.93333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%")
  },
  Text_429_489: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_490: {
    width: wp("28.26666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.2%")
  },
  Text_429_490: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_491: {
    width: wp("14.666666666666666%"),
    top: hp("3.6885245901639507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%")
  },
  Text_429_491: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_492: {
    width: wp("12.266666666666666%"),
    top: hp("3.415300546448094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%")
  },
  Text_429_492: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_429_493: {
    width: wp("6.133333333333333%"),
    height: hp("2.185792349726776%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_429_494: {
    width: wp("4%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%")
  },
  ImageBackground_429_495: {
    width: wp("85.86666666666667%"),
    height: hp("22.950819672131146%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_429_500: {
    width: wp("85.86666666666667%"),
    minWidth: wp("85.86666666666667%"),
    height: hp("49.31693989071038%"),
    minHeight: hp("49.31693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("144.26229508196724%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_429_501: {
    width: wp("85.86666666666667%"),
    height: hp("41.939890710382514%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_429_502: {
    width: wp("77.86666666666666%"),
    minWidth: wp("77.86666666666666%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000001%"),
    top: hp("25.1366120218579%")
  },
  View_429_503: {
    width: wp("32%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  View_429_504: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_429_504: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_505: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%")
  },
  Text_429_505: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_506: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.800000000000004%")
  },
  Text_429_506: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_507: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.20000000000001%")
  },
  Text_429_507: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_508: {
    width: wp("6.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%")
  },
  Text_429_508: {
    color: "rgba(239, 202, 73, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_509: {
    width: wp("5.866666666666666%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  Text_429_509: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_510: {
    width: wp("20.533333333333335%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_429_510: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_511: {
    width: wp("28.799999999999997%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_429_511: {
    color: "rgba(2, 14, 25, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_512: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_429_513: {
    width: wp("6.133333333333333%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.8251366120219075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_429_514: {
    width: wp("6.666666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333334%")
  },
  View_429_515: {
    width: wp("26.93333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%")
  },
  Text_429_515: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_516: {
    width: wp("28.26666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.2%")
  },
  Text_429_516: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_517: {
    width: wp("14.666666666666666%"),
    top: hp("3.6885245901639507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%")
  },
  Text_429_517: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_429_518: {
    width: wp("12.266666666666666%"),
    top: hp("3.415300546448094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%")
  },
  Text_429_518: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_429_519: {
    width: wp("6.133333333333333%"),
    height: hp("2.185792349726776%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_429_520: {
    width: wp("4%"),
    height: hp("2.5956284153005464%"),
    top: hp("3.142076502732266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%")
  },
  ImageBackground_429_521: {
    width: wp("85.86666666666667%"),
    height: hp("22.950819672131146%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_116_763: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("10.792349726775956%")
  },
  Text_116_763: {
    color: "rgba(2, 14, 25, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_764: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("13.524590163934427%")
  },
  Text_116_764: {
    color: "rgba(53, 62, 71, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_96_236: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("204.50819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_429_543: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("0%")
  },
  View_429_540: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_429_541: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(81, 151, 105, 1)"
  },
  View_429_542: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("2.3224043715846996%")
  },
  Text_429_542: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_429_529: {
    width: wp("2.1333333333333333%"),
    height: hp("1.7759564144363822%"),
    top: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6%")
  },
  View_2: { height: 1553 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
