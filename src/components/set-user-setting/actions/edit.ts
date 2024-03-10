export const handleEditField = (
  item: any,
  setSingleField: any,
  fieldsData: any,
  setFieldsData: any,
  setFormData: any,
  type: "codeNotToUse" | "highRiskCategories" | "subOfficeTellerCode"
) => {
  setSingleField(item);
  const filterData = fieldsData.filter(
    (currItem: any) => currItem.code !== item.code
  );
  setFieldsData(filterData);
  setFormData((prevFormData: any) => ({
    ...prevFormData,
    [type]: filterData,
  }));
};
