import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import { View, Text } from "react-native";
function TankProgress(props) {
  const percent = props.progress;
  const [circleColor, setCircleColor] = useState("rgba(61,140,64,1)");
  const [unfilledColor, setUnfilledColor] = useState("rgba(61,140,64,.25)");
  const indicatorLogo = () => {
    if (percent < 80 && percent > 50) {
      setCircleColor("rgba(253,216,53,1)");
      setUnfilledColor("rgba(253,216,53,.25)");
    } else if (percent <= 50) {
      setCircleColor("rgba(220,60,49,1)");
      setUnfilledColor("rgba(220,60,49,.25)");
    }
  };
  useEffect(() => {
    indicatorLogo();
  });

  return (
    <View>
      <Progress.Circle
        size={150}
        progress={percent / 100}
        indeterminate={false}
        thickness={20}
        showsText={true}
        borderWidth={0}
        unfilledColor={unfilledColor}
        color={circleColor}
        textStyle={12}
        strokeCap="round"
      />
      <Text>{indicatorLogo}</Text>
    </View>
  );
}

export default TankProgress;
