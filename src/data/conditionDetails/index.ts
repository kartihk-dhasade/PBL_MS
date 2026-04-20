import { ConditionDetail } from "../conditions";
import { headNeckConditions } from "./head-neck";
import { shouldersConditions } from "./shoulders";
import { spineCoreConditions } from "./spine-core";
import { lowerBodyConditions } from "./lower-body";

export const allConditionDetails: ConditionDetail[] = [
  ...headNeckConditions,
  ...shouldersConditions,
  ...spineCoreConditions,
  ...lowerBodyConditions,
];

export function getConditionBySlug(slug: string): ConditionDetail | undefined {
  return allConditionDetails.find((c) => c.slug === slug);
}

export function getAllConditionSlugs(): string[] {
  return allConditionDetails.map((c) => c.slug);
}
