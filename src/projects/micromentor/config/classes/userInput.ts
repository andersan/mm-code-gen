import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const userInput: TypeGraphqlClass = {
  name: 'UserInput',
  graphqlType: GraphqlType.InputType,
  extends: 'BaseModelInput',
  path: '/src/services/accounts/types/classes/UserInput.ts',
  active: true,
  attributes: [
    { name: 'firstName', dataType: 'string' },
    { name: 'lastName', dataType: 'string' },
    { name: 'username', dataType: 'string' },
    { name: 'phoneNumber', dataType: 'string' },
    { name: 'phoneNumberUpdatedAt', dataType: 'date', optional: true },
    { name: 'isPhoneNumberVerified', dataType: 'boolean', default: 'false' },
    { name: 'email', dataType: 'string' },
    { name: 'emailUpdatedAt', dataType: 'date', optional: true },
    { name: 'isEmailVerified', dataType: 'boolean', default: 'false' },
    { name: 'gender', dataType: 'string' },
    { name: 'companyId', dataType: 'id' },
    { name: 'groupIds', dataType: 'id[]', default: '[]' },
    { name: 'groups', dataType: 'GroupMemberInput[]', default: '[]' },
    { name: 'countryOfResidence', dataType: 'string' },
    { name: 'regionOfResidence', dataType: 'string' },
    { name: 'cityOfResidence', dataType: 'string' },
    { name: 'avatarUrl', dataType: 'string' },
    { name: 'preferredLanguage', dataType: 'string' },
    { name: 'spokenLanguages', dataType: 'string[]', default: '[]' },
    { name: 'authType', dataType: 'AuthType', optional: true },
    { name: 'currentPassword', dataType: 'string' },
    { name: 'newPassword', dataType: 'string' },
    { name: 'passwordHash', dataType: 'string' },
    { name: 'tfaBackupCodes', dataType: 'string' },
    { name: 'passwordUpdatedAt', dataType: 'date', optional: true },
    { name: 'authToken', dataType: 'string' },
    { name: 'authTokenCreatedAt', dataType: 'date', optional: true },
    { name: 'oAuthTokenExpiresAt', dataType: 'date', optional: true },
    { name: 'oAuthProvider', dataType: 'string' },
    { name: 'oAuthRefreshToken', dataType: 'string' },
    { name: 'oAuthToken', dataType: 'string' },
    { name: 'roles', dataType: 'UserRole[]', default: '[]' },
    { name: 'appFeatures', dataType: 'AppFeature[]', optional: true },
    { name: 'source', dataType: 'string' },
    { name: 'timezone', dataType: 'string' },
    { name: 'preferences', dataType: 'UserPreferencesInput', optional: true },
    { name: 'isEntrepreneur', dataType: 'boolean', default: 'false' },
    { name: 'isMentor', dataType: 'boolean', default: 'false' },
    { name: 'trustLevel', dataType: 'integer', default: '1' },
    { name: 'metadata', dataType: 'UserMetadataInput', optional: true },
    { name: 'signedInAt', dataType: 'date', optional: true },
    { name: 'signedOutAt', dataType: 'date', optional: true },
  ]
}

export default userInput