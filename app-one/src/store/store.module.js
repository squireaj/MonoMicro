/* eslint-disable import/prefer-default-export */

const buildExceptionTableData = (response) => {
  const headers = ['_PlCheckBox_', 'Table Name']
  if (response == null) {
    return { tableHeaders: headers, tableRows: [] }
  }
  const returnArr = response.map((item) => {
      return {
        Values: [{ show: true, value: false }, item.table_name],
        ValueType: 'String',
      }
  })
  return { tableHeaders: headers, tableRows: returnArr }
}
const getGridData = (response) => {
  const headers = ['_PlCheckBox_', 'Table Name']
  if (response == null) {
    return { tableHeaders: headers, tableRows: [] }
  }
  const returnArr = response.map((item) => {
      return {
        Values: [{ show: true, value: false }, item.table_name],
        ValueType: 'String',
      }
  })
  return { tableHeaders: headers, tableRows: returnArr }
}
const consumeAllRequests = (requests) => {
  const returnArray = [
    {
      id: 123347,
      status_id: 0,
      created_at: '2020-10-05T22:49:45Z',
      updated_at: '0001-01-01T00:00:00Z',
      deleted_at: {
         Time: '0001-01-01T00:00:00Z',
         Valid: false,
      },
      name: 'Pending Test',
      // eslint-disable-next-line
      json_data: '{\n\t\"source_id\": 1,\n\t\"target_name\": \"Pending Test\",\n\t\"exceptions:\": [\n\t\t\"oauth_access_token_scopes\",\n\t\t\"oauth_access_tokens\",\n\t\t\"oauth_auth_code_scopes\",\n\t\t\"oauth_auth_codes\",\n\t\t\"oauth_client_endpoints\",\n\t\t\"oauth_client_grants\",\n\t\t\"oauth_client_scopes\"\n\t],\n\t\"requestor\": \"User One\",\n\t\"expiration\": 168\n}',
      json: {
         source_id: 0,
         target_name: 'Pending Test',
         exceptions: [
            'oauth_access_token_scopes',
            'oauth_access_tokens',
            'oauth_auth_code_scopes',
            'oauth_auth_codes',
            'oauth_client_endpoints',
            'oauth_client_grants',
            'oauth_client_scopes',
         ],
         requestor: 'User One',
         expiration: 168,
      },
    },
    {
      id: 1654656,
      status_id: 1,
      created_at: '2020-10-05T22:49:45Z',
      updated_at: '0001-01-01T00:00:00Z',
      deleted_at: {
         Time: '0001-01-01T00:00:00Z',
         Valid: false,
      },
      name: 'Being Created Test',
      // eslint-disable-next-line
      json_data: '{\n\t\"source_id\": 1,\n\t\"target_name\": \"Being Created Test\",\n\t\"exceptions:\": [\n\t\t\"oauth_access_token_scopes\",\n\t\t\"oauth_access_tokens\",\n\t\t\"oauth_auth_code_scopes\",\n\t\t\"oauth_auth_codes\",\n\t\t\"oauth_client_endpoints\",\n\t\t\"oauth_client_grants\",\n\t\t\"oauth_client_scopes\"\n\t],\n\t\"requestor\": \"User One\",\n\t\"expiration\": 168\n}',
      json: {
         source_id: 1,
         target_name: 'Being Created Test',
         exceptions: [
            'oauth_access_token_scopes',
            'oauth_access_tokens',
            'oauth_auth_code_scopes',
            'oauth_auth_codes',
            'oauth_client_endpoints',
            'oauth_client_grants',
            'oauth_client_scopes',
         ],
         requestor: 'User One',
         expiration: 168,
      },
    },
    {
      id: 1523434,
      status_id: 2,
      created_at: '2020-10-05T22:49:45Z',
      updated_at: '0001-01-01T00:00:00Z',
      deleted_at: {
         Time: '0001-01-01T00:00:00Z',
         Valid: false,
      },
      name: 'Moving Test',
      // eslint-disable-next-line
      json_data: '{\n\t\"source_id\": 1,\n\t\"target_name\": \"Moving Test\",\n\t\"exceptions:\": [\n\t\t\"oauth_access_token_scopes\",\n\t\t\"oauth_access_tokens\",\n\t\t\"oauth_auth_code_scopes\",\n\t\t\"oauth_auth_codes\",\n\t\t\"oauth_client_endpoints\",\n\t\t\"oauth_client_grants\",\n\t\t\"oauth_client_scopes\"\n\t],\n\t\"requestor\": \"User One\",\n\t\"expiration\": 168\n}',
      json: {
         source_id: 2,
         target_name: 'Moving Test',
         exceptions: [
            'oauth_access_token_scopes',
            'oauth_access_tokens',
            'oauth_auth_code_scopes',
            'oauth_auth_codes',
            'oauth_client_endpoints',
            'oauth_client_grants',
            'oauth_client_scopes',
         ],
         requestor: 'User One',
         expiration: 168,
      },
    },
    {
      id: 4343414,
      status_id: 3,
      created_at: '2020-10-05T22:49:45Z',
      updated_at: '0001-01-01T00:00:00Z',
      deleted_at: {
         Time: '0001-01-01T00:00:00Z',
         Valid: false,
      },
      name: 'Transforming Test',
      // eslint-disable-next-line
      json_data: '{\n\t\"source_id\": 1,\n\t\"target_name\": \"Transforming Test\",\n\t\"exceptions:\": [\n\t\t\"oauth_access_token_scopes\",\n\t\t\"oauth_access_tokens\",\n\t\t\"oauth_auth_code_scopes\",\n\t\t\"oauth_auth_codes\",\n\t\t\"oauth_client_endpoints\",\n\t\t\"oauth_client_grants\",\n\t\t\"oauth_client_scopes\"\n\t],\n\t\"requestor\": \"User One\",\n\t\"expiration\": 168\n}',
      json: {
         source_id: 1,
         target_name: 'Transforming Test',
         exceptions: [
            'oauth_access_token_scopes',
            'oauth_access_tokens',
            'oauth_auth_code_scopes',
            'oauth_auth_codes',
            'oauth_client_endpoints',
            'oauth_client_grants',
            'oauth_client_scopes',
         ],
         requestor: 'User One',
         expiration: 168,
      },
    },
    {
      id: 15645348,
      status_id: 4,
      created_at: '2020-10-05T22:49:45Z',
      updated_at: '0001-01-01T00:00:00Z',
      deleted_at: {
         Time: '0001-01-01T00:00:00Z',
         Valid: false,
      },
      name: 'Finished Test',
      // eslint-disable-next-line
      json_data: '{\n\t\"source_id\": 1,\n\t\"target_name\": \"Finished Test\",\n\t\"exceptions:\": [\n\t\t\"oauth_access_token_scopes\",\n\t\t\"oauth_access_tokens\",\n\t\t\"oauth_auth_code_scopes\",\n\t\t\"oauth_auth_codes\",\n\t\t\"oauth_client_endpoints\",\n\t\t\"oauth_client_grants\",\n\t\t\"oauth_client_scopes\"\n\t],\n\t\"requestor\": \"User One\",\n\t\"expiration\": 168\n}',
      json: {
        source_id: 1,
        target_name: 'Finished Test',
        exceptions: [
          'oauth_access_token_scopes',
          'oauth_access_tokens',
            'oauth_auth_code_scopes',
            'oauth_auth_codes',
            'oauth_client_endpoints',
            'oauth_client_grants',
            'oauth_client_scopes',
          ],
          requestor: 'User One',
          expiration: 168,
        },
      },
      {
        id: 1765349,
        status_id: 6,
        created_at: '2020-10-05T22:49:45Z',
        updated_at: '0001-01-01T00:00:00Z',
        deleted_at: {
          Time: '0001-01-01T00:00:00Z',
          Valid: false,
        },
        name: 'Expired Test',
        // eslint-disable-next-line
        json_data: '{\n\t\"source_id\": 1,\n\t\"target_name\": \"Expired Test\",\n\t\"exceptions:\": [\n\t\t\"oauth_access_token_scopes\",\n\t\t\"oauth_access_tokens\",\n\t\t\"oauth_auth_code_scopes\",\n\t\t\"oauth_auth_codes\",\n\t\t\"oauth_client_endpoints\",\n\t\t\"oauth_client_grants\",\n\t\t\"oauth_client_scopes\"\n\t],\n\t\"requestor\": \"User One\",\n\t\"expiration\": 168\n}',
      json: {
         source_id: 1,
         target_name: 'Expired Test',
         exceptions: [
            'oauth_access_token_scopes',
            'oauth_access_tokens',
            'oauth_auth_code_scopes',
            'oauth_auth_codes',
            'oauth_client_endpoints',
            'oauth_client_grants',
            'oauth_client_scopes',
         ],
         requestor: 'User One',
         expiration: 168,
      },
    },
  ]

  // eslint-disable-next-line array-callback-return
  requests.map(request => {
    const jsonData = JSON.parse(request.json_data)
    // eslint-disable-next-line dot-notation
    request['name'] = jsonData.target_name
    // eslint-disable-next-line dot-notation
    request['json'] = jsonData
    returnArray.push(request)
  })
  return returnArray
}

export {
  buildExceptionTableData,
  consumeAllRequests,
  getGridData,
}
