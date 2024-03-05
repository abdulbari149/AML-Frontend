/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBankInformation = /* GraphQL */ `mutation CreateBankInformation(
  $input: CreateBankInformationInput!
  $condition: ModelBankInformationConditionInput
) {
  createBankInformation(input: $input, condition: $condition) {
    id
    BankName
    PhoneNo
    Email
    Logo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBankInformationMutationVariables,
  APITypes.CreateBankInformationMutation
>;
export const updateBankInformation = /* GraphQL */ `mutation UpdateBankInformation(
  $input: UpdateBankInformationInput!
  $condition: ModelBankInformationConditionInput
) {
  updateBankInformation(input: $input, condition: $condition) {
    id
    BankName
    PhoneNo
    Email
    Logo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBankInformationMutationVariables,
  APITypes.UpdateBankInformationMutation
>;
export const deleteBankInformation = /* GraphQL */ `mutation DeleteBankInformation(
  $input: DeleteBankInformationInput!
  $condition: ModelBankInformationConditionInput
) {
  deleteBankInformation(input: $input, condition: $condition) {
    id
    BankName
    PhoneNo
    Email
    Logo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBankInformationMutationVariables,
  APITypes.DeleteBankInformationMutation
>;
export const createCriteria = /* GraphQL */ `mutation CreateCriteria(
  $input: CreateCriteriaInput!
  $condition: ModelCriteriaConditionInput
) {
  createCriteria(input: $input, condition: $condition) {
    id
    A
    B
    C
    D
    E
    F
    G
    H
    I
    J
    K
    L
    M
    N
    O
    P
    Q
    R
    S
    T
    U
    V
    W
    X
    Y
    Z
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCriteriaMutationVariables,
  APITypes.CreateCriteriaMutation
>;
export const updateCriteria = /* GraphQL */ `mutation UpdateCriteria(
  $input: UpdateCriteriaInput!
  $condition: ModelCriteriaConditionInput
) {
  updateCriteria(input: $input, condition: $condition) {
    id
    A
    B
    C
    D
    E
    F
    G
    H
    I
    J
    K
    L
    M
    N
    O
    P
    Q
    R
    S
    T
    U
    V
    W
    X
    Y
    Z
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCriteriaMutationVariables,
  APITypes.UpdateCriteriaMutation
>;
export const deleteCriteria = /* GraphQL */ `mutation DeleteCriteria(
  $input: DeleteCriteriaInput!
  $condition: ModelCriteriaConditionInput
) {
  deleteCriteria(input: $input, condition: $condition) {
    id
    A
    B
    C
    D
    E
    F
    G
    H
    I
    J
    K
    L
    M
    N
    O
    P
    Q
    R
    S
    T
    U
    V
    W
    X
    Y
    Z
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCriteriaMutationVariables,
  APITypes.DeleteCriteriaMutation
>;
