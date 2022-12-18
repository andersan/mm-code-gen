import { BgCodeGenClassConfig } from '../../../types.js'
import { GraphqlType } from '../../../enums.js'

const userInput: BgCodeGenClassConfig = {
  name: 'UserInput',
  graphqlType: GraphqlType.InputType,
  extends: 'BaseModelInput',
  path: '../mm-backend-core/src/services/accounts/types/classes/UserInput.ts',
  active: true,
  attributes: [
    { name: 'appFeatures', dataType: 'AppFeature[]', optional: true },
    { name: 'authType', dataType: 'AuthType', optional: true },
    { name: 'authToken', dataType: 'string' },
    { name: 'authTokenCreatedAt', dataType: 'date', optional: true },
    { name: 'oAuthTokenExpiresAt', dataType: 'date', optional: true },
    { name: 'avatarUrl', dataType: 'string' },
    { name: 'email', dataType: 'string' },
    { name: 'emailUpdatedAt', dataType: 'date', optional: true },
    { name: 'isEmailVerified', dataType: 'boolean', default: 'false' },
    { name: 'firstName', dataType: 'string' },
    { name: 'companyId', dataType: 'id' },
    { name: 'groupIds', dataType: 'id[]', default: '[]' },
    { name: 'lastName', dataType: 'string' },
    { name: 'oAuthProvider', dataType: 'string' },
    { name: 'oAuthRefreshToken', dataType: 'string' },
    { name: 'oAuthToken', dataType: 'string' },
    { name: 'isPhoneNumberVerified', dataType: 'boolean', default: 'false' },
    { name: 'phoneNumber', dataType: 'string' },
    { name: 'phoneNumberUpdatedAt', dataType: 'date', optional: true },
    { name: 'passwordHash', dataType: 'string' },
    { name: 'passwordUpdatedAt', dataType: 'date', optional: true },
    { name: 'newPassword', dataType: 'string' },
    { name: 'currentPassword', dataType: 'string' },
    { name: 'preferredLanguage', dataType: 'string' },
    { name: 'tfaBackupCodes', dataType: 'string' },
    { name: 'roles', dataType: 'UserRole[]', default: '[]' },
    { name: 'gender', dataType: 'string' },
    { name: 'source', dataType: 'string' },
    { name: 'spokenLanguages', dataType: 'string[]', default: '[]' },
    { name: 'timezone', dataType: 'string' },
    { name: 'trustLevel', dataType: 'integer', default: '1' },
    { name: 'preferences', dataType: 'UserPreferences', optional: true },
    { name: 'metadata', dataType: 'UserMetadata', optional: true },
    { name: 'username', dataType: 'string' },
    { name: 'signedInAt', dataType: 'date', optional: true },
    { name: 'signedOutAt', dataType: 'date', optional: true },
    { name: 'countryOfResidence', dataType: 'string' },
    { name: 'regionOfResidence', dataType: 'string' },
    { name: 'cityOfResidence', dataType: 'string' },
    { name: 'isEntrepreneur', dataType: 'boolean', default: 'false' },
    { name: 'isMentor', dataType: 'boolean', default: 'false' },
    { name: 'groups', dataType: 'GroupMember[]', default: '[]' },
  ]
}

export default userInput
