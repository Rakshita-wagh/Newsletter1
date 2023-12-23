// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
// import 'swiper/swiper.min.css'; // Adjust the import path
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox.css';
// import './LiteratureDetail.css';

// function Modal({ target, onClose }) {
//   return (
//     <div className="modal" data-target={target}>
//       {/* Modal content goes here */}
//       <button className="btn--close-modal" onClick={onClose}>
//         Close Modal
//       </button>
//     </div>
//   );
// }

// function LiteratureDetail() {
//   const [isModalVisible, setModalVisibility] = useState(false);

//   useEffect(() => {
//     SwiperCore.use([Navigation, Pagination, Autoplay]);

//     Fancybox.bind("[data-fancybox]", {
//       // Fancybox options
//     });

//     const swiper = new Swiper(".swiper", {
//       autoHeight: true,
//       loop: true,
//       keyboard: {
//         enabled: true,
//         onlyInViewport: false,
//       },
//       mousewheel: {
//         forceToAxis: true,
//         sensitivity: 0.5,
//       },
//       autoplay: {
//         delay: 5000,
//         pauseOnMouseEnter: true,
//         disableOnInteraction: false,
//       },
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//         dynamicMainBullets: 3,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
//   }, []);

//   const openModal = (e) => {
//     e.preventDefault();
//     setModalVisibility(true);
//   };

//   const closeModal = () => {
//     setModalVisibility(false);
//   };

//     return (
//        <>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
//         />
//         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        
//       </head>
//       <body>
//         <div id="page" class="site">
//           <div class="container">
//             <div class="testi">
//               <div class="head">
//                 <h3>Testimonials.</h3>
//                 <p>See what past participants have to say about IASF...</p>
//               </div>
    
//               <div class="body swiper">
//                 <ul class="swiper-wrapper">
//                   <li class="swiper-slide">
//                     <div class="wrapper">
//                       <div class="thumbnail">
//                       </div>
//                       <div class="aside">
//                         <p>
//                           In the early days of my college life during the first year
//                           of my B. Tech program, In a situation where I need to
//                           speak about sustainability in India spontaneously. At that
//                           time I didn't even have a basic idea of how sustainability
//                           takes place in India. That situation sparked my curiosity
//                           and encouraged me to seek in-depth knowledge about
//                           sustainability. After attending 8 weeks of Sustainability
//                           inquiry workshop, I attended IASF-2023 at VVCE College,
//                           Mysore. IASF-2023 took place from January 2nd to 6th. It
//                           gathered students from various IUCEE Chapters across
//                           different states, facilitating the exchange of ideas and
//                           thought processes related to various Sustainable
//                           Development Goals (SDGs). As a member of the SDG-11 team
//                           within IASF, I participated in conducting research on
//                           environmental issues aligned with our sustainability
//                           development goal with our team. Together, we identified
//                           and formulated a clear problem statement, and with the
//                         </p>
//                         <button class="btn btn--show-modal" data-target="#modal1">
//                           Read More
//                         </button>
//                         <div class="name">
//                           <h4>CH. Pravalika Reddy</h4>
//                           <p>HITAM College</p>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
    
//                   <li class="swiper-slide">
//                     <div class="wrapper">
//                       <div class="thumbnail">
//                       </div>
//                       <div class="aside">
//                         <p>
//                           IASF 2023 was an eye-opening experience that I will
//                           forever cherish. My journey from Hyderabad to Mysuru began
//                           with little to no prior knowledge about IUCEE and its
//                           mission. However, from the moment I stepped into the IUCEE
//                           Annual Student Forum, I was immersed in a world of
//                           innovation, education, and sustainable development. The
//                           highlight of my IASF experience was the opportunity to
//                           work alongside UN Ambassadors on SDG 15 - Life on Land.
//                           This collaboration exposed me to the pressing global
//                           challenges related to environmental conservation,
//                           deforestation, and ecosystem preservation. It was
//                           incredible to witness the dedication and passion of the UN
//                           Ambassadors in their mission to make the world a better
//                           place. The learnings and exposure I gained at IASF were
//                           truly transformative. I was inspired by the diverse group
//                           of students who shared their unique perspectives and
//                         </p>
//                         <button class="btn btn--show-modal" data-target="#modal2">
//                           Read More
//                         </button>
    
//                         <div class="name">
//                           <h4>P. Venkat Narsimha Rao</h4>
//                           <p>Anurag University</p>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
    
