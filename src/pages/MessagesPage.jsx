import messageData from '../components/components-data/data'
import Footer from "../components/footer/Footer"
import AllMessages from "../components/messages/AllMessages"
// import RemainFaithful from '../images/message/March30Message.png'
import toOnlyGod from '../images/message/To the only God.png'
import commitedExcellence from '../images/message/04.13.2025 - Commitment to Excellence - Bro. Ted Matira.png'
import reflection from '../images/message/Easter Reflection.png'
import excellentSpirit from '../images/message/April 27, 2025 Message.png'
import spiritOfExcellence from '../images/message/05.18.2025 - Spirit of Excellence Joseph - Bro. Marvin Risto.png'
import excellentStewardship from '../images/message/05.04.2025 - Excellence in Stewardship - Bro. Boni Somook.png'
import excellenceStewardship2 from '../images/message/06.22.2025 - Excellence in Stewardship - Bro. Boni Somook.png'
import excellenceGod from '../images/message/June 29, 2025 - Sunday Service.png'
import excellenceGodPt2 from '../images/message/July 06 2025.png'
import helpingOthers from '../images/message/July 13, 2025.png'
// import InexpressibleJoy from '../images/message/Inexpressible Joy.pdf.png'
// import GoTell from '../images/message/Go and Tell.pptx.png'
// import beOnGuardTwo from "../images/message/Apostasy and God’s deliverance of the godly.png"
// import beOnGuardThree from '../images/message/Nov 17, 2024 Message.png'
// import LiveGodsGlory from '../images/message/12.01.2024 - 2 Peter 3.png'
// import Appeal from '../images/message/01.12.2025 - The Appeals to the Believers (1 John 23-17) - Bro. Jun Tan.png'
// import newHope from '../images/message/Sept 08 Message.png'
// import father from '../images/message/1 Peter 55-11.png'
// import grateful from '../images/message/10-13-2024 - Not So Grateful.png'
// import Living from '../images/message/10-20-2024-Leading a Godly Life.pptx.png'
// import wakeUp from "../images/message/Pay Attention to God's Word.png"
// import beOnGuard from '../images/message/11-03-2024 - 2 Peter 119 - 23.png'
// import WhyLookForLiving from '../images/message/Why do you look for the living among the dead.png'
// import suffering from "../images/message/Suffering for God's Glory.png"
// import LoveYourNeighbor from '../images/message/Royal Law April 7 2024.png'
// import FaithAndDeed from '../images/message/04.14.24 - Faith & Deeds.png'
// import RestrainYourTongue from '../images/message/04-21 Restrain Your Tongue.png'
// import inHisTime from '../images/message/inhistime.png';
// import togetherness from '../images/message/07.14.2024 - Togetherness - Bro. Boni Somook.png'
// import faithful from '../images/message/08.04.2024 - Faithful to the End - Bro. Ted Matira.png'
// import alienated from '../images/message/08.10.2024 - Alienated to this World - Bro. Marvin Risto.png'
// import ExposingSin from '../images/message/Bro. Marvin March 24.png'
// import rightVsWrong from '../images/Right vs Wrong Debunking False Ideas.png'
// import basicTruth from '../images/02-04-2024 - Basic Truths of Christianity.png'
// import membership from '../images/02-25-2024 - Membership.png'
// import midstOfDifficulty from '../images/03-03-2024 - In The Midst of Difficulties - James 1.png'
// import manSinDeath from '../images/Man, Sin, and Death.png'
// import discipleship from '../images/Discipleship.png'
// import relationship from "../images/1-21-2024 - Let's Talk About Relationship.png"
// import liveAndShare from '../images/message/BRO. Bong Easter Sunday.png'
// import ValuesOfWisdom from '../images/message/The Values of Wisdom.png'
// import togetherTwo from '../images/message/07.28.2024 - Bro. Boni Somook.png'
// import ReasonWhy from '../images/message/March16Message.png'
// import LoveAndTruth from '../images/message/When Love Collides.png'
// import Credibility from '../images/message/Jan 05, 2024 - Sunday Message.png'
// import NewLifeChrist from '../images/message/Cream Purple Abstract Thesis Defense Presentation.png'
// import KnowingGod from '../images/message/Sunday Sermon.png'

