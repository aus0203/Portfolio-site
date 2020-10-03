/*Nav Color change*/


const videoStripOptions = {
    threshold: 0.5,
  };
  
  const videoStripObserver = new IntersectionObserver(function (entries, videoStripObserver) {
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        line.forEach(x => {
          x.style.backgroundColor = "#0a0a0a"
        });
        navText.forEach(x => {
          x.style.color = "#0a0a0a"
        });
      } else{
        line.forEach(x => {
          x.style.backgroundColor = "#e0e0e0"
        });
        navText.forEach(x => {
          x.style.color = "#e0e0e0"
        });
      }
    })
  }, videoStripOptions);
  
  videoStripObserver.observe(videoStrip);
  
  /*Elevaution*/
  
  const elevaSecOptions = {
    threshold: 0.5,
  };
  
  const elevaSecObserver = new IntersectionObserver(function (entries, elevaSecObserver) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        line.forEach(x => {
          x.style.backgroundColor = "#0a0a0a"
        });
        navText.forEach(x => {
          x.style.color = "#0a0a0a"
        });
      } else {
        line.forEach(x => {
          x.style.backgroundColor = "#e0e0e0"
        });
        navText.forEach(x => {
          x.style.color = "#e0e0e0"
        });
      }
    })
  }, elevaSecOptions);
  
  elevaSecObserver.observe(elevaSec);