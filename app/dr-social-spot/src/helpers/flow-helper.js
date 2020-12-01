export default {
  create: (existingFlow = {}) => {
    let newFlow = JSON.parse(JSON.stringify(existingFlow))
    if(typeof newFlow['id'] === 'undefined'){
      newFlow['id'] = null
    }
    if(typeof newFlow['conclusion'] === 'undefined'){
      newFlow['conclusion'] = ''
    }
    if(typeof newFlow['flows'] === 'undefined'){
      newFlow['flows'] = []
    }
    if(typeof newFlow['has_image'] === 'undefined'){
      newFlow['has_image'] = false
    }
    if(typeof newFlow['answer_details'] === 'undefined'){
      newFlow['answer_details'] = ''
    }
    if(typeof newFlow['is_deleted'] === 'undefined'){
      newFlow['is_deleted'] = false
    }
    if(typeof newFlow['image'] !== 'undefined' && newFlow['image']){ // image contains file name store in server
      newFlow['has_image'] = true
    }else{
      newFlow['has_image'] = false
      newFlow['image'] = null

    }
    if(typeof newFlow['with_flows'] !== 'undefined'){
      newFlow['flows'] = JSON.parse(JSON.stringify(newFlow['with_flows']))
      delete newFlow['with_flows'];
    }
    return newFlow
  }
}