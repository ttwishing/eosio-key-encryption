import {BytesType, PrivateKeyType} from '@wharfkit/antelope'

import {
    EncryptedPrivateKey,
    EncryptedPrivateKeyType,
    ProgressCallback,
} from './encrypted-private-key'
import {SecurityLevelType} from './security-level'

export async function encrypt(
    key: PrivateKeyType,
    password: BytesType,
    progress?: ProgressCallback,
    security?: SecurityLevelType
) {
    return await EncryptedPrivateKey.encrypt(key, password, progress, security)
}

export async function decrypt(
    key: EncryptedPrivateKeyType,
    password: BytesType,
    progress?: ProgressCallback
) {
    return await EncryptedPrivateKey.from(key).decrypt(password, progress)
}

export * from './encrypted-private-key'
export * from './security-level'
