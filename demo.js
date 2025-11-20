document.addEventListener('DOMContentLoaded',function(){
  const showAd=document.getElementById('showAd');
  const modal=document.getElementById('adModal');
  const closeAd=document.getElementById('closeAd');
  const cta=document.getElementById('cta');
  const banner=document.getElementById('banner');
  const messages=['欢迎来到测试页面','体验我们的示例','点击“显示广告”查看模态'];
  let idx=0, bannerTimer=null;

  function startBanner(){
    bannerTimer=setInterval(()=>{
      idx=(idx+1)%messages.length;
      banner.textContent=messages[idx];
    },2500);
  }
  function stopBanner(){ if(bannerTimer){clearInterval(bannerTimer);bannerTimer=null;} }

  showAd.addEventListener('click',function(){ modal.classList.remove('hidden'); stopBanner(); });
  closeAd.addEventListener('click',function(){ modal.classList.add('hidden'); startBanner(); });
  cta.addEventListener('click',function(){ alert('谢谢支持！'); modal.classList.add('hidden'); startBanner(); });

  startBanner();
});
