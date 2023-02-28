import './home.css';
import Profile from './assets/img/profile.jpg';
import Github from './assets/img/github.svg';
import Instagram from './assets/img/instagram.svg';
import Linked from './assets/img/linkedin.svg';
import Map from './assets/img/map-pin.svg';
import Twitter from './assets/img/twitter.svg';
import Mail from './assets/img/mail.svg'


const Home =() =>{
    return(
        <>
        <div className="wrapper">
			<div className="wrapper-inner">
				<div className="box-wrapper">
					<div className="box">
						<div className="avatar">
							<img src={Profile} />
						</div>
						<div className="box-inner">
							<h3 className="name" style={{fontSize:'2.0rem', marginTop:'10px', fontWeight:'800'}}>Hey, there! I'm Sean</h3>
							<p style={{fontSize:'1.4rem'}}> A tech enthusiast who curates experiences with technology</p>

							<h4 className="occupation">  I am a Software Engineer, UI/UX Designer, a BioEngineering Graduate, and an IT student. </h4>
							<p className="location">
								<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzsKXY4pn7AhWK_7sIHVwdDXUQFnoECCkQAQ&url=https%3A%2F%2Fwww.google.com%2Fmymaps%2Fviewer%3Fmid%3D1s1yc_gbRmShBhwg2XYxQlDaj_UA%26hl%3Den_GB&usg=AOvVaw2OHijzogKcup12p_5XW0K0" target="_blank">
									<img src={Map} height="20px" />
									Nairobi, KE
								</a>
							</p>
							<h3 className="followers-title">Stalk My Handles:</h3>
							<ul className="followers-list">
								<li><a href='https://www.instagram.com/its_ngangasean' target='_blank'><img src={Instagram} alt="" /></a></li>
								<li><a href='https://www.twitter.com/nganga_sea' target='_blank'><img src={Twitter} alt="" /></a></li>
								<li><a href="https://www.linkedin.com/in/john-sean-nganga/" target='_blank'><img src={Linked}alt="" /></a></li>
								<li><a href="https://t.me/sean_code" target='_blank'><img src={Mail} alt="" /></a></li>
								<li><a href="https://github.com/sean-code" target='_blank'><img src={Github} alt="" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
    )
}

export default Home;