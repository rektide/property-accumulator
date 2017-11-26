#!/usr/bin/env node
"use strict"

var
  tape= require( "tape"),
  esm= require( "@std/esm")( module),
  fixture= esm( "./fixture")

tape( "Accumulates new instance properties when parent has some", function( t){
	var o= new (fixture.OverridesBase)()
	t.equal( o.foo.a, 512, "instance property overriden")
	t.end()
})

tape( "Accumulates new static properties when parent has some", function( t){
	var o= fixture.OverridesBase
	t.equal( o.defaults.a, 1024, "static property overridden")
	t.end()
})

tape( "Creates instance properties when parent has no properties", function( t){
	var o= new (fixture.ExtendsBase)()
	t.equal( o.foo.a, 1, "existing instance property present")
	t.equal( o.foo.x, 16, "new instance property created")
	t.end()
})

tape( "Creates static properties when parent has no properties", function( t){
	var o= fixture.ExtendsBase
	t.equal( o.defaults.a, 2, "existing static property present")
	t.equal( o.defaults.x, 32, "new static property created")
	t.end()
})

tape( "Creates instance properties when there is no parent", function( t){
	var o= new (fixture.ExtendsEmpty)()
	t.equal( o.foo.x, 16, "new instance property created")
	t.end()
})

tape( "Creates static properties when there is no parent", function( t){
	var o= fixture.ExtendsEmpty
	t.equal( o.defaults.x, 32, "new static property created")
	t.end()
})
