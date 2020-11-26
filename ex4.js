function HomeAppliance() {
    this.isPluggedIn = false
    this.isPowerOn = false
    this.power = 0
    this.brand = 'unknown'
    this.name = 'appliance'
    this.action = 'working'
    this.totalPower = 0
    this.totalCurrent = 0
    this.voltage = 220
}

const homeAppliance = new HomeAppliance()

HomeAppliance.prototype.addDevice = function (power) {
    this.totalPower += power
    this.totalCurrent = Math.round(this.totalPower/this.voltage)
}.bind(homeAppliance)

HomeAppliance.prototype.removeDevice = function (power) {
    this.totalPower -= power
    this.totalCurrent = Math.round(this.totalPower/this.voltage)
}.bind(homeAppliance)

HomeAppliance.prototype.getTotalPower = function () {
    console.log('Total power - ', this.totalPower, 'W')
    console.log('Total current - ', this.totalCurrent, 'A')
}.bind(homeAppliance)

HomeAppliance.prototype.plugIn = function () {
    this.isPluggedIn = true
    console.log(this.name, 'is plugged in')
}

HomeAppliance.prototype.unplug = function () {
    this.isPluggedIn = false
    if(this.isPowerOn) {
        this.isPowerOn = false
        this.removeDevice(this.power)
        this.getTotalPower()
    }
    console.log(this.name, 'is unplugged of the circuit')
}

HomeAppliance.prototype.powerOn = function () {
    if (!this.isPluggedIn) return console.log(this.name, 'is unplugged. Plug the cord in a socket.')
    this.isPowerOn = true
    this.addDevice(this.power)
    this.getTotalPower()
    console.log(this.name, 'is', this.action, 'now')
}

HomeAppliance.prototype.powerOff = function () {
    if(this.isPowerOn) {
        this.isPowerOn = false
        this.removeDevice(this.power)
        this.getTotalPower(this.power)
        console.log(this.name, 'is powered off')
    }
}

HomeAppliance.prototype.getPower = function () {
    console.log('Power of the', this.name, 'is', this.power, 'W')
}

HomeAppliance.prototype.getBrand = function () {
    console.log('Brand of the', this.name, 'is',this.brand)
}

HomeAppliance.prototype.getAction = function () {
    console.log(this.name, 'is using for', this.action)
}

HomeAppliance.prototype.getName = function () {
    console.log('This is a', this.name)
}

function Kettle(brand, power, volume, material, color, isWarmControl) {
    this.name = 'kettle'
    this.brand = brand
    this.action = 'boiling water'
    this.volume = volume
    this.material = material
    this.power = power
    this.color = color
    this.isWarmControl = isWarmControl
    this.keepWarm = function () {
        if (!this.isPowerOn) return console.log('The kettle is not working. Check whether you turned it on')
        if (!this.isWarmControl) return console.log("This model can't keep water temperature")
        console.log('Keeping water 80 degrees for you')
    }
}

function Toaster(brand, power, material, color) {
    this.name = 'toaster'
    this.brand = brand
    this.action = 'making toasts'
    this.power = power
    this.material = material
    this.color = color
}

function Refrigerator(brand, power, material, color, isIceMaker = false,
                      shelves, drawers, isFreezer) {
    this.name = 'fridge'
    this.brand = brand
    this.action = 'keeping food cold'
    this.material = material
    this.power = power
    this.color = color
    this.isIceMaker = isIceMaker
    this.shelves = shelves
    this.drawers = drawers
    this.isFreezer = isFreezer
    this.makeIce = function () {
        if (!this.isPowerOn) return console.log('The fridge is not working. Check whether you turned it on')
        if (!this.isIceMaker) return console.log("Your fridge can't make ice. Try to put water into the freezer section for that")
        console.log('Making some ice for you...')
    }
}

// Kettle.prototype = Object.create(homeAppliance)
// Toaster.prototype = Object.create(homeAppliance)
// Refrigerator.prototype = Object.create(homeAppliance)

Kettle.prototype = new HomeAppliance()
Toaster.prototype = new HomeAppliance()
Refrigerator.prototype = new HomeAppliance()

const fridge = new Refrigerator('Samsung', 250, 'Steel',
    'Fingerprint Resistant Black Stainless', true, 3, 1, true)

const kettle = new Kettle('Bosch', 1200, 1.7, 'glass', 'black', false)

const toaster = new Toaster('Philips', 900, 'plastic', 'white')

kettle.getName()
kettle.getBrand()
kettle.getAction()
kettle.getPower()

kettle.plugIn()
kettle.powerOn()
kettle.keepWarm()

toaster.plugIn()
toaster.powerOn()

fridge.plugIn()
fridge.powerOn()
fridge.makeIce()

kettle.powerOff()
toaster.powerOff()
fridge.powerOff()

kettle.unplug()
toaster.unplug()
fridge.unplug()

