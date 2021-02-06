import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons';

import CustomBarChart from '../../components/CustomBarChart';

import yorBusinessData from '../../helpers/ChartData';

import styles from './styles';

function Home() {
  const navigation = useNavigation();

  function handleGoalsPerformancePress() {
    navigation.navigate('goals-performance');
  }

  function handleProductReportPress() {
    navigation.navigate('product-report');
  }

  return (
    <View style={styles.container}>
      <View style={styles.comparisonContainer}>
        <View style={styles.comparisonTitleContainer}>
          <Text style={styles.comparisonTitle}>Comparação</Text>
          <AntDesign name="swap" style={styles.comparisonIcon} />
        </View>
        <View style={styles.businessAnalyticsContainer}>
          <View style={styles.businessAnalyticsData}>
            <Text style={styles.businessAnalyticsTitle}>Seu Negócio</Text>
            <View style={styles.businessAnalyticsValueContainer}>
              <Text style={styles.businessAnalyticsValue}>R$ 8.200,00</Text>
              <Text
                style={[
                  styles.businessAnalyticsValueVariation,
                  styles.businessAnalyticsValuePositiveVariation,
                ]}
              >
                +24%
              </Text>
            </View>
          </View>
          <View style={styles.businessAnalyticsChart}>
                <CustomBarChart chartData={yorBusinessData} />
          </View>
        </View>
        <View style={styles.businessAnalyticsContainer}>
          <View style={styles.businessAnalyticsData}>
            <Text style={styles.businessAnalyticsTitle}>Seu Negócio</Text>
            <View style={styles.businessAnalyticsValueContainer}>
              <Text style={styles.businessAnalyticsValue}>R$ 7.600,00</Text>
              <Text
                style={[
                  styles.businessAnalyticsValueVariation,
                  styles.businessAnalyticsValueNegativeVariation,
                ]}
              >
                -16%
              </Text>
            </View>
          </View>
          <View style={styles.businessAnalyticsChart} />
        </View>
        <TouchableOpacity
          onPress={handleProductReportPress}
          style={styles.comparisonButtonContainer}
          activeOpacity={0.75}
        >
          <Text style={styles.comparisonButtonText}>Ver mais detalhes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>Desepenho de Metas</Text>
        <BorderlessButton
          onPress={handleGoalsPerformancePress}
          style={styles.goalsAnalyticsContainer}
        >
          <View style={styles.weekBalance}>
            <View style={styles.weekBalanceChart} />
            <View style={styles.weekBalanceData}>
              <View style={styles.weekBalanceDataDayContainer}>
                <Text style={styles.weekBalanceDataDayTitle}>Quarta-feira</Text>
                <Text
                  style={[
                    styles.weekBalanceDataDayTitle,
                    styles.weekBalanceDataDayTitleValue,
                  ]}
                >
                  +8.2%
                </Text>
              </View>
              <View style={styles.weekBalanceDataProductContainer}>
                <Text style={styles.weekBalanceDataProductTitle}>
                  Tigaroda Bike
                </Text>
                <Text style={styles.weekBalanceDataProductTitle}>
                  R$ 4.200,00
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.lastMonthBalance}>
            <Text style={styles.lastMonthBalanceText}>Último mês</Text>
            <Text
              style={[
                styles.lastMonthBalanceText,
                styles.lastMonthBalanceValue,
              ]}
            >
              R$ 4.008,00
            </Text>
          </View>
        </BorderlessButton>
      </View>
    </View>
  );
}

export default Home;
