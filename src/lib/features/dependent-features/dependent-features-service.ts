import { CreateDependentFeatureSchema } from '../../openapi';
import { IDependentFeaturesStore } from './dependent-features-store-type';

export type FeatureDependency =
    | {
          parent: string;
          child: string;
          enabled: true;
          variants?: string[];
      }
    | { parent: string; child: string; enabled: false };
export class DependentFeaturesService {
    private dependentFeaturesStore: IDependentFeaturesStore;

    constructor(dependentFeaturesStore: IDependentFeaturesStore) {
        this.dependentFeaturesStore = dependentFeaturesStore;
    }

    async upsertFeatureDependency(
        childFeature: string,
        dependentFeature: CreateDependentFeatureSchema,
    ): Promise<void> {
        const { enabled, feature, variants } = dependentFeature;
        const featureDependency: FeatureDependency =
            enabled === false
                ? {
                      parent: feature,
                      child: childFeature,
                      enabled,
                  }
                : {
                      parent: feature,
                      child: childFeature,
                      enabled: true,
                      variants,
                  };
        await this.dependentFeaturesStore.upsert(featureDependency);
    }
}
