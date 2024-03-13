type CapitalAlphabet = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

type Criteria = Record<CapitalAlphabet, {
  amount: number;
  description: string;
  isIncluded: boolean;
}>

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
  Criteria:Criteria | null;
};
