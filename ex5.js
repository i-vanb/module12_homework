class HomeAppliance {
    constructor() {
        this.isPluggedIn = false
        this.isPowerOn = false
        this.name = 'appliance'
        this.action = 'working'

    }
    static voltage = 220
    static totalPower = 0
    static current = 0
    static addDevice(power) {
        this.totalPower += power
        this.current = Math.floor(this.totalPower/this.voltage)
    }
    static delDevice(power) {
        this.totalPower -= power
        this.current = Math.floor(this.totalPower/this.voltage)
    }
    static check() {
        console.log('Total power is', this.totalPower, 'W', '\nTolal current is', this.current, 'A')
    }

    plugIn() {
        this.isPluggedIn = true
        console.log(this.name, 'is plugged in')
    }

    unplug() {
        this.isPluggedIn = false
        if(this.isPowerOn) {
            this.isPowerOn = false
            HomeAppliance.delDevice(this.power)
        }

        console.log(this.name, 'is unplugged of the circuit')
    }

    powerOn() {
        if (!this.isPluggedIn) return console.log(this.name, 'is unplugged. Plug the cord in a socket.')
        this.isPowerOn = true
        HomeAppliance.addDevice(this.power)
        console.log(this.name, 'is', this.action, 'now')
    }


    powerOff() {
        if(this.isPowerOn) {
            this.isPowerOn = false
            HomeAppliance.delDevice(this.power)
            console.log(this.name, 'is powered off')
        }
    }

}

class Kettle extends HomeAppliance{
    constructor(brand, power, volume, material, color, isWarmControl) {
        super()
        this.name = 'kettle'
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
}


class Toaster extends HomeAppliance{
    constructor(brand, power, material, color) {
        super()
        this.name = 'toaster'
        this.action = 'making toasts'
        this.power = power
        this.material = material
        this.color = color
    }
}

class Refrigerator extends HomeAppliance{
    constructor(brand, power, material, color, isIceMaker = false,
                shelves, drawers, isFreezer) {
        super()
        this.name = 'fridge'
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
}

const fridge = new Refrigerator('Samsung', 150, 'Steel',
    'Fingerprint Resistant Black Stainless', true, 3, 1, true)

const kettle = new Kettle('Bosch', 1200, 1.7, 'glass', 'black', false)

const toaster = new Toaster('Philips', 900, 'plastic', 'white')


kettle.plugIn()
kettle.powerOn()


kettle.keepWarm()
HomeAppliance.check()

toaster.plugIn()
toaster.powerOn()
HomeAppliance.check()

fridge.plugIn()
fridge.powerOn()
fridge.makeIce()
HomeAppliance.check()

kettle.powerOff()
toaster.powerOff()
fridge.powerOff()

kettle.unplug()
toaster.unplug()
fridge.unplug()

HomeAppliance.check()
