/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDynamicFlows = /* GraphQL */ `
  subscription OnCreateDynamicFlows(
    $body: AWSJSON
    $falsePath: AWSJSON
    $header: AWSJSON
    $image: AWSJSON
    $uuid: String
  ) {
    onCreateDynamicFlows(
      body: $body
      falsePath: $falsePath
      header: $header
      image: $image
      uuid: $uuid
    ) {
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
export const onDeleteDynamicFlows = /* GraphQL */ `
  subscription OnDeleteDynamicFlows(
    $body: AWSJSON
    $falsePath: AWSJSON
    $header: AWSJSON
    $image: AWSJSON
    $uuid: String
  ) {
    onDeleteDynamicFlows(
      body: $body
      falsePath: $falsePath
      header: $header
      image: $image
      uuid: $uuid
    ) {
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
export const onUpdateDynamicFlows = /* GraphQL */ `
  subscription OnUpdateDynamicFlows(
    $body: AWSJSON
    $falsePath: AWSJSON
    $header: AWSJSON
    $image: AWSJSON
    $uuid: String
  ) {
    onUpdateDynamicFlows(
      body: $body
      falsePath: $falsePath
      header: $header
      image: $image
      uuid: $uuid
    ) {
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
