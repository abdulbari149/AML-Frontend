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
import { getCriteria } from "../graphql/queries";
import { updateCriteria } from "../graphql/mutations";
const client = generateClient();
export default function CriteriaUpdateForm(props) {
  const {
    id: idProp,
    criteria: criteriaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
    M: "",
    N: "",
    O: "",
    P: "",
    Q: "",
    R: "",
    S: "",
    T: "",
    U: "",
    V: "",
    W: "",
    X: "",
    Y: "",
    Z: "",
  };
  const [A, setA] = React.useState(initialValues.A);
  const [B, setB] = React.useState(initialValues.B);
  const [C, setC] = React.useState(initialValues.C);
  const [D, setD] = React.useState(initialValues.D);
  const [E, setE] = React.useState(initialValues.E);
  const [F, setF] = React.useState(initialValues.F);
  const [G, setG] = React.useState(initialValues.G);
  const [H, setH] = React.useState(initialValues.H);
  const [I, setI] = React.useState(initialValues.I);
  const [J, setJ] = React.useState(initialValues.J);
  const [K, setK] = React.useState(initialValues.K);
  const [L, setL] = React.useState(initialValues.L);
  const [M, setM] = React.useState(initialValues.M);
  const [N, setN] = React.useState(initialValues.N);
  const [O, setO] = React.useState(initialValues.O);
  const [P, setP] = React.useState(initialValues.P);
  const [Q, setQ] = React.useState(initialValues.Q);
  const [R, setR] = React.useState(initialValues.R);
  const [S, setS] = React.useState(initialValues.S);
  const [T, setT] = React.useState(initialValues.T);
  const [U, setU] = React.useState(initialValues.U);
  const [V, setV] = React.useState(initialValues.V);
  const [W, setW] = React.useState(initialValues.W);
  const [X, setX] = React.useState(initialValues.X);
  const [Y, setY] = React.useState(initialValues.Y);
  const [Z, setZ] = React.useState(initialValues.Z);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = criteriaRecord
      ? { ...initialValues, ...criteriaRecord }
      : initialValues;
    setA(cleanValues.A);
    setB(cleanValues.B);
    setC(cleanValues.C);
    setD(cleanValues.D);
    setE(cleanValues.E);
    setF(cleanValues.F);
    setG(cleanValues.G);
    setH(cleanValues.H);
    setI(cleanValues.I);
    setJ(cleanValues.J);
    setK(cleanValues.K);
    setL(cleanValues.L);
    setM(cleanValues.M);
    setN(cleanValues.N);
    setO(cleanValues.O);
    setP(cleanValues.P);
    setQ(cleanValues.Q);
    setR(cleanValues.R);
    setS(cleanValues.S);
    setT(cleanValues.T);
    setU(cleanValues.U);
    setV(cleanValues.V);
    setW(cleanValues.W);
    setX(cleanValues.X);
    setY(cleanValues.Y);
    setZ(cleanValues.Z);
    setErrors({});
  };
  const [criteriaRecord, setCriteriaRecord] = React.useState(criteriaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCriteria.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCriteria
        : criteriaModelProp;
      setCriteriaRecord(record);
    };
    queryData();
  }, [idProp, criteriaModelProp]);
  React.useEffect(resetStateValues, [criteriaRecord]);
  const validations = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
    K: [],
    L: [],
    M: [],
    N: [],
    O: [],
    P: [],
    Q: [],
    R: [],
    S: [],
    T: [],
    U: [],
    V: [],
    W: [],
    X: [],
    Y: [],
    Z: [],
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
          A: A ?? null,
          B: B ?? null,
          C: C ?? null,
          D: D ?? null,
          E: E ?? null,
          F: F ?? null,
          G: G ?? null,
          H: H ?? null,
          I: I ?? null,
          J: J ?? null,
          K: K ?? null,
          L: L ?? null,
          M: M ?? null,
          N: N ?? null,
          O: O ?? null,
          P: P ?? null,
          Q: Q ?? null,
          R: R ?? null,
          S: S ?? null,
          T: T ?? null,
          U: U ?? null,
          V: V ?? null,
          W: W ?? null,
          X: X ?? null,
          Y: Y ?? null,
          Z: Z ?? null,
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
            query: updateCriteria.replaceAll("__typename", ""),
            variables: {
              input: {
                id: criteriaRecord.id,
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
      {...getOverrideProps(overrides, "CriteriaUpdateForm")}
      {...rest}
    >
      <TextField
        label="A"
        isRequired={false}
        isReadOnly={false}
        value={A}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A: value,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.A ?? value;
          }
          if (errors.A?.hasError) {
            runValidationTasks("A", value);
          }
          setA(value);
        }}
        onBlur={() => runValidationTasks("A", A)}
        errorMessage={errors.A?.errorMessage}
        hasError={errors.A?.hasError}
        {...getOverrideProps(overrides, "A")}
      ></TextField>
      <TextField
        label="B"
        isRequired={false}
        isReadOnly={false}
        value={B}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B: value,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.B ?? value;
          }
          if (errors.B?.hasError) {
            runValidationTasks("B", value);
          }
          setB(value);
        }}
        onBlur={() => runValidationTasks("B", B)}
        errorMessage={errors.B?.errorMessage}
        hasError={errors.B?.hasError}
        {...getOverrideProps(overrides, "B")}
      ></TextField>
      <TextField
        label="C"
        isRequired={false}
        isReadOnly={false}
        value={C}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C: value,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.C ?? value;
          }
          if (errors.C?.hasError) {
            runValidationTasks("C", value);
          }
          setC(value);
        }}
        onBlur={() => runValidationTasks("C", C)}
        errorMessage={errors.C?.errorMessage}
        hasError={errors.C?.hasError}
        {...getOverrideProps(overrides, "C")}
      ></TextField>
      <TextField
        label="D"
        isRequired={false}
        isReadOnly={false}
        value={D}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D: value,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.D ?? value;
          }
          if (errors.D?.hasError) {
            runValidationTasks("D", value);
          }
          setD(value);
        }}
        onBlur={() => runValidationTasks("D", D)}
        errorMessage={errors.D?.errorMessage}
        hasError={errors.D?.hasError}
        {...getOverrideProps(overrides, "D")}
      ></TextField>
      <TextField
        label="E"
        isRequired={false}
        isReadOnly={false}
        value={E}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E: value,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.E ?? value;
          }
          if (errors.E?.hasError) {
            runValidationTasks("E", value);
          }
          setE(value);
        }}
        onBlur={() => runValidationTasks("E", E)}
        errorMessage={errors.E?.errorMessage}
        hasError={errors.E?.hasError}
        {...getOverrideProps(overrides, "E")}
      ></TextField>
      <TextField
        label="F"
        isRequired={false}
        isReadOnly={false}
        value={F}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F: value,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.F ?? value;
          }
          if (errors.F?.hasError) {
            runValidationTasks("F", value);
          }
          setF(value);
        }}
        onBlur={() => runValidationTasks("F", F)}
        errorMessage={errors.F?.errorMessage}
        hasError={errors.F?.hasError}
        {...getOverrideProps(overrides, "F")}
      ></TextField>
      <TextField
        label="G"
        isRequired={false}
        isReadOnly={false}
        value={G}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G: value,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.G ?? value;
          }
          if (errors.G?.hasError) {
            runValidationTasks("G", value);
          }
          setG(value);
        }}
        onBlur={() => runValidationTasks("G", G)}
        errorMessage={errors.G?.errorMessage}
        hasError={errors.G?.hasError}
        {...getOverrideProps(overrides, "G")}
      ></TextField>
      <TextField
        label="H"
        isRequired={false}
        isReadOnly={false}
        value={H}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H: value,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.H ?? value;
          }
          if (errors.H?.hasError) {
            runValidationTasks("H", value);
          }
          setH(value);
        }}
        onBlur={() => runValidationTasks("H", H)}
        errorMessage={errors.H?.errorMessage}
        hasError={errors.H?.hasError}
        {...getOverrideProps(overrides, "H")}
      ></TextField>
      <TextField
        label="I"
        isRequired={false}
        isReadOnly={false}
        value={I}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I: value,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.I ?? value;
          }
          if (errors.I?.hasError) {
            runValidationTasks("I", value);
          }
          setI(value);
        }}
        onBlur={() => runValidationTasks("I", I)}
        errorMessage={errors.I?.errorMessage}
        hasError={errors.I?.hasError}
        {...getOverrideProps(overrides, "I")}
      ></TextField>
      <TextField
        label="J"
        isRequired={false}
        isReadOnly={false}
        value={J}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J: value,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.J ?? value;
          }
          if (errors.J?.hasError) {
            runValidationTasks("J", value);
          }
          setJ(value);
        }}
        onBlur={() => runValidationTasks("J", J)}
        errorMessage={errors.J?.errorMessage}
        hasError={errors.J?.hasError}
        {...getOverrideProps(overrides, "J")}
      ></TextField>
      <TextField
        label="K"
        isRequired={false}
        isReadOnly={false}
        value={K}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K: value,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.K ?? value;
          }
          if (errors.K?.hasError) {
            runValidationTasks("K", value);
          }
          setK(value);
        }}
        onBlur={() => runValidationTasks("K", K)}
        errorMessage={errors.K?.errorMessage}
        hasError={errors.K?.hasError}
        {...getOverrideProps(overrides, "K")}
      ></TextField>
      <TextField
        label="L"
        isRequired={false}
        isReadOnly={false}
        value={L}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L: value,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.L ?? value;
          }
          if (errors.L?.hasError) {
            runValidationTasks("L", value);
          }
          setL(value);
        }}
        onBlur={() => runValidationTasks("L", L)}
        errorMessage={errors.L?.errorMessage}
        hasError={errors.L?.hasError}
        {...getOverrideProps(overrides, "L")}
      ></TextField>
      <TextField
        label="M"
        isRequired={false}
        isReadOnly={false}
        value={M}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M: value,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.M ?? value;
          }
          if (errors.M?.hasError) {
            runValidationTasks("M", value);
          }
          setM(value);
        }}
        onBlur={() => runValidationTasks("M", M)}
        errorMessage={errors.M?.errorMessage}
        hasError={errors.M?.hasError}
        {...getOverrideProps(overrides, "M")}
      ></TextField>
      <TextField
        label="N"
        isRequired={false}
        isReadOnly={false}
        value={N}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N: value,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.N ?? value;
          }
          if (errors.N?.hasError) {
            runValidationTasks("N", value);
          }
          setN(value);
        }}
        onBlur={() => runValidationTasks("N", N)}
        errorMessage={errors.N?.errorMessage}
        hasError={errors.N?.hasError}
        {...getOverrideProps(overrides, "N")}
      ></TextField>
      <TextField
        label="O"
        isRequired={false}
        isReadOnly={false}
        value={O}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O: value,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.O ?? value;
          }
          if (errors.O?.hasError) {
            runValidationTasks("O", value);
          }
          setO(value);
        }}
        onBlur={() => runValidationTasks("O", O)}
        errorMessage={errors.O?.errorMessage}
        hasError={errors.O?.hasError}
        {...getOverrideProps(overrides, "O")}
      ></TextField>
      <TextField
        label="P"
        isRequired={false}
        isReadOnly={false}
        value={P}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P: value,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.P ?? value;
          }
          if (errors.P?.hasError) {
            runValidationTasks("P", value);
          }
          setP(value);
        }}
        onBlur={() => runValidationTasks("P", P)}
        errorMessage={errors.P?.errorMessage}
        hasError={errors.P?.hasError}
        {...getOverrideProps(overrides, "P")}
      ></TextField>
      <TextField
        label="Q"
        isRequired={false}
        isReadOnly={false}
        value={Q}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q: value,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.Q ?? value;
          }
          if (errors.Q?.hasError) {
            runValidationTasks("Q", value);
          }
          setQ(value);
        }}
        onBlur={() => runValidationTasks("Q", Q)}
        errorMessage={errors.Q?.errorMessage}
        hasError={errors.Q?.hasError}
        {...getOverrideProps(overrides, "Q")}
      ></TextField>
      <TextField
        label="R"
        isRequired={false}
        isReadOnly={false}
        value={R}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R: value,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.R ?? value;
          }
          if (errors.R?.hasError) {
            runValidationTasks("R", value);
          }
          setR(value);
        }}
        onBlur={() => runValidationTasks("R", R)}
        errorMessage={errors.R?.errorMessage}
        hasError={errors.R?.hasError}
        {...getOverrideProps(overrides, "R")}
      ></TextField>
      <TextField
        label="S"
        isRequired={false}
        isReadOnly={false}
        value={S}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S: value,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.S ?? value;
          }
          if (errors.S?.hasError) {
            runValidationTasks("S", value);
          }
          setS(value);
        }}
        onBlur={() => runValidationTasks("S", S)}
        errorMessage={errors.S?.errorMessage}
        hasError={errors.S?.hasError}
        {...getOverrideProps(overrides, "S")}
      ></TextField>
      <TextField
        label="T"
        isRequired={false}
        isReadOnly={false}
        value={T}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T: value,
              U,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.T ?? value;
          }
          if (errors.T?.hasError) {
            runValidationTasks("T", value);
          }
          setT(value);
        }}
        onBlur={() => runValidationTasks("T", T)}
        errorMessage={errors.T?.errorMessage}
        hasError={errors.T?.hasError}
        {...getOverrideProps(overrides, "T")}
      ></TextField>
      <TextField
        label="U"
        isRequired={false}
        isReadOnly={false}
        value={U}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U: value,
              V,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.U ?? value;
          }
          if (errors.U?.hasError) {
            runValidationTasks("U", value);
          }
          setU(value);
        }}
        onBlur={() => runValidationTasks("U", U)}
        errorMessage={errors.U?.errorMessage}
        hasError={errors.U?.hasError}
        {...getOverrideProps(overrides, "U")}
      ></TextField>
      <TextField
        label="V"
        isRequired={false}
        isReadOnly={false}
        value={V}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V: value,
              W,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.V ?? value;
          }
          if (errors.V?.hasError) {
            runValidationTasks("V", value);
          }
          setV(value);
        }}
        onBlur={() => runValidationTasks("V", V)}
        errorMessage={errors.V?.errorMessage}
        hasError={errors.V?.hasError}
        {...getOverrideProps(overrides, "V")}
      ></TextField>
      <TextField
        label="W"
        isRequired={false}
        isReadOnly={false}
        value={W}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W: value,
              X,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.W ?? value;
          }
          if (errors.W?.hasError) {
            runValidationTasks("W", value);
          }
          setW(value);
        }}
        onBlur={() => runValidationTasks("W", W)}
        errorMessage={errors.W?.errorMessage}
        hasError={errors.W?.hasError}
        {...getOverrideProps(overrides, "W")}
      ></TextField>
      <TextField
        label="X"
        isRequired={false}
        isReadOnly={false}
        value={X}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X: value,
              Y,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.X ?? value;
          }
          if (errors.X?.hasError) {
            runValidationTasks("X", value);
          }
          setX(value);
        }}
        onBlur={() => runValidationTasks("X", X)}
        errorMessage={errors.X?.errorMessage}
        hasError={errors.X?.hasError}
        {...getOverrideProps(overrides, "X")}
      ></TextField>
      <TextField
        label="Y"
        isRequired={false}
        isReadOnly={false}
        value={Y}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y: value,
              Z,
            };
            const result = onChange(modelFields);
            value = result?.Y ?? value;
          }
          if (errors.Y?.hasError) {
            runValidationTasks("Y", value);
          }
          setY(value);
        }}
        onBlur={() => runValidationTasks("Y", Y)}
        errorMessage={errors.Y?.errorMessage}
        hasError={errors.Y?.hasError}
        {...getOverrideProps(overrides, "Y")}
      ></TextField>
      <TextField
        label="Z"
        isRequired={false}
        isReadOnly={false}
        value={Z}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              A,
              B,
              C,
              D,
              E,
              F,
              G,
              H,
              I,
              J,
              K,
              L,
              M,
              N,
              O,
              P,
              Q,
              R,
              S,
              T,
              U,
              V,
              W,
              X,
              Y,
              Z: value,
            };
            const result = onChange(modelFields);
            value = result?.Z ?? value;
          }
          if (errors.Z?.hasError) {
            runValidationTasks("Z", value);
          }
          setZ(value);
        }}
        onBlur={() => runValidationTasks("Z", Z)}
        errorMessage={errors.Z?.errorMessage}
        hasError={errors.Z?.hasError}
        {...getOverrideProps(overrides, "Z")}
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
          isDisabled={!(idProp || criteriaModelProp)}
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
              !(idProp || criteriaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
