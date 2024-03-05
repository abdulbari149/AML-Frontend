/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getBankInformation } from "../graphql/queries";
import { updateBankInformation } from "../graphql/mutations";
const client = generateClient();
export default function BankInformationUpdateForm(props) {
  const {
    id: idProp,
    bankInformation: bankInformationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    BankName: "",
    PhoneNo: "",
    Email: "",
    Logo: "",
  };
  const [BankName, setBankName] = React.useState(initialValues.BankName);
  const [PhoneNo, setPhoneNo] = React.useState(initialValues.PhoneNo);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Logo, setLogo] = React.useState(initialValues.Logo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bankInformationRecord
      ? { ...initialValues, ...bankInformationRecord }
      : initialValues;
    setBankName(cleanValues.BankName);
    setPhoneNo(cleanValues.PhoneNo);
    setEmail(cleanValues.Email);
    setLogo(cleanValues.Logo);
    setErrors({});
  };
  const [bankInformationRecord, setBankInformationRecord] = React.useState(
    bankInformationModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBankInformation.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBankInformation
        : bankInformationModelProp;
      setBankInformationRecord(record);
    };
    queryData();
  }, [idProp, bankInformationModelProp]);
  React.useEffect(resetStateValues, [bankInformationRecord]);
  const validations = {
    BankName: [{ type: "Required" }],
    PhoneNo: [{ type: "Required" }],
    Email: [{ type: "Required" }],
    Logo: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          BankName,
          PhoneNo,
          Email,
          Logo,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateBankInformation.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bankInformationRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BankInformationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Bank name"
        isRequired={true}
        isReadOnly={false}
        value={BankName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              BankName: value,
              PhoneNo,
              Email,
              Logo,
            };
            const result = onChange(modelFields);
            value = result?.BankName ?? value;
          }
          if (errors.BankName?.hasError) {
            runValidationTasks("BankName", value);
          }
          setBankName(value);
        }}
        onBlur={() => runValidationTasks("BankName", BankName)}
        errorMessage={errors.BankName?.errorMessage}
        hasError={errors.BankName?.hasError}
        {...getOverrideProps(overrides, "BankName")}
      ></TextField>
      <TextField
        label="Phone no"
        isRequired={true}
        isReadOnly={false}
        value={PhoneNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              BankName,
              PhoneNo: value,
              Email,
              Logo,
            };
            const result = onChange(modelFields);
            value = result?.PhoneNo ?? value;
          }
          if (errors.PhoneNo?.hasError) {
            runValidationTasks("PhoneNo", value);
          }
          setPhoneNo(value);
        }}
        onBlur={() => runValidationTasks("PhoneNo", PhoneNo)}
        errorMessage={errors.PhoneNo?.errorMessage}
        hasError={errors.PhoneNo?.hasError}
        {...getOverrideProps(overrides, "PhoneNo")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              BankName,
              PhoneNo,
              Email: value,
              Logo,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Logo"
        isRequired={true}
        isReadOnly={false}
        value={Logo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              BankName,
              PhoneNo,
              Email,
              Logo: value,
            };
            const result = onChange(modelFields);
            value = result?.Logo ?? value;
          }
          if (errors.Logo?.hasError) {
            runValidationTasks("Logo", value);
          }
          setLogo(value);
        }}
        onBlur={() => runValidationTasks("Logo", Logo)}
        errorMessage={errors.Logo?.errorMessage}
        hasError={errors.Logo?.hasError}
        {...getOverrideProps(overrides, "Logo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || bankInformationModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || bankInformationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
