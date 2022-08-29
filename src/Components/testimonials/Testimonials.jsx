import "./testimonials.scss"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "assests/user1.jpeg",
      icon: "assests/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "assests/user2.jpeg",
      icon: "assests/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "assests/user3.jpeg",
      icon: "assests/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <span></span>
      <div className="container">
        {data.map(d => (
          <div
            className={d.featured ? "card featured" : "card"}
            key={d.id}>
            <div className="top">
              <img src="assests/right-arrow.png" alt="arrow" className="left" />
              <img src={d.img} alt="user" className="user" />
              <img src={d.icon} alt="icon" className="right" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
} 
