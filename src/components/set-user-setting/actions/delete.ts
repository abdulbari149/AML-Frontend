export const handleDeleteField = (
  field: any,
  fieldsData: any,
  setFieldsData: any,
  setFormData: any,
  type: "codeNotToUse" | "highRiskCategories" | "subOfficeTellerCode"
) => {
  const filterData = fieldsData.filter(
    (item: any, index: number) => index !== field
  );
  setFieldsData(filterData);
  setFormData((prevFormData: any) => ({
    ...prevFormData,
    [type]: filterData,
  }));
};
