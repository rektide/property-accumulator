# Property Accumulator

> Build properties in your extended class that graft the parent's implementation on

For example, if you have a ship and extension of ship, sailboat, and you wanted to include your parent's "attributes" properties, you could do:

```
import propertyAccumulator from "property-accumulator"
class Ship{
	get facts(){
		return {
			draft: this.draft,
			lengthOverall: this.lengthOverall,
			displacement: this.displacement
		}
	}
	constructor( attrs){
		Object.assign( this, attrs)
	}
}
class Sailboat extends Ship{
	get facts(){
		return propertyAccumulator( this, "facts", {
			mastHeight: this.mastHeight,
			sals: this.sails
		})
	}
}

var dalliance= new Sailboat({
	name: "Dalliance",
	draft: 8,
	lengthOverall: 37,
	displacement: 6000,
	mastHeight: 10,
	sails: 3
})
console.log( dalliance.facts) // both Ship and Sailboax `facts` logged
```
