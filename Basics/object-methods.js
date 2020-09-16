let restaurant = {
    name : 'Mariland',
    guestCapacity : 75,
    guestCount : 0,
    checkAvailability : function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        
        return partySize <= seatsLeft
    },
    seatParty : function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty : function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}

console.log(`check seat availability: ${restaurant.checkAvailability(20)}`)
restaurant.seatParty(20)
restaurant.removeParty(15)
console.log(`check seat availability: ${restaurant.checkAvailability(20)}`)

