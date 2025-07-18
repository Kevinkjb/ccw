import Footer from '../../components/footer/Footer'
import './whatwebelieve.css'

const WhatWeBelieve = () => {
  return (
    <>
    <section className="hero-section">
        <h1 className='about-hero-title'>What We Believe</h1>
    </section>
    <div className="what-we-believe-container">
      
      <div className="statement-container">
        <div className="header-title-section">
          <p className='statement-title'>CCW Statement of Belief</p>
        </div>
        <div className="statement-section">
          <p className='statement-text'>
            The Church of Christ carries the same name in the Bible, under the Headship and ownership
            of Christ. This congregation is affiliated to the body of Churches variously known as
            Christian Churches/Churches of Christ and with such other bodies that we may from time to
            time elect to work with. This congregation is, and shall always be, A LOCALLY
            AUTONOMOUS BODY, responsible for its own governance in harmony with the principles of
            the New Testament and the laws of Alberta and Canada. The Church may have involvement
            in outreach and missions first in Canadian territories and beyond. This church is a
            NON-DENOMINATIONAL.
        </p>
        </div>
        <div className="statement-section">
          <p className='statement-text'>
            We adhere to the Restoration Movement principles to restore the New Testament
            Christianity such as: “No creed but Christ,” “No book but the Bible,” and “Where the
            Scriptures speak, we speak; where the Scriptures are silent, we are silent.” We prioritise the
            Bible as the sole authority in all matters of faith and practices. We, as part of the movement,
            would like to express that we will continue to carry on our distinctive identity as a church
            such as: “The Church of Christ on earth is essentially, intentionally, and constitutionally one.”
            “We are Christians only, but not the only Christians.” We will continue to practice principles of
            leadership, “in essentials, unity; in opinions, liberty; in all things love.”
          </p>
        </div>
      </div>
      <div className="believe-statement-container">
        <div className="header-title-section">
          <p className='statement-title'>CCW - What We Believe</p>
        </div>
        <div className="believe-section">
          {/* <p>Img</p> */}
          {/* SCRIPTURE SECTION */}
          <p className='believe-text'>
            <b>The Scripture</b> – The holy bible is the sole-Ultimate authority that governs our beliefs and
            practices. We believe that all scripture is totally (absolutely) true and trustworthy. Its
            infallibility was tested through the ages and powerful, true and faithful. We Believed that it is
            inspired by the holy spirit, infallible and inerrant. (<a className='bible-link' href=''>2 Timothy 3:16-17, 2Peter 1:20-21</a>). 
          </p>
          {/* GOD SECTION */}
          <p className='believe-text'>
           <b>GOD</b> – The eternal triune God reveals Himself through the scriptures, through the works of
            his hands (the creatures) and through his divine personal characters (attributes). God is one
            and yet reveals himself to us in three distinct personalities without being divided by nature,
            essence and being. The Father, The Son, and the Holy Spirit have three basic distinct equal
            attributes that are not in any other gods. Omnipotent (all powerful) , Omniscient (all
            knowing), Omnipresent (everywhere).
          </p>
          {/* GOD THE FATHER SECTION */}
          <p className='believe-text'>
           <b>GOD THE FATHER</b> - He is known as the Father of all creations. He is called the father in the
            scriptures in line with his attributes (character) as Provider, protector, ruler, etc.
          </p>
          {/* GOD THE SON SECTION */}
          <p className='believe-text'>
           <b>GOD THE SON</b> – Jesus Christ(King) is the eternal Son of God and is God (<a className='bible-link' href=''>John 1:1-3; 1
            John 5:20; Hebrews 1:8; Col. 1:15-16</a>). In His incarnation by the Holy Spirit, through Virgin
            Mary, He fulfilled the promise from the ancient of days (<a className='bible-link' href=''>Gen 3:15</a>). Which we now called the
            protoEvangelium (the good news). The father will provide a seed that will destroy the final
            enemy of humankind – death- (<a className='bible-link' href=''>Gal 4:4, Romans 5:18</a>) He accomplished this through His one
            act of righteousness.
          </p>
          {/* HOLY SPIRIT SECTION*/}
          <p className='believe-text'>
           <b>GOD THE HOLY SPIRIT</b> – The Holy Spirit is right there in the very beginning of the bible
            (<a className='bible-link' href=''>Gen 1:1-3</a>) He is the God whom by character cannot be seen and probably most neglected
            in the triune God. He was reintroduced to the believers by the Lord Jesus Christ as the
            teacher, guide and judge. (<a className='bible-link' href=''>John 17</a>) He is our source of enlightenment and power to live a
            Holy life ( <a className='bible-link' href=''>Romans 8</a>).
          </p>

          {/* SALVATION SECTION */}
          <p className='believe-text'>
           <b>SALVATION </b> – Our salvation is totally dependent upon the “One Act of righteousness of
            Christ (OARC)  (<a href="" className='bible-link'>Romans 5:8,18</a>). It is offered freely to “whosoever will” (not exclusive) It is
            conditional – meaning anyone can resist it or reject it (not irresistible). It is a solid proof sure
            and certainly true promise (<a className='bible-link' href="https://www.biblegateway.com/passage/?search=1%20John%205%3A12-13&version=NIV" target='_blank'>1 John 5:12-13</a>). Salvation was clearly outlined in the writings of
            the apostles which can be summarized as: we are saved by grace (the means for salvation)
            through faith (the way of salvation) in baptism the time and place when a person unite
            himself to Christ and for good works (the purpose for which God created us in Christ Jesus;
            to redeem us and restore us to himself) (<a className='bible-link' href="">Titus 2:14</a>).
          </p>

          {/* THE CHURCH SECTION */}
          <p className='believe-text'>
           <b>THE CHURCH (name, ownership, leadership)</b> – We are an autonomous local congregation who decide to carry one of the bible names for a
            church. The Church of Christ. (<a href="" className='bible-link'>Romans 16:16</a>, <a href="" className='bible-link'>Matthew 16:18</a>) We intentionally bear the
            name of Christ and have given Him sovereign ownership of His church. This church is led
            by a plurality of elders, deacons, deaconesses/youth leaders and by bible teachers and
            preachers on the spiritual side. The business side is to be taken care of by an administrative
            board which are led by matured leaders of this church. This church focuses on delivering
            God’s saving grace to the community by sharing God’s word and sharing life-changing
            examples to the community by loving and caring for people like a family.
          </p>

          {/* ORDINANCES SECTION */}
          <div className="ordinances-info">
            <p className='ordinances-text'>
            <b>ORDINANCES</b> – The two specific ordinances that our church is 
            focused on are based on The One Act of righteousness that saves us all.
            </p>
            <ul className='ordinances-item'>
              <li className='ordinances-list'>
                Baptism - emphasizes the real essence of Christ’s death (crucifixion) burial and
                resurrection (<a className='bible-link' href="">Romans 4:3-4</a>). It is a very important command: The great commission (<a href="" className='bible-link'>Mat.
                28:18-20</a>)
              </li>
              <li className='ordinances-list'>
                Communion - emphasize the new covenant that God has made for every believer. It has
                clear instructions “Do this in remembrance of me, until we all get to heavens. (<a className='bible-link' href="">Mat. 26:26-31</a>,
                <a className='bible-link' href="">1 Cor 11:23-30</a>)
              </li>
            </ul>
          </div>

          {/* MISSION SECTION */}
          <p className='believe-text'>
           <b>MISSIONS</b> – Our desire is to share the gospel, the power of God for salvation to anyone
            within and beyond our reach (<a className='bible-link' href="">Rom.1:16-17</a>). We are encouraging all of our members to
            become gospel bearers to our community and to participate in a mission field personally or
            by supporting mission work.
          </p>

          {/* STEWARDSHIP SECTION */}
          <p className='believe-text'>
           <b>STEWARDSHIP</b> – We only have three principles in administering our finances: we believe
            that all we have are from God and therefore we are encouraged to honor God with our
            wealth and possessions (<a className='bible-link' href="">Prov.3:9-10</a>, <a className='bible-link'  href="">2 Cor 9:6-11</a>). We believe that blessings are to be
            shared to someone in need and therefore we practice generosity (<a href="" className='bible-link'>Prov. 11:25-26</a>).
            We believe that material blessings are meant to be used for things with eternal values (<a href="" className='bible-link'>Matt.
            6:19-21</a>). In giving of our offering , we encourage our people to share, to contribute in the
            offering by giving as they are motivated by love, prompted by faith and driven by gratitude.
          </p>

          {/* INTERDEPENDENT SECTION */}
          <p className='believe-text'>
           <b>INTERDEPENDENT</b> – Our churches though locally governed are advocating
            interdependency only to other locally independent and locally governed churches. We will
            be fellowshipping with other churches, under the banner of restoration movements who are
            faithful to the Lord, to His church and to the Holy scriptures as its sole authority of faith.
          </p>

          {/* INTERDEPENDENT SECTION */}
          <p className='believe-text'>
           <b>SOCIAL ORDER</b> – We believe that the church should honor the governing authority of the
            government, (<a href="" className='bible-link'>Romans 13:1-7</a>) We will stand to be corrected in all things, except for denying
            God’s basic command to preach the gospel, or to give up governance by local elders and
            honoring Christ as the head of the church (<a href="" className='bible-link'>Acts 5:29</a>, <a href="" className='bible-link'>1 Peter 5:1-14</a>, <a href="" className='bible-link'>Eph. 2:21-22</a>). As a
            church we will actively participate in the values and growth of the society; and we
            emphasized that we will oppose any kinds of corruptions and sinful practices as outlined in
            the scripture and the like (<a href="" className='bible-link'>Romans 1:18-32</a>).
          </p>

          {/* RELIGIOUS LIBERTY */}
          <p className='believe-text'>
           <b>RELIGIOUS LIBERTY</b> – We believe in the separation of the church and state. We believe
            that the state owes to every church protection and full freedom in the pursuit of its faith and
            practices and that the church should have absolute freedoms in a free state.
          </p>

          {/* FAMILY LIBERTY */}
          <p className='believe-text'>
           <b>FAMILY</b> – Family is God’s first ordained institution on earth. It is the family that builds a city, a
            city that builds a nation. We believed in the only sectional matrimony of marriage: one man,
            one woman in love. We believe in the precious gift of life and that no man should take the
            life of others into His hands.
          </p>
        </div>
      </div>
    </div>
      
      <Footer/>
    </>
  )
}

export default WhatWeBelieve
