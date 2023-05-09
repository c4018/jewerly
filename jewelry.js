const menuTag = document.querySelector("header img.menu")
const asideTag = document.querySelector("aside")
const containerTag= document.querySelector("div.container")
const closeTag = document.querySelector("aside img.close")
const bodyTag = document.querySelector("body")

const watch1Tag = document.querySelector(".watch1")
const watch2Tag = document.querySelector(".watch2")
const watch3Tag = document.querySelector(".watch3")

const detailImgTag = document.querySelector("div.detail-img")
const infoTag = document.querySelector(".info")

const detailImg1Tag = document.querySelector("div.detail-img1")
const info1Tag = document.querySelector(".info1")

const detailImg2Tag = document.querySelector("div.detail-img2")
const info2Tag = document.querySelector(".info2")


const mini1Tag = document.querySelector(".mini1")
const mini2Tag = document.querySelector(".mini2")
const mini3Tag = document.querySelector(".mini3")
const mini4Tag = document.querySelector(".mini4")
const mini5Tag = document.querySelector(".mini5")
const mini6Tag = document.querySelector(".mini6")
const mini7Tag = document.querySelector(".mini7")
const mini8Tag = document.querySelector(".mini8")
const mini9Tag = document.querySelector(".mini9")

const main1Tag = document.querySelector(".main1")
const main2Tag = document.querySelector(".main2")
const main3Tag = document.querySelector(".main3")
const main4Tag = document.querySelector(".main4")
const main5Tag = document.querySelector(".main5")
const main6Tag = document.querySelector(".main6")
const main7Tag = document.querySelector(".main7")
const main8Tag = document.querySelector(".main8")
const main9Tag = document.querySelector(".main9")





menuTag.addEventListener("click", function(){

    asideTag.classList.add("open");
    containerTag.classList.add("open");
    bodyTag.classList.add("open");
  
  })
closeTag.addEventListener("click", function(){

    asideTag.classList.remove("open");
    containerTag.classList.remove("open");
    bodyTag.classList.remove("open");
  
  })
watch1Tag.addEventListener("mouseover", function(){

    detailImgTag.classList.toggle("open");
    infoTag.classList.toggle("open");
  
  })
watch1Tag.addEventListener("mouseout", function(){

    detailImgTag.classList.remove("open");
    infoTag.classList.toggle("open");
  
  })

watch2Tag.addEventListener("mouseover", function(){

    detailImg1Tag.classList.toggle("open");
    info1Tag.classList.toggle("open");
  
  })
watch2Tag.addEventListener("mouseout", function(){

    detailImg1Tag.classList.remove("open");
    info1Tag.classList.toggle("open");
  
  })
watch3Tag.addEventListener("mouseover", function(){

    detailImg2Tag.classList.toggle("open");
    info2Tag.classList.toggle("open");
  
  })
watch3Tag.addEventListener("mouseout", function(){

    detailImg2Tag.classList.remove("open");
    info2Tag.classList.toggle("open");
  
  })
mini1Tag.addEventListener("mouseover", function(){

   main1Tag.style.opacity= "1";
   main2Tag.style.opacity= "0";
   main3Tag.style.opacity= "0";
  
  })

mini2Tag.addEventListener("mouseover", function(){

  main1Tag.style.opacity= "0";
  main2Tag.style.opacity= "1";
  main3Tag.style.opacity= "0";
   
   })
mini3Tag.addEventListener("mouseover", function(){

  main1Tag.style.opacity= "0";
  main2Tag.style.opacity= "0";
  main3Tag.style.opacity= "1";
  
  })
mini4Tag.addEventListener("mouseover", function(){

    main4Tag.style.opacity= "1";
    main5Tag.style.opacity= "0";
    main6Tag.style.opacity= "0";
    
    })

mini5Tag.addEventListener("mouseover", function(){

    main4Tag.style.opacity= "0";
    main5Tag.style.opacity= "1";
    main6Tag.style.opacity= "0";
    
    })
mini6Tag.addEventListener("mouseover", function(){

    main4Tag.style.opacity= "0";
    main5Tag.style.opacity= "0";
    main6Tag.style.opacity= "1";
    
    })
mini7Tag.addEventListener("mouseover", function(){

      main7Tag.style.opacity= "1";
      main8Tag.style.opacity= "0";
      main9Tag.style.opacity= "0";
      
      })
mini8Tag.addEventListener("mouseover", function(){

      main7Tag.style.opacity= "0";
      main8Tag.style.opacity= "1";
      main9Tag.style.opacity= "0";
      
      })

mini9Tag.addEventListener("mouseover", function(){

        main7Tag.style.opacity= "0";
        main8Tag.style.opacity= "0";
        main9Tag.style.opacity= "1";
        
        })
  









  
  



