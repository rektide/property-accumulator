#!/usr/bin/env node
"use strict"

var
  tape= require( "tape"),
  esm= require( "@std/esm")( module),
  propertyAccumulator= esm( "..").propertyAccumulator

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
			sails: this.sails
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
console.log( dalliance.facts) // both Ship and Sailboax `attributes` logged
