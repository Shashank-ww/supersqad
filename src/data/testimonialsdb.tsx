// data/testimonialdb.ts

export interface TestimonialProps {
    name: string;
    title: string;
    text: string;
    imagePath: string;
    rating: number;
  }
  
  const testimonialsdb: TestimonialProps[] = [
    {
      name: "Bhumika Vohra",
      title: "Director, Xcent Publishing Corp.",
      text: "Their team's creativity and dedication delivered exceptional results and got instant response on our ad campaigns. From campaign planning perspective, they nailed it throughout!",
      imagePath: "/webimgs/avatars/profile1.png",
      rating: 5,
    },
    {
      name: "Nafiza Imani",
      title: "Founder, StarDew Productions",
      text: "For years, Superstackstudios has been our go-to for media and marketing needs. Their expertise and commitment to our success make them invaluable. Highly recommended!",
      imagePath: "/webimgs/avatars/profile2.png",
      rating: 4,
    },
    {
      name: "Pulkit Barmi",
      title: "Photographer, Outshots",
      text: "We hired them for a single project, but now they're our partner for all marketing execution and talent hunt. They helped us fulfill various tech-titles with lowest attrition. Trust them for success!",
      imagePath: "/webimgs/avatars/profile3.png",
      rating: 5,
    },
    {
      name: "Syaza Chan",
      title: "Creative Head, Agency24",
      text: "Highly advanced production team and even better response time, I have never experienced such consistent and professional behaviour from a global point of view. They're simply the best!",
      imagePath: "/webimgs/avatars/profile4.png",
      rating: 5,
    },
    {
      name: "Jyothish Kannan",
      title: "Marketing Manager, Advant",
      text: "We were on a lookout for an integrated agency when we found this. From design to deployment, their team delivers seamless solutions with exceptional support. We're thrilled with the results!",
      imagePath: "/webimgs/avatars/profile5.png",
      rating: 3,
    },
    {
      name: "Shannon Connor",
      title: "Associate Vice President, BIG Media",
      text: "We were on a lookout for an integrated agency when we found this. From design to deployment, their team delivers seamless solutions with exceptional support. We're thrilled with the results!",
      imagePath: "/webimgs/avatars/profile6.png",
      rating: 4,
    },
    {
        name: "Dr Aarushi Sharma",
        title: "Director, Centre of Oncology",
        text: "We were on a lookout for an integrated agency when we found this. From design to deployment, their team delivers seamless solutions with exceptional support. We're thrilled with the results!",
        imagePath: "/webimgs/avatars/drsharma.png",
        rating: 4,
      },
    // Add more testimonials when needed
  ];
  
  export default testimonialsdb;
  