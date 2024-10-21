/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLanguage = /* GraphQL */ `
  query GetLanguage($id: Int!) {
    getLanguage(id: $id) {
      id
      name
      __typename
    }
  }
`;
export const listLanguages = /* GraphQL */ `
  query ListLanguages(
    $filter: TableLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        __typename
      }
      nextToken
      __typename
    }
  }
`;
