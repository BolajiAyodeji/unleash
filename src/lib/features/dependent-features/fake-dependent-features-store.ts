import { IDependentFeaturesStore } from './dependent-features-store-type';

export class FakeDependentFeaturesStore implements IDependentFeaturesStore {
    async upsert(): Promise<void> {
        return Promise.resolve();
    }
}
