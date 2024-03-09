
declare type ReportSettings = {
    platform: string;
    userId: string;
    muleAge: {
      greaterThan: number;
      lessThan: number;
    };
    codeNotToUse: Array<{
      value: "yes" | "no";
      code: number;
    }>;
    subOfficeTellerCode: Array<{
      value: "yes" | "no";
      code: number;
      description?: "";
    }>;
    highRiskCategories?: Array<{
      code: number;
      value: "yes" | "no";
    }>;
    minorLessThan?: number;
  };
  