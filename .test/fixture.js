import propertyAccumulator from ".."

export function propertiesFixtureABC( n){
	var _val= n
	return Object.defineProperties( {}, {
		a: {
			value: n,
			enumerable: true
		},
		b: {
			value: n+1
		},
		c: {
			get: function(){
				return _val
			},
			set: function( val){
				_val= val
			}
		}
	})
}

export function propertiesFixtureXYZ( n){
	return Object.defineProperties( {}, {
		x: {
			value: n,
			enumerable: true
		},
		y: {
			value: n
		},
		z: {
			value: n
		}
	})
}

export class Empty{
}

export class ExtendsEmpty extends Empty{
	static get defaults(){
		return propertiesFixtureXYZ( 32)
	}
	get foo(){
		return propertiesFixtureXYZ( 16)
	}
}

export class Base{
	static get defaults(){
		return propertiesFixtureABC( 2)
	}
	get foo(){
		return propertiesFixtureABC( 1)
	}
}


export class ExtendsBase extends Base{
	static get defaults(){
		return propertyAccumulator( this, "defaults", propertiesFixtureXYZ( 32))
	}
	get foo(){
		return propertyAccumulator( this, "foo", propertiesFixtureXYZ( 16))
	}
}

export class OverridesBase extends Base{
	static get defaults(){
		return propertyAccumulator( this, "defaults", propertiesFixtureABC( 1024))
	}
	get foo(){
		return propertyAccumulator( this, "foo", propertiesFixtureABC( 512))
	}
}
