import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

function GoalsPerformance() {
  return (
    <View style={styles.container}>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>Desepenho das Metas</Text>
        <View style={styles.goalsChart} />
        <View style={styles.goalsDetailsContainer}>
          <View style={styles.thisMonthGoalsContainer}>
            <Text style={styles.thisMonthGoalsTitle}>Esse mês</Text>
            <View style={styles.thisMonthGoalsValueContainer}>
              <Text style={styles.thisMonthGoalsValue}>R$ 4.200</Text>
              <Text style={styles.thisMonthGoalsVariation}>+8.2%</Text>
            </View>
          </View>
          <View style={styles.lastMonthGoalsContainer}>
            <Text style={styles.lastMonthGoalsTitle}>Último mês</Text>
            <View style={styles.lastMonthGoalsValueContainer}>
              <Text style={styles.lastMonthGoalsValue}>R$ 4.008</Text>
              <Text style={styles.lastMonthGoalsVariation}>+4%</Text>
            </View>
          </View>
        </View>
        <View style={styles.impressionsContainer}>
          <Text style={styles.impressionsTitle}>Tiragem</Text>
          <View style={styles.impressionsLine}>
            <View style={styles.countryContainer}>
              <View style={styles.countryNameContainer}>
                <View
                  style={[styles.countryMarker, styles.countryPositiveMarker]}
                />
                <Text style={styles.countryName}>Europa</Text>
              </View>
              <Text style={styles.countryVariation}>34%</Text>
            </View>
            <View style={styles.countryContainer}>
              <View style={styles.countryNameContainer}>
                <View
                  style={[styles.countryMarker, styles.countryNegativeMarker]}
                />
                <Text style={styles.countryName}>America</Text>
              </View>
              <Text style={styles.countryVariation}>28%</Text>
            </View>
          </View>
          <View style={styles.impressionsLine}>
            <View style={styles.countryContainer}>
              <View style={styles.countryNameContainer}>
                <View
                  style={[styles.countryMarker, styles.countryNeutralMarker]}
                />
                <Text style={styles.countryName}>Asia</Text>
              </View>
              <Text style={styles.countryVariation}>22%</Text>
            </View>
            <View style={styles.countryContainer}>
              <View style={styles.countryNameContainer}>
                <View
                  style={[styles.countryMarker, styles.countryNegativeMarker]}
                />
                <Text style={styles.countryName}>Africa</Text>
              </View>
              <Text style={styles.countryVariation}>16%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default GoalsPerformance;
