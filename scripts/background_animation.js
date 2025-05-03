document.addEventListener("DOMContentLoaded", () => {
    const background_container = document.querySelector(".background_container")
    const countof_orbs = Math.floor(Math.random() * 10) + 10;
  
    const colors = getComputedStyle(document.documentElement)
        .getPropertyValue("--color_set")
        .split(",")
        .map((color) => color.trim())
  
    const style = document.createElement("style")
    document.head.appendChild(style)
  
    for (let iter = 0; iter < countof_orbs; iter++) {
        const orb = document.createElement("div")
        orb.classList.add("orb")
  
        const size = Math.random() * 20 + 20 // 20vw to 40vw
        orb.style.width = `${size}vw`
        orb.style.height = `${size}vw`
  
        // Randomize initial position
        orb.style.top = `${Math.random() * 100}vh`
        orb.style.left = `${Math.random() * 100}vw`
  
        // Randomize color
        orb.style.background = colors[Math.floor(Math.random() * colors.length)]
  
        // Generate unique keyframes for each orb
        const orb_duration = Math.random() * 10 + 10 // 10s to 20s
        const orb_delay = Math.random() * 5 // 0s to 5s
        const orb_keyframe_name = `moveOrb${iter}`
        const orb_translate_x = Math.random() * 200 - 100 // Random -100px to 100px
        const orb_translate_y = Math.random() * 200 - 100 // Random -100px to 100px
  
        style.sheet.insertRule(`
            @keyframes ${orb_keyframe_name} {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(${orb_translate_x}%, ${orb_translate_y}%) scale(0.8); }
            100% { transform: translate(0, 0) scale(1); }
            }`)
  
        orb.style.animation = `${orb_keyframe_name} ${orb_duration}s ease-in-out infinite`
        orb.style.animationorb_delay = `${orb_delay}s`
  
        background_container.appendChild(orb)
    }
})
