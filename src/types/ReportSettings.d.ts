declare type ReportSettings = {
  platform: string;
  userId: string;
  muleAge: {
    greaterThan: number | null;
    lessThan: number | null;
  };
  codeNotToUse: Array<{
    value: "yes" | "no";
    code: number;
  }>;
  subOfficeTellerCode: Array<{
    value: "yes" | "no";
    code: number;
    description?: string;
  }>;
  highRiskCategories?: Array<{
    code: number;
    value: "yes" | "no";
  }>;
  minorLessThan?: number | null;
};
