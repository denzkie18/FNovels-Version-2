$(document).ready(function(){
  //List of items
  const items = [
     {title:"Villainess: Reloaded! Blowing Away Bad Ends with Modern Weapons",image:"https://cdn.novelupdates.com/images/2019/05/The-Villainess-Will-Crush-Her-Destruction-End-Through-Modern-Firepower.jpg",link:"https://www.fnovelsv2.cf/Villainess-Reloaded-Blowing-Away-Bad-Ends-with-Modern-Weapons-light-novel"},
     {title:"My Seatmate Tries to Make Me Fall in Love with Her by Teasing Me Repeatedly, but Somehow She Was the One Who Fell",image:"https://cdn.novelupdates.com/images/2020/01/t_700x780.jpg",link:"https://www.fnovelsv2.cf/Turning-the-Tables-on-the-Seatmate-Killer-light-novel"},
     {title:"Im Gonna Live with You Not Because My Parents Left Me Their Debt But Because I Like You",image:"https://cdn.novelupdates.com/images/2021/04/Im-Gonna-Live-with-You-Not-Because-My-Parents-Left-Me-Their-Debt-But-Because-I-Like-You.jpg",link:"https://www.fnovelsv2.cf/im-gonna-live-with-you-not-because-my-parents-left-me-their-debt-but-because-i-like-you"},
     {title:"I Know That After School, The Saint is More Than Just Noble", image:"https://cdn.novelupdates.com/images/2021/05/I-Know-That-After-School-The-Saint-is-More-Than-Just-Noble.jpg",link:"i-know-that-after-school-the-saint-is-more-than-just-noble-light-novel.html"},
     {title:"The World’s Finest Assassin Gets Reincarnated in Another World as an Aristocrat",image:"https://cdn.novelupdates.com/images/2019/06/coverImage_3247459.jpg",link:"The-Worlds-Finest-Assassin-Gets-Reincarnated-in-Another-World-as-an-Aristocrat-light-novel.html"},
     {title:"Liar, Liar Light Novel",image:"https://cdn.novelupdates.com/images/2020/10/Liar-Liar.jpg",link:"liar-liar-light-novel.html"},
      {title:"The Girl I Saved on the Train Turned Out to Be My Childhood Friend", image:"https://cdn.novelupdates.com/images/2020/09/4815604202-417x596-1.jpg", link:"The-Girl-I-Saved-on-the-Train-Turned-Out-to-Be-My-Childhood-Friend.html"},
       {
         title:"Days With My Step-sister", image:/*"image_storage/Gimai-Seikatsu.jpg"*/"https://dl.dropbox.com/s/d7u38rnb77okm05/Gimai-Seikatsu.jpg?dl=0",link:"days with my stepsister light novel.html"
       },
       {
         title:"My Stepsister Is My Ex-girlfriend", image:/*"image_storage/my-stepsister-is-my-exgirlfriend.jpg"*/"https://dl.dropbox.com/s/w9gfri7gqr0k2ui/0000_b.jpg?dl=0",link:"my-stepsister-is-my-exgirlfriend-light-novel.html"
       },{
         title:"I Kiss My Girlfriend\'s Little Sister", image:/*"image_storage/Cover-1.jpg"*/"https://dl.dropbox.com/s/0bs3t0ec6irjbfd/i%20kiss%20my%20girlfriends%20little%20sister%20cover.jpg?dl=0",link:"I kiss my girlfriends little sister light novel.html"
       },{
         title:"In The Land Of Leadale", image:/*"image_storage/In_the_Land_of_Leadale_light_novel_volume_1_cover.jpg"*/"https://dl.dropbox.com/s/tg64h5mtbytoyzh/in_the_land_of_leadale_light_novel_volume_1_cover.jpg?dl=0",link:"in-the-land-of-leadale-light-novel.html"
       },{
         title:"Return Of Death", image:/*"image_storage/Return-from-Death-Volume-1.jpg"*/"https://dl.dropbox.com/s/0f7m1m3yfhynrns/return-from-death-volume-1.jpg?dl=0",link:"return-from-death-light-novel.html"
       },{
         title:"Our Dating Story: The Experienced You And The Inexperienced Me", image:/*"image_storage/0000_cover-2.jpeg"*/"https://dl.dropbox.com/s/fzjqtpotp9h1t06/our-dating-story-the-experienced-you-and-the-inexperienced-me.jpeg?dl=0",link:"our-dating-story-the-experienced-you-and-the-inexperiece-me.html"
       },{
         title:"My Girlfriend Cheated on Me With a Senior, so I'm Cheating on Her With His Girlfriend", image:/*"image_storage/My-Girlfriend-Cheated-on-Me-With-a-Senior-so-Im-Cheating-on-Her-With-His-Girlfriend-LN.jpg"*/"https://cdn.novelupdates.com/images/2022/01/My-Girlfriend-Cheated-on-Me-With-a-Senior-so-Im-Cheating-on-Her-With-His-Girlfriend-LN.jpg",link:"My-Girlfriend-Cheated-on-Me-With-a-Senior-so-Im-Cheating-on-Her-With-His-Girlfriend-LN.html"
       },{
         title:"How Could You Like Another Girl When You Already Have A Cute Fiancée Like Me?", image:/*"image_storage/How-Could-You-Like-Another-Girl-When-You-Already-Have-A-Cute-Fiance-Like-Me.jpg"*/"https://dl.dropbox.com/s/lip430whs6or84t/how-could-you-like-another-girl-when-you-already-have-a-cute-fiance-like-me.jpg?dl=0",link:"How-Could-You-Like-Another-Girl-When-You-Already-Have-A-Cute-Fiance-Like-Me.html"
       },{
         title:"Omiai Shitakunakattanode, Muri Nandai Na Jouken Wo Tsuketara Doukyuusei Ga Kita Ken Ni Tsuite", image:/*"image_storage/Omiai Shitakunakattanode, Muri Nandai na Jouken wo Tsuketara Doukyuusei ga Kita Ken ni Tsuite.jpg"*/"https://cdn.novelupdates.com/images/2020/11/9fo51lu1frqi9b8yimz4j47wageu_kjp_zb_1cz_gldm.jpg",link:"Omiai Shitakunakattanode Muri Nandai na Jouken wo Tsuketara Doukyuusei ga Kita Ken ni Tsuite.html"
       },{
         title:"My Plain-looking Fiance Is Secretly Sweet With Me", image:/*"image_storage/My-Plainlooking-Fiance-is-Secretly-Sweet-with-Me_1614145093.jpg"*/"https://cdn.novelupdates.com/images/2021/02/My-Plainlooking-Fiance-is-Secretly-Sweet-with-Me_1614145093.jpg",link:"My Plain-looking Fiance is Secretly Sweet with Me.html"
       },{
         title: "From Toxic Classmate To Girlfriend Goals Light Novel", image: /*"image_storage/from-toxic-classmate-to-girlfriend-goals.jpg"*/"https://dl.dropbox.com/s/vxpci6zu4tjt0a5/16444373003486878436723595178715.jpg?dl=0", link: "from-toxic-classmate-to-girlfriend-goals-light-novel.html"
       },{
         title: "The Angel Next Door Spoils Me Rotten Light Novel", image:/* "image_storage/Cover-3.jpg"*/"https://dl.dropbox.com/s/ianuto1cv9h1i7w/Cover-3.jpg?dl=0",link: "The-angel-next-door-spoil-me-rotten-light-novel.html"
       },{
         title: "My Instant Death Ability is So Overpowered, No One in This Other World Stands a Chance Against Me! Light Novel", image: "https://cdn.novelupdates.com/images/2021/09/Instant-Death.jpg", link: "instant-death-ability.html"
       },{
         title: "The Detective Is Already Dead Light Novel", image: /*"image_storage/akashic-records-of-the-bastard-magical-instructor.png"*/"https://dl.dropbox.com/s/820obhte8xo5rwj/the%20detective%20is%20already%20dead%20cover.jpg?dl=0", link: "the-detective-is-already-dead-light-novel.html"
       },{
         title: "Tanin wo Yosetsukenai Buaisouna Joshi ni Sekkyou shitara Mechakucha Natsukareta",image:"https://dl.dropbox.com/s/qb84fhtteq3xhcp/16446283798785780425450199224758.jpg?dl=0",link:"Tanin wo Yosetsukenai Buaisouna Joshi ni Sekkyou shitara Mechakucha Natsukareta light novel.html"
       },{
         title: "Assassins Pride Light Novel", image: "https://dl.dropbox.com/s/unxfotayiu1w5eo/Assassins%20Pride%20Volume%20Cover.jpg?dl=0", link: "assassins-pride-light-novel.html"
       },{
         title:"Love Advice From A Childhood Friend",image:"https://dl.dropbox.com/s/rd9jczdwzsw1ie0/16448722605941967747350090885705.jpg?dl=0",link:"love-advice-from-a-childhood-friend-light-novel.html"
       },{
         title:"You Are the Daughter of My First Love Light Novel", image:"https://dl.dropbox.com/s/wh87nrad03iebwt/16449161930398550328096158866316.jpg?dl=0", link:"you-are-the-daughter-of-my-first-love-light-novel.html"
       },{
         title:"Re:Monster Light Novel", image:"https://dl.dropbox.com/s/pctxumvjef7b2gc/16449565729146760920435502061508.jpg?dl=0", link:"re-monster-light-novel.html"
       },{
         title:"Eighty Six Light Novel", image:"https://dl.dropbox.com/s/doyito75rtj0fp7/86__000.jpg?dl=0",link:"eighty-six-light-novel.html"
       },{
         title:"She Professed Herself The Pupil Of The Wiseman", image:"https://dl.dropbox.com/s/b1ry1q5bxyrqnds/16450427437386458394434451305999.png?dl=0",link:"she-professed-herself-pupil-of-the-wiseman-light-novel.html"
       },{
         title:"I Was Kicked out of the Hero\'s Party Because I Wasn\'t a True Companion so I Decided to Have a Slow Life at the Frontier", image:"https://dl.dropbox.com/s/n7bp1h70ohwp5a8/16450515878378032742422983169489.jpg?dl=0", link:"I-Was-Kicked-out-of-the-Heros-Party-Because-I-Wasnt-a-True-Companion-so-I-Decided-to-Have-a-Slow-Life-at-the-Frontier-light-novel.html"
       },{
         title:"Forever and Always, My Childhood Friend is the Cutest Girl in the World", image:"https://cdn.novelupdates.com/images/2020/11/EljAp04UYAEUSNe.jpg", link:"Forever-and-Always-My-Childhood-Friend-is-the-Cutest-Girl-in-the-World-light-novel.html"
       },{
         title:"Saint? No! I’m Just a Passing Beast Tamer!", image:"https://i0.wp.com/jnovels.com/wp-content/uploads/2022/02/Saint-No-Im-Just-a-Passing-Beast-Tamer-vol-1.jpg?w=500&ssl=1", link:"Saint-No-Im-Just-a-Passing-Beast-Tamer-light-novel.html"
       },{
         title:"The Demon Sword Master of Excalibur Academy", image:"https://dl.dropbox.com/s/858yh17thz6q360/9781975308667.jpg?dl=0", link:"The-Demon-Sword-Master-of-Excalibur-Academy.html"
       },{
         title:"Classroom Of The Elite", image:"https://dl.dropbox.com/s/ssza23rpewnjurm/16451143816823516662773797891316.jpg?dl=0", link:"classroom-of-the-elite-light-novel.html"
       },{
         title:"Classroom Of The Elite 2nd Year", image:"https://dl.dropbox.com/s/1jcy10gknl4pvne/16451467671135017709505677528662.jpg?dl=0", link:"classroom-of-the-elite-year-2-light-novel.html"
       },{
         title:"The World Before Darkness (WN)", image:"https://dl.dropbox.com/s/3ovo7i70h7aglxf/1645256572680.jpg?dl=0", link:"the-world-before-darkness-web-novel.html"
       },{
         title:"Until My Girl Friend Who Said, \"Let\'s Be Friends Forever, Okay?\" Stops Being My Friend", image:"https://dl.dropbox.com/s/cr08fvkkzhds2bn/cover345.jpg?dl=0", link:"Until-My-Girl-Friend-Who-Said-Lets-Be-Friends-Forever-Okay-Stops-Being-My-Friend.html"
       },{
         title:"When Supernatural Battles Became Commonplace", image:"https://dl.dropbox.com/s/20e0s22f37pwkhn/16453538662163268411483001086106.jpg?dl=0", link:"When-Supernatural-Battles-Became-Commonplace-light-novel.html"
       },{
         title:"What Happens If You Saved A High School Girl Who Was About To Jump Off?", image:"https://dl.dropbox.com/s/rbc1eqszuhws8r7/16453647340452634215582532259849.jpg?dl=0", link:"What-Happens-If-You-Saved-A-High-School-Girl-Who-Was-About-To-Jump-Off-light-novel.html"
       },{
         title:"Konosuba: God\'s Blessing on This Wonderful World!", image:"https://cdn.novelupdates.com/images/2016/03/kudi3rV.jpg",link:"konosuba-gods-blessing-into-this-wonderful-world-light-novel.html"
       },{title:"Black Summoner", image:"https://cdn.novelupdates.com/images/2020/07/kuronoshoukanshi_v2b.jpg", link:"black-summoner-light-novel.html"},
       {
          title:"The GM Has Logged Into A Different World",image:"https://cdn.novelupdates.com/images/2016/03/isekai-GM.jpg",link:"The-GM-Has-Logged-Into-A-Different-World.html"
       },{title:"Transition to Another World, Landmines Included", image:"https://cdn.novelupdates.com/images/2019/01/bobbk9hhcj4hih4fdarm72q87eif_lqh_ck_hv_3sd0.jpg", link:"Transition-to-Another-World-Landmines-Included.html"}
    ];
    
  $(".totalList").text("Total LN: "+items.length);
  
  let searchItems = $(".searchItems");
  let recommend = $(".recommend");
  let allList = $(".allList");
  let arr;
  
  //Loop items through arrays
  for (let x in items) {
    let div = document.createElement("div");
    let a = document.createElement("a");
    let a2 = document.createElement("a");
    let a3 = document.createElement("a");
    let all_Li = document.createElement("li");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    
    a.setAttribute("href","");
    img.setAttribute("src","");
    img.setAttribute("alt","");
    a2.setAttribute("href","");
    a3.setAttribute("href","");
    
    a2.href = items[x].link;
    a.href = items[x].link;
    a3.href = items[x].link;
    a3.innerHTML = items[x].title;
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
    
    all_Li.append(a3);
    allList.append(all_Li);
    
  }
  
    $(".searchItems div").sort(asc_sort).appendTo(".searchItems");
  
    function asc_sort(a, b) {
      return ($(b).text()) < ($(a).text()) ? 1 : -1;
    }
    $(".recommend a").sort(asc_rec).appendTo(".recommend");
    
    function asc_rec(x, y) {
      return ($(y).text()) < ($(x).text()) ? 1 : -1;
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
