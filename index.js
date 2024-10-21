// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { language, languageConnection } = initSchema(schema);

export {
  language,
  languageConnection
};