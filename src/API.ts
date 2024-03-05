/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBankInformationInput = {
  id?: string | null,
  BankName: string,
  PhoneNo: string,
  Email: string,
  Logo: string,
};

export type ModelBankInformationConditionInput = {
  BankName?: ModelStringInput | null,
  PhoneNo?: ModelStringInput | null,
  Email?: ModelStringInput | null,
  Logo?: ModelStringInput | null,
  and?: Array< ModelBankInformationConditionInput | null > | null,
  or?: Array< ModelBankInformationConditionInput | null > | null,
  not?: ModelBankInformationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type BankInformation = {
  __typename: "BankInformation",
  id: string,
  BankName: string,
  PhoneNo: string,
  Email: string,
  Logo: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBankInformationInput = {
  id: string,
  BankName?: string | null,
  PhoneNo?: string | null,
  Email?: string | null,
  Logo?: string | null,
};

export type DeleteBankInformationInput = {
  id: string,
};

export type CreateCriteriaInput = {
  id?: string | null,
  A?: string | null,
  B?: string | null,
  C?: string | null,
  D?: string | null,
  E?: string | null,
  F?: string | null,
  G?: string | null,
  H?: string | null,
  I?: string | null,
  J?: string | null,
  K?: string | null,
  L?: string | null,
  M?: string | null,
  N?: string | null,
  O?: string | null,
  P?: string | null,
  Q?: string | null,
  R?: string | null,
  S?: string | null,
  T?: string | null,
  U?: string | null,
  V?: string | null,
  W?: string | null,
  X?: string | null,
  Y?: string | null,
  Z?: string | null,
};

export type ModelCriteriaConditionInput = {
  A?: ModelStringInput | null,
  B?: ModelStringInput | null,
  C?: ModelStringInput | null,
  D?: ModelStringInput | null,
  E?: ModelStringInput | null,
  F?: ModelStringInput | null,
  G?: ModelStringInput | null,
  H?: ModelStringInput | null,
  I?: ModelStringInput | null,
  J?: ModelStringInput | null,
  K?: ModelStringInput | null,
  L?: ModelStringInput | null,
  M?: ModelStringInput | null,
  N?: ModelStringInput | null,
  O?: ModelStringInput | null,
  P?: ModelStringInput | null,
  Q?: ModelStringInput | null,
  R?: ModelStringInput | null,
  S?: ModelStringInput | null,
  T?: ModelStringInput | null,
  U?: ModelStringInput | null,
  V?: ModelStringInput | null,
  W?: ModelStringInput | null,
  X?: ModelStringInput | null,
  Y?: ModelStringInput | null,
  Z?: ModelStringInput | null,
  and?: Array< ModelCriteriaConditionInput | null > | null,
  or?: Array< ModelCriteriaConditionInput | null > | null,
  not?: ModelCriteriaConditionInput | null,
};

export type Criteria = {
  __typename: "Criteria",
  id: string,
  A?: string | null,
  B?: string | null,
  C?: string | null,
  D?: string | null,
  E?: string | null,
  F?: string | null,
  G?: string | null,
  H?: string | null,
  I?: string | null,
  J?: string | null,
  K?: string | null,
  L?: string | null,
  M?: string | null,
  N?: string | null,
  O?: string | null,
  P?: string | null,
  Q?: string | null,
  R?: string | null,
  S?: string | null,
  T?: string | null,
  U?: string | null,
  V?: string | null,
  W?: string | null,
  X?: string | null,
  Y?: string | null,
  Z?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateCriteriaInput = {
  id: string,
  A?: string | null,
  B?: string | null,
  C?: string | null,
  D?: string | null,
  E?: string | null,
  F?: string | null,
  G?: string | null,
  H?: string | null,
  I?: string | null,
  J?: string | null,
  K?: string | null,
  L?: string | null,
  M?: string | null,
  N?: string | null,
  O?: string | null,
  P?: string | null,
  Q?: string | null,
  R?: string | null,
  S?: string | null,
  T?: string | null,
  U?: string | null,
  V?: string | null,
  W?: string | null,
  X?: string | null,
  Y?: string | null,
  Z?: string | null,
};

export type DeleteCriteriaInput = {
  id: string,
};

export type ModelBankInformationFilterInput = {
  id?: ModelIDInput | null,
  BankName?: ModelStringInput | null,
  PhoneNo?: ModelStringInput | null,
  Email?: ModelStringInput | null,
  Logo?: ModelStringInput | null,
  and?: Array< ModelBankInformationFilterInput | null > | null,
  or?: Array< ModelBankInformationFilterInput | null > | null,
  not?: ModelBankInformationFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBankInformationConnection = {
  __typename: "ModelBankInformationConnection",
  items:  Array<BankInformation | null >,
  nextToken?: string | null,
};

export type ModelCriteriaFilterInput = {
  id?: ModelIDInput | null,
  A?: ModelStringInput | null,
  B?: ModelStringInput | null,
  C?: ModelStringInput | null,
  D?: ModelStringInput | null,
  E?: ModelStringInput | null,
  F?: ModelStringInput | null,
  G?: ModelStringInput | null,
  H?: ModelStringInput | null,
  I?: ModelStringInput | null,
  J?: ModelStringInput | null,
  K?: ModelStringInput | null,
  L?: ModelStringInput | null,
  M?: ModelStringInput | null,
  N?: ModelStringInput | null,
  O?: ModelStringInput | null,
  P?: ModelStringInput | null,
  Q?: ModelStringInput | null,
  R?: ModelStringInput | null,
  S?: ModelStringInput | null,
  T?: ModelStringInput | null,
  U?: ModelStringInput | null,
  V?: ModelStringInput | null,
  W?: ModelStringInput | null,
  X?: ModelStringInput | null,
  Y?: ModelStringInput | null,
  Z?: ModelStringInput | null,
  and?: Array< ModelCriteriaFilterInput | null > | null,
  or?: Array< ModelCriteriaFilterInput | null > | null,
  not?: ModelCriteriaFilterInput | null,
};

export type ModelCriteriaConnection = {
  __typename: "ModelCriteriaConnection",
  items:  Array<Criteria | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionBankInformationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  BankName?: ModelSubscriptionStringInput | null,
  PhoneNo?: ModelSubscriptionStringInput | null,
  Email?: ModelSubscriptionStringInput | null,
  Logo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBankInformationFilterInput | null > | null,
  or?: Array< ModelSubscriptionBankInformationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCriteriaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  A?: ModelSubscriptionStringInput | null,
  B?: ModelSubscriptionStringInput | null,
  C?: ModelSubscriptionStringInput | null,
  D?: ModelSubscriptionStringInput | null,
  E?: ModelSubscriptionStringInput | null,
  F?: ModelSubscriptionStringInput | null,
  G?: ModelSubscriptionStringInput | null,
  H?: ModelSubscriptionStringInput | null,
  I?: ModelSubscriptionStringInput | null,
  J?: ModelSubscriptionStringInput | null,
  K?: ModelSubscriptionStringInput | null,
  L?: ModelSubscriptionStringInput | null,
  M?: ModelSubscriptionStringInput | null,
  N?: ModelSubscriptionStringInput | null,
  O?: ModelSubscriptionStringInput | null,
  P?: ModelSubscriptionStringInput | null,
  Q?: ModelSubscriptionStringInput | null,
  R?: ModelSubscriptionStringInput | null,
  S?: ModelSubscriptionStringInput | null,
  T?: ModelSubscriptionStringInput | null,
  U?: ModelSubscriptionStringInput | null,
  V?: ModelSubscriptionStringInput | null,
  W?: ModelSubscriptionStringInput | null,
  X?: ModelSubscriptionStringInput | null,
  Y?: ModelSubscriptionStringInput | null,
  Z?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCriteriaFilterInput | null > | null,
  or?: Array< ModelSubscriptionCriteriaFilterInput | null > | null,
};

export type CreateBankInformationMutationVariables = {
  input: CreateBankInformationInput,
  condition?: ModelBankInformationConditionInput | null,
};

export type CreateBankInformationMutation = {
  createBankInformation?:  {
    __typename: "BankInformation",
    id: string,
    BankName: string,
    PhoneNo: string,
    Email: string,
    Logo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBankInformationMutationVariables = {
  input: UpdateBankInformationInput,
  condition?: ModelBankInformationConditionInput | null,
};

export type UpdateBankInformationMutation = {
  updateBankInformation?:  {
    __typename: "BankInformation",
    id: string,
    BankName: string,
    PhoneNo: string,
    Email: string,
    Logo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBankInformationMutationVariables = {
  input: DeleteBankInformationInput,
  condition?: ModelBankInformationConditionInput | null,
};

export type DeleteBankInformationMutation = {
  deleteBankInformation?:  {
    __typename: "BankInformation",
    id: string,
    BankName: string,
    PhoneNo: string,
    Email: string,
    Logo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCriteriaMutationVariables = {
  input: CreateCriteriaInput,
  condition?: ModelCriteriaConditionInput | null,
};

export type CreateCriteriaMutation = {
  createCriteria?:  {
    __typename: "Criteria",
    id: string,
    A?: string | null,
    B?: string | null,
    C?: string | null,
    D?: string | null,
    E?: string | null,
    F?: string | null,
    G?: string | null,
    H?: string | null,
    I?: string | null,
    J?: string | null,
    K?: string | null,
    L?: string | null,
    M?: string | null,
    N?: string | null,
    O?: string | null,
    P?: string | null,
    Q?: string | null,
    R?: string | null,
    S?: string | null,
    T?: string | null,
    U?: string | null,
    V?: string | null,
    W?: string | null,
    X?: string | null,
    Y?: string | null,
    Z?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCriteriaMutationVariables = {
  input: UpdateCriteriaInput,
  condition?: ModelCriteriaConditionInput | null,
};

export type UpdateCriteriaMutation = {
  updateCriteria?:  {
    __typename: "Criteria",
    id: string,
    A?: string | null,
    B?: string | null,
    C?: string | null,
    D?: string | null,
    E?: string | null,
    F?: string | null,
    G?: string | null,
    H?: string | null,
    I?: string | null,
    J?: string | null,
    K?: string | null,
    L?: string | null,
    M?: string | null,
    N?: string | null,
    O?: string | null,
    P?: string | null,
    Q?: string | null,
    R?: string | null,
    S?: string | null,
    T?: string | null,
    U?: string | null,
    V?: string | null,
    W?: string | null,
    X?: string | null,
    Y?: string | null,
    Z?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCriteriaMutationVariables = {
  input: DeleteCriteriaInput,
  condition?: ModelCriteriaConditionInput | null,
};

export type DeleteCriteriaMutation = {
  deleteCriteria?:  {
    __typename: "Criteria",
    id: string,
    A?: string | null,
    B?: string | null,
    C?: string | null,
    D?: string | null,
    E?: string | null,
    F?: string | null,
    G?: string | null,
    H?: string | null,
    I?: string | null,
    J?: string | null,
    K?: string | null,
    L?: string | null,
    M?: string | null,
    N?: string | null,
    O?: string | null,
    P?: string | null,
    Q?: string | null,
    R?: string | null,
    S?: string | null,
    T?: string | null,
    U?: string | null,
    V?: string | null,
    W?: string | null,
    X?: string | null,
    Y?: string | null,
    Z?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetBankInformationQueryVariables = {
  id: string,
};

export type GetBankInformationQuery = {
  getBankInformation?:  {
    __typename: "BankInformation",
    id: string,
    BankName: string,
    PhoneNo: string,
    Email: string,
    Logo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBankInformationsQueryVariables = {
  filter?: ModelBankInformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBankInformationsQuery = {
  listBankInformations?:  {
    __typename: "ModelBankInformationConnection",
    items:  Array< {
      __typename: "BankInformation",
      id: string,
      BankName: string,
      PhoneNo: string,
      Email: string,
      Logo: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCriteriaQueryVariables = {
  id: string,
};

export type GetCriteriaQuery = {
  getCriteria?:  {
    __typename: "Criteria",
    id: string,
    A?: string | null,
    B?: string | null,
    C?: string | null,
    D?: string | null,
    E?: string | null,
    F?: string | null,
    G?: string | null,
    H?: string | null,
    I?: string | null,
    J?: string | null,
    K?: string | null,
    L?: string | null,
    M?: string | null,
    N?: string | null,
    O?: string | null,
    P?: string | null,
    Q?: string | null,
    R?: string | null,
    S?: string | null,
    T?: string | null,
    U?: string | null,
    V?: string | null,
    W?: string | null,
    X?: string | null,
    Y?: string | null,
    Z?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCriteriaQueryVariables = {
  filter?: ModelCriteriaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCriteriaQuery = {
  listCriteria?:  {
    __typename: "ModelCriteriaConnection",
    items:  Array< {
      __typename: "Criteria",
      id: string,
      A?: string | null,
      B?: string | null,
      C?: string | null,
      D?: string | null,
      E?: string | null,
      F?: string | null,
      G?: string | null,
      H?: string | null,
      I?: string | null,
      J?: string | null,
      K?: string | null,
      L?: string | null,
      M?: string | null,
      N?: string | null,
      O?: string | null,
      P?: string | null,
      Q?: string | null,
      R?: string | null,
      S?: string | null,
      T?: string | null,
      U?: string | null,
      V?: string | null,
      W?: string | null,
      X?: string | null,
      Y?: string | null,
      Z?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBankInformationSubscriptionVariables = {
  filter?: ModelSubscriptionBankInformationFilterInput | null,
};

export type OnCreateBankInformationSubscription = {
  onCreateBankInformation?:  {
    __typename: "BankInformation",
    id: string,
    BankName: string,
    PhoneNo: string,
    Email: string,
    Logo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBankInformationSubscriptionVariables = {
  filter?: ModelSubscriptionBankInformationFilterInput | null,
};

export type OnUpdateBankInformationSubscription = {
  onUpdateBankInformation?:  {
    __typename: "BankInformation",
    id: string,
    BankName: string,
    PhoneNo: string,
    Email: string,
    Logo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBankInformationSubscriptionVariables = {
  filter?: ModelSubscriptionBankInformationFilterInput | null,
};

export type OnDeleteBankInformationSubscription = {
  onDeleteBankInformation?:  {
    __typename: "BankInformation",
    id: string,
    BankName: string,
    PhoneNo: string,
    Email: string,
    Logo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCriteriaSubscriptionVariables = {
  filter?: ModelSubscriptionCriteriaFilterInput | null,
  owner?: string | null,
};

export type OnCreateCriteriaSubscription = {
  onCreateCriteria?:  {
    __typename: "Criteria",
    id: string,
    A?: string | null,
    B?: string | null,
    C?: string | null,
    D?: string | null,
    E?: string | null,
    F?: string | null,
    G?: string | null,
    H?: string | null,
    I?: string | null,
    J?: string | null,
    K?: string | null,
    L?: string | null,
    M?: string | null,
    N?: string | null,
    O?: string | null,
    P?: string | null,
    Q?: string | null,
    R?: string | null,
    S?: string | null,
    T?: string | null,
    U?: string | null,
    V?: string | null,
    W?: string | null,
    X?: string | null,
    Y?: string | null,
    Z?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCriteriaSubscriptionVariables = {
  filter?: ModelSubscriptionCriteriaFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCriteriaSubscription = {
  onUpdateCriteria?:  {
    __typename: "Criteria",
    id: string,
    A?: string | null,
    B?: string | null,
    C?: string | null,
    D?: string | null,
    E?: string | null,
    F?: string | null,
    G?: string | null,
    H?: string | null,
    I?: string | null,
    J?: string | null,
    K?: string | null,
    L?: string | null,
    M?: string | null,
    N?: string | null,
    O?: string | null,
    P?: string | null,
    Q?: string | null,
    R?: string | null,
    S?: string | null,
    T?: string | null,
    U?: string | null,
    V?: string | null,
    W?: string | null,
    X?: string | null,
    Y?: string | null,
    Z?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCriteriaSubscriptionVariables = {
  filter?: ModelSubscriptionCriteriaFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCriteriaSubscription = {
  onDeleteCriteria?:  {
    __typename: "Criteria",
    id: string,
    A?: string | null,
    B?: string | null,
    C?: string | null,
    D?: string | null,
    E?: string | null,
    F?: string | null,
    G?: string | null,
    H?: string | null,
    I?: string | null,
    J?: string | null,
    K?: string | null,
    L?: string | null,
    M?: string | null,
    N?: string | null,
    O?: string | null,
    P?: string | null,
    Q?: string | null,
    R?: string | null,
    S?: string | null,
    T?: string | null,
    U?: string | null,
    V?: string | null,
    W?: string | null,
    X?: string | null,
    Y?: string | null,
    Z?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
