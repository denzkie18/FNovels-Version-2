$(document).ready(function(){
  //List of items
  const items = [
       {
         title:"Days With My Step-sister", image:"image_storage/Gimai-Seikatsu.jpg",link:"days with my stepsister light novel.html"
       },
       {
         title:"My Stepsister Is My Ex-girlfriend", image:"image_storage/my-stepsister-is-my-exgirlfriend.jpg",link:"my-stepsister-is-my-exgirlfriend-light-novel.html"
       },{
         title:"I Kiss My Girlfriend\'s Little Sister", image:"image_storage/Cover-1.jpg",link:"I kiss my girlfriends little sister light novel.html"
       },{
         title:"In The Land Of Leadale", image:"image_storage/In_the_Land_of_Leadale_light_novel_volume_1_cover.jpg",link:""
       },{
         title:"Return Of Death", image:"image_storage/Return-from-Death-Volume-1.jpg",link:"return-from-death-light-novel.html"
       },{
         title:"Our Dating Story: The Experienced You And The Inexperienced Me", image:"image_storage/images.jpeg",link:"our-dating-story-the-experienced-you-and-the-inexperiece-me.html"
       },{
         title:"My Girlfriend Cheated on Me With a Senior, so I'm Cheating on Her With His Girlfriend", image:"image_storage/My-Girlfriend-Cheated-on-Me-With-a-Senior-so-Im-Cheating-on-Her-With-His-Girlfriend-LN.jpg",link:"My-Girlfriend-Cheated-on-Me-With-a-Senior-so-Im-Cheating-on-Her-With-His-Girlfriend-LN.html"
       },{
         title:"How Could You Like Another Girl When You Already Have A Cute Fiancée Like Me?", image:"image_storage/How-Could-You-Like-Another-Girl-When-You-Already-Have-A-Cute-Fiance-Like-Me.jpg",link:"How-Could-You-Like-Another-Girl-When-You-Already-Have-A-Cute-Fiance-Like-Me.html"
       }
    ];
  
  let searchItems = $(".searchItems");
  let recommend = $(".recommend");
  
  //Loop items through arrays
  for (let x in items) {
    let div = document.createElement("div");
    let a = document.createElement("a");
    let a2 = document.createElement("a");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    
    a.setAttribute("href","");
    img.setAttribute("src","");
    img.setAttribute("alt","");
    a2.setAttribute("href","");
    
    a2.href = items[x].link;
    a.href = items[x].link;
    img.src = items[x].image;
    img.alt = items[x].image;
    p.innerHTML = items[x].title;
    p2.innerHTML = items[x].title;
    
    a.append(img);
    a.append(p);
    div.append(a);
    searchItems.prepend(div);
    
    a2.append(p2);
    recommend.prepend(a2);
    
  }
  
  //Search Filter
  $("#search").on("keyup", function(){
    var value = $(this).val().toLowerCase();
    
    $(".searchItems a").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    
    if($("#search").val() !== ""){
      $(".searchItems").css("display","block");
    }else{
      $(".searchItems").css("display","none");
    }
  });
  
});
