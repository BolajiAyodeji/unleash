/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { LegalValueSchema } from './legalValueSchema';

/**
 * A representation of a [context field](https://docs.getunleash.io/reference/unleash-context).
 */
export interface ContextFieldSchema {
    /** The name of the context field */
    name: string;
    /** The description of the context field. */
    description?: string | null;
    /** Does this context field support being used for [stickiness](https://docs.getunleash.io/reference/stickiness) calculations */
    stickiness?: boolean;
    /** Used when sorting a list of context fields. Is also used as a tiebreaker if a list of context fields is sorted alphabetically. */
    sortOrder?: number;
    /** When this context field was created */
    createdAt?: string | null;
    /** Number of projects where this context field is used in */
    usedInFeatures?: number | null;
    /** Number of projects where this context field is used in */
    usedInProjects?: number | null;
    /** Allowed values for this context field schema. Can be used to narrow down accepted input */
    legalValues?: LegalValueSchema[];
}
