/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BankInformation } from "../API.ts";
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
export declare type BankInformationUpdateFormInputValues = {
    BankName?: string;
    PhoneNo?: string;
    Email?: string;
    Logo?: string;
};
export declare type BankInformationUpdateFormValidationValues = {
    BankName?: ValidationFunction<string>;
    PhoneNo?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Logo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BankInformationUpdateFormOverridesProps = {
    BankInformationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    BankName?: PrimitiveOverrideProps<TextFieldProps>;
    PhoneNo?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Logo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BankInformationUpdateFormProps = React.PropsWithChildren<{
    overrides?: BankInformationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bankInformation?: BankInformation;
    onSubmit?: (fields: BankInformationUpdateFormInputValues) => BankInformationUpdateFormInputValues;
    onSuccess?: (fields: BankInformationUpdateFormInputValues) => void;
    onError?: (fields: BankInformationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BankInformationUpdateFormInputValues) => BankInformationUpdateFormInputValues;
    onValidate?: BankInformationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BankInformationUpdateForm(props: BankInformationUpdateFormProps): React.ReactElement;
