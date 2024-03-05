/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CriteriaCreateFormInputValues = {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
    E?: string;
    F?: string;
    G?: string;
    H?: string;
    I?: string;
    J?: string;
    K?: string;
    L?: string;
    M?: string;
    N?: string;
    O?: string;
    P?: string;
    Q?: string;
    R?: string;
    S?: string;
    T?: string;
    U?: string;
    V?: string;
    W?: string;
    X?: string;
    Y?: string;
    Z?: string;
};
export declare type CriteriaCreateFormValidationValues = {
    A?: ValidationFunction<string>;
    B?: ValidationFunction<string>;
    C?: ValidationFunction<string>;
    D?: ValidationFunction<string>;
    E?: ValidationFunction<string>;
    F?: ValidationFunction<string>;
    G?: ValidationFunction<string>;
    H?: ValidationFunction<string>;
    I?: ValidationFunction<string>;
    J?: ValidationFunction<string>;
    K?: ValidationFunction<string>;
    L?: ValidationFunction<string>;
    M?: ValidationFunction<string>;
    N?: ValidationFunction<string>;
    O?: ValidationFunction<string>;
    P?: ValidationFunction<string>;
    Q?: ValidationFunction<string>;
    R?: ValidationFunction<string>;
    S?: ValidationFunction<string>;
    T?: ValidationFunction<string>;
    U?: ValidationFunction<string>;
    V?: ValidationFunction<string>;
    W?: ValidationFunction<string>;
    X?: ValidationFunction<string>;
    Y?: ValidationFunction<string>;
    Z?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CriteriaCreateFormOverridesProps = {
    CriteriaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    A?: PrimitiveOverrideProps<TextFieldProps>;
    B?: PrimitiveOverrideProps<TextFieldProps>;
    C?: PrimitiveOverrideProps<TextFieldProps>;
    D?: PrimitiveOverrideProps<TextFieldProps>;
    E?: PrimitiveOverrideProps<TextFieldProps>;
    F?: PrimitiveOverrideProps<TextFieldProps>;
    G?: PrimitiveOverrideProps<TextFieldProps>;
    H?: PrimitiveOverrideProps<TextFieldProps>;
    I?: PrimitiveOverrideProps<TextFieldProps>;
    J?: PrimitiveOverrideProps<TextFieldProps>;
    K?: PrimitiveOverrideProps<TextFieldProps>;
    L?: PrimitiveOverrideProps<TextFieldProps>;
    M?: PrimitiveOverrideProps<TextFieldProps>;
    N?: PrimitiveOverrideProps<TextFieldProps>;
    O?: PrimitiveOverrideProps<TextFieldProps>;
    P?: PrimitiveOverrideProps<TextFieldProps>;
    Q?: PrimitiveOverrideProps<TextFieldProps>;
    R?: PrimitiveOverrideProps<TextFieldProps>;
    S?: PrimitiveOverrideProps<TextFieldProps>;
    T?: PrimitiveOverrideProps<TextFieldProps>;
    U?: PrimitiveOverrideProps<TextFieldProps>;
    V?: PrimitiveOverrideProps<TextFieldProps>;
    W?: PrimitiveOverrideProps<TextFieldProps>;
    X?: PrimitiveOverrideProps<TextFieldProps>;
    Y?: PrimitiveOverrideProps<TextFieldProps>;
    Z?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CriteriaCreateFormProps = React.PropsWithChildren<{
    overrides?: CriteriaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CriteriaCreateFormInputValues) => CriteriaCreateFormInputValues;
    onSuccess?: (fields: CriteriaCreateFormInputValues) => void;
    onError?: (fields: CriteriaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CriteriaCreateFormInputValues) => CriteriaCreateFormInputValues;
    onValidate?: CriteriaCreateFormValidationValues;
} & React.CSSProperties>;
export default function CriteriaCreateForm(props: CriteriaCreateFormProps): React.ReactElement;
