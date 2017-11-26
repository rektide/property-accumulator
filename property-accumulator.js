"use module"
"use strict"
import objectAssignAll from "object-assign-all"

export function propertyAccumulator( o, name, additions){
	var
	  isInstance= !( o instanceof Function),
	  proto= Object.getPrototypeOf( o),
	  parentProto= isInstance? Object.getPrototypeOf( proto): proto,
	  parentValue= parentProto[ name]
	return objectAssignAll( {}, parentValue, additions)
}
export default propertyAccumulator
