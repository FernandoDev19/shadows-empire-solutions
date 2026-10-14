export type Plan = {
  name: string;
  price: string;
  prefix?: string;
  description: string;
  features: string[];
  recommended?: boolean;
};