//                   <li class="swiper-slide">
//                     <div class="wrapper">
//                       <div class="thumbnail">
//                       </div>
//                       <div class="aside">
//                         <p>
//                           IASF 2023 was an eye opening for all of us as it helped us
//                           to think, rejuvenate and rejoice in the art of learning
//                           and gain practical exposure to the current world
//                           happenings. This 3 -day conference helped us think
//                           sustainably and contribute judiciously towards the
//                           betterment of mother earth. All the mentors guided us on
//                           how to tackle the problems, how to narrow down and
//                           navigate the solutions to the existing problems and how
//                           effectively we can build a sustainable awareness model.
//                           And also the 5-km walkathon around the city of Mysore was
//                           a wakening call for all of us to get reminded as a
//                           responsible greener citizen. I would like to extend my
//                           heartfelt gratitude to IUCEE organizations, Ms. Sampada
//                           Pachaury mam and all our mentors for their untiring and
//                           unwavering support to get the best out from us!! Their
//                           words of action and speech was motivating and gave a
//                           conscious bell to the conscience to build an eco-greener
//                           environment and abide to the same....!
//                         </p>
//                         <button class="btn btn--show-modal" data-target="#modal3">
//                           Read More
//                         </button>
//                         <div class="name">
//                           <h4>Inchara N Aradhya</h4>
//                           <p>RV College Of Engineering</p>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
    
//                   <li class="swiper-slide">
//                     <div class="wrapper">
//                       <div class="thumbnail">
//                       </div>
//                       <div class="aside">
//                         <p>
//                           The 3 days spent at IASF 2023 left a lasting impression on
//                           me, and I continue to feel its impact even after the event
//                           has concluded. The guidance provided by UN mentors proved
//                           invaluable, allowing me to engage with like-minded
//                           individuals who shared a desire to contribute to society.
//                           We had the opportunity to view our project from various
//                           perspectives, thanks to the valuable suggestions offered
//                           by several industry delegates who observed our project
//                           display. All in all, the event was truly unforgettable,
//                           and I gained numerous insights and key takeaways from it.
//                         </p>
//                         <button class="btn btn--show-modal" data-target="#modal4">
//                           Read More
//                         </button>
    
//                         <div class="name">
//                           <h4>Aswin Sankesh G S</h4>
//                           <p>Thiagarajar College of Engineering</p>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
    
//                   <li class="swiper-slide">
//                     <div class="wrapper">
//                       <div class="thumbnail">
//                       </div>
//                       <div class="aside">
//                         <p>
//                           For me, this event was a profound experience that
//                           significantly enriched my journey as a student. Over those
//                           three days, I had the privilege of engaging in a multitude
//                           of technical and informative sessions, expanding my
//                           knowledge base and igniting my passion for engineering and
//                           innovation. The event's highlights included an inspiring
//                           walkathon through Mysore's picturesque streets, where I
//                           forged unforgettable memories and had the honor of
//                           learning from mentors like Krishna Sir and Sampada
//                           Pachaury Mam, who fueled my ambitions. The pinnacle was
//                           presenting my AI-based water disinfection project to an
//                           audience of scholars and influential figures, including
//                           the motivational Mr. Nile, an American professor. This
//                           event underscored the vital role engineers play in
//                           preserving our environment, instilling in me a profound
//                           sense of responsibility to develop sustainable solutions
//                           for a brighter future. In conclusion, the IUCEE and IASF
//                           event at Vidyavardhaka College in Mysore was a
//                           transformative experience, expanding my technical
//                           expertise and inspiring me to commit to sustainability and
//                           innovation in my engineering journey.
//                         </p>
//                         <button class="btn btn--show-modal" data-target="#modal5">
//                           Read More
//                         </button>
    
//                         <div class="name">
//                           <h4>Yadavamuthiah K</h4>
//                           <p>Hindustan Institute of Technology and Science</p>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
    
//                   <li class="swiper-slide">
//                     <div class="wrapper">
//                       <div class="thumbnail">
//                       </div>
//                       <div class="aside">
//                         <p>
//                           IUCEE is the definition of "experiential learning with
//                           purpose". I had always wondered to myself as an
//                           engineering student "Why are we as engineers so
//                           important?" The answer to this question I found in the
//                           Kletech IUCEE chapter when I learned being in an
//                           environment that stimulates minds to think along the lines
//                           of solving real-life problems with technology and this in
//                           return helped me bringing engineering solutions to solve
//                           society's problems. Because "who are we as engineers if we
//                           do not help the society?". It is exhilarating when you
//                           find the right answers to questions that are important to
//                           you, I can assure you that the question above was
//                           important to me as something along the same lines was
//                           asked to me in my HR interview for placement. Knowing that
//                           no question is unimportant and every answer has a purpose
//                           my journey at IUCEE has been enriching
//                         </p>
//                         <button class="btn btn--show-modal" data-target="#modal6">
//                           Read More
//                         </button>
    
