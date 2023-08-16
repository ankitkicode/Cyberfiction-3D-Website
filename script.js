function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive();



const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./image/0001.png
     ./image/0002.png
     ./image/0003.png
     ./image/0004.png
     ./image/0005.png
     ./image/0006.png
     ./image/0007.png
     ./image/0008.png
     ./image/0009.png
     ./image/0010.png
     ./image/0011.png
     ./image/0012.png
     ./image/0013.png
     ./image/0014.png
     ./image/0015.png
     ./image/0016.png
     ./image/0017.png
     ./image/0018.png
     ./image/0019.png
     ./image/0020.png
     ./image/0021.png
     ./image/0021.png
     ./image/0023.png
     ./image/0024.png
     ./image/0025.png
     ./image/0026.png
     ./image/0027.png
     ./image/0028.png
     ./image/0029.png
     ./image/0030.png
     ./image/0031.png
     ./image/0032.png
     ./image/0033.png
     ./image/0034.png
     ./image/0035.png
     ./image/0036.png
     ./image/0037.png
     ./image/0038.png
     ./image/0039.png
     ./image/0040.png
     ./image/0041.png
     ./image/0042.png
     ./image/0043.png
     ./image/0044.png
     ./image/0045.png
     ./image/0046.png
     ./image/0047.png
     ./image/0048.png
     ./image/0049.png
     ./image/0050.png
     ./image/0051.png
     ./image/0052.png
     ./image/0053.png
     ./image/0054.png
     ./image/0055.png
     ./image/0056.png
     ./image/0057.png
     ./image/0058.png
     ./image/0059.png
     ./image/0060.png
     ./image/0061.png
     ./image/0062.png
     ./image/0063.png
     ./image/0064.png
     ./image/0065.png
     ./image/0066.png
     ./image/0067.png
     ./image/0068.png
     ./image/0069.png
     ./image/0070.png
     ./image/0071.png
     ./image/0072.png
     ./image/0073.png
     ./image/0074.png
     ./image/0075.png
     ./image/0076.png
     ./image/0077.png
     ./image/0078.png
     ./image/0079.png
     ./image/0080.png
     ./image/0081.png
     ./image/0082.png
     ./image/0083.png
     ./image/0084.png
     ./image/0085.png
     ./image/0086.png
     ./image/0087.png
     ./image/0088.png
     ./image/0089.png
     ./image/0090.png
     ./image/0091.png
     ./image/0092.png
     ./image/0093.png
     ./image/0094.png
     ./image/0095.png
     ./image/0096.png
     ./image/0097.png
     ./image/0098.png
     ./image/0099.png
     ./image/0101.png
     ./image/0100.png
     ./image/0102.png
     ./image/0103.png
     ./image/0104.png
     ./image/0105.png
     ./image/0106.png
     ./image/0107.png
     ./image/0108.png
     ./image/0109.png
     ./image/0110.png
     ./image/0111.png
     ./image/0112.png
     ./image/0113.png
     ./image/0114.png
     ./image/0115.png
     ./image/0116.png
     ./image/0117.png
     ./image/0118.png
     ./image/0119.png
     ./image/0120.png
     ./image/0121.png
     ./image/0122.png
     ./image/0123.png
     ./image/0124.png
     ./image/0125.png
     ./image/0126.png
     ./image/0127.png
     ./image/0128.png
     ./image/0129.png
     ./image/0130.png
     ./image/0131.png
     ./image/0132.png
     ./image/0133.png
     ./image/0134.png
     ./image/0135.png
     ./image/0136.png
     ./image/0137.png
     ./image/0138.png
     ./image/0139.png
     ./image/0140.png
     ./image/0141.png
     ./image/0142.png
     ./image/0143.png
     ./image/0144.png
     ./image/0145.png
     ./image/0146.png
     ./image/0147.png
     ./image/0148.png
     ./image/0149.png
     ./image/0150.png
     ./image/0151.png
     ./image/0152.png
     ./image/0153.png
     ./image/0154.png
     ./image/0155.png
     ./image/0156.png
     ./image/0157.png
     ./image/0158.png
     ./image/0159.png
     ./image/0160.png
     ./image/0161.png
     ./image/0162.png
     ./image/0163.png
     ./image/0164.png
     ./image/0165.png
     ./image/0166.png
     ./image/0167.png
     ./image/0168.png
     ./image/0169.png
     ./image/0170.png
     ./image/0171.png
     ./image/0172.png
     ./image/0173.png
     ./image/0174.png
     ./image/0175.png
     ./image/0176.png
     ./image/0177.png
     ./image/0178.png
     ./image/0179.png
     ./image/0180.png
     ./image/0181.png
     ./image/0182.png
     ./image/0183.png
     ./image/0184.png
     ./image/0185.png
     ./image/0186.png
     ./image/0187.png
     ./image/0188.png
     ./image/0189.png
     ./image/0190.png
     ./image/0191.png
     ./image/0192.png
     ./image/0193.png
     ./image/0194.png
     ./image/0195.png
     ./image/0196.png
     ./image/0197.png
     ./image/0198.png
     ./image/0199.png
     ./image/0200.png
     ./image/0201.png
     ./image/0202.png
     ./image/0203.png
     ./image/0204.png
     ./image/0205.png
     ./image/0206.png
     ./image/0207.png
     ./image/0208.png
     ./image/0209.png
     ./image/0210.png
     ./image/0211.png
     ./image/0212.png
     ./image/0213.png
     ./image/0214.png
     ./image/0215.png
     ./image/0216.png
     ./image/0217.png
     ./image/0218.png
     ./image/0219.png
     ./image/0220.png
     ./image/0221.png
     ./image/0222.png
     ./image/0223.png
     ./image/0224.png
     ./image/0225.png
     ./image/0226.png
     ./image/0227.png
     ./image/0228.png
     ./image/0229.png
     ./image/0230.png
     ./image/0231.png
     ./image/0232.png
     ./image/0233.png
     ./image/0234.png
     ./image/0235.png
     ./image/0236.png
     ./image/0237.png
     ./image/0238.png
     ./image/0239.png
     ./image/0240.png
     ./image/0241.png
     ./image/0242.png
     ./image/0243.png
     ./image/0244.png
     ./image/0245.png
     ./image/0246.png
     ./image/0247.png
     ./image/0248.png
     ./image/0249.png
     ./image/0250.png
     ./image/0251.png
     ./image/0252.png
     ./image/0253.png
     ./image/0254.png
     ./image/0255.png
     ./image/0256.png
     ./image/0257.png
     ./image/0258.png
     ./image/0259.png
     ./image/0260.png
     ./image/0261.png
     ./image/0262.png
     ./image/0263.png
     ./image/0264.png
     ./image/0265.png
     ./image/0266.png
     ./image/0267.png
     ./image/0268.png
     ./image/0269.png
     ./image/0270.png
     ./image/0271.png
     ./image/0272.png
     ./image/0273.png
     ./image/0274.png
     ./image/0275.png
     ./image/0276.png
     ./image/0277.png
     ./image/0278.png
     ./image/0279.png
     ./image/0280.png
     ./image/0281.png
     ./image/0282.png
     ./image/0283.png
     ./image/0284.png
     ./image/0285.png
     ./image/0286.png
     ./image/0287.png
     ./image/0288.png
     ./image/0289.png
     ./image/0290.png
     ./image/0291.png
     ./image/0292.png
     ./image/0293.png
     ./image/0294.png
     ./image/0295.png
     ./image/0296.png
     ./image/0297.png
     ./image/0298.png
     ./image/0299.png
     ./image/0300.png
     ./image/0301.png
     ./image/0302.png
     ./image/0303.png
     ./image/0304.png
     ./image/0305.png
     ./image/0306.png
     ./image/0307.png
     ./image/0308.png
     ./image/0309.png
     ./image/0310.png
     ./image/0311.png
     ./image/0312.png
     ./image/0313.png
     ./image/0314.png
     ./image/0315.png
     ./image/0316.png
     ./image/0317.png
     ./image/0318.png
     ./image/0319.png
     ./image/0320.png
     ./image/0321.png
     ./image/0322.png
     ./image/0323.png
     ./image/0324.png
     ./image/0325.png
     ./image/0326.png
     ./image/0327.png
     ./image/0328.png
     ./image/0329.png
     ./image/0330.png
     ./image/0331.png
     ./image/0332.png
     ./image/0333.png
     ./image/0334.png
     ./image/0335.png
     ./image/0336.png
     ./image/0337.png
     ./image/0338.png
     ./image/0339.png
     ./image/0340.png
     ./image/0341.png
     ./image/0342.png
     ./image/0343.png
     ./image/0344.png
     ./image/0345.png
     ./image/0346.png
     ./image/0347.png
     ./image/0348.png
     ./image/0349.png
     ./image/0350.png
     ./image/0351.png
     ./image/0352.png
     ./image/0353.png
     ./image/0354.png
     ./image/0355.png
     ./image/0356.png
     ./image/0357.png
     ./image/0358.png
     ./image/0359.png
     ./image/0360.png
     ./image/0361.png
     ./image/0362.png
     ./image/0363.png
     ./image/0364.png
     ./image/0365.png
     ./image/0366.png
     ./image/0367.png
     ./image/0368.png
     ./image/0369.png
     ./image/0370.png
     ./image/0371.png
     ./image/0372.png
     ./image/0373.png
     ./image/0374.png
     ./image/0375.png
     ./image/0376.png
     ./image/0377.png
     ./image/0378.png
     ./image/0379.png
     ./image/0380.png
     ./image/0381.png
     ./image/0382.png
     ./image/0383.png
     ./image/0384.png
     ./image/0385.png
     ./image/0386.png
     ./image/0387.png
     ./image/0388.png
     ./image/0389.png
     ./image/0390.png
     ./image/0391.png
     ./image/0392.png
     ./image/0393.png
     ./image/0394.png
     ./image/0395.png
     ./image/0396.png
     ./image/0397.png
     ./image/0398.png
     ./image/0399.png
     ./image/0400.png
     ./image/0401.png
     ./image/0402.png
     ./image/0403.png
     ./image/0404.png
     ./image/0405.png
     ./image/0406.png
     ./image/0407.png
     ./image/0408.png
     ./image/0409.png
     ./image/0410.png
     ./image/0411.png
     ./image/0412.png
     ./image/0413.png
     ./image/0414.png
     ./image/0415.png
     ./image/0416.png
     ./image/0417.png
     ./image/0418.png
     ./image/0419.png
     ./image/0420.png
     ./image/0421.png
     ./image/0422.png
     ./image/0423.png
     ./image/0424.png
     ./image/0425.png
     ./image/0426.png
     ./image/0427.png
     ./image/0428.png
     ./image/0429.png
     ./image/0430.png
     ./image/0431.png
     ./image/0432.png
     ./image/0433.png
     ./image/0434.png
     ./image/0435.png
     ./image/0436.png
     ./image/0437.png
     ./image/0438.png
     ./image/0439.png
     ./image/0440.png
     ./image/0441.png
     ./image/0442.png
     ./image/0443.png
     ./image/0444.png
     ./image/0445.png
     ./image/0446.png
     ./image/0447.png
     ./image/0448.png
     ./image/0449.png
     ./image/0450.png
     ./image/0451.png
     ./image/0452.png
     ./image/0453.png
     ./image/0454.png
     ./image/0455.png
     ./image/0456.png
     ./image/0457.png
     ./image/0458.png
     ./image/0459.png
     ./image/0460.png
     ./image/0461.png
     ./image/0462.png
     ./image/0463.png
     ./image/0464.png
     ./image/0465.png
     ./image/0466.png
     ./image/0467.png
     ./image/0468.png
     ./image/0469.png
 `
  return data.split("\n")[index];
}

const frameCount = 469;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `.page1>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `.main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: ".page1>canvas",
  pin: true,
  // markers:true,
  scroller: `.main`,
  start: `top top`,
  end: `600% top`,
});
















gsap.to(".page2",{
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        start:"top top",
        end:"bottom top",
        pin:true,

    }
});
gsap.to(".page3",{
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start:"top top",
        end:"bottom top",
        pin:true,

    }
});
gsap.to(".page4",{
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        start:"top top",
        end:"bottom top",
        pin:true,

    }
});
gsap.to(".page4-cover",{
    top:"0%",
    scrollTrigger:{
        trigger:".page4-cover",
        scroller:".main",
        start:"top 35%",
        end:"top -50%",
        scrub:true,
        // pin:true,

    }
});
