
export default {
  methods: {
    findArrayIndex(value, array, key = null){
      for(let x in array){
        if(key && array[x][key] === value){
          return x
        }else if(array[x] === value){
          return x
        }
      }
      return -1
    },
    formatDate(date, format = null){
      const monthnNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const dateToFormat = new Date(date)
      if(date && dateToFormat.getFullYear() !== 1970){
        switch(format){
          case 'M d, Y': return (monthnNames[dateToFormat.getMonth()]) + ' ' + dateToFormat.getDate() + ', ' + dateToFormat.getFullYear()
          default:
            return dateToFormat.getMonth() + '/' + dateToFormat.getDate() + '/' + dateToFormat.getFullYear()
        }
      }else{
        return null
      }
    }
  }
}
