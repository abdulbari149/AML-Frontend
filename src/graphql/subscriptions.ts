/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBankInformation = /* GraphQL */ `subscription OnCreateBankInformation(
  $filter: ModelSubscriptionBankInformationFilterInput
) {
  onCreateBankInformation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBankInformationSubscriptionVariables,
  APITypes.OnCreateBankInformationSubscription
>;
export const onUpdateBankInformation = /* GraphQL */ `subscription OnUpdateBankInformation(
  $filter: ModelSubscriptionBankInformationFilterInput
) {
  onUpdateBankInformation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBankInformationSubscriptionVariables,
  APITypes.OnUpdateBankInformationSubscription
>;
export const onDeleteBankInformation = /* GraphQL */ `subscription OnDeleteBankInformation(
  $filter: ModelSubscriptionBankInformationFilterInput
) {
  onDeleteBankInformation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBankInformationSubscriptionVariables,
  APITypes.OnDeleteBankInformationSubscription
>;
export const onCreateCriteria = /* GraphQL */ `subscription OnCreateCriteria(
  $filter: ModelSubscriptionCriteriaFilterInput
  $owner: String
) {
  onCreateCriteria(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCriteriaSubscriptionVariables,
  APITypes.OnCreateCriteriaSubscription
>;
export const onUpdateCriteria = /* GraphQL */ `subscription OnUpdateCriteria(
  $filter: ModelSubscriptionCriteriaFilterInput
  $owner: String
) {
  onUpdateCriteria(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCriteriaSubscriptionVariables,
  APITypes.OnUpdateCriteriaSubscription
>;
export const onDeleteCriteria = /* GraphQL */ `subscription OnDeleteCriteria(
  $filter: ModelSubscriptionCriteriaFilterInput
  $owner: String
) {
  onDeleteCriteria(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCriteriaSubscriptionVariables,
  APITypes.OnDeleteCriteriaSubscription
>;
