/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBankInformation = /* GraphQL */ `query GetBankInformation($id: ID!) {
  getBankInformation(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBankInformationQueryVariables,
  APITypes.GetBankInformationQuery
>;
export const listBankInformations = /* GraphQL */ `query ListBankInformations(
  $filter: ModelBankInformationFilterInput
  $limit: Int
  $nextToken: String
) {
  listBankInformations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      BankName
      PhoneNo
      Email
      Logo
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBankInformationsQueryVariables,
  APITypes.ListBankInformationsQuery
>;
export const getCriteria = /* GraphQL */ `query GetCriteria($id: ID!) {
  getCriteria(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCriteriaQueryVariables,
  APITypes.GetCriteriaQuery
>;
export const listCriteria = /* GraphQL */ `query ListCriteria(
  $filter: ModelCriteriaFilterInput
  $limit: Int
  $nextToken: String
) {
  listCriteria(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCriteriaQueryVariables,
  APITypes.ListCriteriaQuery
>;