//                         <div class="name">
//                           <h4>Tanvi Bhujannavar</h4>
//                           <p>KLE Technological University</p>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//                 {/* <!-- If we need pagination --> */}
//                 <div class="swiper-pagination"></div>
    
//                 {/* <!-- If we need navigation buttons --> */}
//                 <div class="swiper-button-prev"></div>
//                 <div class="swiper-button-next"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="modal hidden" id="modal1">
//           <button class="btn--close-modal" data-target="#modal1">&times;</button>
//           <p>
//             In the early days of my college life during the first year of my B. Tech
//             program, In a situation where I need to speak about sustainability in
//             India spontaneously. At that time I didn't even have a basic idea of how
//             sustainability takes place in India. That situation sparked my curiosity
//             and encouraged me to seek in-depth knowledge about sustainability. After
//             attending 8 weeks of Sustainability inquiry workshop, I attended
//             IASF-2023 at VVCE College, Mysore. IASF-2023 took place from January 2nd
//             to 6th. It gathered students from various IUCEE Chapters across
//             different states, facilitating the exchange of ideas and thought
//             processes related to various Sustainable Development Goals (SDGs). As a
//             member of the SDG-11 team within IASF, I participated in conducting
//             research on environmental issues aligned with our sustainability
//             development goal with our team. Together, we identified and formulated a
//             clear problem statement, and with the guidance of our mentor, Berjis
//             Driver Sir, we proposed effective solutions. It was a valuable
//             opportunity to collaborate with such experienced experts. IASF-2023 has
//             brought about a significant change in our lives, I now conscientiously
//             consider the environmental impact of my actions, whether it's minimizing
//             food wastage or responsibly disposing of waste, which has become my
//             newfound habit. Apart from my personal development, what I learned from
//             IASF-2023 from a professional perspective are problem-solving skills,
//             networking, and adaptation to changing times. I wholeheartedly look
//             forward to engaging in more enriching events like IASF in the future.
//           </p>
//         </div>
//         <div class="modal hidden" id="modal2">
//           <button class="btn--close-modal" data-target="#modal2">&times;</button>
//           <p>
//             IASF 2023 was an eye-opening experience that I will forever cherish. My
//             journey from Hyderabad to Mysuru began with little to no prior knowledge
//             about IUCEE and its mission. However, from the moment I stepped into the
//             IUCEE Annual Student Forum, I was immersed in a world of innovation,
//             education, and sustainable development. The highlight of my IASF
//             experience was the opportunity to work alongside UN Ambassadors on SDG
//             15 - Life on Land. This collaboration exposed me to the pressing global
//             challenges related to environmental conservation, deforestation, and
//             ecosystem preservation. It was incredible to witness the dedication and
//             passion of the UN Ambassadors in their mission to make the world a
//             better place. The learnings and exposure I gained at IASF were truly
//             transformative. I was inspired by the diverse group of students who
//             shared their unique perspectives and innovative ideas. This motivated me
//             to bring a similar platform to my university, Anurag University. Hence,
//             the concept of AUNSF (Anurag University National Student Forum) was
//             born. IASF served as a catalyst for me and my peers to replicate the
//             spirit of collaboration, knowledge sharing, and commitment to
//             sustainable development within our own university. In conclusion, IASF
//             2023 was not just an event but a life-changing experience that broadened
//             my horizons, connected me with remarkable individuals, and empowered me
//             to make a positive impact in the world. I am grateful to IUCEE for this
//             opportunity and look forward to contributing to the global mission of
//             education and sustainable development.
//           </p>
//         </div>
//         <div class="modal hidden" id="modal3">
//           <button class="btn--close-modal" data-target="#modal3">&times;</button>
//           <p>
//             IASF 2023 was an eye opening for all of us as it helped us to think,
//             rejuvenate and rejoice in the art of learning and gain practical
//             exposure to the current world happenings. This 3 -day conference helped
//             us think sustainably and contribute judiciously towards the betterment
//             of mother earth. All the mentors guided us on how to tackle the
//             problems, how to narrow down and navigate the solutions to the existing
//             problems and how effectively we can build a sustainable awareness model.
//             And also the 5-km walkathon around the city of Mysore was a wakening
//             call for all of us to get reminded as a responsible greener citizen. I
//             would like to extend my heartfelt gratitude to IUCEE organizations, Ms.
//             Sampada Pachaury mam and all our mentors for their untiring and
//             unwavering support to get the best out from us!! Their words of action
//             and speech was motivating and gave a conscious bell to the conscience to
//             build an eco-greener environment and abide to the same....!
//           </p>
//         </div>
//         <div class="modal hidden" id="modal4">
//           <button class="btn--close-modal" data-target="#modal4">&times;</button>
//           <p>
//             The 3 days spent at IASF 2023 left a lasting impression on me, and I
//             continue to feel its impact even after the event has concluded. The
//             guidance provided by UN mentors proved invaluable, allowing me to engage
//             with like-minded individuals who shared a desire to contribute to
//             society. We had the opportunity to view our project from various
//             perspectives, thanks to the valuable suggestions offered by several
//             industry delegates who observed our project display. All in all, the
//             event was truly unforgettable, and I gained numerous insights and key
//             takeaways from it.
//           </p>
//         </div>
//         <div class="modal hidden" id="modal5">
//           <button class="btn--close-modal" data-target="#modal5">&times;</button>
//           <p>
//             For me, this event was a profound experience that significantly enriched
//             my journey as a student. Over those three days, I had the privilege of
//             engaging in a multitude of technical and informative sessions, expanding
//             my knowledge base and igniting my passion for engineering and
//             innovation. The event's highlights included an inspiring walkathon
//             through Mysore's picturesque streets, where I forged unforgettable
//             memories and had the honor of learning from mentors like Krishna Sir and
//             Sampada Pachaury Mam, who fueled my ambitions. The pinnacle was
//             presenting my AI-based water disinfection project to an audience of
//             scholars and influential figures, including the motivational Mr. Nile,
//             an American professor. This event underscored the vital role engineers
//             play in preserving our environment, instilling in me a profound sense of
//             responsibility to develop sustainable solutions for a brighter future.
//             In conclusion, the IUCEE and IASF event at Vidyavardhaka College in
//             Mysore was a transformative experience, expanding my technical expertise
//             and inspiring me to commit to sustainability and innovation in my
//             engineering journey.
//           </p>
//         </div>
//         <div class="modal hidden" id="modal6">
//           <button class="btn--close-modal" data-target="#modal6">&times;</button>
//           <p>
//             IUCEE is the definition of "experiential learning with purpose". I had
//             always wondered to myself as an engineering student "Why are we as
//             engineers so important?" The answer to this question I found in the
//             Kletech IUCEE chapter when I learned being in an environment that
//             stimulates minds to think along the lines of solving real-life problems
//             with technology and this in return helped me bringing engineering
//             solutions to solve society's problems. Because "who are we as engineers
//             if we do not help the society?". It is exhilarating when you find the
//             right answers to questions that are important to you, I can assure you
//             that the question above was important to me as something along the same
//             lines was asked to me in my HR interview for placement. Knowing that no
//             question is unimportant and every answer has a purpose my journey at
//             IUCEE has been enriching
//           </p>
//         </div>
//         <h1 class="heading">Image Gallery</h1>
//         <div class="gallery-container">
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/65PKPqPt/DSC-2100.jpg"
//             data-fancybox="gallery"
//           >
           
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/VLJQX1kT/DSC-2105.jpg"
//             data-fancybox="gallery"
//           >
           
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/Y2nB4jMY/DSC-2113.jpg"
//             data-fancybox="gallery"
//           >
           
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/MpBCrDRm/DSC-2156.jpg"
//             data-fancybox="gallery"
//           >
            
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/ryQMSQCd/DSC-2316.jpg"
//             data-fancybox="gallery"
//           >
            
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/LsMcd13K/DSC-2347.jpg"
//             data-fancybox="gallery"
//           >
            
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/pry7QYR8/DSC-2359.jpg"
//             data-fancybox="gallery"
//           >
           
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/ZRbXnzQw/DSC-2370.jpg"
//             data-fancybox="gallery"
//           >
           
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/8cPG26DP/DSC-2401.jpg"
//             data-fancybox="gallery"
//           >
            
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/tTzyvzKM/DSC-2467.jpg"
//             data-fancybox="gallery"
//           >
           
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/44bnj6vZ/IASF-2023-pic10.jpg"
//             data-fancybox="gallery"
//           >
           
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/9Fmz2D19/IASF-2023-pic3.jpg"
//             data-fancybox="gallery"
//           >
            
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/Bv90qysz/PRS-1328.jpg"
//             data-fancybox="gallery"
//           >
            
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/9MLKqN5C/PRS-1388.jpg"
//             data-fancybox="gallery"
//           >
           
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/cCHq9GMv/PRS-1888.jpg"
//             data-fancybox="gallery"
//           >
          
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/MTt2mpRk/PRS-1957.jpg"
//             data-fancybox="gallery"
//           >
            
//           </div>
//           <div
//             class="gallery-item"
//             data-src="https://i.postimg.cc/wv9YNm1c/PRS-1988.jpg"
//             data-fancybox="gallery"
//           >
            
//           </div>
//         </div>
//         <div class="overlay hidden"></div>
       
          
      
//       </body>
//     </html>
//     </> 
    
// )
//     }
// export default LiteratureDetail;
