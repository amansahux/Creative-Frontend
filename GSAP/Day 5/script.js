const split = new SplitText(".app h1", {
    type:"chars",
    charsClass:"nameChars"
})
gsap.from(split.chars,{
    yPercent:100,
    opacity:1,
    delay:0.4,
    duration:0.6,
    ease:"expo.out",
    stagger:{
        each:0.05,
        from:"edges",
    }

})

Draggable.create(".boxx",{
    bounds:".app",
    // type:"y" // y | x | xy
    edgeResistance:0,
    inertia:true,
    dragResistance:0.2
    
})