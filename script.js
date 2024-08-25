gsap.to(".nav",{
    backgroundColor: "#000",
    duration : 1,
    height : "110px",
    scrollTrigger:{
        trigger : ".nav",
        scroller : "body",
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger : ".main",
        scroller : "body",
        start : "top -30%",
        end : "top -80%",
        scrub: 2
    }
})

gsap.from(".about-us", {
    y : 50,
    opacity : 0,
    duration : 1,
    scrollTrigger: {
        trigger : ".about-us",
        scroller : "body",
        start : "top 70%",
        end : "top 65%",
        scrub : 2
    }

})
gsap.from(".container", {
    scale :0.8,
    opacity : 0,
    stagger : 0.1,
    duration : 2,
    stagger:0.1,
    scrollTrigger: {
        trigger : ".container",
        scroller : "body",
        start : "top 70%",
        end : "top 65%",
        scrub : 1
    }

})
gsap.to(".page3", {
    x : 50,
    duration : 1,
    scrollTrigger: {
        trigger : ".page3",
        scroller : "body",
        start : "top 60%",
        end : "top 47%",
        scrub: 3
    }
})