const allMessage = [
      {
          messageTitle: "Excellence In Helping Others",
          videoUrl: "https://www.youtube.com/watch?v=vgW3qz6TBz0",
          imgUrl: helpingOthers,
          messageBy: 'Bro. Joshua and Sis. Jazzlee',
          datePosted: 'July 13, 2025',
          imageSlide: 'https://www.canva.com/design/DAGs09I8Ytk/xQeaQ1-dB2ZIAnd2JxQR1g/view?utm_content=DAGs09I8Ytk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h709295e6a3',
          description: `IN HELPING OTHERS, EVEN THOSE THAT MESS UP, FALL SHORT OR ARE HARD TO LOVE.`
      },
   {
          messageTitle: "Defining Excellence",
          videoUrl: "https://youtu.be/A4tEs1RJNuA",
          imgUrl: excellenceGodPt2,
          messageBy: 'Bro. Rodolfo Aguiao',
          datePosted: 'July 06, 2025',
          imageSlide: 'https://www.canva.com/design/DAGsOLsshy8/_kqeLSv_AyqEFiPMdfsh9g/view?utm_content=DAGsOLsshy8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4d27f8db7b',
          description: `Work willingly at whatever you do, as though you were working for the Lord rather than for people.`
      },
      {
          messageTitle: "Excellence to Reflect God’s Glory and Greatness",
          videoUrl: "https://www.youtube.com/watch?v=JOr91zOray8",
          imgUrl: excellenceGod,
          messageBy: 'Bro. Marvin Risto',
          datePosted: 'June 29, 2025',
          imageSlide: 'https://www.canva.com/design/DAGrsV0_YxY/6CFBExyPBLLAMtSnFBRI5A/view?utm_content=DAGrsV0_YxY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hee8c4fceaa',
          description: `For I have come down from heaven not to do my will but to do the will of him who sent me.`
      },
  {
          messageTitle: "Excellence in Stewardship",
          videoUrl: "https://www.youtube.com/watch?v=rM9WlUnNg3c",
          imgUrl: excellenceStewardship2,
          messageBy: 'Bro. Boni Somook',
          datePosted: 'June 22, 2025',
          imageSlide: 'https://www.canva.com/design/DAGrA7nGYRA/KogGgL8C7cKfCK8yINNa6Q/view?utm_content=DAGrA7nGYRA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3ee4ef5051',
          description: `We are stewards of One who is EXCELLENT in every way, every time, and in anything.`
      },
  {
      messageTitle: "Spirit of Excellence",
      videoUrl: "https://www.youtube.com/watch?v=MOWugjkAv3E",
      imgUrl: spiritOfExcellence,
      messageBy: 'Bro. Marvin Risto',
      datePosted: 'May 18, 2025',
      imageSlide: 'https://www.canva.com/design/DAGnuf8yhzU/grHZL5S69VpNPOMYPELUdA/view?utm_content=DAGnuf8yhzU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hae291f71b4',
      description: `“So then, it was not you who sent me here, but God. He made me father to Pharaoh, lord of his entire household and ruler of all Egypt.`
  },
  {
          messageTitle: "Excellence in Stewardship",
          videoUrl: "https://www.youtube.com/watch?v=QpAyjnUMBaA",
          imgUrl: excellentStewardship,
          messageBy: 'Bro. Boni Somook',
          datePosted: 'May 04, 2025',
          imageSlide: 'https://www.canva.com/design/DAGmfkSTgdY/16iChraUu63_fmkpaVZs8Q/view?utm_content=DAGmfkSTgdY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4624752cf8',
          description: `His master replied, Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things. Come and share your master’s happiness!`
      },
    {
          messageTitle: "How to have an Excellent Spirit?",
          videoUrl: "https://www.youtube.com/watch?v=BEL5N2YT2yE",
          imgUrl: excellentSpirit,
          messageBy: 'Bro. Harry Nietes',
          datePosted: 'April 27, 2025',
          imageSlide: 'https://www.canva.com/design/DAGlxKSEXHY/Q7o9DrydcB20L3YgIxK47g/view?utm_content=DAGlxKSEXHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h394c5ee045',
          description: `Then I said to them, “You see the trouble we are in: Jerusalem lies in ruins, and its gates have been burned with fire. Come, let us rebuild the wall of Jerusalem, and we will no longer be in disgrace.”`
      },
    {
          messageTitle: "Easter Reflection",
          videoUrl: "https://www.facebook.com/CCWetaskiwin/videos/3982864418526940",
          imgUrl: reflection,
          messageBy: 'Bro. Ted Matira',
          datePosted: 'April 20, 2025',
          imageSlide: 'https://www.canva.com/design/DAGlIrkqMFQ/Iv-DXejUeG25vSCbOaG0zQ/view?utm_content=DAGlIrkqMFQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h86d0f0cc7d',
          description: `But on the first day of the week, at early dawn, the women went to the tomb bringing the spices which they had prepared [to finish anointing the body].`
      },
    {
        messageTitle: "A Commitment to Excellence",
        videoUrl: "https://www.youtube.com/live/qJsCXIrEnvw",
        imgUrl: commitedExcellence,
        messageBy: 'Bro. Ted Matira',
        datePosted: 'April 13, 2025',
        imageSlide: 'https://www.canva.com/design/DAGkYcBrOfA/a1d81pWpTbJkCjBtBgUACQ/view?utm_content=DAGkYcBrOfA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1a026e1188',
        description: `Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.`
    },
      {
          messageTitle: "To the only God",
          videoUrl: "https://youtu.be/SCLtXwSF5nI",
          imgUrl: toOnlyGod,
          messageBy: 'Bro. Ted Matira',
          datePosted: 'April 06, 2025',
          imageSlide: 'https://www.canva.com/design/DAGjtL2IfYo/218RbOFdU5FiO53OoLlVDA/view?utm_content=DAGjtL2IfYo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8da36c95e1',
          description: `Now all glory to God, who is able to keep you from falling away and will bring you with great joy into his glorious presence without a single fault`
      }
      // ,
      // {
      //     messageTitle: "A Call To Remain Faithful",
      //     videoUrl: "https://www.youtube.com/watch?v=YbOvJ8zP3K0",
      //     imgUrl: RemainFaithful,
      //     messageBy: 'Bro. Bong Aguiao',
      //     datePosted: 'March 30, 2025',
      //     imageSlide: 'https://www.canva.com/design/DAGjJIk_Nfo/IXtayrbpi6fZy6rzQLaxQw/view?utm_content=DAGjJIk_Nfo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h73cf7d00fa',
      //     description: `But you, dear friends, must build each other up in your most holy faith, How do we do build each other up? By his Holy Word, by knowing more of Jesus Christ.`
      // }
      // ,
      // {
      //     messageTitle: "Here's The Reason Why",
      //     videoUrl: "https://youtube.com/live/xNxB-HF13pE",
      //     imgUrl: ReasonWhy,
      //     messageBy: 'Bro. Boni Somook',
      //     datePosted: 'March 16, 2025',
      //     imageSlide: 'https://www.canva.com/design/DAGh2L3mdHc/U0EWMR4ENA-Bvoe9bh9RoA/view?utm_content=DAGh2L3mdHc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbaee692903',
      //     description: `Dear friends, although I was very eager to write to you about the salvation we share, I felt compelled to write and urge you to CONTEND FOR THE FAITH that was once for all entrusted to God’s holy people.`
      // }
      // ,
      // {
      //     messageTitle: "When Love & Truth Collides",
      //     videoUrl: "https://www.youtube.com/watch?v=tgKzqRtP5e4&t=3232s",
      //     imgUrl: LoveAndTruth,
      //     messageBy: 'Bro. Ted Matira',
      //     datePosted: 'March 02, 2025',
      //     imageSlide: 'https://www.canva.com/design/DAGgddP_wIs/0Gv574jRCbz-hdHlWQgnpA/view?utm_content=DAGgddP_wIs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1a3232b4d4',
      //     description: `It has given me great joy to find some of your children walking in the truth, just as the Father commanded us.`
      // }
      // ,
      // {
      //     messageTitle: "Knowing God Through Love",
      //     videoUrl: "https://www.youtube.com/watch?v=z3M1kwVH_uY",
      //     imgUrl: KnowingGod,
      //     messageBy: 'Bro. Bong Aguiao',
      //     datePosted: 'Feb 09, 2025',
      //     imageSlide: 'https://www.canva.com/design/DAGee6ThwRc/nmP9eyC8rJKHk1Hz6Dlgeg/view?utm_content=DAGee6ThwRc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb50bcba3f4',
      //     description: ` Dear friends, let us continue to love one another, for love comes from God. Anyone who loves is a child of God and knows God. 8 But anyone who does not love does not know God, for God is love.`
      // }
      
      // ,
      // {
      //     messageTitle: "A New Life In Christ",
      //     videoUrl: "https://www.youtube.com/live/ZIYMyeEQciw",
      //     imgUrl: NewLifeChrist,
      //     messageBy: 'Bro. Harry Nietes',
      //     datePosted: 'Feb 02, 2025',
      //     imageSlide: 'https://www.canva.com/design/DAGdzfNlfMo/ceGiW_mGBW26X-L9xGOqZA/view?utm_content=DAGdzfNlfMo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h20d0128b46',
      //     description: `See how very much our Father loves us, for he calls us his children, and that is what we are! But the people who belong to this world don’t recognize that we are God’s children because they don’t know him.`
      // }
      // ,
      // {
      //     messageTitle: "The Credibility of the Eyewitnesses",
      //     videoUrl: "https://youtu.be/oPVRjttEfw4",
      //     imgUrl: Credibility,
      //     messageBy: 'Bro. Ted Matira',
      //     datePosted: 'Jan 12, 2025',
      //     imageSlide: 'https://www.canva.com/design/DAGbvun4cgc/LZpdts0Me6iIZV8M82UKBw/view?utm_content=DAGbvun4cgc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h65cdffa334',
      //     description: `That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked at and our hands have touched—this we proclaim concerning the Word of life. `
      // }
      // ,
      // {
      //     messageTitle: "The Appeals to the Believers",
      //     videoUrl: "https://youtu.be/Nj69hwtiqeE",
      //     imgUrl: Appeal,
      //     messageBy: 'Bro. Jun Tan',
      //     datePosted: 'Jan 12, 2025',
      //     imageSlide: 'https://www.canva.com/design/DAGcAZoVenE/20R4FIAu_2oDF4mOFVYpGw/view?utm_content=DAGcAZoVenE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h311254812f',
      //     description: `To assure the believer that they have eternal life in Jesus Christ who has come in the flesh and refute those who denied Jesus Christ as the Messiah`
      // }
    //   ,
    //   {
    //       messageTitle: "The Credibility of the Eyewitnesses",
    //       videoUrl: "https://www.youtube.com/watch?v=qy_Z-ClypUs",
    //       imgUrl: Credibility,
    //       messageBy: 'Bro. Bong Aguiao',
    //       datePosted: 'Jan 05, 2025',
    //       imageSlide: '',
    //       description: `Until we all reach unity in the faith and in the knowledge of the Son of God and become mature, attaining to the whole measure of the fullness of Christ.`
    //   }
    // ,
    //   {
    //       messageTitle: "Go and Tell",
    //       videoUrl: "https://www.youtube.com/watch?v=10jPeudvy2I",
    //       imgUrl: GoTell,
    //       messageBy: 'Bro. Boni Somook',
    //       datePosted: 'Dec 29, 2024',
    //       imageSlide: 'https://www.canva.com/design/DAGasHbaZ8c/fNqLDXmJDocEzsa6eOKNZQ/view?utm_content=DAGasHbaZ8c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1c52dca35e',
    //       description: `So that those who believe in the son shall have eternal life and be raised in the last day.`
    //   }
      // ,
      // {
      //     messageTitle: "Inexpressible Joy",
      //     videoUrl: "https://www.youtube.com/watch?v=0fxgQoIBdNI",
      //     imgUrl: InexpressibleJoy,
      //     messageBy: 'Bro. Jun Tan',
      //     datePosted: 'Dec 22, 2024',
      //     imageSlide: 'https://www.canva.com/design/DAGaCBym_Ao/xbKsqLheSnzS0-NFR94Psw/view?utm_content=DAGaCBym_Ao&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfe10f2e670',
      //     description: `Through divine revelation, incarnation and faith in Christ the Son of the living God, makes one have joy and unique joy in Him that is inexpressible.`
      // }
      // ,
      //   {
      //     messageTitle: "A Lived-Out Life For God's Glory",
      //     videoUrl: "https://www.youtube.com/watch?v=o_ZbKf-wjMA",
      //     imgUrl: LiveGodsGlory,
      //     messageBy: 'Bro. Ted Matira and Jun Tan',
      //     datePosted: 'Dec 01, 2024',
      //     imageSlide: 'https://www.canva.com/design/DAGYEYbnJmc/eFBpjaj-VcZwsuUCNYCPSA/view?utm_content=DAGYEYbnJmc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb5f3aee4ca',
      //     description: `Live a life with legacy a legacy for God’s glory`
      //   }
        // ,
        // {
        //   messageTitle: "Escaped The Defilements Of The World",
        //   videoUrl: "https://youtube.com/live/Xjtm1OPEFFU",
        //   imgUrl: beOnGuardThree,
        //   messageBy: 'Bro. Harry Nietes',
        //   datePosted: 'Nov 17, 2024',
        //   imageSlide: 'https://www.canva.com/design/DAGWwXM6uxw/90Vzm2YBPaAowqF8Otojfg/view?utm_content=DAGWwXM6uxw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h56a9c9c5be',
        //   description: "And when people escape from the wickedness of the world by knowing our Lord and Savior Jesus Christ and then get tangled up and enslaved by sin again, they are worse off than before."
        // }
        // ,
        // {
        //   messageTitle: "Apostasy and God’s deliverance of the godly",
        //   videoUrl: "https://www.youtube.com/live/IOy8-ruEfM0",
        //   imgUrl: beOnGuardTwo,
        //   messageBy: 'Bro. Amador Jr Tan',
        //   datePosted: 'Nov 10, 2024',
        //   imageSlide: 'https://www.canva.com/design/DAGWFyli4EE/M3NF-2EyH1AGZeKTRKcQTQ/view?utm_content=DAGWFyli4EE&utm_campaign=designshare&utm_medium=link&utm_source=editor',
        //   description: "Be on guard and take responsibility of your spiritual health, study the word and follow the Lord Jesus by helping people  know Him through the Scripture In order to believe in Him and be saved."
        // }
      //   ,
      //   {
      //     messageTitle: "Grow Unstoppably And Be On Guard",
      //     videoUrl: "https://www.youtube.com/watch?v=4dQP4zAu3yQ",
      //     imgUrl: beOnGuard,
      //     messageBy: 'Bro. Amador Jr Tan',
      //     datePosted: 'Nov 03, 2024',
      //     imageSlide: 'https://www.canva.com/design/DAGVcE8fhBA/-yMsdDaHHDm8Na5aOQfBuA/view?utm_content=DAGVcE8fhBA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      //     description: "Because of that experience, we have even greater confidence in the message proclaimed by the prophets. You must pay close attention to what they wrote, for their words are like a lamp shining in a dark place—until the Day dawns, and Christ the Morning Star shines in your hearts."
      // }
    //   ,
    //   {
    //     messageTitle: "Wake Up! Pay Attention to God’s Word.",
    //     videoUrl: "https://www.youtube.com/watch?v=qPdP2CeLDwE",
    //     imgUrl: wakeUp,
    //     messageBy: 'Bro. Rodolfo Aguiao',
    //     datePosted: 'Oct 27, 2024',
    //     imageSlide: 'https://www.canva.com/design/DAGUumpIEh4/ZJS8HxQmrSB2_H3i43cwpA/view?utm_content=DAGUumpIEh4&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //     description: "It is matter of life and death; by this Word you must be tried and judged. "
    // }
    // ,
    // {
    //     messageTitle: "Leading A Godly Life",
    //     videoUrl: "https://www.youtube.com/watch?v=MYaqLpfFDlg",
    //     imgUrl: Living,
    //     messageBy: 'Bro. Harry Nietes',
    //     datePosted: 'Oct 20, 2024',
    //     imageSlide: 'https://www.canva.com/design/DAGUIFAFVxw/_ff-UvaSKPraumhcqy_Dbw/view?utm_content=DAGUIFAFVxw&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //     description: "We need to acknowledge that we can't do it on our own. God can help in every aspect of our lives and need His wisdom to make the right decisions. We need His strength to face our challenges. We need to recognize our need for it."
    // }
    // ,
    // {
    //   messageTitle: "Not So Grateful",
    //   videoUrl: "https://www.youtube.com/watch?v=Ni8-PZLFDE4",
    //   imgUrl: grateful,
    //   messageBy: 'Bro. Ted Matira',
    //   datePosted: 'Oct 13, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAGTeCC7roA/BF-AZsSdobVIYux3aLY51g/view?utm_content=DAGTeCC7roA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: "In everything give thanks; for this is God's will for you in Christ Jesus."
    // }
    // ,
    // {
    //   messageTitle: "Sharer of God’s Eternal Glory",
    //   videoUrl: "https://www.youtube.com/watch?v=THr7wMOLFG0",
    //   imgUrl: father,
    //   messageBy: 'Bro. Bong Aguiao',
    //   datePosted: 'Oct 06, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAGSz5_jcNs/YIr3wtLdZwEdp4Ck3rLIpw/view?utm_content=DAGSz5_jcNs&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'So humble yourselves under the mighty power of God, and at the right time he will lift you up in honor.'
    // }
    // ,
    // {
    //   messageTitle: "New Hope to Real-World Believers",
    //   videoUrl: "https://www.youtube.com/watch?v=4Zx44Tk4DPs",
    //   imgUrl: newHope,
    //   messageBy: 'Bro. Harry Nietes',
    //   datePosted: 'Sept 08, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAGQL1u-eWg/GrU9gKdXcU3KkVOpwTPOvg/view?utm_content=DAGQL1u-eWg&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: '1 Peter 4:1a “Therefore, since Christ has suffered in the flesh, arm yourselves also with the same purpose. '
    // }
    // ,
    // {
    //   messageTitle: "Suffering for God's Glory ",
    //   videoUrl: "https://www.youtube.com/watch?v=gFz4PlZ4E3o",
    //   imgUrl: suffering,
    //   messageBy: 'Bro. Rodolfo Aguiao',
    //   datePosted: 'Sept 01, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAGPhypDufE/Uut3-3RCZN12sIpygpDwhg/view?utm_content=DAGPhypDufE&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: '1 Peter 3:17 Remember, it is better to suffer for doing good, if that is what God wants, than to suffer for doing wrong!'
    // }
    // ,
    // {
    //   messageTitle: 'Alienated to this World',
    //   videoUrl: "https://www.youtube.com/watch?v=4k3lhPcg4IY",
    //   imgUrl: alienated,
    //   messageBy: 'Bro. Marvin Risto',
    //   datePosted: 'Aug 11, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAGNedD8itM/JAOS4-l3k6NGkxo5FG3BdA/view?utm_content=DAGNedD8itM&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: '1 John 2: 15 Do not love the world or anything in the world. If anyone loves the world, love for the Father is not in them. '
    // }
  // ,
  // {
  //     messageTitle: 'Faithful To The End',
  //     videoUrl: "https://www.youtube.com/watch?v=0gAJ9aOM0vc",
  //     imgUrl: faithful,
  //     messageBy: 'Ptr. Ted Matira',
  //     datePosted: 'Aug 04, 2024',
  //     imageSlide: 'https://www.canva.com/design/DAGMtnEEXRE/T_9aFb4nSB1BPilqeGj8fQ/view?utm_content=DAGMtnEEXRE&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  //     description: 'Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy, 9 for you are receiving the end result of your faith, the salvation of your souls.'
  // }
  // ,
  // {
  //   messageTitle: 'Togetherness Pt.2',
  //   videoUrl: "https://www.youtube.com/watch?v=p7oyaDtWx10",
  //   imgUrl: togetherTwo,
  //   messageBy: 'Bro. Boni Somook',
  //   datePosted: 'July 28, 2024',
  //   imageSlide: 'https://www.canva.com/design/DAGMQKx-TY8/dh89DTX04y3kBVx9wPzL1w/view?utm_content=DAGMQKx-TY8&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  //   description: 'Now that you have purified yourselves by obeying the truth so that you have sincere love for each other, love one another deeply, from the heart.'
  // },
    // {
    //   messageTitle: 'Togetherness',
    //   videoUrl: "https://www.youtube.com/watch?v=PBrBWzaYgVg",
    //   imgUrl: togetherness,
    //   messageBy: 'Bro. Boni Somook',
    //   datePosted: 'July 14, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAGK8FCT9DM/_7DbXYHoc6tmvtRb6d0kfA/view?utm_content=DAGK8FCT9DM&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'Now that you have purified yourselves by obeying the truth so that you have sincere love for each other, love one another deeply, from the heart.'
    // }
  //   ,
  //   {
  //     messageTitle: 'In His Time',
  //     videoUrl: "https://www.youtube.com/watch?v=HN7pFGzeqdw",
  //     imgUrl: inHisTime,
  //     messageBy: 'Sis. Loverlee Matira',
  //     datePosted: 'May 26, 2024',
  //     imageSlide: 'https://www.canva.com/design/DAGGVwOH8WA/jElDUuSF5IEQIBcW7pH4Mw/view?utm_content=DAGGVwOH8WA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  //     description: 'Be patient, then, brothers and sisters, until the Lord’s coming. See how the farmer waits for the land to yield its valuable crop, patiently waiting for the autumn and spring rains.'
  //   },

  //   {
  //     messageTitle: 'Restrain Your Tongue',
  //     videoUrl: "https://www.youtube.com/watch?v=xYaWlaXb1S4",
  //     imgUrl: RestrainYourTongue,
  //     messageBy: 'Sis. Mabel Somook',
  //     datePosted: 'April 20, 2024',
  //     imageSlide: 'https://www.canva.com/design/DAGC4YghT0A/V1GC8ej1WrPhaBsYEvbbAA/view?utm_content=DAGC4YghT0A&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  //     description: 'Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen.'
  // }
  // ,
  //   {
  //     messageTitle: 'Faith & Deeds',
  //     videoUrl: "https://www.facebook.com/CCWetaskiwin/videos/779467414112191",
  //     imgUrl: FaithAndDeed,
  //     messageBy: 'Bro. Joshua & Sis. Jazzlee',
  //     datePosted: 'April 14, 2024',
  //     imageSlide: 'https://www.canva.com/design/DAGCWi9wLvA/b8R0vsnnoi1mLgxwPE1XVw/view?utm_content=DAGCWi9wLvA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  //     description: 'What good is it, my brothers and sisters, if someone claims to have faith but has no deeds? Can such faith save them?'
  //   }
    // ,
    // {
    //   messageTitle: 'Royal Law: Love Your Neighbor',
    //   videoUrl: "https://www.facebook.com/CCWetaskiwin/videos/459224226527193",
    //   imgUrl: LoveYourNeighbor,
    //   messageBy: 'Chris Sampayan',
    //   datePosted: 'April 07, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAGBqtMdvM0/bKYr3rmT0ixvMXrcW4UQwg/view?utm_content=DAGBqtMdvM0&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'If you really keep the royal law found in Scripture, “Love your neighbor as yourself,” you are doing right.'
    // }
    // ,
    // {
    //   messageTitle: 'Why Do You Look For The Living Among The Dead',
    //   videoUrl: "https://www.youtube.com/watch?v=Vx0k90z6Epg",
    //   imgUrl: WhyLookForLiving,
    //   messageBy: 'Marvin Risto',
    //   datePosted: 'March 31, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAGA7C3TuKs/VTZo3jT-ca_E7Xv1SJRYIw/view?utm_content=DAGA7C3TuKs&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'In their fright the women bowed down with their faces to the ground, but the men said to them, “Why do you look for the living among the dead?'
    // },
    // {
    //   messageTitle: 'Exposing the Sin of Partiality',
    //   videoUrl: "https://www.youtube.com/watch?v=zMimW6xPe_c",
    //   imgUrl: ExposingSin,
    //   messageBy: 'Marvin Risto',
    //   datePosted: 'March 24, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAGAM6-Fdl0/BZXlDxApXVmI4fG6ypKjKw/view?utm_content=DAGAM6-Fdl0&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: '“Now let the fear of the Lord be on you. Judge carefully, for with the Lord our God there is no injustice or partiality or bribery.”'
    // },
    // {
    //   messageTitle: 'Live and Share',
    //   videoUrl: "https://www.youtube.com/watch?v=qulJzmvWjtY",
    //   imgUrl: liveAndShare,
    //   messageBy: 'Bong Aguiao',
    //   datePosted: 'March 17, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAF_uLqK3gk/elct-xN-nl7m1ZuIQFnv0A/view?utm_content=DAF_uLqK3gk&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'Go and make disciple of all nations baptizing them in the name of the Father, the Son and the Holy Spirit'
    // },
  //   {
  //     messageTitle: 'The Value of Wisdom',
  //     videoUrl: "https://www.youtube.com/watch?v=pwznH6zOhvY",
  //     imgUrl: ValuesOfWisdom,
  //     messageBy: 'Bro. Harry Nietes',
  //     datePosted: 'April 28, 2024',
  //     imageSlide: '',
  //     description: 'James 3:13-18'
  // },
    // {
    //   messageTitle: 'Right vs Wrong',
    //   videoUrl: "https://www.youtube.com/watch?v=Y585jD5C07Y",
    //   imgUrl: rightVsWrong,
    //   messageBy: 'Boni Somook',
    //   datePosted: 'March 10, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAF-4yKlZYk/03mX073ap8QwK4LUSxYWrQ/view?utm_content=DAF-4yKlZYk&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: ' Believers in humble circumstances ought to take pride in their high position. But the rich should take pride in their humiliation- since they will pass away like wild flower. '
    // },
    // {
    //   messageTitle: 'In the Midst of Difficulties',
    //   videoUrl: "https://www.facebook.com/CCWetaskiwin/videos/372532832352882",
    //   imgUrl: midstOfDifficulty,
    //   imageSlide: 'https://www.canva.com/design/DAF-m9nzpAY/3Mcs6crJNoXxL-EIDupAUg/view?utm_content=DAF-m9nzpAY&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   messageBy: 'Harry Nietes',
    //   description: '"Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.”'
    // },
    // {
    //   videoUrl: "https://www.youtube.com/watch?v=F0YRa9gVwtM&t=2244s",
    //   imgUrl: membership,
    //   messageBy: 'Ted Matira',
    //   imageSlide: 'https://www.canva.com/design/DAF9ua8OCJg/dR6b9Wglj07SMPchRcO0cA/view?utm_content=DAF9ua8OCJg&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'so in Christ we, though many, form one body, and each member belongs to all the others.'
    // },
    // {
    //   videoUrl: "https://www.youtube.com/embed/-EcCtP8Rx38?si=aG6oBHXHWvpV23VN",
    //   imgUrl: basicTruth,
    //   messageBy: 'Ted Matira',
    //   imageSlide: 'https://www.canva.com/design/DAF7xTSIPBE/kN4ZsWKbm4Jrpvfrk51NCQ/view?utm_content=DAF7xTSIPBE&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'There are many things about God and God’s existence that will go beyond reasons and that will require FAITH to BELIEVE. '
    // },
    // {
    //   videoUrl: "https://fb.watch/qrTqKakIhM/",
    //   imgUrl: manSinDeath,
    //   messageBy: 'Ted Matira',
    //   imageSlide: 'https://www.canva.com/design/DAF8Z-jo1iA/4fgCXwRrRwsG6wbDUYpxCA/view?utm_content=DAF8Z-jo1iA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'God would like us to enjoy eternity with Him, but there’s one thing that can hinder us to get there - SIN.  '
    // },
    // {
    //   videoUrl: "https://fb.watch/qrTvHVpND1/",
    //   imgUrl: discipleship,
    //   messageBy: 'Ted Matira',
    //   imageSlide: 'https://www.canva.com/design/DAF7BJQC4qA/lIGbFPqCFH8Vditywr_nqw/view?utm_content=DAF7BJQC4qA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'Everyone joining the family of God are expected to not just profess the faith but divinely UNITE him/her self to Christ.'
    // },
    // {
    //   videoUrl: "https://fb.watch/qrTyd8Up5G/",
    //   imgUrl: relationship,
    //   messageBy: 'Ted Matira',
    //   imageSlide: 'https://www.canva.com/design/DAF6dfANZ6o/IoPawmKPKFJN028rUlN4vw/view?utm_content=DAF6dfANZ6o&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'He came to mend our hearts and consecrate us to a new and living way in full assurance of faith and trust.'
    // },
   

]
const MessagesPage = () => {
  

  return (
    <div>
      <section className="hero-section">
        <h1 className='about-hero-title'>Messages</h1>
      </section>
      {messageData.map((item) => (
        <>
          <div className="message-container">
            <div className='message-section'>
            <h3 className='latest-title'>Latest Message</h3>
            <div className="message-content">
              {/* <iframe 
                className="latest-video"
                src={item.videoUrl} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen="true"
              >
              </iframe> */}
              <a href={item.imageSlide}>
              <img className="message-img" src={item.imgUrl} alt="Message" />
              </a>
              <div className="message-details">
                <h3 className='message-title'>{item.messageTitle}</h3>
                <div className="message-by">
                  <span><strong>Message by:</strong> </span>
                  <span>{item.messageBy}</span>
                </div>
                <div className="date-posted">
                  <span> <strong>Date Posted:</strong> </span>
                  <span>{item.datePosted}</span>
                </div>
                <div className="description">
                  <p><strong>Description:</strong></p>
                  <p className='message-text'>{item.description}</p>
                </div>
                <div className="messages-link">
                  <a className='youtube-link' href={item.videoUrl} target='_blank'>Watch</a>
                  <a className='slide-link' href={item.imageSlide} target='_blank'>View Slide</a>
                </div>
                
              
                {/* <a  href={item.imageSlide}>View Slide</a> */}
              </div>
        </div>
      </div>
    </div>
        </>
      ))}
      
      <div className="all-messages">
        {
          allMessage.map((item, index) => (
            <AllMessages
              key={index}
              video={item.videoUrl}
              image={item.imgUrl}
              description={item.description}
              message={item.messageBy}
              imageSlide={item.imageSlide}
            />
            
          ))
        }

      </div>
    

      <Footer/>
    </div>
  )
}

export default MessagesPage
