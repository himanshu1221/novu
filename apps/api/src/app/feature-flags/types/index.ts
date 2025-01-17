import { EnvironmentId, FeatureFlagsKeysEnum, OrganizationId, UserId } from '@novu/shared';

export { EnvironmentId, FeatureFlagsKeysEnum, OrganizationId, UserId };

export interface IFeatureFlagContext {
  environmentId: EnvironmentId;
  organizationId: OrganizationId;
  userId: UserId;
}

export interface IFeatureFlagsService {
  getWithEnvironmentContext: <T>(
    key: FeatureFlagsKeysEnum,
    defaultValue: T,
    environmentId: EnvironmentId
  ) => Promise<T>;
  getWithOrganizationContext: <T>(
    key: FeatureFlagsKeysEnum,
    defaultValue: T,
    organizationId: OrganizationId
  ) => Promise<T>;
  getWithUserContext: <T>(key: FeatureFlagsKeysEnum, defaultValue: T, userId: UserId) => Promise<T>;
  gracefullyShutdown: () => Promise<void>;
  initialize: () => Promise<void>;
  isEnabled: boolean;
}
