import API from '@/core/api'
class Response extends API {
  apiName = 'response'
  get(param = null){
    return this.retrieve(param)
  }
  retrieveTree(statementId){
    this.apiRequest('/retrieve-tree', {id: statementId})
  }
}
const statement = new Response()
export default statement
