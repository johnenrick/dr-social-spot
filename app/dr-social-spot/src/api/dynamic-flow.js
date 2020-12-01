import API from '@/core/api'
class DynamicFlow extends API {
  apiName = 'dynamic-flow'
  get(param = null){
    return this.retrieve(param)
  }
  retrieveTree(statementId){
    this.apiRequest('/retrieve-tree', {id: statementId})
  }
}
const statement = new DynamicFlow()
export default statement
