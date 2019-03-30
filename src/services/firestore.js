import * as admin from 'firebase-admin'
import { Firestore } from '@google-cloud/firestore'
import * as functions from 'firebase-functions'

const firestore = new Firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

admin.initializeApp(functions.config().firebase)
const db = admin.firestore()
