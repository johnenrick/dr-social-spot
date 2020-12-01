/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDynamicFlows = /* GraphQL */ `
  query GetDynamicFlows($uuid: String!) {
    getDynamicFlows(uuid: $uuid) {
      body {
        display {
          colour
          fontStyle
          hyperLink
          size
          text
          toolTip
        }
      }
      falsePath {
        display {
          colour
          fontStyle
          hyperLink
          size
          text
          toolTip
        }
        uuid
      }
      header {
        display {
          colour
          fontStyle
          hyperLink
          size
          text
          toolTip
        }
      }
      image {
        display {
          colour
          fontStyle
          hyperLink
          size
          text
          toolTip
        }
        displayPosition
        url
      }
      isEnd
      isStart
      truePath {
        display {
          colour
          fontStyle
          hyperLink
          size
          text
          toolTip
        }
        uuid
      }
      user
      uuid
      createdAt
      updatedAt
    }
  }
`;
export const listDynamicFlows = /* GraphQL */ `
  query ListDynamicFlows(
    $filter: TableDynamicFlowsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDynamicFlows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        body {
          display {
            colour
            fontStyle
            hyperLink
            size
            text
            toolTip
          }
        }
        falsePath {
          display {
            colour
            fontStyle
            hyperLink
            size
            text
            toolTip
          }
          uuid
        }
        header {
          display {
            colour
            fontStyle
            hyperLink
            size
            text
            toolTip
          }
        }
        image {
          display {
            colour
            fontStyle
            hyperLink
            size
            text
            toolTip
          }
          displayPosition
          url
        }
        isEnd
        isStart
        truePath {
          display {
            colour
            fontStyle
            hyperLink
            size
            text
            toolTip
          }
          uuid
        }
        user
        uuid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
