
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
    },
    datetimeLapse(actualDate){
      let date = new Date(actualDate)
      let dateTimestamp = ((date).getTime() / 1000)
      const currentTimestamp = (new Date()).getTime() / 1000
      const timeDifference = currentTimestamp - dateTimestamp
    
      const days = parseInt(timeDifference / 86400)
    
      let remainingTimeAfterDays = timeDifference % 86400
      let hours = parseInt(remainingTimeAfterDays / 3600)
    
      const remainingTimeAfterHours = remainingTimeAfterDays % 3600
      const minutes = parseInt(remainingTimeAfterHours / 60)
    
      const remainingTimeAfterMinutes = remainingTimeAfterHours % 60
      const seconds = parseInt(remainingTimeAfterMinutes)
    
      let timeLapseString = ''
      if(days){
        timeLapseString += (days + ' day' + (days > 1 ? 's ' : ' '))
      }
      if(hours){
        timeLapseString += (hours + ' hour' + (hours > 1 ? 's ' : ' '))
      }
      if(minutes){
        timeLapseString += (minutes + ' minute' + (minutes > 1 ? 's ' : ' '))
      }
      if(seconds){
        timeLapseString += (seconds + ' second' + (seconds > 1 ? 's ' : ' '))
      }
      return timeLapseString + 'ago'
    }
  }
}
