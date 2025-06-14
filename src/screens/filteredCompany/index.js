import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { allCompanies } from "../../utils/data.js";
import CompanyCardSmall from "../../components/CompanyCardSmall.js";

const FilteredCompany = ({ route }) => {
  const { category } = route.params;

  const filteredCompanies = allCompanies.filter((company) =>
    company.category.includes(category)
  );

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <FlatList
        data={filteredCompanies}
        renderItem={({ item }) => <CompanyCardSmall item={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 15,
        }}
      />
    </View>
  );
};

export default FilteredCompany;
